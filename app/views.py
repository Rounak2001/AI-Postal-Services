from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from .models import ScannedPost
from .serializers import ScannedPostSerializer
from .utils import normalize_address, extract_pincode, get_postal_data, validate_address_from_postal_api
import re
from rest_framework import viewsets
from .serializers import ScannedPostSerializer
from rest_framework.pagination import PageNumberPagination

class PostScanView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        # Save the image and sender address
        image = request.FILES.get('image')
        sender_address = request.data.get('sender_address')
        receiver_address = request.data.get('receiver_address')

        if not image or not sender_address or not receiver_address:
            return Response({"error": "All fields (image, sender_address, receiver_address) are required."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Normalize receiver address
        normalized_address = normalize_address(receiver_address)

        # Extract pincode
        pincode = extract_pincode(normalized_address)
        if not pincode:
            return Response({"error": "Pincode could not be extracted from the receiver address."},
                            status=status.HTTP_400_BAD_REQUEST)
        # Subtract pincode from the address
        normalized_address = re.sub(r'\b' + re.escape(pincode) + r'\b', '', normalized_address).strip()
        normalized_address = re.sub(r'\s+', ' ', normalized_address)  # Remove extra spaces
        normalized_address.lower()
        print(normalized_address)

        # Validate using Postal API
        # postal_data = get_postal_data(pincode)
        validation_result = validate_address_from_postal_api(normalized_address, pincode)

        # Save data in database
        post = ScannedPost.objects.create(
            image=image,
            sender_address=sender_address,
            receiver_address=receiver_address,
            receiver_pincode=pincode,
            receiver_state=validation_result.get("receiver_state"),
            receiver_district=validation_result.get("receiver_district"),
            receiver_location=validation_result.get("receiver_location"),
            is_valid=validation_result["is_valid"]
        )

        # Include modified pincode if invalid
        if not validation_result["is_valid"]:
            post.modified_pincode = pincode  # Modify this logic for correction later
        post.save()

        serializer = ScannedPostSerializer(post)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

# Custom Pagination Class
class ScannedPostPagination(PageNumberPagination):
    page_size = 10  # Number of records per page
    page_size_query_param = 'page_size'  # Allow clients to change the page size
    max_page_size = 100  # Maximum number of records per page


class PostDataViewSet(viewsets.ModelViewSet):
    queryset = ScannedPost.objects.all()  # Retrieve all records
    serializer_class = ScannedPostSerializer
    pagination_class = ScannedPostPagination

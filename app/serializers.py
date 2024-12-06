from rest_framework import serializers
from .models import ScannedPost

class ScannedPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = ScannedPost
        fields = [
            'id', 'image', 'time_scanned', 'sender_address', 'receiver_address', 'receiver_pincode',
            'receiver_state', 'receiver_district', 'receiver_location', 'is_valid', 'modified_pincode',
            'customer_feedback'
        ]

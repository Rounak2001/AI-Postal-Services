from django.urls import path, include
from .views import PostScanView, PostDataViewSet
from rest_framework.routers import DefaultRouter
from .views import PostDataViewSet

router = DefaultRouter()
router.register(r'post-data', PostDataViewSet)

urlpatterns = [
    path('upload/', PostScanView.as_view(), name='image-upload'),
    path('', include(router.urls)),
]

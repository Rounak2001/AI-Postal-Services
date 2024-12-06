from django.urls import path
from .views import PostScanView

urlpatterns = [
    path('upload/', PostScanView.as_view(), name='image-upload'),
]

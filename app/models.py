from django.db import models

class ScannedPost(models.Model):
    image = models.ImageField(upload_to='post_images/')
    time_scanned = models.DateTimeField(auto_now_add=True)
    sender_address = models.TextField()
    receiver_address = models.TextField()
    receiver_pincode = models.CharField(max_length=6, null=True, blank=True)
    receiver_state = models.CharField(max_length=50, null=True, blank=True)
    receiver_district = models.CharField(max_length=50, null=True, blank=True)
    receiver_location = models.CharField(max_length=100, null=True, blank=True)
    is_valid = models.BooleanField(default=False)
    modified_pincode = models.CharField(max_length=6, null=True, blank=True)
    customer_feedback = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Post {self.id}: {self.receiver_address}"


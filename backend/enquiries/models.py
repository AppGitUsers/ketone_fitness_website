from django.db import models

STATUS_CHOICES = [
    ("Pending", "Pending"),
    ("Contacted", "Contacted"),
    ("Joined", "Joined"),
]

FITNESS_GOAL_CHOICES = [
    ("Weight Loss", "Weight Loss"),
    ("Weight Gain", "Weight Gain"),
    ("Muscle Building", "Muscle Building"),
    ("Body Transformation", "Body Transformation"),
    ("Strength Training", "Strength Training"),
    ("General Fitness", "General Fitness"),
]

SERVICE_CHOICES = [
    ("Gym Membership", "Gym Membership"),
    ("Personal Training", "Personal Training"),
    ("Nutrition Coaching", "Nutrition Coaching"),
    ("Weight Loss Program", "Weight Loss Program"),
    ("Weight Gain Program", "Weight Gain Program"),
    ("Strength Training", "Strength Training"),
    ("Group Fitness Classes", "Group Fitness Classes"),
]


class ContactEnquiry(models.Model):
    full_name = models.CharField(max_length=100)
    mobile_number = models.CharField(max_length=20)
    email = models.EmailField()
    age = models.IntegerField(null=True, blank=True)

    fitness_goal = models.CharField(
        max_length=50,
        choices=FITNESS_GOAL_CHOICES
    )

    service_required = models.CharField(
        max_length=50,
        choices=SERVICE_CHOICES
    )

    message = models.TextField(blank=True)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.full_name
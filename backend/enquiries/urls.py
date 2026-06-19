from django.urls import path
from .views import create_enquiry, get_enquiries, delete_enquiry, update_enquiry_status, admin_login

urlpatterns = [
    path("admin/login/", admin_login),
    path("enquiry/", create_enquiry),
    path("enquiries/", get_enquiries),
    path("enquiry/<int:pk>/", delete_enquiry),
    path("enquiry/update/<int:pk>/", update_enquiry_status),
]
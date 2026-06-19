from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from .models import ContactEnquiry
from rest_framework.permissions import IsAdminUser
from rest_framework.decorators import permission_classes


@api_view(["POST"])
def admin_login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(request, username=username, password=password)

    if user is not None and (user.is_staff or user.is_superuser):
        return Response({
            "success": True,
            "username": user.username
        })

    return Response(
        {
            "success": False,
            "error": "Invalid credentials"
        },
        status=401
    )

@api_view(["POST"])
def create_enquiry(request):
    try:
        data = request.data

        enquiry = ContactEnquiry.objects.create(
            full_name=data.get("full_name"),
            mobile_number=data.get("mobile_number"),
            email=data.get("email"),
            age=data.get("age"),
            fitness_goal=data.get("fitness_goal"),
            service_required=data.get("service_required"),
            message=data.get("message"),
        )

        return Response({
            "success": True,
            "message": "Enquiry saved successfully",
            "id": enquiry.id
        })

    except Exception as e:
        return Response(
            {
                "success": False,
                "error": str(e)
            },
            status=400
        )

@api_view(["GET"])
def get_enquiries(request):
    enquiries = ContactEnquiry.objects.all().order_by("-created_at")

    data = [
        {
            "id": e.id,
            "full_name": e.full_name,
            "mobile_number": e.mobile_number,
            "email": e.email,
            "age": e.age,
            "fitness_goal": e.fitness_goal,
            "service_required": e.service_required,
            "message": e.message,
            "status": e.status,
            "created_at": e.created_at,
        }
        for e in enquiries
    ]

    return Response(data)

@api_view(["DELETE"])
def delete_enquiry(request, pk):
    try:
        enquiry = ContactEnquiry.objects.get(id=pk)
        enquiry.delete()

        return Response({
            "success": True,
            "message": "Deleted successfully"
        })

    except ContactEnquiry.DoesNotExist:
        return Response(
            {
                "success": False,
                "error": "Not found"
            },
            status=404
        )

@api_view(["PATCH"])
def update_enquiry_status(request, pk):
    try:
        enquiry = ContactEnquiry.objects.get(id=pk)

        enquiry.status = request.data.get("status", enquiry.status)
        enquiry.save()

        return Response({
            "success": True,
            "message": "Status updated successfully",
            "status": enquiry.status
        })

    except ContactEnquiry.DoesNotExist:
        return Response(
            {
                "success": False,
                "error": "Enquiry not found"
            },
            status=404
        )
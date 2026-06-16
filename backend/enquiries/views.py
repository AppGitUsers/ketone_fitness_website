from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import ContactEnquiry

@api_view(["POST"])
def create_enquiry(request):
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

@api_view(["GET"])
def get_enquiries(request):
    enquiries = ContactEnquiry.objects.all().order_by("-created_at")

    data = []
    for e in enquiries:
        data.append({
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
        })

    return Response(data)

@api_view(["DELETE"])
def delete_enquiry(request, pk):
    try:
        enquiry = ContactEnquiry.objects.get(id=pk)
        enquiry.delete()
        return Response({"message": "Deleted successfully"})
    except:
        return Response({"error": "Not found"}, status=404)

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
            {"error": "Enquiry not found"},
            status=404
        )
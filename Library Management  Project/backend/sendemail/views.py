from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings

@api_view(['POST'])
def send_email(request):
    # Extract data from the request
    subject = request.data.get('subject')
    message = request.data.get('message')
    recipient = request.data.get('recipient')

    # Ensure all fields are provided
    if not subject or not message or not recipient:
        return Response({"error": "Please provide subject, message, and recipient email address."},
                        status=status.HTTP_400_BAD_REQUEST)

    # Send the email
    try:
        send_mail(
            subject,
            message,
            settings.EMAIL_HOST_USER,  # Sender email (from settings)
            [recipient],               # Recipient email
            fail_silently=False,
        )
        return Response({"success": "Email sent successfully!"}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

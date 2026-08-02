import resend

from app.core.config import settings

resend.api_key = settings.RESEND_API_KEY


def send_email(receiver_email: str, subject: str, body: str):
    resend.Emails.send(
        {
            "from": "onboarding@resend.dev",
            "to": receiver_email,
            "subject": subject,
            "text": body,
        }
    )
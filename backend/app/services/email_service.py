import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from app.core.config import settings

def send_email(receiver_email: str, subject: str, body: str):
    message = MIMEMultipart()

    message["From"] = settings.EMAIL_ADDRESS
    message["To"] = receiver_email
    message["Subject"] = subject

    message.attach(MIMEText(body, "plain"))

    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()

        server.login(
            settings.EMAIL_ADDRESS,
            settings.EMAIL_PASSWORD
        )

        server.send_message(message)
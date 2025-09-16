import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with environment variable
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const recipientEmail = process.env.NEXT_PUBLIC_EMAIL_RECIPIENT || 'kennethcantillas@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, address, message, inquiryType } = body;

    if (!resend) {
      console.error('Email service not properly configured');
      return NextResponse.json(
        { success: false, message: 'Email service not configured' },
        { status: 500 }
      );
    }

    const result = await resend.emails.send({
      from: '8GPI Contact Form <onboarding@resend.dev>',
      to: recipientEmail,
      subject: `New ${inquiryType} Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    if (result.error) {
      console.error('Error sending email:', result.error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email', 
          error: result.error 
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

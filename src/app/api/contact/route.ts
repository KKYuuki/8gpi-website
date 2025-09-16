import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Hardcoded values for testing
const resendApiKey = 're_84ESAoMa_tofBJbbTTU7nv5cMHeWg93Sm';
const recipientEmail = 'kennethcantillas@gmail.com';

console.log('Using hardcoded Resend API Key and email for testing');

// Initialize Resend with the API key
const resend = new Resend(resendApiKey);

export async function POST(request: Request) {
  console.log('Contact form submission received');
  
  try {
    // Log the raw request headers for debugging
    console.log('Request headers:', JSON.stringify(Object.fromEntries(request.headers.entries()), null, 2));
    
    const body = await request.json().catch(e => {
      console.error('Error parsing request body:', e);
      throw new Error('Invalid request body');
    });
    
    console.log('Request body:', JSON.stringify(body, null, 2));
    
    const { firstName, lastName, email, phone, address, message, inquiryType } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      console.error('Missing required fields');
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Always log the email sending attempt
    console.log('Attempting to send email to:', recipientEmail);

    console.log('Sending email to:', recipientEmail);
    const { data, error } = await resend.emails.send({
      from: '8GPI Contact Form <onboarding@resend.dev>',
      to: recipientEmail,
      replyTo: email,
      subject: `New ${inquiryType || 'General'} Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a365d;">New Contact Form Submission</h2>
          <div style="background: #f7fafc; padding: 1.5rem; border-radius: 0.5rem; margin-top: 1rem;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3182ce; text-decoration: none;">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #3182ce; text-decoration: none;">${phone}</a></p>` : ''}
            ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
            ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 1rem; border-radius: 0.25rem; margin-top: 0.5rem; border: 1px solid #e2e8f0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="margin-top: 1.5rem; color: #718096; font-size: 0.875rem;">
            This email was sent from the contact form on 8GPI website.
          </p>
        </div>
      `,
    });

    if (error) {
      interface ResendError extends Error {
        statusCode?: number;
        code?: string;
      }
      
      const resendError = error as ResendError;
      
      console.error('Error from Resend API:', {
        name: resendError.name,
        message: resendError.message,
        statusCode: resendError.statusCode,
        code: resendError.code,
        stack: process.env.NODE_ENV === 'development' ? resendError.stack : undefined
      });
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email', 
          error: resendError.message,
          code: resendError.code || 'SEND_EMAIL_ERROR'
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully', data);
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        data: data
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error in contact API:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process request',
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: process.env.NODE_ENV === 'development' && error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

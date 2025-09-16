const { Resend } = require('resend');

async function testResend() {
  const resend = new Resend('re_84ESAoMa_tofBJbbTTU7nv5cMHeWg93Sm');
  
  try {
    console.log('Sending test email...');
    const { data, error } = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: 'kennethcantillas@gmail.com',
      subject: 'Test Email from 8GPI',
      html: '<p>This is a test email from the 8GPI website.</p>',
    });

    if (error) {
      console.error('Error sending email:', error);
      return;
    }

    console.log('Email sent successfully:', data);
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

testResend();

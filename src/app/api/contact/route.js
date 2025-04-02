import { Resend } from 'resend';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Create a Resend instance with your API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend API
    const emailResponse = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Replace with your email address
      to: 'mr.naveedbashir@gmail.com',      // Replace with the recipient email address
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error Sending Email:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

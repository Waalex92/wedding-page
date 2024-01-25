import { z } from 'zod';
import { Resend } from 'resend';
import { ContactFormSchema } from '@/lib/schema';
import ContactFormEmail from '@/emails/contact-form-email';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;
        const data = await resend.emails.send({
            from: 'Wishes <onboarding@resend.dev>',
            to: ['alex.wong.aguilar@gmail.com'],
            subject: 'Deseos para los novios',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: ContactFormEmail({ name, email, message }),
        });

        // Aquí deberías devolver una respuesta para la solicitud POST
        return new Response(JSON.stringify({ success: true, data }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        // Aquí también deberías devolver una respuesta para la solicitud POST
        return new Response(JSON.stringify({ success: false, error }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

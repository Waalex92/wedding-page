{/*
'use server'

import { Resend } from 'resend'
import { NextResponse } from 'next/server'
import ContactFormEmail from '@/emails/contact-form-email'


const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Resend) {

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
        if (request.status === 'success') {
            return NextResponse.json({ message: 'Email Sent' })
        }
        return NextResponse.json(request)
    } catch (error) {
        console.log('error', error)
    }
}
 */}
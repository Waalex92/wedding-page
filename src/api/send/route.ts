'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schema'
import ContactFormEmail from '@/emails/contact-form-email'




type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.re_5MtXruHK_MttBT5qUbp4JkVD2k9S4224h)

export async function POST(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data)

    if (result.success) {
        const { name, email, message } = result.data
        try {
            const data = await resend.emails.send({
                from: 'Wishes <onboarding@resend.dev>',
                to: ['alex.wong.aguilar@gmail.com'],
                subject: 'Deseos para los novios',
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
                react: ContactFormEmail({ name, email, message }),
            })
            return { success: true, data }
        } catch (error) {
            return { success: false, error }
        }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
}
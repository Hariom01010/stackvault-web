import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";
import {
    createWaitlist,
    findWaitlistByEmail,
    findWaitlistByReferralCode,
} from "@/repository/waitlist.repository";

const resend = new Resend(process.env.RESEND_API_KEY);

interface JoinWaitlistData {
    name: string;
    email: string;
    referralCode?: string;
}

function generateReferralCode(length = 8) {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";

    for (let i = 0; i < length; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }

    return code;
}

export async function joinWaitlist(data: JoinWaitlistData, baseUrl?: string) {
    const email = data.email.trim().toLowerCase();

    const existingUser = await findWaitlistByEmail(email);

    if (existingUser) {
        throw new Error("Email already exists.");
    }

    let referredById: string | undefined;

    if (data.referralCode) {
        const referrer = await findWaitlistByReferralCode(data.referralCode);

        if (referrer) {
            referredById = referrer.id;
        }
    }

    let referralCode = generateReferralCode();

    while (await findWaitlistByReferralCode(referralCode)) {
        referralCode = generateReferralCode();
    }

    const waitlist = await createWaitlist({
        name: data.name.trim(),
        email,
        referralCode,
        referredBy: referredById
            ? {
                connect: {
                    id: referredById,
                },
            }
            : undefined,
    });

    try {
        const firstName = waitlist.name.trim().split(/\s+/)[0];

        const { data: emailData, error: emailError } = await resend.emails.send({
            from: "StackVault <noreply@stackvault.co.in>",
            to: [waitlist.email],
            subject: "Welcome to StackVault!",
            react: React.createElement(EmailTemplate, {
                firstName,
                referralCode: waitlist.referralCode,
                baseUrl,
            }),
        });

        if (emailError) {
            console.error("Resend API returned an error:", emailError);
        } else {
            console.log("Resend welcome email sent successfully:", emailData);
        }
    } catch (emailError) {
        console.error("Failed to send welcome email via Resend:", emailError);
    }

    return waitlist;
}
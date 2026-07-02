import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function findWaitlistByEmail(email: string) {
    return prisma.waitlist.findUnique({
        where: {
            email,
        },
    });
}

export async function findWaitlistByReferralCode(referralCode: string) {
    return prisma.waitlist.findUnique({
        where: {
            referralCode,
        },
    });
}
export async function createWaitlist(data: Prisma.WaitlistCreateInput) {
    return prisma.waitlist.create({
        data,
    });
}
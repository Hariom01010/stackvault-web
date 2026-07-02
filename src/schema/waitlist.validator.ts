import * as z from "zod";

export const JoinWaitlistSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().email(),
    referralCode: z.string().optional(),
});
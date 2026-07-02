import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { JoinWaitlistSchema } from "@/schema/waitlist.validator";
import { joinWaitlist } from "@/services/waitlist.service";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const data = JoinWaitlistSchema.parse(body);

        const origin = req.nextUrl.origin;
        const waitlist = await joinWaitlist(data, origin);

        return NextResponse.json(waitlist, {
            status: 201,
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    message: "Validation failed.",
                    errors: error.flatten().fieldErrors,
                },
                {
                    status: 400,
                }
            );
        }

        if (error instanceof Error && error.message === "Email already exists.") {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 400,
                }
            );
        }

        console.error(error);

        return NextResponse.json(
            {
                message: "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}
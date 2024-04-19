import { generateWeeklyAffirmations } from "@/lib/api/affirmations";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    if (request.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ status: 401 })
    }
    await generateWeeklyAffirmations()
    return NextResponse.json({ ok: true });
}
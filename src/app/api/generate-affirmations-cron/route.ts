import { generateWeeklyAffirmations } from "@/lib/api/affirmations";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    
    // await generateWeeklyAffirmations()
    return NextResponse.json({ ok: true });
}
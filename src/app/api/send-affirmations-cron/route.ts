import { sendAffirmations } from "@/lib/api/affirmations";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
    
    await sendAffirmations()
    return NextResponse.json({ ok: true });
}
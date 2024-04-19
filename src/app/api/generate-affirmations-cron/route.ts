import { generateWeeklyAffirmations } from "@/lib/api/affirmations";


export async function GET(request: Request) {
    await generateWeeklyAffirmations()
    return new Response(`success`);
}
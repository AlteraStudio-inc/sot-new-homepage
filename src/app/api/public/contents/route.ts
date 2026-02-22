import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const type = searchParams.get("type"); // notice | faq | symptom | review

        if (!type) {
            return NextResponse.json({ error: "Type is required" }, { status: 400 });
        }

        const contents = await prisma.content.findMany({
            where: { type, is_published: true },
            orderBy: { created_at: "desc" },
        });

        return NextResponse.json({ success: true, contents });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch contents" }, { status: 500 });
    }
}

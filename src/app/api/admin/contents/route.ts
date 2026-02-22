import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const type = searchParams.get("type");

        const where = type ? { type } : {};

        const contents = await prisma.content.findMany({
            where,
            orderBy: { created_at: "desc" },
        });

        return NextResponse.json({ success: true, contents });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch contents" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const content = await prisma.content.create({
            data: {
                type: body.type,
                title: body.title,
                slug: body.slug || null,
                content: body.content,
                is_published: body.is_published ?? true,
            }
        });

        return NextResponse.json({ success: true, content });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create content" }, { status: 500 });
    }
}

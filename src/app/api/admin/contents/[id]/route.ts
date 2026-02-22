import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const body = await req.json();

        const content = await prisma.content.update({
            where: { id },
            data: {
                title: body.title,
                slug: body.slug,
                content: body.content,
                is_published: body.is_published
            }
        });

        return NextResponse.json({ success: true, content });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
    }
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        await prisma.content.delete({
            where: { id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete content" }, { status: 500 });
    }
}

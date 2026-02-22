import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const body = await req.json();
        const menu = await prisma.menu.update({
            where: { id },
            data: {
                name: body.name,
                description: body.description,
                price: body.price !== undefined ? Number(body.price) : undefined,
                duration_minutes: body.duration_minutes !== undefined ? Number(body.duration_minutes) : undefined,
                target: body.target,
                is_active: body.is_active,
                order: body.order !== undefined ? Number(body.order) : undefined,
            }
        });
        return NextResponse.json({ success: true, menu });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update menu" }, { status: 500 });
    }
}

export async function DELETE(req: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        await prisma.menu.delete({
            where: { id }
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete menu" }, { status: 500 });
    }
}

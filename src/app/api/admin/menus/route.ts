import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const menus = await prisma.menu.findMany({
            orderBy: { order: "asc" },
        });
        return NextResponse.json({ success: true, menus });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch menus" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const menu = await prisma.menu.create({
            data: {
                name: body.name,
                description: body.description,
                price: Number(body.price),
                duration_minutes: Number(body.duration_minutes),
                target: body.target,
                is_active: body.is_active ?? true,
                order: body.order ? Number(body.order) : 0,
            }
        });
        return NextResponse.json({ success: true, menu });
    } catch (error) {
        console.error("POST /api/admin/menus error", error);
        return NextResponse.json({ error: "Failed to create menu" }, { status: 500 });
    }
}

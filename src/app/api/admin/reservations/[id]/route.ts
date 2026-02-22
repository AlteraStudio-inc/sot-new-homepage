import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        const body = await req.json();

        const reservation = await prisma.reservation.update({
            where: { id },
            data: {
                status: body.status,
                admin_notes: body.admin_notes
            }
        });

        return NextResponse.json({ success: true, reservation });
    } catch (error) {
        return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }
}

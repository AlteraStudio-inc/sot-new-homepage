import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const hours = await prisma.businessHour.findMany({
            orderBy: { day_of_week: "asc" },
        });
        const holidays = await prisma.holiday.findMany({
            orderBy: { date: "asc" }
        });
        return NextResponse.json({ success: true, hours, holidays });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}

export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { hours } = body; // Array of 7 objects

        if (hours && Array.isArray(hours)) {
            await prisma.$transaction(
                hours.map((h: any) =>
                    prisma.businessHour.update({
                        where: { id: h.id },
                        data: {
                            open_time: h.open_time,
                            close_time: h.close_time,
                            is_closed: h.is_closed,
                        }
                    })
                )
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("PUT /api/admin/business-hours error", error);
        return NextResponse.json({ error: "Failed to update business hours" }, { status: 500 });
    }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const start = searchParams.get("start");
        const end = searchParams.get("end");

        const startDate = start ? new Date(start) : new Date();
        startDate.setHours(0, 0, 0, 0);

        const endDate = end ? new Date(end) : new Date();
        if (!end) {
            endDate.setMonth(endDate.getMonth() + 2); // default 2 months ahead
        }

        const businessHours = await prisma.businessHour.findMany();
        const holidays = await prisma.holiday.findMany({
            where: { date: { gte: startDate, lte: endDate } }
        });

        const reservations = await prisma.reservation.findMany({
            where: {
                start_time: { gte: startDate, lte: endDate },
                status: { in: ["pending", "confirmed"] }
            },
            select: {
                start_time: true,
                end_time: true
            }
        });

        return NextResponse.json({ success: true, businessHours, holidays, reservations });
    } catch (error) {
        console.error("GET /api/public/slots error", error);
        return NextResponse.json({ error: "Failed to fetch slots" }, { status: 500 });
    }
}

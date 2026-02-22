import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {
            is_first_time, concern, menu_id, start_time,
            customer_name, customer_kana, customer_email,
            customer_phone, customer_line_id, customer_notes
        } = body;

        const menu = await prisma.menu.findUnique({ where: { id: menu_id } });
        if (!menu) return NextResponse.json({ error: "Menu not found" }, { status: 404 });

        const startTime = new Date(start_time);
        const endTime = new Date(startTime.getTime() + menu.duration_minutes * 60000);

        // Check for overlap
        const overlapping = await prisma.reservation.findFirst({
            where: {
                status: { in: ["pending", "confirmed"] },
                AND: [
                    { start_time: { lt: endTime } },
                    { end_time: { gt: startTime } }
                ]
            }
        });

        if (overlapping) {
            return NextResponse.json({ error: "指定された日時は既に予約が埋まっています。別の日時を選択してください。" }, { status: 409 });
        }

        const reservation = await prisma.reservation.create({
            data: {
                status: "pending",
                is_first_time,
                concern,
                menu_id,
                start_time: startTime,
                end_time: endTime,
                customer_name,
                customer_kana,
                customer_email,
                customer_phone,
                customer_line_id,
                customer_notes,
            }
        });

        // TODO: Send confirmation email via Nodemailer

        return NextResponse.json({ success: true, reservation });
    } catch (error) {
        console.error("POST /api/public/reservations error", error);
        return NextResponse.json({ error: "予約の作成に失敗しました" }, { status: 500 });
    }
}

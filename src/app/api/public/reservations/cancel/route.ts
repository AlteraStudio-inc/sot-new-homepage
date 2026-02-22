import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { reservation_id, email } = body;

        const reservation = await prisma.reservation.findUnique({
            where: { id: reservation_id }
        });

        if (!reservation || reservation.customer_email !== email) {
            return NextResponse.json({ error: "予約情報が見つかりません" }, { status: 404 });
        }

        if (reservation.status === "cancelled") {
            return NextResponse.json({ error: "既にキャンセルされています" }, { status: 400 });
        }

        // Checking if cancellation is allowed (e.g. 24h before) can be added here
        const startTime = new Date(reservation.start_time);
        const now = new Date();
        if (startTime.getTime() - now.getTime() < 24 * 60 * 60 * 1000) {
            return NextResponse.json({ error: "24時間以内のキャンセルはお電話でお願いします" }, { status: 400 });
        }

        await prisma.reservation.update({
            where: { id: reservation_id },
            data: { status: "cancelled", updated_at: new Date() }
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("POST /api/public/reservations/cancel error", error);
        return NextResponse.json({ error: "キャンセル処理に失敗しました" }, { status: 500 });
    }
}

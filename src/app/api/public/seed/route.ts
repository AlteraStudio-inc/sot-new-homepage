import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
    try {
        // Create default admin
        const passwordHash = await bcrypt.hash('password123', 10);
        await prisma.admin.upsert({
            where: { email: 'admin@example.com' },
            update: {},
            create: {
                email: 'admin@example.com',
                password_hash: passwordHash,
                name: '管理者',
            },
        });

        // Create default menus
        await prisma.menu.deleteMany();
        await prisma.menu.createMany({
            data: [
                {
                    name: "初回検査＋SOT整体＋脳幹療法",
                    description: "初回はカウンセリング込みで60分程度。初回検査料と施術料が含まれます。",
                    price: 8800,
                    duration_minutes: 60,
                    target: 'first_time',
                    is_active: true,
                    order: 1,
                },
                {
                    name: "SOT整体＋脳幹療法（2回目以降）",
                    description: "2回目以降の基本となる施術です。ソフトで痛みのない施術で心と身体を整えます。",
                    price: 6600,
                    duration_minutes: 40,
                    target: 'returning',
                    is_active: true,
                    order: 2,
                },
                {
                    name: "小学生以下のお子さん（SOT整体＋脳幹療法）",
                    description: "小学生以下のお子さんへの施術です。",
                    price: 5500,
                    duration_minutes: 30,
                    target: 'both',
                    is_active: true,
                    order: 3,
                }
            ]
        });

        // Create Business Hours
        await prisma.businessHour.deleteMany();
        const hours = [];
        for (let i = 0; i <= 6; i++) {
            hours.push({
                day_of_week: i,
                open_time: '09:30',
                close_time: i === 3 ? '12:30' : '19:00', // Wed closes at 12:30
                is_closed: (i === 0 || i === 4), // Sun(0) and Thu(4) are closed
            });
        }
        await prisma.businessHour.createMany({ data: hours });

        return NextResponse.json({ success: true, message: "Database seeded successfully!" });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

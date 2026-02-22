import { prisma } from '../src/lib/prisma'
import bcrypt from 'bcryptjs'

async function main() {
    // Create default admin
    const passwordHash = await bcrypt.hash('password123', 10)

    const admin = await prisma.admin.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            password_hash: passwordHash,
            name: '管理者',
        },
    })

    // Create default menus
    await prisma.menu.deleteMany()
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
    })

    // Create Business Hours (Mon-Sat 9:30-12:30 / 15:30-19:00, Sun, Wed afternoon, Thu, Hol = closed)
    // Wait, sot.jp says:
    // 営業時間: 9:30～12:30 / 15:30～19:00
    // 定休日: 日・祝・木・水曜午後

    await prisma.businessHour.deleteMany()
    const hours = []
    for (let i = 0; i <= 6; i++) {
        hours.push({
            day_of_week: i,
            // Format: "09:30" and "19:00"
            open_time: '09:30',
            close_time: i === 3 ? '12:30' : '19:00', // Wed closes at 12:30
            is_closed: (i === 0 || i === 4), // Sun(0) and Thu(4) are closed
        })
    }
    await prisma.businessHour.createMany({ data: hours })

    console.log('Database seeded successfully.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

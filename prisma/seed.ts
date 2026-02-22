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
                name: '【初回限定】全身整体コース(検査＋施術)',
                description: '初めての方はこちらをお選びください。根本原因を見つけるため丁寧な検査を行います。',
                price: 6000,
                duration_minutes: 60,
                target: 'first_time',
                is_active: true,
                order: 1,
            },
            {
                name: '【2回目以降】通常整体コース',
                description: '2回目以降の方はこちら。',
                price: 5000,
                duration_minutes: 40,
                target: 'returning',
                is_active: true,
                order: 2,
            },
            {
                name: '産後骨盤矯正コース',
                description: '産後2ヶ月～の方限定の特別なコースです。',
                price: 6500,
                duration_minutes: 40,
                target: 'both',
                is_active: true,
                order: 3,
            }
        ]
    })

    // Create Business Hours (Monday to Saturday 9:00 - 20:00, Sunday closed)
    await prisma.businessHour.deleteMany()
    const hours = []
    for (let i = 0; i <= 6; i++) {
        hours.push({
            day_of_week: i,
            open_time: '09:00',
            close_time: '20:00',
            is_closed: i === 0, // Sunday closed
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

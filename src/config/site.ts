export const siteConfig = {
    name: "中央カイロプラクティック院 枚方院",
    description: "もっと身近に ずっと見守る 心と身体の健康相談室。枚方市宮之阪の整体・カイロプラクティック院。",
    url: "https://sot-new-homepage.vercel.app", // 本番稼働後に変更
    ogImage: "/og-image.jpg",
    links: {
        line: "https://lin.ee/jhGDcuH",
        reserve: "/reserve",
        instagram: "", // 用意があれば追加
    },
    clinic: {
        phone: "072-840-7798",
        address: {
            postal: "〒573-0022",
            text: "大阪府枚方市宮之阪3丁目5-40",
            access: "京阪交野線「宮之阪駅」から徒歩2分",
        },
        parking: "専用駐車場3台完備",
        hours: {
            text: "9:30-12:30 / 15:30-19:00",
            notes: "完全予約制",
        },
        closed: "木曜午後・日・祝日",
        payment: "現金・クレジットカード・PayPay対応",
    }
};

export type SiteConfig = typeof siteConfig;

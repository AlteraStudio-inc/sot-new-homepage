import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="py-4 bg-[#FAF9F5] w-full border-b border-[#E8F0E4]">
            <div className="container mx-auto px-4 max-w-5xl">
                <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#556b5d] overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <li>
                        <Link href="/" className="flex items-center hover:text-[#38A182] transition-colors">
                            <Home className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                            <span>ホーム</span>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 mx-1 text-[#A2CBB5]" />
                            {index === items.length - 1 ? (
                                <span className="font-bold text-[#2C3E35] truncate max-w-[150px] md:max-w-none" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className="hover:text-[#38A182] transition-colors truncate max-w-[150px] md:max-w-none">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "ホーム",
                                item: process.env.NEXT_PUBLIC_BASE_URL || "https://example.com",
                            },
                            ...items.map((item, index) => ({
                                "@type": "ListItem",
                                position: index + 2,
                                name: item.label,
                                item: `${process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"}${item.href}`,
                            })),
                        ],
                    }),
                }}
            />
        </nav>
    );
}

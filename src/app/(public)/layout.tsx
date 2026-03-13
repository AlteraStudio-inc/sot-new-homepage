import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen relative md:pr-64">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
            <MobileCTA />
        </div>
    );
}

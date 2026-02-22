import AdminSidebar from "@/components/layout/AdminSidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-stone-100">
            <AdminSidebar />
            <div className="flex-1 lg:pl-64">
                <main className="p-4 md:p-8 w-full max-w-6xl mx-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}

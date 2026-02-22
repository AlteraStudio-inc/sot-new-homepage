import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAuth } from "@/lib/auth";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    const isAdminRoute = pathname.startsWith("/admin");
    const isAdminApiRoute = pathname.startsWith("/api/admin");
    const isAuthRoute = pathname === "/admin/login" || pathname.startsWith("/api/admin/auth");

    if ((isAdminRoute || isAdminApiRoute) && !isAuthRoute) {
        const token = req.cookies.get("admin_token")?.value;

        if (!token) {
            if (isAdminApiRoute) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
            }
            return NextResponse.redirect(new URL("/admin/login", req.url));
        }

        try {
            await verifyAuth(token);
            return NextResponse.next();
        } catch (err) {
            if (isAdminApiRoute) {
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
            }
            const response = NextResponse.redirect(new URL("/admin/login", req.url));
            response.cookies.delete("admin_token");
            return response;
        }
    }

    // If going to login page but already authenticated, redirect to admin dashboard
    if (pathname === "/admin/login") {
        const token = req.cookies.get("admin_token")?.value;
        if (token) {
            try {
                await verifyAuth(token);
                return NextResponse.redirect(new URL("/admin", req.url));
            } catch (err) {
                // Token invalid, allow to proceed to login page
            }
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/api/admin/:path*"],
};

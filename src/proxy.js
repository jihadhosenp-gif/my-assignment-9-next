import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    if (!session) {
        return NextResponse.redirect(new URL("/Login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/all-Room/:path*", "/my-Booking/:path*" , "/add-Room/:path*"],
};
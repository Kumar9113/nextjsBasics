import { NextResponse } from "next/server";

export default function middeleware(request) {
    return NextResponse.redirect(new URL("/", request.url))
}
// export const config={
//     matcher:["/about/:path","/study/:path"]
// }
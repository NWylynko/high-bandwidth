import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { nextUrl, method } = req;

  // Store the response so we can modify its headers
  const response = NextResponse.next();

  // only cache get requests
  if (method === "GET") {
    // we can cache for a year because by calling 'firebase deploy' it will de-validate the cache
    response.headers.set(
      "Cache-Control",
      "public, max-age=300, s-maxage=31536000"
    );
  }

  // Return response
  return response;
}

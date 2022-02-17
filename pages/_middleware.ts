import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // Store the response so we can modify its headers
  const response = NextResponse.next();

  // Set custom header
  response.headers.set(
    "Cache-Control",
    "public, max-age=43200, s-maxage=86400, stale-while-revalidate=129600"
  );

  // Return response
  return response;
}

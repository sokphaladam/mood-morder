import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest } from "next/server";

const nextIntl = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const token = request.cookies.get('tk_token')?.value;
  const lng = request.cookies.get('NEXT_LOCALE')?.value || 'kh';

  if(!token) {
    const changeRequest = request;
    if(request.nextUrl.pathname === '/') {
      changeRequest.nextUrl.pathname = request.nextUrl.pathname + `/${lng}/auth/login`;
    }else {
      changeRequest.nextUrl.pathname = request.nextUrl.pathname + "/auth/login";
    }

    console.log(changeRequest.nextUrl)
    
    return nextIntl(changeRequest)
  }

  return nextIntl(request);
} 

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(kh|en)/:path*", '/((?!proxy|!api|.next/static|.next/image|assets|favicon.ico|sw.js|affiliate.svg).*)'],
};

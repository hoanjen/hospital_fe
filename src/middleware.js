import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
   
   const token = request.cookies.get('access_token');

   if (token && token.value){
      return NextResponse.redirect(new URL('/', request.url))
   }

   if (!token || !token.value){
      return NextResponse.redirect(new URL('/auth', request.url))
   }
}

export const config = {
   matcher: ['/123']   

}
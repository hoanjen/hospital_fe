import { NextResponse } from 'next/server'
import { toast } from 'react-toastify';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
   
   const token = request.cookies.get('access_token');

   if (!token || !token.value){
      
      return NextResponse.redirect(new URL('/', request.url))
   }
}

export const config = {
   matcher: ['/specialist/:path*/doctor/:path*/booking/:path*']   

}
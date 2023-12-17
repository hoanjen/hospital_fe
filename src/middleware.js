import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request, params) {
  const token = request.cookies.get('access_token');
  // const user_id = request.cookies.get('user_id');
  // const historyy =await (await fetch(`https://medical-booking.onrender.com/api/v1/user/${user_id}`, { method: "GET"})).json();
  // console.log(historyy)
  if (!token || !token.value) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/specialist/:path*/doctor/:path*/booking/:path*', '/profile/:path*'],
};

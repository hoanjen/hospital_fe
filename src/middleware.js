import { NextResponse } from 'next/server';
import { headers } from '../next.config';

// This function can be marked `async` if using `await` inside
export async function middleware(request, params) {
  const token = request.cookies.get('access_token');
  
  const { pathname } = request.nextUrl
  console.log(pathname)
  if (!token || !token.value) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if(pathname.includes('manage')){
    
    
    const apiUrl = 'https://medical-booking-server.onrender.com/api/v1/auth/token';

    
    const requestBody = {
      token: token.value
    };

    let access = false;
    let data = null;
    fetch(apiUrl, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    data = await (await fetch(apiUrl, {
      method: "POST", headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
      })).json();
    
    data.user.roles.map((item) => {
      if (item.roleIndex === "admin" || item.roleIndex === "nhan-vien-phe-duyet"){
        access = true;
      }
    })
    if (data){
      if(!access){
        console.log(access)
        return NextResponse.redirect(new URL('/error/403', request.url));
      }

    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/specialist/:path*/doctor/:path*/booking/:path*', '/manage', '/profile/:path*'],
};

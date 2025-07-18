import { NextResponse } from "next/server";

export function middleware(request){
  const isLoggedIn=true;
  if(!isLoggedIn && request.nextUrl.pathname!='/home'){
    return NextResponse.redirect(new URL('/home',request.url))
  }
}










// import { NextResponse } from "next/server"
// const isLogIn=false;
// export function middleware(request){
//     console.log("this is middleware");
//     if(!isLogIn && request.nextUrl.pathname!="/home"){
//       return NextResponse.redirect(new URL('/home', request.url))
//     }
// }
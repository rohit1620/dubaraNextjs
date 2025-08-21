
// export const GET=async(request)=>{
//     return new Response("Hello My routes")
// }

import { NextResponse } from "next/server"

export const GET =async(request)=>{
    return NextResponse.json({name:"Rohit Kumar Malav"})
}
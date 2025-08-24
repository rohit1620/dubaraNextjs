import { NextResponse } from "next/server"

export const GET=async(req,value)=>{
    let de=value.params.all;
    return NextResponse.json({result:de})
}
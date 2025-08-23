import { NextResponse } from "next/server"

export const POST=async(req,res)=>{
    const user=await req.json()
    // const {id,name,age}=user;
     const {username,age}=user;
    if(!username||!age){
        return NextResponse.json({result:"all field required"},{status:400})
    }
    
    return NextResponse.json({result:"success"},{status:200})
}
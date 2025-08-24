
import { connectString } from "@/lib/db_connnection";
import { User } from "@/models/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET=async()=>{
    await mongoose.connect(connectString);
    const user= await User.find()
    return NextResponse.json({result:"success",data:user})
}

export const POST=async(req)=>{
    await mongoose.connect(connectString);
    // const payload={
    //     name:"Akash",
    //     age:"23k",
    //     salary:"43432"
    // }
    const payload=await req.json();
    const data=new User(payload);
    const response =  await data.save()
      return NextResponse.json({result:response,success:true})
}
import { connectString } from "@/lib/db_connnection";
import { User } from "@/models/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const PUT=async(req,{params})=>{
    const empId=params.empid;
    const id={_id:empId}
    // console.log("ids",id);
    const payload= await req.json();
    await mongoose.connect(connectString);
    const data=await User.findOneAndUpdate(id,payload)
    return NextResponse.json({result:data,success:true})
}

export const GET=async(req,{params})=>{
    const empId=params.empid;
    const id={_id:empId}
  
   
    await mongoose.connect(connectString);
    const data=await User.findById(id)
    return NextResponse.json({result:data,success:true})
}
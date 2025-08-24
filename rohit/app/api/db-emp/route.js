
import { connectString } from "@/lib/db_connnection";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET=async()=>{
    await mongoose.connect(connectString);
    return NextResponse.json({result:"success"})
}
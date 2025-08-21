import { NextResponse } from "next/server";
import { employee } from "@/db/db";

export const GET=async(req,value)=>{
    const emids=value.params.empid;
    console.log("emids",emids);
    
    const empData=employee.filter((item)=>item.empId==emids)
    console.log(empData);
    
    const myData=empData.length==0?{result:"data not found"}:{result:empData}
    return NextResponse.json(myData)
}
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

export const DELETE=(req,value)=>{
     let empId=  value.params.empid;
     console.log("delet ho gyi",empId);
     
     if(empId){
      return  NextResponse.json({result:"delete item successfull",success:true},{status:200})
     }
     else{
       return NextResponse.json({result:"item not found ",success:false},{status:400})
     }
}

export const PUT=async(req,value)=>{
  const payload=await req.json();
  payload.empId=value.params.empid;
  console.log("idid",payload);
  
  const {empId,name,age}=payload;
  if(!empId||!name||!age){
    return NextResponse.json({result:"Error",success:false},{status:400})
  }
    return NextResponse.json({result:"Success",success:true},{status:200})
}
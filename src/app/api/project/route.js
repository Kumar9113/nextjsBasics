import { connectionSrt } from "@/util/db";
import { Product } from "@/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET()
{
    let data=[];
    try 
   { 
    await mongoose.connect(connectionSrt);
    const data=await Product.find();
    console.log(data);
    }
    catch(err)
    {
        console.log(err.data)
    }
   
    return NextResponse.json({result:true})
}

export async function POST()
{
    await mongoose.connect(connectionSrt);
    let product=new Product({
        name:"note 10",
        price:30000,
        color:"red",
        company:"samsung",
        category:"mobile"
    })
    const result=await product.save();
    return NextResponse.json({result,success:true});c
}
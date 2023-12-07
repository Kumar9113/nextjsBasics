import { NextResponse } from "next/server";
import {user} from '@/util/db'
export  function GET()
{
    const data=user;
    return NextResponse.json(data,{status:200});
}
export async function POST(request)
{
   let payload= await request.json();
   console.log(payload)
   if(!payload.id)
   {
    return NextResponse.json({result:"required feild not found"})
   }
    return NextResponse.json({result:"Hello"})
}

export async function PUT(request,content)
{
    let payload=await request.json();
     payload.id=content.params.id;

    console.log(payload  );
   return NextResponse.json({result:payload})

}
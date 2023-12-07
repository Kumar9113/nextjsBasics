import { NextResponse } from "next/server";
import {user} from '@/util/db'
export  function GET(request,content)
{
    const data=user;
    const userData=data.filter((item)=>item.id==content.params.id)
    console.log(userData)
    return NextResponse.json(userData,{status:200});
}
export async function PUT(request,content)
{
    let payload=await request.json();
     payload.id=content.params.id;

    console.log(payload  );
   return NextResponse.json({result:payload})

}
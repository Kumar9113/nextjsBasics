"use client"
import { useEffect, useState } from "react";


export default  function page({params})
{
    
   
    const[user,setUser]=useState([]);
    const id=params.userid
    useEffect(()=>
    {
        fetch(`http://localhost:3000/api/user/${id}`).then((res)=>res.json()).then((res)=>setUser(res));

    },[])
    console.log(user)
    return(
        <div>
            <h1>User list</h1>
            {
                user.map((value)=>
                (
                    <li>{value.id}</li>
                ))
            }
       

        </div>
    )
}
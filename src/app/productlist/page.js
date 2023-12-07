'use client'
import { useEffect, useState } from "react"
import Product from "./product";

export default async function productList()
{
    const[product,setProduct]=useState([]);
    // useEffect(async()=>
    // {
    //     // await fetch("https://dummyjson.com/products").then((res)=>res.json()).then((res)=>setProduct(res.products));
    // },[])

    useEffect(()=>
    {
        fetch("https://dummyjson.com/products").then((res)=>res.json()).then((res)=>setProduct(res.products));

    },[])

     async function items()
     {
        let products=await fetch("https://dummyjson.com/products");
        products=await products.json();
        return products.products;

     }
     let data=await items();
   
    return(
        <div>
            <h1>Product List</h1>
           
            {
                
                data.map((item) => (
                    <div>
                         <li key={item}>{item.title}</li>
                         <Product/>
                         </div>
                        ))
            }
        </div>
    )
}
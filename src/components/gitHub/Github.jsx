import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
 export default function Github(){
//     const [data,setData]=useState([])
//    useEffect(()=>{
//     fetch('https:/api.github.com/users/parvez-144')
//     .then((res)=>res.json())
//     .then(data=>{
//         console.log(data)
//         setData(data)
//     })
//    },[])
const data=useLoaderData()
    return(
        <>
        <div className="p-2 bg-orange-400 text-center flex justify-center">
            <img className="rounded-3xl" src={data.avatar_url} alt="GitPicture" srcset="" width={100} height={100}/>
           <p className="m-6 pt-4 text-2xl font-serif"> Github followers :{data.followers}</p></div>
        </>
    )
 }
 export const githubInfoLoader =async()=>{
    const data=await fetch('https:/api.github.com/users/parvez-144')
    return data.json()
 }
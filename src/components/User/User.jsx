import React from "react";
import {useParams} from 'react-router-dom'

export default function User(){
    let {userId}=useParams()
    return(
        <>
        <div className="text-center p-2 bg-orange-400 text-2xl">User : {userId}</div>
        
        </>
    )
}
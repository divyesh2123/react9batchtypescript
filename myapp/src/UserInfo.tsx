import React, { useEffect, useState } from 'react'
import { IUser } from './IUser';
import axios from 'axios';

export default function UserInfo() {

    const [data,setData]= useState<IUser[]>([]);

    useEffect(()=>
    {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(y=>{
            console.log(y.status);
            console.log(y.statusText);
            console.log(y.data);
            setData(y.data)
        });


    },[])

  return (
    <div>
    {

data.map((p:IUser)=>{

    return(<div>{p.company.name}</div>)

})
        

    }</div>
  )
}

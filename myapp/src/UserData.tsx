import React, { useEffect, useState } from 'react'
import { IUser } from './iterface/IUser';

export default function UserData() {

    const [data,setData]= useState<IUser[]>([]);

    useEffect(()=>{

           const  getdata =  async ()=>{


              let p = await  fetch("https://jsonplaceholder.typicode.com/users");

              let finalData : IUser[]  = await p.json();

              setData(finalData);

            }

            getdata();

    })
  return (
    <div>
    {
        data.map((p:IUser,index: number)=>{

            return(<div key={index}>{p.name} {p.id} {p.email}</div>)

        })
        

    }</div>
  )
}

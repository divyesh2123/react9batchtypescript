import React, { FormEvent, useState } from 'react'
import { IEmployeeForm } from './iterface/IEmployeeForm'

export default function FormData() {

  const [data,setData]=   useState<IEmployeeForm>({
       firstName: ""
        
       
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        console.log(data);

    }

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]: e.target.value})
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit}>

                <input type='text' name='firstName' onChange={handleChange}/>
                <input type='text' name='lastName'  onChange={handleChange}/>
                <input type='submit' value="save"/>

        </form>
    </div>
  )
}

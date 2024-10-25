import React, { FormEvent, useState } from 'react'
import { IRegistration } from './IRegistration'
import axios from 'axios';

export default function Registration() {

    const [form,setform]= useState<IRegistration>({
        acceptTerms: false,
        confirmPassword: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        title: ""
    })

    const handleSubmit= (e: FormEvent<HTMLFormElement>)=>{

        e.preventDefault();
        axios.post("http://localhost:4000/accounts/register",form)
        .then(y=>{

            console.log(y.data);
        })




        console.log(form);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> )=>{
        
        if(e.target.type != "checkbox")
        {
        setform({...form,[e.target.name]: e.target.value})
        }
        else
        {
            setform({...form,[e.target.name]: e.target.checked})
        }
    }

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement> )=>{
        
       
        setform({...form,[e.target.name]: e.target.value})
        
    }
  return (
    <form onSubmit={handleSubmit}>

        <select id="title" onChange={handleChangeSelect} name='title'>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
        </select>
        <input type='text' name="firstName" onChange={handleChange}/>
        <input type='text' name="lastName" onChange={handleChange}/>
        <input type='text' name="email" onChange={handleChange}/>
        <input type='text' name="password" onChange={handleChange}/>
        <input type='text' name="confirmPassword" onChange={handleChange}/>
        <input type='checkbox' name="acceptTerms" onChange={handleChange}/>
       
        <input type='submit' value="save"/>
    </form>
  )
}

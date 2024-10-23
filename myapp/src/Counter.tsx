import React, { useState } from 'react'

export default function Counter() {

  const [data,setData]=  useState<number>(0);

  const inc = ()=>{

    setData(data+1);
  }
  return (
    <div>{data}
    
        <button onClick={inc}>+</button>
        <button>-</button>
    </div>
  )
}

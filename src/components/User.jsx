import React from 'react'

export default function User({ data }) {


  return (
    <div>
      <img className='h-[50px] w-[50px] rounded-full' src={data.image} alt="" />
      <h1>{data.name}</h1>
      <p>{data.desig}</p>


    </div>
  )
}

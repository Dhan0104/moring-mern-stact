import React from 'react'

export default function Card({title}) {
  console.log(title);
  return (
    <div className="max-w-[300px]">
      <img
        className="h-[200px]"
        src="https://images.unsplash.com/photo-1728443139578-cdfbf43e1a72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
      <h1>{title}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, magnam neque? Eaque voluptatibus </p>
    </div>
  )
}
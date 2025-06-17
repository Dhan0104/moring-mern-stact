import React from 'react'
import { useParams } from 'react-router'

export default function Product() {
  const m = useParams();
  console.log(m);
  return (
    <div>

      <h1>THis is product detail</h1>
    </div>
  )
}

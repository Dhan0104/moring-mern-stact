import React from 'react'

export default function ProductList() {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]
  return (
    <div>

      {products.map((product) => {
        return <div key={product.id}>
          <h2>{product.name}</h2>
        </div>
      })}

    </div>
  )
}

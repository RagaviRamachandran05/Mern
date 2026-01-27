import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const products=[   {id:1,name:"Laptop",price:"30000",description:"Acer Laptop is 5th gen"},
                     {id:2,name:"Phone",price:"20000",description:"Mobile with high internet feature"},
                     {id:3,name:"Mouse",price:"3000",description:"Gaming mouse with RGB color"},
                     {id:4,name:"Keyboard",price:"2000",description:"Keyboard with all keys"}

  ]
  const {id}=useParams()
  const product=products.find((p)=>p.id==id)
  return (
    <div>
        <h1>ProductDetails</h1>
        <h2>{product.name}</h2>
        <p>Product:{product.price}</p>
        <p>{product.description}</p>
        </div>
  )
}

export default ProductDetails
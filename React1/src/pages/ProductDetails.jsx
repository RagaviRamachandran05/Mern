import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [product,setProduct]=useState({})
  const {id}=useParams()
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => setProduct(data));
  },[])
  //const product=products.find((p)=>p.id==id)
  return (
    <div>
        <h1>ProductDetails</h1>
        <h2>{product.title}</h2>
        <p>Product:{product.price}</p>
        <p>Description:{product.description}</p>
         
        </div>
  )
}

export default ProductDetails
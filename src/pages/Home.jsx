import { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'


function Home() {

  // state variable to hold products
  const [products,setProducts]=useState([])

  // api call
  const getData=async()=>{
    const response=await fetch("https://fakestoreapi.com/products")
    const data= await response.json()
    setProducts(data)
  }
  useEffect(()=>{
    getData();
  },[])

  return (
    <div className='container-fluid' style={{minHeight:'70vh'}}>
        <h2 className="m-2">Products</h2>
        <div>{
            products.map(product=>{
              return <ProductCard key={product.id} product={product} />
            })}
        </div>
    </div>
  )
}

export default Home

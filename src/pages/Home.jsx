import { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'


function Home({cart,setCart}) {

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

  useEffect(()=>{
    console.log(cart)
  },[cart])

  const addToCart=(product)=>{
    setCart([...cart,product])
    console.log(product)
  }


  return (
    <div className='container-fluid p-5' style={{minHeight:'70vh'}}>
        <div className='d-flex justify-content-around gap-3 flex-wrap'>{
            products.map(product=>{
              return <ProductCard  product={product} addToCart={addToCart}/>
            })}
        </div>
    </div>
  )
}

export default Home

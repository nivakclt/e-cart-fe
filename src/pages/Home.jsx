import { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Home({ cart, setCart }) {

  // state variable to hold products
  const [products, setProducts] = useState([])

  // api call
  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    console.log(cart)
  }, [cart])

  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

      setCart(updatedCart)

    } else {

      setCart([...cart, { ...product, quantity: 1 }])

    }
  }

  return (
    <div className='container-fluid p-5' style={{ minHeight: '70vh' }}>
      <div className='d-flex justify-content-around gap-3 flex-wrap'>

        {products.map(product => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          )
        })}

      </div>
    </div>
  )
}

export default Home
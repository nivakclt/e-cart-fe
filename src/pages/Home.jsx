import ProductCard from '../components/ProductCard'

function Home() {
  return (
    <div className='container-fluid' style={{minHeight:'70vh'}}>
        <h2 className="m-2">Products</h2>
        <div>
            <ProductCard/>
        </div>
    </div>
  )
}

export default Home
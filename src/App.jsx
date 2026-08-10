import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='cart' element={<Cart/>}/>
    </Routes>

    </>
  )
}

export default App

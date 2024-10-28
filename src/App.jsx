import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import Header from './components/Header'
import Product from './components/Productform'
import Orderinfo from './components/Orderinfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
      <Product/>
      </div>
      <div>
      <Orderinfo/>
      </div>
    </>
  )
}

export default App

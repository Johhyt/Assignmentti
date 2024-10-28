import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Dogpic from './Opendata'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dogpic/>
    </>
  )
}

export default App

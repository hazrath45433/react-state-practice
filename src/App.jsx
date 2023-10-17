import { useState } from 'react'
import './App.css'
import FormControl from './Components/FormControl'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FormControl />
    </>
  )
}

export default App

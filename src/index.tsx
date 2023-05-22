import { useState } from 'react'
import MyButton from './components/mybtn'

function App() {
  const [count, setCount] = useState(0)
  function handleCount(suri: number) {
    setCount(count + suri)
  }
  return (
    <>
      <MyButton count={count} onCount={handleCount} />
      <MyButton count={count} onCount={handleCount} />
      <MyButton count={count} onCount={handleCount} />
    </>
  )
}

export default App

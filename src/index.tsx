import { useState } from 'react'
import MyButton from './components/mybtn'
import PageTitle from './components/PageTitle'

function App() {
  const [count, setCount] = useState(0)
  function handleCount(suri: number) {
    setCount(count + suri)
  }
  return (
    <>
      <MyButton count={count} onCount={handleCount} />
      <PageTitle />
    </>
  )
}

export default App

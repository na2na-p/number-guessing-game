import { useState } from 'react'

import Game from './Game'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>数あてゲーム</h1>
      <Game />
    </>
  )
}

export default App

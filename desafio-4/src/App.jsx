import { useState } from "react"
import CounterButton from "./components/CounterButton"
import "./App.css"

function App() {
  // 🔥 Estado en el componente padre
  const [count, setCount] = useState(0)

  const incrementar = () => {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <h1>Lifting State Up</h1>
      <p>Ambos botones comparten el mismo estado</p>

      <div className="buttons">
        <CounterButton count={count} onIncrement={incrementar} />
        <CounterButton count={count} onIncrement={incrementar} />
      </div>
    </div>
  )
}

export default App

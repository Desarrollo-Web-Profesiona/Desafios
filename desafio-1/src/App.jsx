import { UserProfile } from "./components/UserProfile"
import "./App.css"

function App() {
  return (
    <div className="container">
      <UserProfile />
      <p>Este componente está anidado dentro de App.</p>
    </div>
  )
}

export default App

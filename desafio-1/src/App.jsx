import UserProfile from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    <div className="container">
      <UserProfile />
      <p className="info">
        Este componente fue creado y luego anidado dentro de App.
      </p>
    </div>
  );
}

export default App;

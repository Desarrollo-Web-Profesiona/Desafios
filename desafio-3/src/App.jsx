import { useState } from "react";
import "./App.css";

function App() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Desafío 3 🚀</h1>
        <p className="subtitle">
          Estado e interacción con <strong>useState</strong>
        </p>

        <p className="description">
          Este botón cambia su estado interno al ser presionado.  
          React recuerda la acción gracias al hook <code>useState</code>.
        </p>

        <button
          className={clicked ? "btn active" : "btn"}
          onClick={handleClick}
        >
          {clicked ? "¡Estado cambiado! ✅" : "Haz clic aquí 👆"}
        </button>

        {clicked && (
          <p className="message">
            🎉 ¡Genial! El estado ha cambiado correctamente.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

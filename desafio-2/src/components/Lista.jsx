export default function Lista() {
  const tecnologias = [
    { id: 1, nombre: "React ⚛️" },
    { id: 2, nombre: "JavaScript 💛" },
    { id: 3, nombre: "Docker 🐳" },
    { id: 4, nombre: "GitHub 🌿" }
  ];

  return (
    <div className="card">
      <h1>Tecnologías que domino</h1>
      <ul>
        {tecnologias.map(tec => (
          <li key={tec.id}>{tec.nombre}</li>
        ))}
      </ul>
    </div>
  )
}

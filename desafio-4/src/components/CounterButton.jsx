export default function CounterButton({ count, onIncrement }) {
  return (
    <button className="btn" onClick={onIncrement}>
      Contador: {count}
    </button>
  )
}

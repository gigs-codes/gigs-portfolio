import { useEffect, useState } from 'react'

export default function CyclingHighlight({ items, interval = 2600 }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items, interval])

  return (
    <span className="highlight cycling-highlight" key={i}>
      {items[i]}
    </span>
  )
}

import { useState, useEffect } from "react"

export default function CountDown({ initialCount = 10 }) {
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  return <div>
    <h1>CountDown</h1>
    <p>{count}</p>
  </div>
}
import React, { useState } from 'react'

export default function Bai1() {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count+1);
    }
  return (
    <div>
        <h3>Bai 1: Count: {count}</h3>
        <button onClick={handleCount}>Count</button>
    </div>
  )
}

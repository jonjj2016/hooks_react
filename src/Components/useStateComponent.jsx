import React, { useState } from 'react'

const reeturnCount = () => {
  console.log(
    'renders many times and not efficient when doing heavy computational task',
  )
  return 5
}
const Component = () => {
  const [count, setCount] = useState(() => {
    console.log('run only once when component mounts')
    return 5
  })
  const [anotherCount, setAnotherCount] = useState(reeturnCount())
  const onIncrement = () => {
    setCount((prevState) => {
      return prevState + 1
    })
  }
  const onDecrement = () => {
    setCount((prevState) => {
      return prevState - 1
    })
  }
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      {count}
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Component

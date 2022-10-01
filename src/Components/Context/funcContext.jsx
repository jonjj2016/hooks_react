import React from 'react'
// import { ThemeContext } from './UseContextExample'
import { useThemeContext, useThemeToggle } from './Helper'

const FuncContext = () => {
  const dark = useThemeContext()
  const toggle = useThemeToggle()

  return (
    <>
      <button onClick={toggle}>Toggle theme</button>
      <div
        style={{
          height: '500px',
          width: '500px',
          backgroundColor: dark ? 'gray' : 'white',
          color: dark ? 'white' : 'gray',
        }}
      >
        FuncContext
      </div>
    </>
  )
}

export default FuncContext

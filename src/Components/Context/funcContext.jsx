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
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '2em',
        }}
      >
        Func Context
      </div>
    </>
  )
}

export default FuncContext

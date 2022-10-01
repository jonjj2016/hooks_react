import React, { useState } from 'react'
import FuncContext from './funcContext'
// import ClassContext from './ClassContext'
import ThemeContext from './Helper'

const UseContextExample = () => {
  return (
    <ThemeContext>
      <FuncContext />
      {/* <ClassContext /> */}
    </ThemeContext>
  )
}

export default UseContextExample

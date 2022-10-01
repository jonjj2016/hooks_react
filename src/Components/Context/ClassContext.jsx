import React from 'react'
import { ThemeContext } from './UseContextExample'

const ClassContext = () => {
  return (
    <ThemeContext.Consumer>
      {(dark) => {
        return (
          <div
            style={{
              height: '500px',
              width: '500px',
              backgroundColor: dark ? 'gray' : 'white',
              color: dark ? 'white' : 'gray',
            }}
          >
            ClassContext
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ClassContext

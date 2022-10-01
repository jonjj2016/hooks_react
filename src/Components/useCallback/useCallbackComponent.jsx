import React, { useState, useCallback } from 'react'
import List from './index'

const Component = () => {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])
  const theme = {
    backgroundColor: dark ? 'gray' : 'white',
    color: dark ? 'white' : 'gray',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    width: '500px',
    fontSize: '2em',
    flexDirection: 'column',
  }
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value))
        }}
      />
      <button onClick={() => setDark((prevState) => !prevState)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default Component

import React, { useState, useEffect, useMemo } from 'react'

const slowFun = (num) => {
  //   console.log('slowing function')
  for (let i = 0; i < 1000000000; i++) {}
  return 2
}

const Component = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => slowFun(number), [number])
  // this will rernder every time when component renders even if it has nothing to do with it
  //   const doubleNumber = slowFun(number)
  // usememo for reference
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  }, [dark])
  useEffect(() => {
    console.log('theme changed')
  }, [themeStyle])

  return (
    <div>
      <input
        value={number}
        type="number"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() =>
          setDark((prevState) => {
            console.log(prevState)
            return !prevState
          })
        }
      >
        Change theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  )
}

export default Component

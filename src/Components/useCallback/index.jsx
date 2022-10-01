import React, { useState, useEffect } from 'react'

const Compo = ({ getItems }) => {
  const [state, setState] = useState()
  useEffect(() => {
    setState(getItems())
    console.log('Updating items List')
  }, [getItems])
  return (
    <div>
      {state &&
        state.map((item) => {
          return <p>{item}</p>
        })}
    </div>
  )
}

export default Compo

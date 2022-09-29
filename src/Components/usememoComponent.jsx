import React, { useMemo } from 'react'

const PureComponentHooks = ({ title, contacts }) => {
  return useMemo(() => {
    return <h1>{title}</h1>
  }, [contacts])
}

export default PureComponentHooks

import React, { memo } from 'react'

const areEqual = (prevProps, nextProps) => {
  return prevProps === nextProps
}

const pureComponentComponent = ({ title, contacts }) => {
  return <div>pureComponentComponent</div>
}

export default memo(pureComponentComponent, areEqual)

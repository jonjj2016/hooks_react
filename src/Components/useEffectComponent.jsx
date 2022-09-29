import React, { useState } from 'react'

const Component = () => {
  const [resource, setResource] = useState('posts')
  console.log('render')
  const onClick = (e) => {
    setResource('comments')
  }
  return (
    <div>
      <button name="comments" onClick={onClick}>
        Comments
      </button>
      <button name="posts" onClick={onClick}>
        Posts
      </button>
      <button name="users" onClick={onClick}>
        Users
      </button>
      {resource}
    </div>
  )
}

export default Component

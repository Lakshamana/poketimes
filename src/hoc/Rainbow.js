import React from 'react'

const Rainbow = WrappedComponent => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
  const randomColour = colors[Math.floor(Math.random() * 5)]
  return props => {
    return (
      <div className={randomColour + '-text'}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}

export default Rainbow

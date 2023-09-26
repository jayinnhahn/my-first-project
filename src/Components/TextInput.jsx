import React from 'react'

const TextInput = ({value, onChange}) => {
  return (
    <div>
      <input style={{width: '100%'}} type="text" placeholder='Search...' value={value} onChange={onChange}></input>
    </div>
  )
}

export default TextInput

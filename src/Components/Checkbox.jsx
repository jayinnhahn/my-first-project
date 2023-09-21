import React from 'react'

const Checkbox = ({ checked, onChange}) => {
  return (
    <div> 
        <input type="checkbox" checked={checked} onChange={onChange}/>
        <span> Only Show Products In Stock</span>
    </div>
  )
}

export default Checkbox

import React from 'react'

const Items = ({items, query, showOnlyStock}) => {
  return (
    <>
    {
    items
    .filter(item => showOnlyStock ? item.stock > 0: item)
    .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    .map(item => (
        <tr key={item.id} >
            <td>{item.name}</td>
            <td style={{textAlign: 'right'}}>{`$${item.price}`}</td>
            <td style={{display: 'flex', justifyContent: 'center'}}>{item.stock}</td>
        </tr>
    ))}
    </>
  )
}

export default Items

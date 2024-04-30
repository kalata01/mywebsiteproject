import React from 'react'

function CatalogItem({ image, name, price }) {
  return (
    <div className='catalogItem'>
      <div style={{ backgroundImage: `url(${image})` }}>  </div>
      <h1> {name} </h1>
      <p> {price}лв. </p>
    </div>
  )
}

export default CatalogItem

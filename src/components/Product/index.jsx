import React from 'react'
import './styles.css'

const Product = ({element}) => {
  return (
    <div className='product'>
      <img src={element.image} />
      <h3>{element.title}</h3>
      <i>{element.price}</i>
    </div>
  )
}

export default Product
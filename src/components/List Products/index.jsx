import React, { useEffect, useState } from 'react'
import Product from '../Product'
import './styles.css'

const ListProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    setProducts(data)
  }

  return (
    <div className='container'>
      {products.map((el, index) => <Product key={index} element={el} />)}
    </div>
  )
}

export default ListProducts
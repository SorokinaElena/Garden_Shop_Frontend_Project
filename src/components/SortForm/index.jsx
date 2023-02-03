import React from 'react'

export default function SortForm() {
  return (
    <div>
        <p>Price</p>
        <input type="text" name='price_from' placeholder='from' />
        <input type="text" name='price_till' placeholder='till' />
        <p>Discounted products</p>
        <input type="text" />
        <p>Sort by</p>
        <input type="text" />
    </div>
  )
}

import React from 'react'

const Footer = ( {length} ) => {
  return (
    <footer>
        <p>{length} {length === 1 ? "Item" : "Items"} in the List</p>
    </footer>
  )
}

export default Footer
import React from 'react'
import PropTypes from 'prop-types';

export const Items = ({ shopname, itemsCart }) => {

  Items.propTypes = {
    shopname: PropTypes.string.isRequired,
    itemsCart: PropTypes.array.isRequired
  }

  return (
    <div className=''>
      <h2>{shopname}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>URL</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {itemsCart.map((item) =>
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><img src={item.url} alt='Img' width={100} height={100} /></td>
              <td>{item.value}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

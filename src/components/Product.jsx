/* eslint-disable react/prop-types */

import { useContext } from "react"
import CartContext from "./context"

const Product = ({product}) => {
    const {dispatch} = useContext(CartContext);

    const addToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

  return (
    <div key={product.id} className='product'>
    <img src={product.image} alt={product.title} />
    <h3>{product.title.substring(0,25)}</h3>
    <p>{product.price}</p>
    <button onClick={() => addToCart(product)} style={{float: 'none'}}>Add To Cart</button>
  </div>
  )
}

export default Product

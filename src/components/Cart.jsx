import { useContext } from "react"
import CartContext from "./context"

const Cart = () => {
 const {state, dispatch} = useContext(CartContext);
  return (
    <div className="cart">
    {
        state.cart.length > 0 ? state.cart.map(item => 
        <div key={item.id} className="cartItem">
            <img src={item.image} alt={item.title} width={120} />
            <h3>{item.title.substring(0,25)}</h3>
            <span>{item.price}</span>
            <button style={{marginLeft: '20px'}} onClick={() => dispatch({type: 'REMOVE_FROM_CART', payload: {id: item.id}})}>Remove</button>
        </div>
    ) : <h3>Please add products to view</h3>
    }
      
    </div>
  )
}

export default Cart

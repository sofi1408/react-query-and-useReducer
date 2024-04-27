import { useReducer } from 'react';
import CartContext from './context';

const initialState = {
    cart: []
}

const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_CART': 
        return {
           ...state,
            cart: [...state.cart, action.payload]
        }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id!==action.payload.id)
            }
        default:
            return state;
    }
}

// eslint-disable-next-line react/prop-types
const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState);

    return(
      <CartContext.Provider value={{state, dispatch}}>
        {children}
      </CartContext.Provider>
    )
    

}

export default CartProvider;
import './App.css'
import { NavLink } from "react-router-dom";
import useProduct from './hooks/useProduct'

import Product from './components/Product'
function App() {

  const { isPending, isError, error, data} = useProduct();

  if(isPending){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>{error.message}</h1>
  }

  return (
    <div>
      <button><NavLink to="/cart">Cart</NavLink> </button>
      <div className='products'>
         {
          data?.map(product => 
            <Product key={product.id} product={product} />
          )
         }
        </div>  
      </div>
  )
}

export default App

import './App.css'
import useProducts from './hooks/useProducts'

function App() {
  const { isPending, isError, error, data} = useProducts();

  if(isPending){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>{error.message}</h1>
  }

  return (
    <div>
    <button onClick={() => window.location.href = "/cart"}>Cart</button>
    <div className='products'>
       {
        data?.map(product => <div key={product.id} className='product'>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>)
       }
      </div>  
    </div>
      
  )
}

export default App

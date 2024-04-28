import './App.css'

import useProducts from './hooks/useProducts'

import { useMutation } from '@tanstack/react-query'

function App() {
  const { isPending, isError, error, data} = useProducts();

  const mutation = useMutation({
    mutationFn: () => fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(
          {
              title: 'test product',
              price: 13.5,
              description: 'lorem ipsum set',
              image: 'https://i.pravatar.cc',
              category: 'electronic'
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))
  })

  if(isPending){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>{error.message}</h1>
  }



  return (
    <>
    {
      mutation.isPending ? <p>Adding Product...</p> : 
      (
        <>
        {
          mutation.isError ? <p>{mutation.error.message}</p> : null
        }
         <button onClick={() => mutation.mutate()}>Add Product</button>
         { mutation.isSuccess && <p>Product added...</p>}

        </>
      )
    }
    <div className='products'>
        {
          data.map(product => {
            return(
            <div key={product.id} className='product'>
             <img src={product.image} alt={product.title} />
             <h3>{product.title}</h3>
             <p>{product.price}</p>
            </div>
            )
            
          })
        }
      </div>
    </>
      
  )
}

export default App

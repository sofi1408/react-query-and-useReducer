import { useQuery } from '@tanstack/react-query'

const useProducts = () => {

    const fetchProducts = async() => {
        const products = await fetch('https://fakestoreapi.com/products');
        const data = await products.json();
        return data;
    }

    const {data, isPending, isError, error} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    })

    return {
      data,
      isPending,
      isError,
      error,
    }
}

export default useProducts;
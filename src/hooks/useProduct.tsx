import {useQuery} from '@tanstack/react-query';

const useProduct = () => {
    const fetchProduct = async() => {
       const data = await fetch('https://fakestoreapi.com/products');
       const json = await data.json();
       return json;
    }

    const {isPending, isError, error, data} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProduct,
    })

    return {
        isPending,
        isError,
        error,
        data,
    }
}

export default useProduct;
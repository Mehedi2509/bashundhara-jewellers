import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://bashundhara-jewellers-server-mehedi2509.vercel.app/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return {
        products,
        setProducts
    };
}

export default useProducts;
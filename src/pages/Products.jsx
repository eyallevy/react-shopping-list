import { useLoaderData } from 'react-router-dom';
import ProductList from './ProductList';
import {getAuthToken} from "../util/auth";

function ProductsPage() {
    const products = useLoaderData();
    
    return (
        <>
            <ProductList products={products} />
        </>
    );
}

export default ProductsPage;

export async function loader() {
    const token = getAuthToken();

    const response = await fetch('http://dev.shopping-list.com/api/products', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
    });

    if (!response.ok) {
        // ...
    } else {
        const resData = await response.json();
        // console.log(resData.results.products);
        return resData.results.products;
    }
}
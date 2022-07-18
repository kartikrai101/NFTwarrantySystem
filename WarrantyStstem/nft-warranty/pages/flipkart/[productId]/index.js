import Product1Details from "../../../components/flipkartCloneUI/ProductDetails/Product1Details";
import {useRouter } from 'next/router'; // importing the useRouter hook

const ProductDetails = (props) => {

    const router = useRouter();
    
    return(
        <div>
            <Product1Details />
        </div>
    );
};

export default ProductDetails;
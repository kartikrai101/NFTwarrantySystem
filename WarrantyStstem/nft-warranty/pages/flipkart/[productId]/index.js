import Product1Details from "../../../components/flipkartCloneUI/ProductDetails/Product1Details";
import {useRouter } from 'next/router'; // importing the useRouter hook

const ProductDetails = (props) => {

    const router = useRouter();

    const title='HP Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home) 14s- dy2506TU Thin and Light Laptop  (14 inch, Natural Silver, 1.46 kg, With MS Office)';
    
    return(
        <div>
            <Product1Details 
                title={title}
                rating={'4.3'}
                ratingsAndReviews={'1,666 Ratinngs & 194 Reviews'}
                off={2000}
                price={'36,990'}
                wrongPrice={'48,933'}
                percentageOff={24}
                reducedPrice={'36,890'}
            />
        </div>
    );
};

export default ProductDetails;
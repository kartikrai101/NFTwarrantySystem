import Product1Details from "../../../components/flipkartCloneUI/ProductDetails/Product1Details";
import {useRouter } from 'next/router'; // importing the useRouter hook
// import {MongoClient, ObjectId} from 'mongodb';

const productData = {
    productId: 'hp6781#i3226',
    productDetails: {
        name: 'HP Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home) 14s- dy2506TU Thin and Light Laptop  (14 inch, Natural Silver, 1.46 kg, With MS Office)',
        cost: '36,990',
        percentageOff: 24,
        wrongPrice: '48,933',
        rating: '4.3',
        reducedPrice: '36,890',
        ratingReviews: '1,666 Ratinngs & 194 Reviews',
        off: 2000
    }
};

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

// export async function getServerSideProps(){

//     const client = await MongoClient.connect('mongodb+srv://kartik:kartik@cluster0.aklsa.mongodb.net/nft?retryWrites=true&w=majority');
//     const db = client.db();
    
//     const productCollection = db.collection('products');


//     const insertProduct = await productCollection.insertOne(productData);
//     const data = await productCollection.findOne({productId: 'hp6781#i3226'});


//     client.close();


//     return {
//         props: {
//             productData: {
                
//             }
//         }
//     };
// };

export default ProductDetails;
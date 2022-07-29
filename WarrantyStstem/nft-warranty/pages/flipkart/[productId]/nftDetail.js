import { Fragment } from 'react';
import Categories from '../../../components/flipkartCloneUI/Categories';
import Header from '../../../components/flipkartCloneUI/Header';
import NftDetailPage from '../../../components/userPortal/NftDetailPage';

const DUMMY_DETAILS = {
        image_url: 'https://img.freepik.com/premium-vector/mutant-ape-yacht-club-nft-artwork-collection-set-unique-bored-monkey-character-nfts-variant_361671-259.jpg?w=2000',
        creation_date: new Date(),
        warranty_period: "12 months",
        nft_name: 'kartHP13002',
        product_details:{
            product_name: 'HP Core i3 11th Gen (552 SSD/1 TB HDD) Silv...',
            product_image_url: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct101.21ad72de.webp&w=828&q=75',
            product_id: 'p1#05421hp&i3',
            amount: '₹36,899',
            rating: '4.3',
            off: '24%',
            reviews: '819',
            old_price: '₹44,789'
        },
        user_details:{
            f_name: "Kartik",
            l_name: "Rai",
            username: "kartik17901"
        }
    };


const NftDetail = (props) => {
    return(
        <Fragment>
            <Header />
            <br/>
            <br/>
            <br/>
            <Categories />
            <NftDetailPage details={DUMMY_DETAILS} />
        </Fragment>
    );
};

export default NftDetail;
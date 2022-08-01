import Header from '../../../../components/flipkartCloneUI/Header';
import Categories from '../../../../components/flipkartCloneUI/Categories';
import DigitalWarrantiesComponent from '../../../../components/userPortal/DigitalWarrantiesComponent';
import classes from './style.module.css';

const DUMMY_DETAILS = [
    {
        image_url: 'https://res.cloudinary.com/db0gn6pqi/image/upload/v1658936368/otvivyakwswvcadqghu7.png',
        creation_date: new Date(),
        warranty_period: "12 months",
        product_name: 'HP Core i3 11th Gen (552 SSD/1 TB HDD) Silv...',
        product_image_url: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct101.21ad72de.webp&w=828&q=75',
        product_id: 'p1#05421hp&i3',
        nft_name: 'kartHP13002'
    },
    // {
    //     image_url: 'https://preview.redd.it/stdzxgu3lfg81.png?auto=webp&s=8da9517999e7b515a181ee77cbf4e05c949e5068',
    //     creation_date: new Date(),
    //     warranty_period: "12 months",
    //     product_name: 'Lenovo Core i3 10th Gen (256 GB SSD/ 1TB HD...',
    //     product_image_url: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flap2.42f7be0f.webp&w=384&q=75',
    //     product_id: 'p1#05421hp&i3',
    //     nft_name: 'kartLeno18682'
    // },
    // {
    //     image_url: 'https://pbs.twimg.com/media/E-82OlVXICgajLv.png',
    //     creation_date: new Date(),
    //     warranty_period: "12 months",
    //     product_name: 'BQ1126 Flynn Analog Watch, Silver Dust Black...',
    //     product_image_url: 'https://rukminim1.flixcart.com/image/540/648/jwgple80/watch/p/y/f/bq1126-fossil-original-imafh4ybgqgehxez.jpeg?q=50',
    //     product_id: 'p1#05421hp&i3',
    //     nft_name: 'kartFly98432'
    // }
];

const DigitalWarranties = (props) => {
    return(
        <div>
            <Header />
            <br />
            <br />
            <br />
            <div className={classes.grey}>
                <Categories />
                <DigitalWarrantiesComponent warrantyList={DUMMY_DETAILS} />
            </div>
            
        </div>
    );
};

export default DigitalWarranties;
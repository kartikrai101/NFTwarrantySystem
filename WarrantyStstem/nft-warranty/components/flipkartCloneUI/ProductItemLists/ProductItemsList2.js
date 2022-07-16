import ProductItem from '../ProductIcons/ProductItem'; // importing the array of product items
import img1 from '../Icons/lapGame1.webp';
import img2 from '../Icons/lapGame2.webp';
import img3 from '../Icons/lapGame3.webp';
import img4 from '../Icons/lapGame4.webp';
import img5 from '../Icons/lapGame5.webp';
import img6 from '../Icons/lapGame6.webp';
import classes from './ProductItemsList.module.css'; // importing the css classes

const products = [
    {
        src: img1,
        alt: "This is the first product of list",
        link: 'https://www.flipkart.com/asus-rog-strix-g15-2022-ryzen-7-octa-core-6800h-16-gb-1-tb-ssd-windows-11-home-4-gb-graphics-nvidia-geforce-rtx-3050-144-hz-g513rc-hn083w-gaming-laptop/p/itmaf9dde96ae73d?pid=COMGCYCEH9RMGGZ5&lid=LSTCOMGCYCEH9RMGGZ5FIZ8ZJ&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_84753c85-b189-4a08-a6a1-3b5d4c31becc_19_V64VET8EKPLC_MC.COMGCYCEH9RMGGZ5&ppt=clp&ppn=laptops-store&ssid=qjgrw8p6sw0000001657813377330&otracker=clp_pmu_v2_Gaming%2BLaptops_1_19.productCard.PMU_V2_ASUS%2BROG%2BStrix%2BG15%2B%25282022%2529%2BRyzen%2B7%2BOcta%2BCore%2B6800H%2B-%2B%252816%2BGB%252F1%2BTB%2BSSD%252FWindows%2B11%2BHome%252F4%2BGB%2BGraphics%252FNVIDIA%2BGeForce%2BRTX%2BRTX%2B3050%252F144%2BHz%2529%2BG513RC-HN083W%2BGaming%2BLaptop_laptops-store_COMGCYCEH9RMGGZ5_neo%2Fmerchandising_0&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Gaming%2BLaptops_LIST_productCard_cc_1_NA_view-all&cid=COMGCYCEH9RMGGZ5',
        itemText: 'ASUS ROG Strix G15 (2022) Ryzen 7 Octa Core 6800H - (16 GB/ 1 TB S...',
        rating: '4.8',
        reviews: '9802',
        actualPrice: '1,12,990',
        originalPrice: '₹1,42,993',
        off: '20% off',
        altPrice: 112990

    },
    {
        src: img2,
        alt: "This is the second product of list",
        link:'https://www.flipkart.com/lenovo-core-i3-10th-gen-8-gb-512-gb-ssd-windows-11-home-15iml05-thin-light-laptop/p/itmab4180a00a50b?pid=COMG9VHHUTKFZFMU&lid=LSTCOMG9VHHUTKFZFMUR7XP3V&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_84753c85-b189-4a08-a6a1-3b5d4c31becc_17_ABTXC9653TK1_MC.COMG9VHHUTKFZFMU&ppt=clp&ppn=laptops-store&ssid=qjgrw8p6sw0000001657813377330&otracker=clp_pmu_v2_Design%2BContent%2B%2526%2BLaptops_2_17.productCard.PMU_V2_Lenovo%2BCore%2Bi3%2B10th%2BGen%2B-%2B%25288%2BGB%252F512%2BGB%2BSSD%252FWindows%2B11%2BHome%2529%2B15IML05%2BThin%2Band%2BLight%2BLaptop_laptops-store_COMG9VHHUTKFZFMU_neo%2Fmerchandising_1&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Design%2BContent%2B%2526%2BLaptops_LIST_productCard_cc_2_NA_view-all&cid=COMG9VHHUTKFZFMU',
        itemText: 'Lenovo Legion 5 Ryzen 7 Octa Core 5800H - (16 GB/1 TB SSD/Windows...',
        rating: '4.8',
        reviews: '10',
        actualPrice: '1,39,990',
        originalPrice: '₹1,81,890',
        off: '27% off',
        altPrice: 139990
    },
    {
        src: img3,
        alt: "This is the third product of list",
        link: 'https://www.flipkart.com/lenovo-ideapad-3-core-i3-11th-gen-8-gb-512-gb-ssd-windows-11-home-82h801l7in-82h802fjin-82h802l3in-82h801lhin-thin-light-laptop/p/itm0e009f57a591b?pid=COMG9VHHG6Q3RRJX&lid=LSTCOMG9VHHG6Q3RRJXQHPK6Q&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_84753c85-b189-4a08-a6a1-3b5d4c31becc_17_ABTXC9653TK1_MC.COMG9VHHG6Q3RRJX&ppt=clp&ppn=laptops-store&ssid=qjgrw8p6sw0000001657813377330&otracker=clp_pmu_v2_Design%2BContent%2B%2526%2BLaptops_3_17.productCard.PMU_V2_Lenovo%2BIdeaPad%2B3%2BCore%2Bi3%2B11th%2BGen%2B-%2B%25288%2BGB%252F512%2BGB%2BSSD%252FWindows%2B11%2BHome%2529%2B82H801L7IN%2B%257C%2B82H802FJIN%2B%257C%2B82H802L3IN%2B%257C%2B82H801LHIN%2BThin%2Band%2BLight%2BLaptop_laptops-store_COMG9VHHG6Q3RRJX_neo%2Fmerchandising_2&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Design%2BContent%2B%2526%2BLaptops_LIST_productCard_cc_3_NA_view-all&cid=COMG9VHHG6Q3RRJX',
        itemText: 'DELL Core i5 11th Gen - (16 GB/512 GB SSD/Windows 11 Home/4GB Gr...',
        rating: '4.1',
        reviews: '971',
        actualPrice: '85,990',
        originalPrice: '₹1,03,980',
        off: '17% off',
        altPrice: 85990

    },
    {
        src: img4,
        alt: "This is the fourth product of list",
        link: 'https://www.flipkart.com/asus-vivobook-ultra-14-2022-core-i5-11th-gen-16-gb-512-gb-ssd-windows-11-home-x413ea-eb532ws-thin-light-laptop/p/itmf6445e8ebf133?pid=COMG87FFYEZW7ZRC&lid=LSTCOMG87FFYEZW7ZRCPD6GGV&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_84753c85-b189-4a08-a6a1-3b5d4c31becc_17_ABTXC9653TK1_MC.COMG87FFYEZW7ZRC&ppt=clp&ppn=laptops-store&ssid=qjgrw8p6sw0000001657813377330&otracker=clp_pmu_v2_Design%2BContent%2B%2526%2BLaptops_4_17.productCard.PMU_V2_ASUS%2BVivoBook%2BUltra%2B14%2B%25282022%2529%2BCore%2Bi5%2B11th%2BGen%2B-%2B%252816%2BGB%252F512%2BGB%2BSSD%252FWindows%2B11%2BHome%2529%2BX413EA-EB532WS%2BThin%2Band%2BLight%2BLaptop_laptops-store_COMG87FFYEZW7ZRC_neo%2Fmerchandising_3&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Design%2BContent%2B%2526%2BLaptops_LIST_productCard_cc_4_NA_view-all&cid=COMG87FFYEZW7ZRC',
        itemText: 'Asus VivoBook Ultra 14 (2022) Core i5 11th Gen - (16 GB/512 GB SS...',
        rating: '4.3',
        reviews: '173',
        actualPrice: '55,990',
        originalPrice: '₹80,990',
        off: '30% off',
        altPrice: 55990

    },
    {
        src: img5,
        alt: "This is the fifth product of list",
        link: 'https://www.flipkart.com/redmibook-pro-core-i5-11th-gen-8-gb-512-gb-ssd-windows-10-home-thin-light-laptop/p/itmcf5d0bf3be2d5?pid=COMG4Z359A4Z3MFG&lid=LSTCOMG4Z359A4Z3MFGOJQLGB&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_84753c85-b189-4a08-a6a1-3b5d4c31becc_17_ABTXC9653TK1_MC.COMG4Z359A4Z3MFG&ppt=clp&ppn=laptops-store&ssid=qjgrw8p6sw0000001657813377330&otracker=clp_pmu_v2_Design%2BContent%2B%2526%2BLaptops_5_17.productCard.PMU_V2_RedmiBook%2BPro%2BCore%2Bi5%2B11th%2BGen%2B-%2B%25288%2BGB%252F512%2BGB%2BSSD%252FWindows%2B10%2BHome%2529%2BThin%2Band%2BLight%2BLaptop_laptops-store_COMG4Z359A4Z3MFG_neo%2Fmerchandising_4&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Design%2BContent%2B%2526%2BLaptops_LIST_productCard_cc_5_NA_view-all&cid=COMG4Z359A4Z3MFG',
        itemText: 'Redmi Pro Core i5 11th Gen - (8 GB/512 GB SSD/Windows 11 Home...',
        rating: '4.2',
        reviews: '1,953',
        actualPrice: '42,590',
        originalPrice: '₹58,993',
        off: '21% off',
        altPrice: 42590

    },
    {
        src: img6,
        alt: "This is the sixth product of list",
        link: 'https://www.flipkart.com/dell-vostro-core-i3-10th-gen-8-gb-1-tb-hdd-256-gb-ssd-windows-11-home-3510-x9k0t-thin-light-laptop/p/itmdb0953094ba84?pid=COMGBP5FEFEWGNZZ&lid=LSTCOMGBP5FEFEWGNZZAMVCPR&marketplace=FLIPKART&fm=neo%2Fmerchandising&iid=M_84753c85-b189-4a08-a6a1-3b5d4c31becc_17_ABTXC9653TK1_MC.COMGBP5FEFEWGNZZ&ppt=clp&ppn=laptops-store&ssid=qjgrw8p6sw0000001657813377330&otracker=clp_pmu_v2_Design%2BContent%2B%2526%2BLaptops_6_17.productCard.PMU_V2_DELL%2BVostro%2BCore%2Bi3%2B10th%2BGen%2B-%2B%25288%2BGB%252F1%2BTB%2BHDD%252F256%2BGB%2BSSD%252FWindows%2B11%2BHome%2529%2BVostro%2B3510%252C%2BX9K0T%2BThin%2Band%2BLight%2BLaptop_laptops-store_COMGBP5FEFEWGNZZ_neo%2Fmerchandising_5&otracker1=clp_pmu_v2_PINNED_neo%2Fmerchandising_Design%2BContent%2B%2526%2BLaptops_LIST_productCard_cc_6_NA_view-all&cid=COMGBP5FEFEWGNZZ',
        itemText: 'Dell Vostro Core i3 10th Gen - (8 GB/256 GB SSD/Windows 11 Home) ...',
        rating: '4.1',
        reviews: '587',
        actualPrice: '42,999',
        originalPrice: '₹59,999',
        off: '29% off',
        altPrice: 42999

    } 
];

const ProductItemList1 = (props) => {
    return(
        <div className={classes.container1}>
            <ProductItem 
                src={products[0].src}
                alt={products[0].alt}
                link={products[0].link}
                itemText={products[0].itemText}
                rating={products[0].rating}
                reviews={products[0].reviews}
                actualPrice={products[0].actualPrice}
                originalPrice={products[0].originalPrice}
                off={products[0].off}
                altPrice={products[0].altPrice}
            />
            <ProductItem 
                src={products[1].src}
                alt={products[1].alt}
                link={products[1].link}
                itemText={products[1].itemText}
                rating={products[1].rating}
                reviews={products[1].reviews}
                actualPrice={products[1].actualPrice}
                originalPrice={products[1].originalPrice}
                off={products[1].off}
                altPrice={products[1].altPrice}
            />
            <ProductItem 
                src={products[2].src}
                alt={products[2].alt}
                link={products[2].link}
                itemText={products[2].itemText}
                rating={products[2].rating}
                reviews={products[2].reviews}
                actualPrice={products[2].actualPrice}
                originalPrice={products[2].originalPrice}
                off={products[2].off}
                altPrice={products[2].altPrice}
            />
            <ProductItem 
                src={products[3].src}
                alt={products[3].alt}
                link={products[3].link}
                itemText={products[3].itemText}
                rating={products[3].rating}
                reviews={products[3].reviews}
                actualPrice={products[3].actualPrice}
                originalPrice={products[3].originalPrice}
                off={products[3].off}
                altPrice={products[3].altPrice}
            />
            <ProductItem 
                src={products[4].src}
                alt={products[4].alt}
                link={products[4].link}
                itemText={products[4].itemText}
                rating={products[4].rating}
                reviews={products[4].reviews}
                actualPrice={products[4].actualPrice}
                originalPrice={products[4].originalPrice}
                off={products[4].off}
                altPrice={products[4].altPrice}
            />
            <ProductItem 
                src={products[5].src}
                alt={products[5].alt}
                link={products[5].link}
                itemText={products[5].itemText}
                rating={products[5].rating}
                reviews={products[5].reviews}
                actualPrice={products[5].actualPrice}
                originalPrice={products[5].originalPrice}
                off={products[5].off}
                altPrice={products[5].altPrice}
            />
        </div>
    );
};

export default ProductItemList1;
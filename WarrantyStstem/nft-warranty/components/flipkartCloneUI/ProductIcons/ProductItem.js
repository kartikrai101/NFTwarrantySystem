import classes from './ProductItem.module.css'; // importing the CSS style classes
import {useRouter} from 'next/router'; // importing the useRouter hook
import Image from 'next/image'; // importing the image component

import GoldCoin from '../Icons/superCoin.svg'; // importing the gold coin image from the icons

const ProductItem = (props) => {

    const router = useRouter(); // initializing the useRouter hook

    function loadDetailsPageHandler(){
        router.push('/flipkart/' + props.id); 
    };  

    return(
            <div>
                <div className={classes.imageContainer}>
                    <Image 
                        src={props.src}
                        alt={props.alt}
                        layout="intrinsic"
                        width={160}
                        height={140}
                    />
                </div>
                <div className={classes.productLink}>
                    <span onClick={loadDetailsPageHandler}>
                        {props.itemText}
                    </span>
                </div>
                <div className={classes.ratingAndReviews}>
                    <div className={classes.ratingBtn}>
                        <div>{props.rating}</div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>

                        </div>
                    </div>
                    <div className={classes.reviews}>({props.reviews})</div>
                </div>

                <div className={classes.priceAndOff}>
                    <span className={classes.actualPrice}>
                        ₹{props.actualPrice}
                    </span>
                    <span className={classes.originalPrice}>
                        <s>{props.originalPrice}</s>
                    </span>
                    <span className={classes.off}>
                        {props.off}
                    </span>
                </div>

                <div className={classes.alternative}>
                    <span className={classes.alternativePrice}>
                        Or Pay ₹{props.altPrice - 100} + <Image src={GoldCoin} alt="gold" layout="intrinsic" width={15} height={15} /> 100
                    </span>
                </div>
            </div>
    );
};

export default ProductItem;
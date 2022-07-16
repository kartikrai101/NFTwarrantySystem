import classes from './ProductItem.module.css'; // importing the CSS style classes

import Image from 'next/image'; // importing the image component

import GoldCoin from '../Icons/goldCoin.svg'; // importing the gold coin image from the icons

const ProductItem = (props) => {

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
                    <a href={props.link}>
                        {props.itemText}
                    </a>
                </div>
                <div className={classes.ratingAndReviews}>
                    <span>
                        <button className={classes.ratingBtn}>{props.rating}</button>
                    </span>
                    <span className={classes.reviews}>({props.reviews})</span>
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
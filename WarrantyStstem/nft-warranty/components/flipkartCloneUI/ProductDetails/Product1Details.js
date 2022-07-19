import Header from '../Header'; // importing the header component
import Categories from '../Categories';
import ProductImage from './UIComponents/ProductImage';
import image from './Images/product101.webp';
import classes from './Product1Details.module.css'; // importing the css classes
import ProductSubImages from '../ProductDetails/UIComponents/ProductSubImages';
import Buttons from './UIComponents/Buttons';
import Image from 'next/image';
import flipkartAssured from '../Icons/flipkartAssured.png'; 

const Product1Details = (props) => {
    return(
        <div>
            <Header />
            <br/>
            <br/>
            <br/>

            <main className={classes.body}>
                <Categories />
                <div className={classes.outermostContainer}>


                    <div className={classes.leftNode}>
                        <div className={classes.buyadd}>
                            <div>
                                <ProductImage image={image} alt={'first product img'} />
                            </div>
                            <div className={classes.buttons}>
                                <Buttons />
                            </div>
                        </div>
                    </div>

                    <div className={classes.rightNode}>
                        <div className={classes.linkList}>
                            <div className={classes.links}>
                                <p className={classes.greyLinks}>Home > &nbsp;</p>
                                <p className={classes.greyLinks}> Computer > &nbsp;</p>
                                <p className={classes.greyLinks}> Laptops > &nbsp;</p>
                                <p className={classes.greyLinks}> HP Laptops > &nbsp;</p>
                                <p className={classes.greyLinks}> HP Core i3 11...</p>
                            </div>

                            <div className={classes.compareAndShare}>
                                <span>
                                    <input type="checkbox" id="compare" />
                                    <label for="compare" className={classes.compare}>Compare</label>
                                </span>

                            </div>
                            
                        </div>

                        <div className={classes.productTitle}>
                            <p>{props.title}</p>
                            <div className={classes.row3}>
                                <span>
                                    <button className={classes.ratingBtn}>
                                        {props.rating}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </button>
                                </span>
                                <span className={classes.ratingsAndReviews}>
                                    {props.ratingsAndReviews}
                                </span>
                                <span className={classes.flipImage}>
                                    <Image src={flipkartAssured} alt={'flipkartAssured'}
                                            layout="intrinsic" width={77} height={21}
                                    />
                                </span>
                            </div>
                            <p className={classes.off}>Extra ₹{props.off} off</p>
                            <div className={classes.pricing}>
                                <span className={classes.price}>
                                    ₹{props.price}
                                </span>
                                <span className={classes.wrongPrice}>
                                    <strike>₹{props.wrongPrice}</strike>
                                </span>
                                <span className={classes.percentageOff}>
                                    {props.percentageOff}% off
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    



                </div>
            </main>
            
        </div>
    );
};

export default Product1Details;
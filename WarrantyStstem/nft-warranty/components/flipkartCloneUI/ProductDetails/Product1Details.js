import Header from '../Header'; // importing the header component
import Categories from '../Categories';
import ProductImage from './UIComponents/ProductImage';
import image from './Images/product101.webp';
import classes from './Product1Details.module.css'; // importing the css classes
import ProductSubImages from '../ProductDetails/UIComponents/ProductSubImages';
import Buttons from './UIComponents/Buttons';
import Image from 'next/image';
import flipkartAssured from '../Icons/flipkartAssured.png'; 
import GoldCoin from '../Icons/goldCoin.svg';
import greenTag1 from '../Icons/greenTag1.webp'; //importing the first green tag logo
import greenTag2 from '../Icons/greenTag2.webp';
import hpLogo from '../Icons/hpLogo.webp'; // importing the hp logo here

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

                            <div className={classes.orBuyAt}>
                                <span>Or Pay ₹{props.reducedPrice} + <Image src={GoldCoin} alt="gold" layout="intrinsic" width={15} height={15} />100</span>
                            </div>

                            <div>
                                <p className={classes.couponsHead}>Coupons for you</p>
                                
                                    <span className={classes.partnerOffer}>
                                        <Image src={greenTag1} alt={"greenTag1"} 
                                            layout="fixed" width={20} height={18}
                                        />  
                                        <p className={classes.partner}>Partner Offer &nbsp;</p>
                                        <p className={classes.partnerPara}>Purchase now & get a surprise cashback coupon for the Big Billion Days Sale 2022 &nbsp;</p>
                                        <p className={classes.partnerLink}>Know More</p>
                                    </span>
                            </div>

                            <div className={classes.availableOffers}>
                                <p className={classes.head}>Available Offers</p>
                                <div className={classes.offer1}>
                                        <Image className={classes.offer_image} src={greenTag2} alt={"greenTag2"} 
                                            layout="fixed" width={18} height={15}
                                        />
                                        <p className={classes.offer_firstWord}>Bank Offer &nbsp;</p>
                                        <p className={classes.offer_text}>5% Cashback on Flipkart Axis Bank Card&nbsp;</p>
                                        <p className={classes.offer_link}>T&C</p>
                                </div>
                                <div className={classes.offer2}>
                                        <Image className={classes.offer_image} src={greenTag2} alt={"greenTag2"} 
                                            layout="fixed" width={18} height={15}
                                        />
                                        <p className={classes.offer_text}>&nbsp; &nbsp;Extra 10% Off on Gaming Headset &nbsp;</p>
                                        <p className={classes.offer_link}>T&C</p>
                                </div>
                                <div className={classes.offer3}>
                                        <Image src={greenTag2} alt={"greenTag2"} 
                                            layout="fixed" width={18} height={15}
                                        />
                                        <p className={classes.offer_firstWord}>Special Price &nbsp;</p>
                                        <p className={classes.offer_text}>Get extra ₹2000 off (price inclusive of discount) &nbsp;</p>
                                        <p className={classes.offer_link}></p>
                                </div>
                                <div className={classes.viewMoreDiv}>
                                    <p className={classes.viewMore}>View 11 More Offers</p>
                                </div>
                            </div>

                            <div className={classes.warrantyAndHighlights}>
                                <div className={classes.warranty}>
                                    <Image
                                        className={classes.hpImage}
                                        src={hpLogo}
                                        alt={"hpLogo"}
                                        layout="fixed"
                                        width={60}
                                        height={30}
                                    />
                                    <span className={classes.warrantyText}>
                                        <p>1 Year Onsite Warranty &nbsp;</p>
                                        <p className={classes.warranty_link}>Know More</p>
                                    </span>
                                    
                                </div>
                            </div>

                            <div className={classes.delivery_highlights_seller}>
                                <div className={classes.box1}>
                                    <div className={classes.box1_row1}>
                                        <div>
                                            <p className={classes.delivery_grey}>Delivery</p>
                                        </div>
                                        <div className={classes.theOtherPart}>
                                            <span className={classes.pin}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                
                                            </svg>
                                            &nbsp;
                                            110086
                                            </span>
                                            <span className={classes.change}>
                                                Change
                                            </span>
                                            <hr color="#256de1" />
                                        </div>        
                                    </div>
                                    <div className={classes.delivery_row1}>
                                        <p>Delivery in 2 Days, Friday &nbsp;</p>
                                        <p className={classes.greyLine}>| &nbsp;</p>
                                        <p className={classes.greenLink}>Free ₹40</p>
                                    </div>
                                    <div className={classes.delivery_row2}>
                                        <p>Installation & Demo by 04 Aug, Sunday &nbsp;</p>
                                        <p className={classes.greyLine}>| &nbsp;</p>
                                        <p>₹749</p>
                                    </div>
                                    <div className={classes.viewDetails}>
                                        View Details
                                    </div>
                                </div>

                                <div className={classes.highlights}>
                                    <div className={classes.highlights_box1}>
                                        <p className={classes.highlights_head}>Highlights</p>
                                    </div>

                                    <div className={classes.highlights_box2}>
                                        <ul>
                                            <li>Stylish & Portable Thin and Light Laptop</li>
                                            <li>14 inch Full HD, IPS Brightview,micro-edge,WLED- Backlit, Brightness: 250 nits, 157 ppi, Color Gamut: 45%NTSC</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    



                </div>
                </div>
            </main>
            
        </div>
    );
};

export default Product1Details;
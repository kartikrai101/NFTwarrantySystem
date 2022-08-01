import Header from '../Header'; // importing the header component
import Categories from '../Categories';
import ProductImage from './UIComponents/ProductImage';
import image from './Images/product101.webp';
import classes from './Product1Details.module.css'; // importing the css classes
import ProductSubImages from '../ProductDetails/UIComponents/ProductSubImages';
import Buttons from './UIComponents/Buttons';
import Image from 'next/image';
import flipkartAssured from '../Icons/flipkartAssured.png'; 
import GoldCoin from '../Icons/superCoin.svg';
import greenTag1 from '../Icons/greenTag1.webp'; //importing the first green tag logo
import greenTag2 from '../Icons/greenTag2.webp';
import hpLogo from '../Icons/hpLogo.webp'; // importing the hp logo here
import superLogo from '../Icons/superCoin.png'; // importing the logo of the superCoin
import digitalSuraksha from '../Icons/digitalSurakshaLogo.webp'; // importing the digitalSuraksha logo
import cartIcon from '../Icons/cartIcon.jpeg';
import lapBag from '../Icons/lapBag.webp'; // importing the laptop bag image
import mouse from '../Icons/mouse.webp'; // importing the mouse image
import {useRouter} from 'next/router';

const Product1Details = (props) => {

    const router = useRouter(); // initializing the useRouter hook

    function buyProductHandler(){
        router.push('/flipkart/hpProduct1/buy'); // pushing this route on top of the current url
    };

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
                                <div className={classes.addToCart}>
                                    <div className={classes.addToCart_icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                        </svg>
                                    </div>
                                    <div className={classes.addToCart_text}>
                                        ADD TO CART
                                    </div>
                                </div>
                                <div onClick={buyProductHandler} className={classes.buy}>
                                    <div  className={classes.buy_icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-lightning-fill" viewBox="0 0 16 16">
                                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"/>
                                        </svg>
                                    </div>
                                    <div className={classes.buy_text}>
                                        BUY
                                    </div>
                                </div>
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

                                <div className={classes.parentDiv}>

                                    <div className={classes.highlights}>
                                        <div className={classes.highlights_box1}>
                                            <p className={classes.highlights_head}>Highlights</p>
                                        </div>

                                        <div className={classes.highlights_box2}>
                                            <ul>
                                                <li>Stylish & Portable Thin and Light Laptop</li>
                                                <br/>
                                                <li>14 inch Full HD, IPS Brightview,micro-edge,WLED- Backlit, Brightness: 250 nits, 157 ppi, Color Gamut: 45%NTSC</li>
                                                <br/>
                                                <li>Light Laptop without Optical Disk Drive</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={classes.easyPayment}>
                                        <div className={classes.easyPayment_box1}>
                                            <p className={classes.easyPayment_head}>Easy Payment Options</p>
                                        </div>
                                        <div className={classes.easyPayment_box2}>
                                            <ul>
                                                <li>EMI starting from ₹1,265/month</li>
                                                <br/>
                                                <li>Cash On Delivery</li>
                                                <br/>
                                                <li>Net banking & Credit/ Debit/ ATM card</li>
                                            </ul>
                                            <p className={classes.viewMore}>View Details</p>
                                        </div>
                                    </div>

                                </div>

                                <div className={classes.seller}>
                                        <div className={classes.seller_box1}>
                                            <p className={classes.seller_head}>Seller</p>
                                        </div>
                                        <div className={classes.seller_box2}>
                                            <div>
                                                <p className={classes.seller_link}>PETILANTE Online</p>
                                            </div>
                                            <div className={classes.seller_ul}>
                                                    <li>7 Days Replacement Policy</li>
                                                    <li>GST invoice available</li>
                                            </div>
                
                                        </div>
                                </div>
                                
                            </div>

                            <div className={classes.superCoin}>
                                <div className={classes.coiniLogo}>
                                    <Image src={superLogo} alt={"superCoinLogo"} 
                                        layout="fixed"
                                        width={170} height={70}
                                    />
                                </div>
                                <div className={classes.superCoin_text}>
                                    <p> For every ₹100 Spent, you earn 2 SuperCoins</p>
                                    <p className={classes.super_greyText}> Max 50 coins per order</p>
                                </div>
                            </div>


                            <div className={classes.protect_your_product}>
                                <div className={classes.protect_head}>
                                    <p className={classes.headerText}>Protect your product</p>
                                </div>
                                <div className={classes.digitalSuraksha}>
                                    <div className={classes.digitalSuraksha_box1}>
                                        <input type="checkbox"  value="true"/>
                                        <div className={classes.digitalSuraksha_image}>
                                            <Image src={digitalSuraksha} alt={"digital suraksha logo"} 
                                                layout="fixed"
                                                width={120} height={80}
                                            />
                                        </div> 
                                    </div>
                                    <div className={classes.digitalSuraksha_box2}>
                                        <div className={classes.digitalSuraksha_box2_header}>
                                            <p>Digital Suraksha for Rs 50,000 by Bajaj Allianz</p>
                                        </div>
                                        <div className={classes.digitalSuraksha_text}>
                                            <p>Get your financial losses covered for online transaction frauds on all bank accounts, credit/ debit cards, mobile wallets. Covers scam calls, OTP SMS frauds, UPI, netbanking, Cyber Attacks, Sim-swapping, Phishing, Spoofing, and more. </p>
                                        </div>
                                        <div className={classes.digitalSuraksha_grey}>
                                            <p>Enjoy peace of mind against all kiinds of Cyber Fraud!</p>
                                        </div>
                                        <div>
                                            <p className={classes.prc}>₹183</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.digitalSuraksha_price}>
                                    <div className={classes.digitalSuraksha_price_box1}>
                                        <div className={classes.price1}>
                                            <p className={classes.digitalSuraksha_grey}>1 Item</p>
                                            <p className={classes.digitalSuraksha_value}>₹36,990</p>
                                        </div>
                                        <div className={classes.price2}>
                                            +
                                        </div>
                                        <div className={classes.price3}>
                                            <p className={classes.digitalSuraksha_grey}>1 Add-on</p>
                                            <p className={classes.digitalSuraksha_value}>₹183</p>
                                        </div>
                                        <div className={classes.price4}>
                                            =
                                        </div>
                                        <div className={classes.price5}>
                                            <p className={classes.digitalSuraksha_grey}>Total</p>
                                            <p className={classes.digitalSuraksha_value}>₹37,173</p>
                                        </div>
                                    </div>
                                    
                                    <div className={classes.digitalSuraksha_price_box2}>
                                        <div className={classes.buttonContainer}>
                                            <div className={classes.buttonContainer_icon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg>
                                            </div>
                                            <div className={classes.buttonContainer_text}>
                                                <p>ADD 2 ITEMS TO CART</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>


                            </div>

                            <div className={classes.specifications}>
                                <div className={classes.specs}>
                                    <p>Specifications</p>
                                </div>
                                <div className={classes.specs_box1}>
                                    <p className={classes.specs_heading}>General</p>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Sales Package</p>
                                        <p className={classes.specs_col2}>Laptop, Power Adapter, Battery, Warranty Documents, User Guide</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Model Number</p>
                                        <p className={classes.specs_col2}>14s- dy2506TU</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Part Number</p>
                                        <p className={classes.specs_col2}>546K2PA#ACJ</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Model Name</p>
                                        <p className={classes.specs_col2}>14s- dy2506TU</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Color</p>
                                        <p className={classes.specs_col2}>Natural Silver</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Type</p>
                                        <p className={classes.specs_col2}>Thin & Light Laptop</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Suitable For</p>
                                        <p className={classes.specs_col2}>Processing & Multitasking</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Battery Cell</p>
                                        <p className={classes.specs_col2}>3 Cells</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>MS Office Provided</p>
                                        <p className={classes.specs_col2}>Yes</p>
                                    </div>
                                    
                                    
                                </div>

                                <div className={classes.specs_box1}>
                                    <p className={classes.specs_heading}>Processor And Memory Features</p>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Processor Brand</p>
                                        <p className={classes.specs_col2}>Intel</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Processor Name</p>
                                        <p className={classes.specs_col2}>Core i3</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Processor Generation</p>
                                        <p className={classes.specs_col2}>11th Gen</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>SSD</p>
                                        <p className={classes.specs_col2}>Yes</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>SSD Capacity</p>
                                        <p className={classes.specs_col2}>256 GB</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>RAM</p>
                                        <p className={classes.specs_col2}>8 GB</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>RAM Type</p>
                                        <p className={classes.specs_col2}>DDR4</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Processor Variant</p>
                                        <p className={classes.specs_col2}>1125G4</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Clock Speed</p>
                                        <p className={classes.specs_col2}>1.7 GHz Upto Max Turbo Frequency at 4.1 GHz</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Cache</p>
                                        <p className={classes.specs_col2}>8</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Graphic Processor</p>
                                        <p className={classes.specs_col2}>Intel Integrated UHD</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Number of Cores</p>
                                        <p className={classes.specs_col2}>4</p>
                                    </div>
                                    
                                    
                                </div>

                                <div className={classes.specs_box1}>
                                    <p className={classes.specs_heading}>Operating System</p>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>OS Architecture</p>
                                        <p className={classes.specs_col2}>64 bit</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Operating System</p>
                                        <p className={classes.specs_col2}>Windows 11 Home</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>Supported Operating System</p>
                                        <p className={classes.specs_col2}>Windows 11 Home</p>
                                    </div>
                                    <div className={classes.specs_wrapperDiv}>   
                                        <p className={classes.specs_col1}>System Architecture</p>
                                        <p className={classes.specs_col2}>64 bit</p>
                                    </div>
                                    
                                    
                                    
                                </div>


                            </div>

                            <div className={classes.buyTogether}>
                                <p className={classes.buyTogether_head}>Buy together and save upto 10%</p>
                                <div className={classes.buyTogether_container}>
                                    <div className={classes.item1}>
                                        <div>
                                            <Image src={image} alt={"product image"} 
                                                layout="fixed" width={110} height={100}
                                            />
                                            <div className={classes.item_container}>
                                                <p className={classes.item_text}>
                                                    HP Core i3 11th Gen - (8 GB/256GB SSD/Windows 11 Home) 14s- dy25...
                                                </p>
                                                <div className={classes.ratingsAndReviews}>         
                                                    <div className={classes.ratingsAndReviews_btnContainer}>
                                                        <button className={classes.ratingsAndReviews_btn}>4.3
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                            </svg>
                                                        </button>                                                            
                                                    </div>                                              
                                                        
                                                    <div className={classes.ratingsAndReviews_reviews}>
                                                        <p>(1,707)</p>
                                                    </div>                                                  
                                                </div>
                                                <div className={classes.item_price}>
                                                    <div className={classes.item_price_price}>₹36,990</div>
                                                    <div ><strike className={classes.item_price_wrong}>₹48,933</strike></div>
                                                    <div className={classes.item_price_off}>24% off</div>
                                                </div>

                                                <div className={classes.alternate_price}>
                                                    Or Pay ₹36,890 + <Image src={GoldCoin} alt={"gold coin"}  width={14} height={14} layout="fixed" /> 100
                                                </div> 
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className={classes.grey_plus}>
                                        +
                                    </div>
                                    <div className={classes.item2}>
                                        <Image src={lapBag} alt={"product image"} 
                                            layout="fixed" width={70} height={110}
                                        />
                                        <input type="checkbox" className={classes.inp} />
                                        <div className={classes.item_container}>
                                            <p className={classes.item_text}>
                                                HP 15 inch Laptop Backpack
                                            </p>
                                            <div className={classes.ratingsAndReviews}>         
                                                    <div className={classes.ratingsAndReviews_btnContainer}>
                                                        <button className={classes.ratingsAndReviews_btn}>3.9
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                            </svg>
                                                        </button>                                                            
                                                    </div>                                              
                                                        
                                                    <div className={classes.ratingsAndReviews_reviews}>
                                                        <p>(826)</p>
                                                    </div>                                                  
                                                </div>
                                                <div className={classes.item_price}>
                                                    <div className={classes.item_price_price}>₹379</div>
                                                </div>
                                        </div>                                        
                                    </div>

                                    <div className={classes.grey_plus}>
                                        +
                                    </div>

                                    <div className={classes.item3}>
                                        <Image src={mouse} alt={"product image"} 
                                            layout="fixed" width={100} height={110}
                                        />
                                        <input type="checkbox" className={classes.inp} />
                                        <div className={classes.item_container}>
                                            <p className={classes.item_text}>
                                                HP 200 Wireless Optical Mouse
                                            </p>
                                            <div className={classes.ratingsAndReviews}>         
                                                    <div className={classes.ratingsAndReviews_btnContainer}>
                                                        <button className={classes.ratingsAndReviews_btn}>4.4
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                            </svg>
                                                        </button>                                                            
                                                    </div>                                              
                                                        
                                                    <div className={classes.ratingsAndReviews_reviews}>
                                                        <p>(9,058)</p>
                                                    </div>                                                  
                                                </div>
                                                <div className={classes.item_price}>
                                                    <div className={classes.item_price_price}>₹449</div>
                                                    <div ><strike className={classes.item_price_wrong}>₹499</strike></div>
                                                    <div className={classes.item_price_off}>10% off</div>
                                                </div>
                                                <div className={classes.alternate_price}>
                                                    Or Pay ₹424 + <Image src={GoldCoin} alt={"gold coin"}  width={14} height={14} layout="fixed" /> 25
                                                </div> 

                                            
                                        </div>                                        
                                    </div>

                                </div>
                                <div>

                                <div className={classes.digitalSuraksha_price}>
                                    <div className={classes.digitalSuraksha_price_box1}>
                                        <div className={classes.price1}>
                                            <p className={classes.digitalSuraksha_grey}>1 Item</p>
                                            <p className={classes.digitalSuraksha_value}>₹36,990</p>
                                        </div>
                                        <div className={classes.price2}>
                                            +
                                        </div>
                                        <div className={classes.price3}>
                                            <p className={classes.digitalSuraksha_grey}>2 Add-ons</p>
                                            <p className={classes.digitalSuraksha_value}>₹828</p>
                                        </div>
                                        <div className={classes.price4}>
                                            =
                                        </div>
                                        <div className={classes.price5}>
                                            <p className={classes.digitalSuraksha_grey}>Total</p>
                                            <p className={classes.digitalSuraksha_value}>₹37,818</p>
                                        </div>
                                    </div>
                                    
                                    <div className={classes.digitalSuraksha_price_box2}>
                                        <div className={classes.buttonContainer}>
                                            <div className={classes.buttonContainer_icon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                                </svg>
                                            </div>
                                            <div className={classes.buttonContainer_text}>
                                                <p>ADD 3 ITEMS TO CART</p>
                                            </div>
                                        </div>
                                    </div>
                                    
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
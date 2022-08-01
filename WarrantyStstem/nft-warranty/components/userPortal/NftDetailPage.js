import classes from './NftDetailPage.module.css'; // importing the NftDetail page 
import date from 'date-and-time'; // importing the third party npm package to manage dates and time
import { Timer, Time, TimerOptions } from 'timer-node'; // a third party package for managing the timer for expiration of the warranty period
import {useRouter} from 'next/router'; 

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const NftDetailPage = (props) => {

    const router = useRouter();

    const startDay = date.format(props.details.creation_date, 'ddd, MMM DD YYYY');
    const expireDate = date.addMonths(props.details.creation_date, 12);
    const expireDay = date.format(expireDate, 'ddd, MMM DD YYYY');
    const expireDate2 = date.addMonths(props.details.creation_date, -12);

    const generateQrCodeHandler = () => {
        router.push('/flipkart/generate-qr-code')
    };

    const scanQrCodeHandler = () => {
        router.push('/flipkart/scan-qr-code');
    };

    const redeemWarrantyHandler = () => {
        router.push('/flipkart/redeemWarranty');
    }


    const timer = new Timer({
        label: 'remaining-time',
        startTimestamp: expireDate2
    });
    timer.start();

    console.log(timer.time());



    return(
        <div className={classes.body}>
            <div className={classes.outerContainer}>
                <div className={classes.innerContainer }>
                    <div className={classes.leftContainer}>
                        <div className={classes.nftImage}>
                            <div>
                                <img className={classes.img} src={props.details.image_url} alt="nft image" width="250" height="250" />
                            </div>
                            <div className={classes.timer}>
                                <div className={classes.timerValue}>
                                    Days before expiration : {timer.time().d}
                                </div>
                            </div>
                        </div>
                        <div className={classes.nftDetails}>
                            <div className={classes.nftDetailsHeader}>Warranty Details</div>
                            <div><hr color="#b8b8b8" /></div>
                            <div className={classes.nftDetails_name}><div className={classes.item}>Warranty Id &nbsp; &nbsp;</div> <div className={classes.value}>{props.details.nft_name}</div></div>
                            <div className={classes.nftDetails_ownerName}><div className={classes.item}>Current Owner &nbsp;&nbsp;</div> <div className={classes.value}>{props.details.user_details.f_name} {props.details.user_details.l_name}</div></div>
                            <div className={classes.nftDetails_warrantyStarted}><div className={classes.item}>Warranty Issued On &nbsp;&nbsp;</div> <div className={classes.value}>{startDay}</div></div>
                            <div className={classes.nftDetails_warrantyEnds}><div className={classes.item}>Warranty Expires On &nbsp;&nbsp;</div> <div className={classes.value}>{expireDay}</div></div>
                        </div>
                    </div>
                    <div className={classes.rightContainer}>
                        <div className={classes.productDetails}>
                            <div className={classes.productDetailsHeader}>Product Details</div>
                            <div><hr color="#b8b8b8" /></div>
                            <div className={classes.productImage}>
                                <img className={classes.prodImg} src={props.details.product_details.product_image_url} alt="product image" height="160" width="180" />
                                <div className={classes.productName}>{props.details.product_details.product_name}</div>
                                <div className={classes.priceDetails}>
                                    <div className={classes.price}>
                                        <div className={classes.priceValue}>{props.details.product_details.amount}</div>
                                        <div className={classes.priceOld}><strike>{props.details.product_details.old_price}</strike></div>
                                        <div className={classes.priceOff}>{props.details.product_details.off}</div>
                                    </div>
                                </div>
                                <div className={classes.btnAndReviews}>
                                    <div className={classes.rating}>
                                        <div className={classes.ratingBtn}>
                                            4.3 <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                                </svg>
                                        </div>
                                    </div>
                                    <div className={classes.reviews}>
                                        ({props.details.product_details.reviews})
                                    </div>          
                                </div>
                            </div>
                            <div className={classes.deliveredOn}>
                                <div>
                                    <img alt="truck image" height="40px" width="45px" src="https://png.pngtree.com/png-vector/20190219/ourmid/pngtree-fast-delivery-truck-icon-graphic-design-template-vector-png-image_561945.jpg" />
                                </div>
                                <div>Delivered on {startDay}</div>
                            </div>
                            <div className={classes.amount}>
                                <div className={classes.amountPicture}>
                                    <img alt="rupee image" height="15px" width="15px" src="https://www.pngitem.com/pimgs/m/152-1522699_indian-rupee-logo-png-transparent-png.png" />
                                </div>
                                <div className={classes.amountText}>
                                    Amount of Purchase {props.details.product_details.amount}
                                </div> 
                            </div>
                        </div>
                        <div className={classes.rightContainerLower}>
                            <div className={classes.upperButtons}>
                                <div onClick={generateQrCodeHandler} className={classes.renewBtn}>
                                    <div className={classes.renew}>
                                        Send Warranty
                                    </div>
                                </div>
                                {/* <div onClick={scanQrCodeHandler} className={classes.changeBtn}>
                                    <div className={classes.change}>
                                        Receive Warranty
                                    </div>
                                </div> */}
                            </div>
                            <div className={classes.lowerButtons}>
                                <div onClick={redeemWarrantyHandler} className={classes.redeemBtn}>
                                    <div className={classes.redeem}>
                                        Redeem Warranty
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer}>
                <div className={classes.upperBox}>
                    <div className={classes.upperBox_left}>
                        <div className={classes.aboutCol}>
                            <div className={classes.footerHeading}>ABOUT</div>
                            <br/>
                            <a><div className={classes.link}>Contact Us</div></a>
                            <a><div className={classes.link}>About Us</div></a>
                            <a><div className={classes.link}>Careers</div></a>
                            <a><div className={classes.link}>Flipkart Stories</div></a>
                            <a><div className={classes.link}>Press</div></a>
                            <a><div className={classes.link}>Flipkart Wholesale</div></a>
                            <a><div className={classes.link}>Corporate Information</div></a>

                        </div>
                        <div className={classes.helpBox}>
                            <div className={classes.footerHeading}>HELP</div>
                            <br/>
                            <a><div className={classes.link}>Payments</div></a>
                            <a><div className={classes.link}>Shipping</div></a>
                            <a><div className={classes.link}>Cancellations & Returns</div></a>
                            <a><div className={classes.link}>FAQs</div></a>
                            <a><div className={classes.link}>Report Infringement</div></a>
                        </div>
                        <div className={classes.policyBox}>
                            <div className={classes.footerHeading}>POLICY</div>
                            <br/>

                            <a href="#"><div className={classes.link}>Return Policy</div></a>
                            <a href="#"><div className={classes.link}>Term Of Use</div></a>
                            <a href="#"><div className={classes.link}>Security</div></a>
                            <a href="#"><div className={classes.link}>Privacy</div></a>
                            <a href="#"><div className={classes.link}>Sitemap</div></a>
                            <a href="#"><div className={classes.link}>EPR Compliance</div></a>
                        </div>
                        <div className={classes.socialBox}>
                            <div className={classes.footerHeading}>SOCIAL</div>
                            <br/>
                            <a href="#"><div className={classes.link}>Facebook</div></a>
                            <a href="#"><div className={classes.link}>Twitter</div></a>
                            <a href="#"><div className={classes.link}>YouTube</div></a>

                        </div>
                    </div>
                    <div className={classes.upperBox_right}>
                        <div className={classes.mailBox}>
                            <div className={classes.mailHeading}>Mail Us:</div>
                            <br />
                            <div className={classes.mailText}>
                                <div className={classes.addItem}>Flipkart Internet Private Limited,</div>
                                <div className={classes.addItem}>Buildings Alyssa, Begonia &</div>
                                <div className={classes.addItem}>Clove Embassy Tech Village,</div>
                                <div className={classes.addItem}>Outer Ring Road, Devarabeesanahalli Village,</div>
                                <div className={classes.addItem}>Bengaluru, 560103,</div>
                                <div className={classes.addItem}>Karnataka, India</div>
                            </div>
                        </div>
                        <div>
                            <div className={classes.footerHeading}>Registered Office Address:</div>
                            <br/>
                            <div className={classes.addressText}>
                           
                                    <div className={classes.addItem}>Flipkart Internet Private Limited,</div>
                                    <div className={classes.addItem}>Buildings Alyssa, Begonia &</div>
                                    <div className={classes.addItem}>Clove Embassy Tech Village,</div>
                                    <div className={classes.addItem}>Outer Ring Road, Devarabeesanahalli Village,</div>
                                    <div className={classes.addItem}>Bengaluru, 560103,</div>
                                    <div className={classes.addItem}>Karnataka, India</div>
                                    <div className={classes.addItem}>CIN : U51109KA2012PTC066107</div>
                                    <div className={classes.addItem}>Telephone: <span className={classes.blu}>044-45614700</span></div>
                            </div> 
                            
                        </div>
                    </div>
                </div>
                <div className={classes.lowerBox}>

                </div>
            </div>
        </div>
        
    );
};

export default NftDetailPage;
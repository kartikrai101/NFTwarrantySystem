import classes from './RedeemWarranty.module.css';
import Plus from '../flipkartCloneUI/Icons/plus.png';
import flipkartBasicLogo from '../flipkartCloneUI/Icons/flipkartBasicLogo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

const RedeemWarranty = (props) => {

    const router = useRouter();

    const getToFlipkartHandler = () => {
        
        router.push('/flipkart');
    };

    return(
        <div>
            
            <div className={classes.header}>
                <div className={classes.header_image}>
                    <Image src={flipkartBasicLogo} alt={"flipkart basic logo"} layout="fixed" width={80} height={20} />
                    <div className={classes.header_explore}>
                        <div><i>Explore </i></div>
                        <div className={classes.yellow}><i>Plus</i></div>
                        <div><Image src={Plus} alt={"plusLogo"} layout="fixed" width={10} height={10} /></div>
                    </div>
                </div>
            </div>

            <div className={classes.outerContainer}>
                <div className={classes.nftDetailsContainer}>
                    <div className={classes.heading}>
                        <div>
                            NFT Details
                        </div>
                        <hr />
                    </div>
                    
                    <div className={classes.nftDetails}>
                        <div className={classes.nftImage}><img className={classes.img} alt="nft_image" width="170" height="170" src="https://res.cloudinary.com/db0gn6pqi/image/upload/v1658936368/otvivyakwswvcadqghu7.png"  /></div>
                        <div className={classes.nftDetails_detail}>
                            <div className={classes.nftId}><span className={classes.key}>Warranty Id &nbsp;&nbsp;</span><span className={classes.value}>k23#98si3789</span></div>
                            <div className={classes.ownerId}><span className={classes.key}>Owner Id &nbsp;&nbsp;</span><span className={classes.value}>kar210&r97</span></div>
                            <div className={classes.ownerName}><span className={classes.key}>Owner Name &nbsp;&nbsp;</span><span className={classes.value}>Kartik Rai</span></div>
                            <div className={classes.generatedOn}><span className={classes.key}>NFT Generated On &nbsp;&nbsp;</span><span className={classes.value}>Jul 30, 2022</span></div>
                            <div className={classes.expiresOn}><span className={classes.key}>WarrantyExpires On &nbsp;&nbsp;</span><span className={classes.value}>Jul 30, 2023</span></div>
                            <div className={classes.purchaseId}><span className={classes.key}>Purchase Id &nbsp;&nbsp;</span><span className={classes.value}>kar210&r97</span></div>
                            <div className={classes.daysLeft}><span className={classes.key}>Days before expiration &nbsp;&nbsp;</span><span className={classes.value}>365</span></div>
                        </div>
                    </div>                    
                </div>
                <div className={classes.productDetailsContainer}>
                    <div className={classes.heading}>
                        <div>
                            Product Details
                        </div>
                    </div>
                    <hr />
                    <div className={classes.productDetails}>
                        <div className={classes.productImage}>
                            <img className={classes.imgP} alt="product_image" width="200" height="200" src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct101.21ad72de.webp&w=828&q=75" />
                        </div>
                        <div className={classes.productDetails_detail}>
                            <div className={classes.productId}><span className={classes.key}>Product Id &nbsp;&nbsp;</span> <span className={classes.value}>hp6781#i3226</span></div>
                            <div className={classes.productName}><span className={classes.key}>Product Name &nbsp;&nbsp;</span> <span className={classes.value}>HP Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home) 14s- dy2506TU Thin and Light Laptop (14 inch, Natural Silver, 1.46 kg, With MS Office)</span></div>
                            <div className={classes.company}><span className={classes.key}>Company &nbsp;&nbsp;</span> <span className={classes.value}>HP</span></div>
                            <div className={classes.cost}><span className={classes.key}>Cost of Purchase &nbsp;&nbsp;</span> <span className={classes.value}>36,899</span></div>
                            <div className={classes.add}><span className={classes.key}>Add-Ons &nbsp;&nbsp;</span> <span className={classes.value}>None</span></div>
                            <div className={classes.orderOn}><span className={classes.key}>Order Placed On &nbsp;&nbsp;</span> <span className={classes.value}>Jul 27, 2022</span></div>
                            <div className={classes.deliveryOn}><span className={classes.key}>Order Delivered On &nbsp;&nbsp;</span> <span className={classes.value}>Jul 30, 2022</span></div>
                            <div className={classes.warranty}><span className={classes.key}>Warranty Period(in months) &nbsp;&nbsp;</span> <span className={classes.value}>12 Months</span></div>
                        </div>
                    </div>
                </div>
                    
            </div>

            <div className={classes.disclaimer}>
                <div className={classes.disclaimerText}>
                Your warranty has been sent to the product's manufacturer for verification. You may receive a confirmation mail on your registered email id within 24-48 hours for further proceedings on your warranty.
                </div>
            </div>
            
            <div onClick={getToFlipkartHandler} className={classes.redeemButton}>
                <div className={classes.redeem}>
                    Continue to Flipkart
                </div>
            </div>
        </div>
    );
};

export default RedeemWarranty;
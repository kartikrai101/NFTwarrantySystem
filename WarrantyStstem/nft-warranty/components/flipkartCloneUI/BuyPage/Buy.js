import Image from 'next/image'; // importing the image component from next package
import flipkartBasicLogo from '../Icons/flipkartBasicLogo.png'; // importing the flipkart basic logo 
import classes from './Buy.module.css'; // importing css classes
import Plus from '../Icons/plus.png'; // importing the plus flipkart sign
import superCoin from '../Icons/superCoin.svg'; // importing the super coin svg image 
import greenTag2 from '../Icons/greenTag2.webp'; //importing the greenTag from the Icons folder
import {useRouter} from 'next/router'; // importing the useRouter hook from the next/router library

const Buy = (props) => {

    const router = useRouter(); // initializing the router object using useRouter hook

    const generateNftHandler = () => {
        router.push('/flipkart/hpProduct1/generate-digital-warranty')
    };

    return(
        <div className={classes.grey}>
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

            <div className={classes.master_container}>

                <div className={classes.col1}>
                    <div className={classes.box1}>
                        <div className={classes.box1_left}>
                            <div className={classes.upper_div}>
                                <div className={classes.grey_number}><div className={classes.number}>1</div></div>
                                <div className={classes.grey_text}>LOGIN</div>
                                <div className={classes.tick}>&#10003;
                                </div>
                            </div>
                            <div className={classes.lower_div}>
                                <div className={classes.username}>
                                    Kartik Rai
                                </div>
                                <div className={classes.contact_number}>
                                    +918690625956
                                </div>
                            </div>
                        </div>
                        <div className={classes.box1_right}>
                            <div className={classes.change_btn}>
                                <div className={classes.btn_text}>CHANGE</div>
                            </div>
                        </div>
                    </div>



                    <div className={classes.box1}>
                        <div className={classes.box1_left}>
                                <div className={classes.upper_div}>
                                    <div className={classes.grey_number}><div className={classes.number}>2</div></div>
                                    <div className={classes.grey_text}>DELIVERY ADDRESS</div>
                                    <div className={classes.tick}>&#10003;</div>
                                </div>
                                <div className={classes.lower_div}>
                                    <div className={classes.username}>
                                        Kartik Rai
                                    </div>
                                    <div className={classes.contact_number}>
                                    Balaji Boys PG, Begumpur Extension, Rajiv Nagar, New Delhi-110086
                                    </div>
                                </div>
                            </div>
                            <div className={classes.box1_right}>
                                <div className={classes.change_btn}>
                                    <div className={classes.btn_text}>CHANGE</div>
                                </div>
                            </div>
                    </div>



                    <div className={classes.box1}>
                        <div className={classes.box1_left}>
                                <div className={classes.upper_div}>
                                    <div className={classes.grey_number}><div className={classes.number}>3</div></div>
                                    <div className={classes.grey_text}>ORDER SUMMARY</div>
                                    <div className={classes.tick}>&#10003;</div>
                                </div>
                                <div className={classes.lower_div}>
                                    <div className={classes.username}>
                                        1 Item
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={classes.box1_right}>
                                <div className={classes.change_btn}>
                                    <div className={classes.btn_text}>CHANGE</div>
                                </div>
                            </div>
                    </div>

                    <div className={classes.box1}>
                        <div className={classes.box1_left}>
                                <div className={classes.upper_div}>
                                    <div className={classes.grey_number}><div className={classes.number}>4</div></div>
                                    <div className={classes.grey_text}>PAYMENT</div>
                                    <div className={classes.tick}>&#10003;</div>
                                </div>
                                <div className={classes.lower_div}>
                                    <div className={classes.username}>
                                        Kartik Rai
                                    </div>
                                    <div className={classes.contact_number}>
                                    Payed Via Axis Bank Credit Card Ending with <span className={classes.cardNumber}>xxxx xxxx xxxx 4014</span>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.box1_right}>
                                <div className={classes.change_btn}>
                                    <div className={classes.btn_text}>CHANGE</div>
                                </div>
                            </div>
                    </div>

                    <div className={classes.nftWarranty}>
                        <div className={classes.nftWarranty_header}>
                            <div className={classes.nftWarranty_header_numNtext}>
                                <div className={classes.nftWarranty_header_number}><div className={classes.nftWarranty_num}>5</div></div>
                                <div className={classes.nftWarranty_header_text}>DIGITAL WARRANTY</div>
                            </div>
                        </div>
                        <div className={classes.nftWarranty_content}>
                            {/* assigning an onClick property to the nft generation button and binding it 
                            with the handler function */}
                            <div onClick={generateNftHandler} className={classes.button_container}>
                                <div className={classes.nftWarranty_btn}>GENERATE DIGITAL WARRANTY FOR MY PRODUCT</div>
                            </div> 
                            <div className={classes.offersText}>
                                <div>Generate Digital Warranty and get <span className={classes.digiCoin}>Flipkart DigiCoins</span> on every digital warranty you generate!</div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>






                <div className={classes.col2}>
                    <div className={classes.col2_box1}>
                        <div className={classes.col2_box1_head}>
                            <div className={classes.col2_box1_head_text}>PRICE DETAILS</div>
                        </div>
                        <div className={classes.col2_box1_parent_div}>
                            <div className={classes.box1_content1}>
                                <div className={classes.box1_content1_left}>
                                    Price(2 Items)
                                </div>
                                <div className={classes.box1_content1_right}>
                                    ₹36,201 + <Image src={superCoin} layout="fixed" alt={"super coin"} width={12} height={12} />38
                                </div>
                            </div>
                            <div className={classes.box1_content2}>
                                <div className={classes.box1_content2_left}>
                                    Delivery Charges
                                </div>
                                <div className={classes.box1_content2_right}>
                                    FREE
                                </div>
                            </div>
                            <div className={classes.box1_content3}>
                                <div className={classes.box1_content3_left}>
                                    1 Bank Offer
                                </div>
                                <div className={classes.box1_content3_right}>
                                    -₹1,250
                                </div>
                            </div>
                        </div >
                        <div className={classes.col2_box1_total}>
                            <div className={classes.col2_box1_total_left}>
                                Amount Payable
                            </div>
                            <div className={classes.col2_box1_total_right}>
                                ₹34,951 + <Image src={superCoin} layout="fixed" alt={"super coin"} width={12} height={12} />38
                            </div>
                        </div>
                    </div>

                    <div className={classes.col2_box2}>
                        <div className={classes.offers_head}>
                            <div className={classes.offers_head_container}>
                                <div className={classes.offers_head_image}>
                                    <Image src={greenTag2} alt={"green tag"} layout="fixed" width={16} height={16} />
                                </div>
                                <div className={classes.offers_head_text}>
                                    OFFERS
                                </div>
                            </div>
                            
                        </div>
                        <div className={classes.offers_row1}>
                            <div className={classes.row1_text}>
                                Use SuperCoin Pay on slice card <span className={classes.tnc}>T&C</span>
                            </div>
                        </div>
                        <div className={classes.offers_row1}>
                            <div className={classes.row1_text}>
                                10% off on citi Credit and Debit Cards, up to ₹1,500. On orders of ₹3,000 and above <p className={classes.tnc}>T&C</p>  
                            </div>
                        </div>
                        <div className={classes.offers_row1}>
                            <div className={classes.row1_text}>
                                10% off on RBL Bank Credit and Debit Cards, up to ₹1,500. On orders of ₹3,000 and above  <span className={classes.tnc}>T&C</span>
                            </div>
                        </div>
                        <div className={classes.offers_row1}>
                            <div className={classes.offers_row4_container}>
                                <div className={classes.dropArrow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </div>
                                <div className={classes.viewMore}>
                                    View More
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

            <hr color="white" height="1px" />

            <div className={classes.footer}>
                <div className={classes.footer_container}>
                    <div className={classes.left_container}>
                        <div className={classes.left_container_block1}>
                            <div>Policies: Returns Policy &nbsp;</div>
                            <div>| &nbsp;</div>
                            <div>Terms of use &nbsp;</div>
                            <div>| &nbsp;</div>
                            <div>Security &nbsp;</div>
                            <div>Privacy &nbsp;</div>
                            <div>| &nbsp;</div>
                            <div>Infringement</div>
                        </div>
                        <div className={classes.left_container_block2}>
                            <div>© 2007-2022 Flipkart.com</div>
                        </div>
                    </div>
                    <div className={classes.right_container}>
                        <div>Need help? Visit the <span>Help Center</span> or <span>Contact Us</span></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Buy;
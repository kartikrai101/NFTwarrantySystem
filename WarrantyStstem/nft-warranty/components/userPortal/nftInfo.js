import classes from './nftInfo.module.css'; // imporing the css classes
import Image from 'next/image'; // importing the image component from next library
import header_img from '../../components/flipkartCloneUI/Icons/nftLogoGif.gif';
import {useState, useRef} from 'react'; // importing the useState and useRef hooks
import gif101 from '../../components/flipkartCloneUI/Icons/gif101.gif';
import {useRouter} from 'next/router';

import nft2 from '../../components/flipkartCloneUI/Icons/nft2.webp'; // import


const nftInfo = (props) => {

    // setting up refs for reading the input values given by the user
    const fNameRef = useRef();
    const lNameRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const router = useRouter();

    const knowMoreHandler = () => {
        router.push('/flipkart/flipkart-digital-warranty');
    }

    const formSubmitHandler  = () => {
        const userData = {
            first_name: fNameRef.current.value,
            last_name: lNameRef.current.value,
            email: emailRef.current.value,
            contact: contactRef.current.value
        };

        props.getData(userData); // sending the data to the nftWarrantyPage component
    };

    

    return (
        <div className={classes.outerContainer}>
            <div className={classes.header}>
                <div className={classes.header_image}>
                    <Image src={header_img} alt={"header image"} layout="fixed" width={300} height={300} />
                </div>
                <div className={classes.header_text}>
                    <h1 className={classes.header_text_heading}>What is Flipkart Digital Warranty?</h1>
                    <div className={classes.header_text_content}>
                        <p>Flipkart Digital Warranty is here to make redeeming warranties on your products easier for you.</p>
                        <p>Here is a list of a things that digital warranty offers you:</p>
                        <ul>
                            <li>Reedeming warranties digitally without having the need to reach out to stores</li>
                            <li>Checking the days left in the expiration of your warranty period on products</li>
                            <li>Changing the ownership of your products to transfer warranty rights with just a few keystrokes</li>
                            <li>Renew your warranties online within minutes</li>
                            <li>Get a reminder when your warranty is about to expire</li>
                        </ul>
                    </div>
                    <div onClick={knowMoreHandler} className={classes.knowMoreLink}>
                        Know more about Flipkart Digital Warranty
                    </div>
                </div>
            </div>


            <div className={classes.formOuterContainer}>
                <div className={classes.formInnerContainer}>
                    <div className={classes.form}>
                        <div className={classes.form_header}>
                            <div>Register For Flipkart Digital Warranty</div>
                        </div>
                        <div className={classes.form_content}>
                            <div className={classes.inner_content}>
                                <div className={classes.upper_inps}>
                                    <div className={classes.f_name}>
                                        <div className={classes.label}><label for="f_name">First Name</label></div>
                                        <div><input className={classes.input} name="f_name" ref={fNameRef} type="text" id="f_name" placeholder="" /></div>
                                    </div>
                                    <div className={classes.username}>
                                        <div className={classes.label}><label for="l_name">Last Name</label></div>
                                        <div><input className={classes.input} name="l_name" ref={lNameRef} type="text" id="l_name" placeholder="" /></div>
                                    </div>
                                </div>
                                <div className={classes.lower_inps}>
                                    <div className={classes.email}>
                                        <div className={classes.label}><label for="email">Email</label></div>
                                        <div><input className={classes.input} name="email" ref={emailRef} id="email" type="email" placeholder="" /></div>                                                            
                                    </div>
                                    <div className={classes.contact}>
                                        <div className={classes.label}><label for="contact">Contact Number</label></div>
                                        <div><input className={classes.input} name="contact" ref={contactRef} id="contact" type="number" placeholder="" /></div>
                                    </div>
                                </div> 
                                <div className={classes.check}>
                                    <input type="checkbox" id="check" className={classes.check_input} />
                                    <label for="check">I hereby give permission to flipkart to create my account on blockchain in order to generate my digital warranty.</label>
                                </div>
                                <div onClick={formSubmitHandler} className={classes.btn}>
                                    Generate
                                </div>
                                
                            </div>                            
                        </div>
                    </div>
                    <div className={classes.formDisplayImage}>
                        <Image src={gif101} alt={"nftDisplayImage"} layout="intrinsic" width={400} height={400} />
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default nftInfo;
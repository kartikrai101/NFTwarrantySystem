import classes from './Info.module.css'; // importing the css classes from the Info.module.css file
import flipkartBasicLogo from '../Icons/flipkartBasicLogo.png';
import Plus from '../Icons/plus.png';
import Image from 'next/image';

const Info = (props) => {
    return (
        <div className={classes.masterContainer}>
            
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
            <hr color="grey" />

            <div className={classes.header}>
                <div className={classes.headerText1}>
                    Flipkart  
                </div>
                <div className={classes.headerText2}>
                    Digital
                </div>
                <div className={classes.headerText3}>
                    Warranty System
                </div>
            </div>

            <div className={classes.content1}>
                <div className={classes.content1Text}>
                    <p>Flipkart Digital Warranty System (FDWS) is a new feature that we are introducing to give our users</p>
                </div>
            </div>

        </div>
    );
};

export default Info;
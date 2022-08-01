import Header from "../Header";
import classes from './ThanksPage.module.css';
import Image from 'next/image';
import tick from '../Icons/tick.png';
import orangeTick from '../Icons/orangeCheck.png';
import {useRouter} from 'next/router';

const ThanksPage = (props) => {

    const router = useRouter();

    const flipkartRedirectHandler=()=>{
        router.push('/flipkart');
    };

    return(
        <div className={classes.outerContainer}>
            <Header />
            <br />
            <br/>
            <br/>

            <div className={classes.innerContainer}>
                <div className={classes.parentDiv}>
                    <div className={classes.heading}>
                        <Image layout="fixed" width={70} height={70} alt={"tick image"} src={tick} />
                        <div className={classes.headText}>
                            Congratulations, you just unlocked two new <span className={classes.specialName}>Flipkart DigiCoins</span>!
                        </div>
                    </div>

                    <div className={classes.text1}>
                        <Image layout="fixed" width={30} height={30} alt={"tick image"}  src={orangeTick}/>
                        <div className={classes.orderText}>
                            Your order has been placed!
                        </div> 
                    </div>
                    <div className={classes.text}>
                        Your digital warranty will be sent to you when the product is delivered.
                    </div>
                    <div onClick={flipkartRedirectHandler} className={classes.goBack}>
                        <div>
                            Continue to Flipkart
                        </div>
                    </div>
                    
                </div>

                
                <div>

                </div>
            </div>
        </div>
    );
};

export default ThanksPage;
 
//nft coin image
//https://cdn.dribbble.com/users/10527455/screenshots/17685111/starly_coin.png?compress=1&resize=400x300
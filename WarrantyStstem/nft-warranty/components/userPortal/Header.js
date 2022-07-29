import Image from 'next/image'; // importing the Image component 
import flipkartBasicLogo from '../../components/flipkartCloneUI/Icons/flipkartBasicLogo.png';
import Plus from '../../components/flipkartCloneUI/Icons/plus.png'; // importing the plus icon image
import classes from './Header.module.css'; // importing the css classes from the module

const Header = (props) => {
    return(
        <div className={classes.header}>
                <div className={classes.header_image}>
                        <Image src={flipkartBasicLogo} alt={"flipkart basic logo"} layout="fixed" width={80} height={20} />
                        <div className={classes.header_explore}>
                            <div><i>Explore </i></div>
                            <div className={classes.yellow}><i>Plus</i></div>
                            <div><Image src={Plus} alt={"plusLogo"} layout="fixed" width={10} height={10} /></div>
                        </div>
                </div>

                {props.children}
            
        </div>
    );
};

export default Header;
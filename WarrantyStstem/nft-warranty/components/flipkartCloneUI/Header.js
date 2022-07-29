import { Fragment, useState } from "react";
import classes from './Header.module.css'; // importing the CSS classes 
import flipkartBasicLogo from './Icons/flipkartBasicLogo.png';
import Plus from './Icons/plus.png';
import Image from 'next/image';
import Link from 'next/link'; // importing the Link component from next library

function DropdownMenu(){

    function DropdownItem(props){
        return(
            <Link href="#">
                {props.children}
            </Link>
        );
    }

    return(
        <div>
            <DropdownItem>My Profile</DropdownItem>
        </div>
    );
}

const Header = (props) => {

    const [showDropdown, setShowDropdown] = useState(false);

    const displayDropdownHandler = () => {
        if(showDropdown === false)
        {
            setShowDropdown(true);
        }else{
            setShowDropdown(false)
        }
    };

    return(
        <div className={classes.header}>
            <div className={classes.header_left}>
                <div className={classes.header_image}>
                        <Image src={flipkartBasicLogo} alt={"flipkart basic logo"} layout="fixed" width={80} height={20} />
                        <div className={classes.header_explore}>
                            <div><i>Explore </i></div>
                            <div className={classes.yellow}><i>Plus</i></div>
                            <div><Image src={Plus} alt={"plusLogo"} layout="fixed" width={10} height={10} /></div>
                        </div>
                </div>
                <div className={classes.header_search}>
                    <div className={classes.header_searchContainer}>
                        <div className={classes.header_searchText}>Search for products, brands and more</div>
                        <div className={classes.header_searchIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>  
            </div>
            <div className={classes.header_right}>
                <div className={classes.header_right_item}>
                    <div onClick={displayDropdownHandler}>
                        <span className={classes.user_login}>Kartik</span>
                        







                        {showDropdown && <DropdownMenu />}
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>  
                <div className={classes.header_right_item}>
                    Become a Seller
                </div>
                <div className={classes.header_right_item}>
                    <div>More</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
                <div className={classes.header_right_item}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </div>
                    <div>Cart</div>
                    
                </div>
            </div>
                
            
        </div>
    );
};

export default Header;
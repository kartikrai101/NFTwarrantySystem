import { Fragment } from "react";
import classes from './Header.module.css'; // importing the CSS classes 

const Header = (props) => {
    return(
        <div className={classes.header}>
            <span className={classes.logoSpan}>
                <img className={classes.logo} src="/flipkartLogo.png" alt="logo" width="130px" height="35px" />
            </span>
            <span>
                <input type="text" placeholder="Search for products, brands and more"/>
            </span>
            <span>
                <button>Login</button>
            </span>
            <span className={classes.link}><a>Become a Seller</a></span>
            <span className={classes.link}><a>
            More 
            </a>
            </span>
            <span className={classes.link}><a>Cart</a></span>
        </div>
    );
};

export default Header;
import {Fragment} from 'react'; // importing Fragment component from react library
import classes from './index.module.css'; // importing the CSS style classes

import Header from '../../components/flipkartCloneUI/Header'; // importing flipkart header
import Categories from '../../components/flipkartCloneUI/Categories';
import Paragraph from '../../components/flipkartCloneUI/UI/paragraphText'; // importing the paragraph text 
import Banner from '../../components/flipkartCloneUI/Banner'; // importing the flipkart banner
import Button from '../../components/flipkartCloneUI/UI/Button';

const Flipkart = (props) => {
    return(
        <Fragment className={classes.background}>
            <Header />
            <Categories />
            
            <h3 className={classes.header}>Laptops & Desktops</h3>
            <Paragraph />

            <Banner />
            <div className={classes.header2Container}>
                <span><p className={classes.header2}>Design Content & Laptops</p></span>
                <span><Button /></span>
            </div>
            <hr className={classes.line} />

            
            
        </Fragment>
    );
};

export default Flipkart;
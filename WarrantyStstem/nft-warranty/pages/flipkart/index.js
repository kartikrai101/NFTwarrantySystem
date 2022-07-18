import {Fragment} from 'react'; // importing Fragment component from react library
import classes from './index.module.css'; // importing the CSS style classes

import Header from '../../components/flipkartCloneUI/Header'; // importing flipkart header
import Categories from '../../components/flipkartCloneUI/Categories';
import Paragraph from '../../components/flipkartCloneUI/UI/paragraphText'; // importing the paragraph text 
import Banner from '../../components/flipkartCloneUI/Banner'; // importing the flipkart banner
import Button from '../../components/flipkartCloneUI/UI/Button';
import ProductIcon from '../../components/flipkartCloneUI/ProductIcons/ProductItem';
import ProductItemList1 from '../../components/flipkartCloneUI/ProductItemLists/ProductItemsList1';
import ProductItemList2 from '../../components/flipkartCloneUI/ProductItemLists/ProductItemsList2';
import ProductItemList3 from '../../components/flipkartCloneUI/ProductItemLists/ProductItemsList3';

const Flipkart = (props) => {
    return(
        <Fragment className={classes.background}>
            <Header />
            <br/>
            <br/>
            <br/>
            <main>
                <Categories />
                
                <h3 className={classes.header2}>Laptops & Desktops</h3>
                <Paragraph />

                <Banner />
                <div className={classes.header2Container}>
                    <span><p className={classes.header2}>Design Content & Laptops</p></span>
                    <span><Button /></span>
                </div>
                <hr className={classes.line} />

                <div className={classes.outerContainer}>
                    <ProductItemList1 />
                </div>
                <br />
                <br />
                <hr className={classes.line} />
                <div className={classes.header2Container}>
                    <span><p className={classes.header2}>Gaming Laptops</p></span>
                    <span><Button /></span>
                </div>
                <hr className={classes.line} />

                <div className={classes.outerContainer}>
                    <ProductItemList2 />
                </div>
                <br />
                <br />
                <hr className={classes.line} />
                <div className={classes.header2Container}>
                    <span><p className={classes.header2}>Gaming Laptops</p></span>
                    <span><Button /></span>
                </div>
                <hr className={classes.line} />

                <div className={classes.outerContainer}>
                    <ProductItemList3 />
                </div>
            </main>

            
            
            
        </Fragment>
    );
};

export default Flipkart;
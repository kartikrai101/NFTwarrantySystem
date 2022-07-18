import Header from '../Header'; // importing the header component
import Categories from '../Categories';
import ProductImage from './UIComponents/ProductImage';
import image from './Images/product101.webp';
import classes from './Product1Details.module.css'; // importing the css classes
import ProductSubImages from '../ProductDetails/UIComponents/ProductSubImages';
import Buttons from './UIComponents/Buttons';

const Product1Details = (props) => {
    return(
        <div>
            <Header />
            <br/>
            <br/>
            <br/>

            <main className={classes.body}>
                <Categories />
                <div className={classes.outermostContainer}>


                    <div className={classes.leftNode}>
                        <div className={classes.buyadd}>
                            <div>
                                <ProductImage image={image} alt={'first product img'} />
                            </div>
                            <div className={classes.buttons}>
                                <Buttons />
                            </div>
                        </div>
                    </div>

                    <div className={classes.rightNode}>
                        <div className={classes.linkList}>
                            <div className={classes.links}>
                                <p className={classes.greyLinks}>Home > &nbsp;</p>
                                <p className={classes.greyLinks}> Computer > &nbsp;</p>
                                <p className={classes.greyLinks}> Laptops > &nbsp;</p>
                                <p className={classes.greyLinks}> HP Laptops > &nbsp;</p>
                                <p className={classes.greyLinks}> HP Core i3 11...</p>
                            </div>

                            <div className={classes.compareAndShare}>
                                <span>
                                    <input type="checkbox" id="compare" />
                                    <label forHtml="compare">Compare</label>
                                </span>
                                <span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">kar
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                                        </svg>
                                    </span>
                                    <span>
                                        <p>Share</p>
                                    </span>   
                                </span>

                            </div>
                            
                        </div>

                        <div>

                        </div>
                        
                    </div>
                    



                </div>
            </main>
            
        </div>
    );
};

export default Product1Details;
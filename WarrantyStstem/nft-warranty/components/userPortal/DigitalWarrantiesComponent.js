import classes from './DigitalWarrantiesComponent.module.css';
import WarrantyItem from './WarrantyItem'; // importing the WarrantyItem component
import Head from 'next/head';
import { Fragment } from 'react';

const DigitalWarrantiesComponent = (props) => {

    return(
            <div className={classes.outerContainer}>
                <div className={classes.searchContainer}>
                    <div className={classes.container}>
                        <div className={classes.searchBox}>
                            <p>Search for digital warranties of your ordered products</p>
                        </div>
                        <div className={classes.searchIcon}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>Search Orders
                            </div>  
                        </div>
                    </div>
                   
                </div>
                <div className={classes.innerContainer}>
                    {
                        // we will access the array of digital warranties and then for each of 
                        // those warranties we will simply make a WarrantyItem component
                        // and in that component we will pass all the info as props
                        props.warrantyList.map((warrantyItem) => {
                            return (<WarrantyItem warrantyInfo={warrantyItem} />);
                        })
                    }
                </div>
            </div>
    );
};

export default DigitalWarrantiesComponent;
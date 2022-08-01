import WelcomePage from '../components/sellerPortal/WelcomePage'; // importing the WelcomePage

import {Fragment } from 'react'; 

function DigitalWarrantySystem (props){
    return(
        <Fragment>
            <WelcomePage />
        </Fragment>
        
    );
};

async function getServerSideProps(context){
    // collect all the data that is coming from the form using the props and then make
    // an api call to the database here in order to send and store that data in the database

    
}

export default DigitalWarrantySystem;
import { Fragment } from 'react';
import Header from './Header'; //importing the Header component
import NFTinfo from './nftInfo'; // importing the nft information component 

const nftWarrantyPage = (props) => {

    const sendData = (data) => {
        // now we will send this data that we got from nftInfo component to generate-digita-warranty page

        props.getData(data); // pusing the data to upper parent component
    };

    return(
        <Fragment>
            <NFTinfo getData={sendData}/>
        </Fragment>        
    );
};

export default nftWarrantyPage;
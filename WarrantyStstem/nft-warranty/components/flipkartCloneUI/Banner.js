import Image from 'next/image'; // importing the image component from next package
import banner from './Icons/flipkartBanner.png'; // importing the flipkart banner

const Banner = (props) => {
    return(
        <Image 
            src={banner}
            alt="flipkart ad banner"
            width={1000}
            height={300}
            layout='responsive'
        />
    );
};

export default Banner;
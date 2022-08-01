import Image from 'next/image'; // importing the image component from next package
import banner from './Icons/bannerImage7.png'; // importing the flipkart banner

const Banner = (props) => {
    return(
        <Image 
            src={banner}
            alt="flipkart ad banner"
            width={700}
            height={200}
            layout='responsive'
        />
    );
};

export default Banner;
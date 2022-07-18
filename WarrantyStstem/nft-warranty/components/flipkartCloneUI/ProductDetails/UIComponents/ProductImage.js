import image from '../Images/product101.webp';
import Image from 'next/image'; // importing Image component from next library

import classes from './ProductImage.module.css'; // importing the css classes

const ProductImage = (props) => {
    return(
        <div className={classes.container}>
            <Image 
                src={props.image}
                alt={props.alt}
                layout="intrinsic"
                width={410}
                height={370}
            />
        </div>
    );
};

export default ProductImage;
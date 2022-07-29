import Image from 'next/Image'; // importing the Image component
import { useRouter } from 'next/router';
import classes from './WarrantyItem.module.css';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const WarrantyItem = (props) => {
    const router = useRouter();
    const viewProductHandler = () => {
        router.push('/flipkart/hp6781#i3226');
    }
    const warrantyDetailsHandler = () => {
        router.push('/flipkart/userId/nftDetail');
    }

    const data = props.warrantyInfo; 

    const date = data.creation_date;
    const deliveryDate = `${months[date.getMonth()]} ${date.getDate()}`;

    return(
        <div className={classes.outerContainer}>
            <div className={classes.leftContainer}>
                <div className={classes.nftImage}>
                    <img className={classes.img} src={data.image_url} alt={"nft_image"} width={180} height={180} />
                </div>
                <div className={classes.nftAndProduct}>
                    <div className={classes.productName}>
                        {data.product_name}
                    </div>
                    <div className={classes.nftName}>
                        {data.nft_name}
                    </div>
                </div>
            </div>
            <div className={classes.rightContainer}>
                <div className={classes.rightContainer_}>
                    <div className={classes.rightContainerUpper}>
                        <div className={classes.deliveryDate}>
                            <img src='https://flyclipart.com/thumb2/image-832081.png' alt="green bubble" width="15px" height="10px" />
                            <span className={classes.deliveryDateText}>Delivered to you on {deliveryDate}</span>
                        </div>
                        <div className={classes.warrantyPeriod}>
                            <img src='https://toppng.com/uploads/preview/red-circle-red-point-transparent-background-11563241690fqswnj7pqe.png' alt="green bubble" width="10px" height="10px" />
                            <span className={classes.deliveryDateText}>Warranty Period of {data.warranty_period}</span>
                        </div>
                    </div>
                    <div className={classes.rightContainerLower}>
                        <div onClick={warrantyDetailsHandler} className={classes.warrantyDetails}>
                            Warranty Details
                        </div>
                        <div onClick={viewProductHandler} className={classes.viewProduct}>
                            View this product
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarrantyItem;

{/* <Image src={props.url} alt={"nft_image"} width={100} height={100} layout="fixed" /> */}

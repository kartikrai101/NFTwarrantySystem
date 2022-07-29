import NFTWarrantyPage from '../../../components/userPortal/nftWarrantyPage'; // importing the nftWwarrantyPage from the components section
import {useRouter} from 'next/router'; // importing the useRouter hook here

const GenerateDigitalWarranty = () => {

    const router = useRouter();
    
    async function userDataProcessing(data){
        const userData = data;

        const response = await fetch('/api/new-user-register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        router.push('/flipkart');
    };



    return(
        <NFTWarrantyPage getData={userDataProcessing}/>
    );
};


export default GenerateDigitalWarranty;
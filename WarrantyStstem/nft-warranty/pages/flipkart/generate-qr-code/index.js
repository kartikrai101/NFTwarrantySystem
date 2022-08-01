import QRCodeGenerator from '../../../components/qrCode/generator';
import {MongoClient} from 'mongodb';

const GenerateQrCode = (props) => {

    const userData = props.userData;
    const productData = props.productData;

    return <QRCodeGenerator userData={userData} productData={productData} />
};

export async function getStaticProps(){
    const client = await MongoClient.connect('mongodb+srv://kartik:kartik@cluster0.aklsa.mongodb.net/nft?retryWrites=true&w=majority');
    const db = client.db();
    const userCollection = db.collection('flipkart_user');
    const productCollection = db.collection('products');

    const userResponse = await userCollection.findOne({userId: 'k1012r908#21'});
    const productResponse = await productCollection.findOne({productId: 'hp6781#i3226'});
    console.log(productResponse.productDetails.name);
    client.close();

    return {
        props: {
            userData: {
                username: userResponse.username,
                userId: userResponse.userId,
                firstName: userResponse.personalDetails.f_name,
                lastName: userResponse.personalDetails.l_name
            },
            productData: {
                productName: productResponse.productDetails.name
            }
        }
    };
}

export default GenerateQrCode;
import { Fragment } from "react";

const Paragraph = (props) => {

    const paraStyle={
        color: 'grey',
        fontSize: '12px',
        padding: ' 0px 5px',
        margin: '0px 10px',
        backgroundColor: 'rgb(247, 247, 247)'
    }

    const backStyle={
        backgroundColor: 'rgb(247, 247, 247)'
    };

    const anchorStyle={
        color: '#256de1'
    };

    const subscriptStyle={
        color: 'grey',
        fontSize: '12px',
        fontWeight: '600',
        padding: '0px 5px',
        margin: '0px 10px'
    };
    
    const textStyle={
        fontSize: '12px',
        color: '#256de1'
    };

    const symbolStyle={
        fontSize: '12px'
    }

    return(
        <Fragment style={backStyle}>
            <p style={paraStyle}>In today's tech-driven world, getting by without a laptop appears nearly impossible. The gadget is required for everything in work-from-home culture, whether it's joining a zoom meeting or responding to emails. These <a style={anchorStyle} href="https://www.flipkart.com/computers/desktop-pcs/mini-pcs/pr?sid=6bo%2Cnl4%2Cokr">portable PCs</a> have become necessary not only for professionals, but also for students. Some of these <a style={anchorStyle} href="https://www.flipkart.com/desktop-pc-store">PCs</a> are specifically designed for gamers, allowing them to perform at their peak. There are numerous options available for each of these purposes, including design content, performance, gaming, and Chromebooks. Thus, you can select the one that best suits your needs. If you want uninterrupted performance, choose one with the best processor from Core i3, Core i5, Core i9, Celeron, Pentium, and many others. There are various operating systems available, such as Windows 10, Mac OS, and Windows 11, depending on the model you choose. The majority of these portable PCs are lightweight and are designed specifically for travel. Various best-selling brands, such as <a style={anchorStyle} href="https://www.flipkart.com/laptops/hp~brand/pr?sid=6bo,b5g">HP</a>, <a style={anchorStyle} href="https://www.flipkart.com/laptops/dell~brand/pr?sid=6bo,b5g"></a>Dell, Lenovo, Acer, and <a style={anchorStyle} href="https://www.flipkart.com/laptops/apple~brand/pr?sid=6bo,b5g">Apple</a>, offer a large selection of laptops online, and you can find the one that meets your requirements. Get the best deal by comparing features and prices online and have it delivered right to your door.</p>
            <span style={subscriptStyle}>Choose among:</span>
            <span style={textStyle}>Entertainment Laptops</span>
            <span style={symbolStyle}> | </span>
            <span style={textStyle}>Gaming Laptops</span>
            <span style={symbolStyle}> | </span>
            <span style={textStyle}>Everyday use laptops</span>
        </Fragment>
    );
};

export default Paragraph;
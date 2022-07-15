import classes from './Categories.module.css'; // importing the CSS classes

const Categories = (props) => {
    return(
        <div className={classes.outerContainer}>
            <div className={classes.container}>
                <div><p>Electronics</p></div>
                <div><p>TVs & Appliances</p></div>
                <div><p>Men</p></div>
                <div><p>Women</p></div>
                <div><p>Baby & Kids</p></div>
                <div><p>Home & Furniture</p></div>
                <div><p>Sports, Books & More</p></div>
                <div><p>Flights</p></div>
                <div><p>Offer Zone</p></div>
            </div>
        </div>
        
    );
};

export default Categories;
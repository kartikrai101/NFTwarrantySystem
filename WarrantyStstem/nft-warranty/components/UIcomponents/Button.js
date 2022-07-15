import classes from './Button.module.css'; // importing the CSS style classes

const Button = (props) => {
    return(
        <button className={classes.button}>{props.children}</button>
    );
};

export default Button;
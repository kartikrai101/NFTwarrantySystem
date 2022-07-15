import classes from './Button.module.css'; // importing the css classes

const Button = (props) => {
    return(
        <button className={classes.btn}>
            VIEW ALL
        </button>
    );
};

export default Button;
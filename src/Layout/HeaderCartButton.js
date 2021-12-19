import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/cart-context';

const HeaderCartButton = props => {
    
    const cartctx = useContext(CartContext);

    const numberofCartItems = cartctx.items.reduce((currentItem, item)=>{
        return currentItem + item.amount;
    },0);

    const showCartHandler=()=>{
        props.onClick();
    }
    return (
        <button className={classes.button} onClick={showCartHandler}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span >
                Your Cart
            </span>
            <span className={classes.badge}>
               {numberofCartItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;
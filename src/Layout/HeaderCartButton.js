import React, {useContext, useState, useEffect} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/cart-context';

const HeaderCartButton = props => {

    const cartctx = useContext(CartContext);
    const {items}= cartctx;
    const[btnisHighlighted, setbtnisHighlighted] = useState(false);
   
    const numberOfCartItems = items.reduce((currentItem, item)=>{
        return currentItem + item.amount;
    },0);

    const showCartHandler=()=>{
        props.onClick();
    }
   

   useEffect(()=>{
       if(items.length === 0){
           return;
       }
       setbtnisHighlighted(true);

       const timer = setTimeout(()=>{
        setbtnisHighlighted(false);
       },300);

       return ()=>{
           clearTimeout(timer);
       }
   },[items]);

    const btnClass = `${classes.button} ${btnisHighlighted? classes.bump :''}`;

    return (
        <button className={btnClass} onClick={showCartHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>);
}

export default HeaderCartButton;
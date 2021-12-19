import React, { useContext } from "react";
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from "../store/cart-context";

const MealItem = props => {

    console.log(props.price);
    const price = `${props.price.toFixed(2)}`;

    const cartctx = useContext(CartContext);


    const onAddToCartHandler = amount => {
        cartctx.addItem(
            {
                id: props.id,
                amount: amount,
                name: props.name,
                price: props.price,
            });
    };

    return (
        <li className={classes.meal} key={props.id}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={onAddToCartHandler}
                    id={props.id} />
            </div>
        </li>
    )
}

export default MealItem;
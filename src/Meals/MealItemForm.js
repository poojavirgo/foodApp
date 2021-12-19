import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';

const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const inputAmountRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = inputAmountRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        //valiation check
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };


    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input label="Amount"
                ref={inputAmountRef}
                input={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    max: '1',
                    step: '1',
                    defaultValue: '1',
                }} />
            <Button label="+ Add" />
            {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
        </form>
    );
}

export default MealItemForm;
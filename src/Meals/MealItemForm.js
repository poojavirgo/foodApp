import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import Button from '../UI/Button';

const MealItemForm = props => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: props.id,
                type: 'number',
                min: '1',
                max:'1',
                step:'1',
                defaultValue:'1'

            }}/>
            <Button label="+ Add"/>
        </form>
    );
}

export default MealItemForm;
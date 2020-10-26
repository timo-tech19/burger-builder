import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
    .map((igkey, i) => {
    return (
    <li key={igkey + i}>
        <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
    </li>
    )});

    return (
        <>
            <h3>Your Order Summary</h3>
            <p>A delicious burger with the following Ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {`$${props.price.toFixed(2)}`}</strong></p>
            <p>Continue to checkout? </p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </>
    );
}

export default orderSummary;
import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let newIngredients = Object.keys(props.ingredients).map(igKey => {
        const ingNum = [...Array(props.ingredients[igKey])];
        return ingNum.map((_, i) => <BurgerIngredients key={igKey + i} type={igKey}/>); 
    })
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(newIngredients.length === 0) {
        newIngredients = <p>Please Start Adding Ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {newIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
}


export default burger;
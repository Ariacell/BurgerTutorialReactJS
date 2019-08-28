/* eslint-disable no-unused-expressions*/
import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerContents, Ingredients } from '../../models/BurgerModels';
import classes from './Burger.module.css';

interface IBurgerProps {
    ingredients: BurgerContents,
    price: number
};

const Burger: React.FunctionComponent<IBurgerProps> = (props) => {

    // const transformedIngredients = Object.keys(props.ingredients)
    // .map((k: string) => k as Ingredients)
    // .map((ingredKey) => {
    //         return [...Array(props.ingredients[ingredKey])].map((_, i) =>
    //         <BurgerIngredient key={ingredKey + i} type={ingredKey} />
    //     );
    // });

    let transformedIngredients = Object.entries(props.ingredients)
        .map(([ingredKey, value]) => {
            return [...Array(value)]
                .map((_, i) =>
                    <BurgerIngredient key={ingredKey + i} type={ingredKey} />
                );
        }).reduce((arr, el) => { 
            return arr.concat(el)
        }, []);
    
        if (transformedIngredients.length === 0) { transformedIngredients[0] = <p key={'emptyIngredDiv'}>Please start adding ingredients!</p>;}

    return (
        <div className={classes.Burger}>
            <BurgerIngredient key={'test1'} type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient key={'test5'} type="bread-bottom"></BurgerIngredient>
            <div className={classes.Price}>{props.price}</div>
        </div>
    );
}

export default Burger;

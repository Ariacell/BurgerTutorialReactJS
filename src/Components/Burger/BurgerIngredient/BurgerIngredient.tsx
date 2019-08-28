import React from 'react';
import classes from './BurgerIngredient.module.css'

export interface IBurgerIngredientProps {
    type: string,
};

const BurgerIngredient: React.FC<IBurgerIngredientProps> = (props) => {

    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingredient = <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            break;
        case ('patty'):
            ingredient = <div className={classes.Patty}></div>
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;
        case ('beetroot'):
            ingredient = <div className={classes.Beetroot}></div>
            break;
        default:
            ingredient = null;
    }

    return (
        ingredient
    );
};

export default BurgerIngredient;
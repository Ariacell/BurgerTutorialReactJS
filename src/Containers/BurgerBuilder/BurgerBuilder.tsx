import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import { Ingredients, DisabledControls, EIngredients } from "../../models/BurgerModels";

const INGREDIENT_PRICES = {
    salad: 0.5,
    beetroot: 0.3,
    patty: 2.3,
    cheese: 1.1
}


class BurgerBuilder extends Component {


    state = {
        ingredients: {
            salad: 0,
            beetroot: 0,
            cheese: 0,
            patty: 0
        },
        totalPrice: 2
    }

    addIngredientHandler = (type: Ingredients) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    removeIngredientHandler = (type: Ingredients) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            alert('Cannot reduce below 0 items!');
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceSubstraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubstraction;
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    render() {

        const disabledIngredients: DisabledControls = Object.entries(this.state.ingredients)
            .map((ingred) => [ingred[0] as Ingredients, ingred[1]<=0]);

         console.log('DISABLED INFO: >>>>>> ' + disabledIngredients);

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} price={this.state.totalPrice}/>
                
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler} 
                    disabledControls={disabledIngredients}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
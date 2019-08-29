import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import { Ingredients, DisabledControls, EIngredients, BurgerContents } from "../../models/BurgerModels";
import Modal from '../../Components/UI/Modal/Modal';

const INGREDIENT_PRICES = {
    salad: 0.5,
    beetroot: 0.3,
    patty: 2.3,
    cheese: 1.1
}

interface IBurgerBuilderProps {}
interface IBurgerBuilderState {
    ingredients: BurgerContents,
    totalPrice: number,
    purchaseable: boolean
}

class BurgerBuilder extends Component<IBurgerBuilderProps,IBurgerBuilderState> {


    state: IBurgerBuilderState = {
        ingredients: {
            salad: 0,
            beetroot: 0,
            cheese: 0,
            patty: 0
        },
        totalPrice: 2,
        purchaseable: false,
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

        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
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
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        })
        this.updatePurchaseState(updatedIngredients);
    }

    //TODO: why are the types here so difficult? I just want this to return a boolean, not an anonymous function mapping to a boolean.
    // isPurchaseable: () => boolean = () => {
    //     const isPurchaseable = Object.entries(this.state.ingredients)
    //         .map((ingred) => ingred[1])
    //         .reduce((acc = 0,value) => acc+value);
    //     return (isPurchaseable > 0);
    // }

    // checkPurchaseable = () => {
    //     const isPurchaseable: boolean = Object.entries(this.state.ingredients)
    //         .map((ingred) => ingred[1])
    //         .reduce((acc = 0, value) => acc + value) > 0;
    //     return isPurchaseable;
    // }

    updatePurchaseState = (newIngreds: BurgerContents) => {
        const ingreds = newIngreds;
        const isNonZeroIngreds = Object.entries(ingreds)
            .map((ingred) => ingred[1])
            .reduce((sum, el) => (sum + el), 0) > 0;
        this.setState({ purchaseable: isNonZeroIngreds })
    }

    render() {

        const disabledIngredients: DisabledControls = Object.entries(this.state.ingredients)
            .map((ingred) => [ingred[0] as Ingredients, ingred[1] <= 0]);
        // for ()
        // this.setState({...this.state, purchaseable: this.checkPurchaseable});

        return (
            <Aux>
                <Modal/>
                <Burger ingredients={this.state.ingredients} />

                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledControls={disabledIngredients}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable} />
            </Aux>
        );
    }
}

export default BurgerBuilder;
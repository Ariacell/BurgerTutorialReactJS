import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { Ingredients, Controls, DisabledControls } from '../../../models/BurgerModels';

interface IBuildControlsProps {
    addIngredient: (type:Ingredients) => void,
    removeIngredient: (type:Ingredients) => void,
    disabledControls: DisabledControls,
    price: number,
    purchaseable: boolean
}


const BuildControls: React.FC<IBuildControlsProps> = (props) => {

    // console.log(props.disabledControls + " <<<<< Disabled props");
    // console.log(">>>>>" + Object.entries(props.disabledControls)
    // .filter(key => (key[1][0] == 'salad')) + 'Salad control props after filter');

    return (
        <div className={classes.BuildControls}>
            <p className={classes.Price}>Current price: <strong>{props.price.toFixed(2)}</strong></p>
            {Controls.map((control) => 
            <BuildControl 
                key={control.label} 
                label={control.label}
                type={control.type}
                // disabled={Object.entries(props.disabledControls)
                //     .filter(key => (key[0] == control.type)).map(entry => entry[1][1])[0]}
                //Entries enumerates our objects, so an array [Ingredients, bool becomes {[0,[Ing,bool]],[1,[Ing,bool]],...}
                //This means we need to check the 0th element of the 1th entry of each element returned from "entries" against the ingredient string
                //Then we can map the one matching entry to its 1th entry: [Ing,bool], then to the 1th entry of this: bool
                //Then finally since we return an array still techincally we return the 0th element as the bool it is (could be improved with flatten?)
                disabled={Object.entries(props.disabledControls)
                    .filter(key => (key[1][0] == control.type)).map(entry => entry[1][1])[0]}
                addIngredient={() => props.addIngredient(control.type as Ingredients)}
                removeIngredient={() => props.removeIngredient(control.type as Ingredients)}
            />)}
            <button className={classes.OrderButton} disabled={!props.purchaseable}>Order Now!</button>
        </div>
    )
}

export default BuildControls
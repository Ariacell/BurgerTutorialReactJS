import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import { Ingredients, Controls, DisabledControls } from '../../../models/BurgerModels';

interface IBuildControlsProps {
    addIngredient: (type:Ingredients) => void,
    removeIngredient: (type:Ingredients) => void,
    disabledControls: DisabledControls
}


const BuildControls: React.FC<IBuildControlsProps> = (props) => {

    

    return (
        <div className={classes.BuildControls}>
            {Controls.map((control) => 
            <BuildControl 
                key={control.label} 
                label={control.label}
                type={control.type}
                disabled={Object.entries(props.disabledControls).filter(([key, value]) => (key == control.type))[0][1]}
                addIngredient={() => props.addIngredient(control.type as Ingredients)}
                removeIngredient={() => props.removeIngredient(control.type as Ingredients)}
            />)}
        </div>
    )
}

export default BuildControls
import React from 'react';
import classes from './BuildControl.module.css';
import { Ingredients } from '../../../../models/BurgerModels';

interface IBuildControlProps {
    label: string,
    type: string,
    disabled: boolean,
    addIngredient: () => void;
    removeIngredient: () => void;
}

const BuildControl: React.FC<IBuildControlProps> = (props) => {

    //console.log('CONTROL ENABLEMENT: >>>>>>>> ' + props.disabled + 'key: ' + props.label);

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removeIngredient} disabled={props.disabled}>Less</button>
            <button className={classes.More} onClick={props.addIngredient} >More</button>
        </div>
    )
}

export default BuildControl;
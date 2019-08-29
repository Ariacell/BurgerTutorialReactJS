import * as React from 'react';
import Aux from '../../../hoc/Aux';
import { BurgerContents } from '../../../models/BurgerModels';

interface IOrderSummaryProps {
    ingredients: BurgerContents,
}

const OrderSummary: React.FC<IOrderSummaryProps> = (props) => {
    
    const ingredientSummary = Object.entries(props.ingredients)
        .map(ingred => 
        { 
            return <li><span>{ingred[0]}</span></li>
        })
    
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>You ordered the following ingredients: </p>
        <ul>

        </ul>
      </Aux>
    );
}
export default OrderSummary;

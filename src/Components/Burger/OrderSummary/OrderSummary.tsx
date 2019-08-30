import * as React from 'react';
import Aux from '../../../hoc/Aux';
import { BurgerContents } from '../../../models/BurgerModels';
import Button from '../../UI/Button/Button';

interface IOrderSummaryProps {
  ingredients: BurgerContents,
  price: number,
  cancelClick: () => void,
  continueClicked: () => void
}

const OrderSummary: React.FC<IOrderSummaryProps> = (props) => {

  const ingredientSummary = Object.entries(props.ingredients)
    .map(ingred => {
      return <li key={ingred[0]}><span style={{ textTransform: 'capitalize' }}>{ingred[0]}</span>
        : {ingred[1]}
      </li>
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>You ordered the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
      <p> Continue to checkout </p>
      <Button buttonType={'Danger'} clicked={props.cancelClick}>CANCEL</Button>
      <Button buttonType={'Success'} clicked={props.continueClicked}>CONTINUE</Button>
    </Aux>
  );
}
export default OrderSummary;

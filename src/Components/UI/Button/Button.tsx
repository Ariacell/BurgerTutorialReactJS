import * as React from 'react';
import classes from './Button.module.css';

interface IButtonProps {
    clicked: () => void,
    buttonType: string
}

const Button: React.FC<IButtonProps> = (props) => {
    return (
      <button onClick={props.clicked}
      className={[classes.Button, classes[props.buttonType]].join(' ')}>
        {props.children}
      </button>
    );
}
export default Button;

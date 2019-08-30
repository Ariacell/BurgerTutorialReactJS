import * as React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

interface ILogoProps {
}

const Logo: React.FC<ILogoProps> = (props) => {
    return (
      <div className={classes.Logo}>
        <img src={BurgerLogo} alt="Burger Logo"/>
      </div>
    );
}
export default Logo;

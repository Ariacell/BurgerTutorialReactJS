import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

const Layout: React.FC = (props) => (
    <Aux>
        <div className={classes.BurgerTest}>
            Toolbar, SideDrawer, Backdrop
    </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;

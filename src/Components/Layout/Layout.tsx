import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

interface ILayoutProps {}

interface ILayoutState {
    sideDrawerShowing: boolean
}

class Layout extends React.Component <ILayoutProps, ILayoutState> {

    state = {
        sideDrawerShowing: true,
    }


    toggleSideDrawer = () => {
        const currentDrawerState = this.state.sideDrawerShowing;
        const newDrawerState = !currentDrawerState;
        this.setState({sideDrawerShowing: newDrawerState});
    }

    render() {
        console.log(this.state.sideDrawerShowing)
        return (
            <Aux>
                <Toolbar menuClick={this.toggleSideDrawer}/>
                <SideDrawer show={this.state.sideDrawerShowing} toggleDrawer={this.toggleSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;

import * as React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

interface ISideDrawerProps {
    show: boolean,
    toggleDrawer: () => void;
}

const SideDrawer: React.FC<ISideDrawerProps> = (props) => {

    const attachedClasses = [classes.SideDrawer, props.show ? classes.Open : classes.Close].join(' ');

    console.log(attachedClasses)

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.toggleDrawer} />
            <div className={attachedClasses}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}
export default SideDrawer;

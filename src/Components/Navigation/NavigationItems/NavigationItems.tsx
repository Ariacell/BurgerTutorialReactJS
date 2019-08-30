import * as React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

interface INavigationItemsProps {
}

const NavigationItems: React.FC<INavigationItemsProps> = (props) => {
    return (
        <div >
            <ul className={classes.NavigationItems}>
                <NavigationItem link={'/'} active>
                    Burger Builder
                </NavigationItem>
                <NavigationItem link={'/menu'} active={false}>
                    Checkout
                </NavigationItem>
            </ul>
        </div>
    );
}
export default NavigationItems;

import * as React from 'react';
import classes from './NavigationItem.module.css';

interface INagivationItemProps {
  link: string,
  active: boolean
}

const NagivationItem: React.FC<INagivationItemProps> = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : undefined}>
        {props.children}
      </a>
    </li>
  );
}
export default NagivationItem;

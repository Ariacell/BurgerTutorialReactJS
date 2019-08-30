import * as React from 'react';
import classes from './Backdrop.module.css';

interface IBackdropProps {
    show: boolean,
    clicked: () => void
}

const Backdrop: React.FC<IBackdropProps> = (props) => {
    return (
      props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
    );
}
export default Backdrop;

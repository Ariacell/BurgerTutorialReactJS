import React from 'react';
import classes from './Modal.module.css';

interface IModalProps {
    children?: any
}

const Modal: React.FC = (props: IModalProps) => {

    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
}

export default Modal;
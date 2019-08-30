import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

interface IModalProps {
    children?: any,
    show: boolean,
    modalClosed: () => void
}

const Modal: React.FC<IModalProps> = (props: IModalProps) => {

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                //Had to modify zindex since the modal actually sits under the menu button on vertical mobile devices and prevents clicking
                zIndex: props.show ? 110 : 0,
                opacity: props.show ? 1:0
            }}>
            {props.children}
        </div>
        </Aux>
    )
}

export default Modal;
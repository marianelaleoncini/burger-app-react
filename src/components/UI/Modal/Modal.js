import React from 'react';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = props => (
  <React.Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div className={'modal ' + (props.show ? 'show' : 'hide')}>{props.children}</div>;
  </React.Fragment>
);

export default Modal;

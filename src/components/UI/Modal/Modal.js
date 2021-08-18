import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className='Modal'
        style ={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show? '1' : '0'}}>
        {props.children}
        {/* children can be anything even your components  */}
    </div>
    </Aux>
    
); 

export default React.memo(
    Modal, 
    (prevProps, nextProps) => 
        nextProps.show == prevProps.show && 
        nextProps.children == prevProps.children
);
import React from "react";

import "./Modal.css";
import CSSTransition from 'react-transition-group/CSSTransition';

const animationTIming= {
  enter: 400, 
  exit: 1000
}
// millisecond
const modal = props => {
 

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={props.show} 
      timeout={animationTIming}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalCLose'
        // appear:
        // appearActive:
      }}
    >
    {/* fade-slide-enter
    fade-slide-exit-active */}

    {state => {
      const cssClasses = [
        "Modal",
        state === "entering"
        ? "ModalOpen"
        : state === "exiting" ? "ModalClosed" : null
      ];      
      
      return (
        <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
        </div>
      );
    }}

    

    </CSSTransition>

  );
};

export default modal;

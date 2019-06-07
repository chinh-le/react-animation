import React from 'react';
import Transition from 'react-transition-group/Transition';

import './Modal.css';

const modal = (props) => {
    return (
        <Transition
            in={props.show}
            timeout={500}
            mountOnEnter
            unmountOnExit>
            {transitionState => {
                const cssClasses = ['Modal',
                    transitionState === 'entering'
                        ? 'ModalOpen'
                        : transitionState === 'exiting' ? 'ModalClosed' : null
                ];
                return (
                    <div className={cssClasses.join(' ')}>
                        <h1>A Modal</h1>
                        <button className="Button" onClick={props.closed}>Dismiss</button>
                    </div>
                );
            }}
        </Transition>
    );
};

export default modal;
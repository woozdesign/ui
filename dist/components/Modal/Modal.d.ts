import React from 'react';
import { ActionProps, ContentProps, ModalProps } from './Modal.props';
declare const Modal: {
    Root: React.FC<ModalProps>;
    Content: React.FC<ContentProps>;
    Action: React.FC<ActionProps>;
};
export default Modal;

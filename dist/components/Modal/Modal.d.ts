import React from 'react';
import { ContentProps, ModalProps, TriggerProps } from './Modal.props';
declare const Modal: {
    Root: React.FC<ModalProps>;
    Trigger: React.FC<TriggerProps>;
    Content: React.FC<ContentProps>;
};
export default Modal;

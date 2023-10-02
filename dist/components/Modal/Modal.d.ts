import React, { ReactNode } from 'react';
interface ModalProps {
    children: ReactNode;
    variant?: 'default' | 'confirm';
    onCancel?: () => void;
    onConfirm?: () => void;
    onClose?: () => void;
}
interface TriggerProps {
    children: ReactNode;
}
interface ContentProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    confirmText?: string;
    cancelText?: string;
}
declare const Modal: {
    Root: React.FC<ModalProps>;
    Trigger: React.FC<TriggerProps>;
    Content: React.FC<ContentProps>;
};
export default Modal;

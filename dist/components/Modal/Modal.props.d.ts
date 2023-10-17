/// <reference types="react" />
export interface ModalContextProps {
    onClose: () => void;
    onCancel?: () => void;
    onConfirm?: () => void;
}
export interface ModalProps {
    children: React.ReactNode;
    open?: boolean;
    variant?: 'default' | 'confirm';
    onCancel?: () => void;
    onConfirm?: () => void;
    onClose?: () => void;
}
export interface ContentProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    confirmText?: string;
    cancelText?: string;
}

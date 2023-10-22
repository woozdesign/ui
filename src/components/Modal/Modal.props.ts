import { BasePropWithChildren } from '@/utils';

export interface ModalContextProps {
  onClose: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export interface ModalProps extends BasePropWithChildren {
  open?: boolean;
  variant?: 'default' | 'confirm';
  onCancel?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
}

export interface ContentProps extends BasePropWithChildren {
  title?: string;
  subtitle?: string;
  confirmText?: string;
  cancelText?: string;
}

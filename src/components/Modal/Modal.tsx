'use client';
import React, { useContext } from 'react';
import styles from './Modal.module.scss';
import { ModalContext } from '@/contexts/ModalContext';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import Card from '../Card/Card';
import { Col, Row } from '../Layout/Layout';
import Icon from '../Icon/Icon';

interface ModalProps {
  title?: string;
  onOk?: () => void;
  onCancel?: () => void;
  children?: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ title, children, onOk, onCancel }) => {
  const { closeModal, isModalOpen } = useContext(ModalContext);

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
    closeModal();
  };

  return (
    <div className={`${styles.overlay} ${isModalOpen ? styles.active : ''}`} onClick={handleCancel}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <Card>
          <Card.Title>
            <Row justify={'space-between'}>
              {title}
              <Button type={'icon'} onClick={handleCancel}>
                <Icon icon={'Close'}></Icon>
              </Button>
            </Row>
          </Card.Title>
          <Card.Content>{children}</Card.Content>
          <Card.Actions>
            <Row gutter={[8, 8]}>
              <Button onClick={onOk} block size={'large'} type={'primary'} color={'primary'}>
                Confirm
              </Button>
            </Row>
          </Card.Actions>
        </Card>
      </div>
    </div>
  );
};

export default Modal;

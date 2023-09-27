/* eslint-disable react/display-name */
import React, { CSSProperties, FC, ReactNode } from 'react';
import Typography from '../Typography/Typography';
import styles from './Card.module.scss';
import { combineClassNames } from '@/utils';

export interface CardProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  outlined?: boolean;
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
}

const Card: FC<CardProps> & {
  Heading: FC<HeadingProps>;
  Body: FC<BodyProps>;
  Actions: FC<ActionsProps>;
} = ({ outlined = true, size = 'medium', children, ...others }) => {
  const cardClasses = [styles.card];

  if (outlined) {
    cardClasses.push(styles['card--outlined']);
  }

  // if (size) {
  //   cardClasses.push(styles[`card--${size}`]); // This will add classes like card--small, card--medium, etc.
  // }

  return (
    <div className={combineClassNames(cardClasses)} {...others}>
      {children}
    </div>
  );
};

export interface HeadingProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title' | 'action'> {
  title: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  outlined?: boolean;
}

Card.Heading = ({ title, subtitle, action, outlined = true }: HeadingProps) => {
  const classes = [styles.heading, outlined ? styles[`heading--outlined`] : ''];
  return (
    <div className={combineClassNames(classes)}>
      <div>
        <Typography.Title level={5} style={{ margin: '0' }}>
          {title}
        </Typography.Title>
        {subtitle && (
          <Typography.Text type={'secondary'} style={{ margin: '0' }}>
            {subtitle}
          </Typography.Text>
        )}
      </div>
      {action && <div className={styles['heading-action']}>{action}</div>}
    </div>
  );
};

export interface BodyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  description: ReactNode;
}

Card.Body = ({ title, description }: BodyProps) => {
  return (
    <div className={styles.body}>
      {title && (
        <Typography.Title level={5} style={{ margin: '0' }}>
          {title}
        </Typography.Title>
      )}
      {description && (
        <Typography.Text type={'secondary'} style={{ margin: '0' }}>
          {description}
        </Typography.Text>
      )}
    </div>
  );
};

export interface ActionsProps extends React.HTMLProps<HTMLDivElement> {
  justify?: CSSProperties['justifyContent'];
  outlined?: boolean;
  children: ReactNode;
}

Card.Actions = ({ children, justify = 'start', outlined = true }: ActionsProps) => {
  const classes = [styles.actions, outlined ? styles[`actions--outlined`] : ''];
  return (
    <div className={combineClassNames(classes)} style={{ justifyContent: justify }}>
      {children}
    </div>
  );
};

export default Card;

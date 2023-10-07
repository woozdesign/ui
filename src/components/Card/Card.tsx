/* eslint-disable react/display-name */
import React, { CSSProperties, FC, ReactNode } from 'react';
import { combineClassNames } from '@/utils';
import { SizeProp } from '@/utils/helper/props';
import Typography from '../Typography/Typography';
import styles from './Card.module.scss';

export interface CardProps extends SizeProp, Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  outlined?: boolean;
  children: ReactNode;
}

const Card: FC<CardProps> & {
  Heading: FC<HeadingProps>;
  Body: FC<BodyProps>;
  Actions: FC<ActionsProps>;
} = ({ outlined = true, size = 'medium', children, ...others }) => {
  const cardClasses = [styles.card, styles[`card--${size}`]];

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
  titleLevel?: 6 | 5 | 4 | 3 | 2 | 1;
  subtitle?: ReactNode;
  action?: ReactNode;
  outlined?: boolean;
}

Card.Heading = ({ title, subtitle, action, titleLevel = 5, outlined = true }: HeadingProps) => {
  const classes = [styles.heading, outlined ? styles[`heading--outlined`] : ''];
  return (
    <div className={combineClassNames(classes)}>
      <div>
        {typeof title == 'string' ? (
          <Typography.Title className={styles.title} level={titleLevel}>
            {title}
          </Typography.Title>
        ) : (
          title
        )}
        {typeof subtitle == 'string' ? <Typography.Subtitle className={styles.subtitle}>{subtitle}</Typography.Subtitle> : subtitle}
      </div>
      {action && <div className={styles['heading-action']}>{action}</div>}
    </div>
  );
};

export interface BodyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title' | 'content'> {
  title?: ReactNode;
  titleLevel?: 6 | 5 | 4 | 3 | 2 | 1;
  content: ReactNode;
}

Card.Body = ({ title, content, titleLevel = 5 }: BodyProps) => {
  return (
    <div className={styles.body}>
      {typeof title == 'string' ? (
        <Typography.Title className={styles.title} level={titleLevel}>
          {title}
        </Typography.Title>
      ) : (
        title
      )}
      {typeof content == 'string' ? <Typography.Text className={styles.content}>{content}</Typography.Text> : content}
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

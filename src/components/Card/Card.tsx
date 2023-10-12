/* eslint-disable react/display-name */
'use client';
import React, { CSSProperties, FC, ReactNode } from 'react';
import classNames from 'classnames';
import { SizeProp, TextSizeProp } from '@/utils/helper/props';
import Typography from '../Typography/Typography';
import styles from './Card.module.scss';

export interface CardProps extends SizeProp, Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  variant?: 'solid' | 'transparent';
  outlined?: boolean;
  children: ReactNode;
  textAlign?: 'start' | 'center' | 'end';
}

const Card: FC<CardProps> & {
  Heading: FC<HeadingProps>;
  Body: FC<BodyProps>;
  Actions: FC<ActionsProps>;
} = ({ variant = 'solid', textAlign = 'start', outlined = true, size = 'medium', children, className, onClick, ...others }) => {
  const cardClasses = classNames(
    styles.card,
    styles[`card--${variant}`],
    styles[`card--${size}`],
    styles[`card--${textAlign}`],
    { [styles['card--outlined']]: outlined, [styles['card--clickable']]: onClick },
    className,
  );

  return (
    <div className={cardClasses} onClick={onClick} {...others}>
      {children}
    </div>
  );
};

export interface HeadingProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title' | 'action'> {
  title: ReactNode;
  subtitle?: ReactNode;
  titleSize?: TextSizeProp['size'];
  subtitleSize?: TextSizeProp['size'];
  action?: ReactNode;
  outlined?: boolean;
}

Card.Heading = ({ title, titleSize = 4, subtitle, subtitleSize = 4, action, outlined = false }: HeadingProps) => {
  const classes = classNames(styles.heading, { [styles[`heading--outlined`]]: outlined });

  return (
    <div className={classes}>
      <div>
        {typeof title == 'string' ? (
          <Typography.Heading className={styles.title} variant={'h3'} size={titleSize}>
            {title}
          </Typography.Heading>
        ) : (
          title
        )}
        {typeof subtitle == 'string' ? (
          <Typography.Text className={styles.subtitle} variant={'div'} size={subtitleSize} highContrast={false}>
            {subtitle}
          </Typography.Text>
        ) : (
          subtitle
        )}
      </div>
      {action && <div className={styles['heading-action']}>{action}</div>}
    </div>
  );
};

export interface BodyProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title' | 'content'> {
  title?: ReactNode;
  titleSize?: TextSizeProp['size'];
  content: ReactNode;
}

Card.Body = ({ title, content, titleSize = 4 }: BodyProps) => {
  return (
    <div className={styles.body}>
      {typeof title == 'string' ? (
        <Typography.Text variant="div" size={titleSize} className={styles.title} weight={'bold'}>
          {title}
        </Typography.Text>
      ) : (
        title
      )}
      {typeof content == 'string' ? (
        <Typography.Text variant="div" className={styles.content}>
          {content}
        </Typography.Text>
      ) : (
        content
      )}
    </div>
  );
};

export interface ActionsProps extends React.HTMLProps<HTMLDivElement> {
  justify?: CSSProperties['justifyContent'];
  outlined?: boolean;
  children: ReactNode;
}

Card.Actions = ({ children, justify = 'start', outlined = false }: ActionsProps) => {
  const classes = classNames(styles.actions, { [styles[`actions--outlined`]]: outlined });

  return (
    <div className={classes} style={{ justifyContent: justify }}>
      {children}
    </div>
  );
};

export default Card;

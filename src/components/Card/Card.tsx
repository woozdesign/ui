/* eslint-disable react/display-name */
'use client';
import classNames from 'classnames';
import React, { FC } from 'react';
import Typography from '../Typography/Typography';
import styles from './Card.module.scss';
import { ActionsProps, BodyProps, CardProps, HeaderProps } from './Card.props';

const Card: FC<CardProps> & {
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
  Actions: FC<ActionsProps>;
} = ({ variant = 'solid', outlined = true, size = 'medium', children, className, onClick, ...others }) => {
  const cardClasses = classNames(
    styles.card,
    styles[`card--${variant}`],
    styles[`card--${size}`],
    { [styles['card--outlined']]: outlined, [styles['card--clickable']]: onClick },
    className,
  );

  return (
    <div className={cardClasses} onClick={onClick} {...others}>
      {children}
    </div>
  );
};

Card.Header = ({ title, titleSize = 4, subtitle, subtitleSize = 4, action, outlined = false }: HeaderProps) => {
  const classes = classNames(styles.heading, { [styles[`heading--outlined`]]: outlined });

  return (
    <div className={classes}>
      <div className={styles[`heading-title-wrapper`]}>
        {typeof title == 'string' ? (
          <Typography.Header className={styles.title} variant={'h3'} size={titleSize}>
            {title}
          </Typography.Header>
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

Card.Body = ({ title, content, titleSize = 4, textAlign = 'start' }: BodyProps) => {
  return (
    <div className={styles.body}>
      {typeof title == 'string' ? (
        <Typography.Text align={textAlign} variant="div" size={titleSize} className={styles.title} weight={'bold'}>
          {title}
        </Typography.Text>
      ) : (
        title
      )}
      {typeof content == 'string' ? (
        <Typography.Text variant="div" className={styles.content} align={textAlign}>
          {content}
        </Typography.Text>
      ) : (
        content
      )}
    </div>
  );
};

Card.Actions = ({ children, justify = 'start', outlined = false }: ActionsProps) => {
  const classes = classNames(styles.actions, { [styles[`actions--outlined`]]: outlined });

  return (
    <div className={classes} style={{ justifyContent: justify }}>
      {children}
    </div>
  );
};

export default Card;

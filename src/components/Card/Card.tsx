/* eslint-disable react/display-name */
'use client';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import classNames from 'classnames';
import React, { FC } from 'react';
import Typography from '../Typography/Typography';
import styles from './Card.module.scss';
import { ActionProps, BodyProps, CardProps, HeaderProps } from './Card.props';
import { DEFAULT_FONT_SIZE } from '@/utils/helper/defaultValues';

const Card: FC<CardProps> & {
  Header: FC<HeaderProps>;
  Body: FC<BodyProps>;
  Action: FC<ActionProps>;
} = (props) => {
  const { others: marginOthers, ...marginProps } = extractMarginProps(props);
  const { variant = 'solid', outlined = true, size = 'medium', style, children, className, onClick, shadow, radius, ...others } = marginOthers;

  const cardClasses = classNames(
    styles.card,
    styles[`card--${variant}`],
    { [styles['card--outlined']]: outlined, [styles['card--clickable']]: onClick },
    className,
    withBreakpoints(size, 'wd-card', styles),
    withMarginProps(marginProps),
  );

  return (
    <div className={cardClasses} data-radius={radius} data-shadow={shadow} onClick={onClick} {...others} style={style}>
      {children}
    </div>
  );
};

const Header: FC<HeaderProps> = (props) => {
  const { title, style, titleSize = DEFAULT_FONT_SIZE, subtitle, subtitleSize = DEFAULT_FONT_SIZE, action, outlined = false } = props;

  const classes = classNames(styles.heading, { [styles[`heading--outlined`]]: outlined });

  return (
    <div className={classes} style={style}>
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

const Body: FC<BodyProps> = (props) => {
  const { className, style, title, content, titleSize = DEFAULT_FONT_SIZE, textAlign = 'start' } = props;

  return (
    <div className={classNames(className, styles.body)} style={style}>
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

const Action: FC<ActionProps> = (props) => {
  const { className, style, children, justify = 'start', outlined = false } = props;

  const classes = classNames(styles.actions, { [styles[`actions--outlined`]]: outlined }, className);

  return (
    <div className={classes} style={{ justifyContent: justify, ...style }}>
      {children}
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;
Card.Action = Action;

export default Card;

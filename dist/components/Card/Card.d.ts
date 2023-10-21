import { FC } from 'react';
import { ActionProps, BodyProps, CardProps, HeaderProps } from './Card.props';
declare const Card: FC<CardProps> & {
    Header: FC<HeaderProps>;
    Body: FC<BodyProps>;
    Action: FC<ActionProps>;
};
export default Card;

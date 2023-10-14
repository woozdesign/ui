import { FC } from 'react';
import { ActionsProps, BodyProps, CardProps, HeaderProps } from './Card.props';
declare const Card: FC<CardProps> & {
    Header: FC<HeaderProps>;
    Body: FC<BodyProps>;
    Actions: FC<ActionsProps>;
};
export default Card;

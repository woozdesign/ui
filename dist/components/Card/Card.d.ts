import { FC } from 'react';
import { ActionsProps, BodyProps, CardProps, HeadingProps } from './Card.props';
declare const Card: FC<CardProps> & {
    Heading: FC<HeadingProps>;
    Body: FC<BodyProps>;
    Actions: FC<ActionsProps>;
};
export default Card;

import { FC } from 'react';
export type LinkItem = {
    key: string;
    href: string;
    title: string;
    children?: LinkItem[];
};
type AnchorProps = {
    items: LinkItem[];
    offset?: number;
    behavior?: ScrollBehavior;
    onChange?: (selectedKey: string) => void;
};
declare const Anchor: FC<AnchorProps>;
export default Anchor;

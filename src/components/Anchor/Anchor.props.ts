export type LinkItem = {
  key: string;
  href: string;
  title: string;
  children?: LinkItem[];
};

export interface AnchorProps {
  items: LinkItem[];
  offset?: number;
  behavior?: ScrollBehavior;
  onChange?: (selectedKey: string) => void;
}

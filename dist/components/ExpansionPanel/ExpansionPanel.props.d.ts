/// <reference types="react" />
import { ColorProp, RadiusProp, SizeProp } from '../../utils';
export interface ExpansionItem {
    header: React.ReactNode;
    children: React.ReactNode;
}
export interface ExpansionPanelProps extends ColorProp, RadiusProp, SizeProp {
    items: ExpansionItem[];
    outlined?: boolean;
    containerOutlined?: boolean;
    multiple?: boolean;
}

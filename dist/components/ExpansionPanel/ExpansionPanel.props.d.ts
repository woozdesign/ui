/// <reference types="react" />
import { BorderWidthProp, ColorProp, MarginProp, RadiusProp, SizeProp } from '../../utils';
export interface ExpansionItem {
    header: React.ReactNode;
    children: React.ReactNode;
}
export interface ExpansionPanelProps extends MarginProp, ColorProp, RadiusProp, SizeProp, BorderWidthProp {
    items: ExpansionItem[];
    outlined?: boolean;
    containerOutlined?: boolean;
    multiple?: boolean;
}

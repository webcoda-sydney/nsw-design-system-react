import type { ReactNode } from 'react';
/**
 * An item inside the LinkList component
 *
 */
export interface LinkListItemProps {
    /**
     * The link Text or link html
     */
    text: ReactNode;
    /**
     * The link URL
     */
    link: string;
    /**
     * The target URL
     */
    target?: HTMLAnchorElement['target'];
    /**
     * The component used for the link
     */
    linkComponent?: string | Function;
    /**
     * The onClick event handler
     */
    onClick?: () => void;
    children?: ReactNode;
    href?: string;
    to?: string;
    rel?: HTMLAnchorElement['rel'];
}
export declare const LinkListItem: ({ text, link, linkComponent, children, onClick, ...attributeOptions }: LinkListItemProps) => JSX.Element;
/**
 * DEFAULT
 * The Link List component
 */
export interface LinkListProps {
    /**
     * All items inside the link list to be passed to LinkListItem, format: { link: '', text: '', onClick: () }
     */
    items: LinkListItemProps[];
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * The component used for the link
     */
    linkComponent?: string;
}
export declare const LinkList: ({ items, className, ...attributeOptions }: LinkListProps) => JSX.Element;
export default LinkList;

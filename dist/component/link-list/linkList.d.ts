import PropTypes from 'prop-types';
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
     * The link URL, optional
     */
    link: string;
    /**
     * The component used for the link
     */
    linkComponent?: string;
    /**
     * The onClick event handler
     */
    onClick?: () => void;
    children?: ReactNode;
    href?: string;
    to?: string;
}
export declare const LinkListItem: {
    ({ text, link, linkComponent, children, onClick, ...attributeOptions }: LinkListItemProps): JSX.Element;
    propTypes: {
        text: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        link: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        linkComponent: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
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
export declare const LinkList: {
    ({ items, linkComponent, className, ...attributeOptions }: LinkListProps): JSX.Element;
    propTypes: {
        items: PropTypes.Validator<(PropTypes.InferProps<{
            link: PropTypes.Requireable<string>;
            text: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        }> | null | undefined)[]>;
        linkComponent: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        className: PropTypes.Requireable<string>;
    };
};
export default LinkList;

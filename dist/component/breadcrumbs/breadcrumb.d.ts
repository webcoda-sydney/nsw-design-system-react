import PropTypes from 'prop-types';
import type { ElementType, ReactNode } from 'react';
export interface BreadcrumbProps {
    /**
     * The aria label of the component
     */
    label?: string;
    /**
     * Items inside the breadcrumbs passed on to BreadcrumbLinkList
     */
    items: BreadcrumbLinkListItemProps[];
    /**
     * The component used for the link
     */
    linkComponent?: string;
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const Breadcrumbs: {
    ({ label, items, linkComponent, className, ...attributeOptions }: BreadcrumbProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        items: PropTypes.Validator<(PropTypes.InferProps<{
            link: PropTypes.Requireable<string>;
            text: PropTypes.Validator<string>;
        }> | null | undefined)[]>;
        linkComponent: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        className: PropTypes.Requireable<string>;
    };
};
export interface BreadcrumbLinkListItemProps {
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
    linkComponent?: string | ElementType;
    children?: ReactNode;
    /**
     * The onClick event handler
     */
    onClick?: () => void;
    /**
     * Any other attribute options
     */
    href?: string;
    to?: string;
}
export declare const BreadcrumbLinkListItem: {
    ({ text, link, linkComponent, children, onClick, ...attributeOptions }: BreadcrumbLinkListItemProps): JSX.Element;
    propTypes: {
        text: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        link: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        linkComponent: PropTypes.Requireable<string | ((...args: any[]) => any)>;
    };
};
/**
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to
 *                                      BreadcrumbLinkListItem, format: { link: '', text: '',
 *                                      onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */
export interface BreadcrumbLinkListProps {
    /**
     * Whether it's shown inline or not
     */
    inline?: boolean;
    /**
     * All items inside the link list to be passed to BreadcrumbLinkListItem
     */
    items: BreadcrumbLinkListItemProps[];
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const BreadcrumbLinkList: ({ inline, items, className, ...attributeOptions }: BreadcrumbLinkListProps) => JSX.Element;
export default Breadcrumbs;

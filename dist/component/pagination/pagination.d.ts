import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
export interface PaginationItem {
    url: string;
}
/**
 * Docs gen
 * Pagination
 */
export interface PaginationProps {
    /**
     * Active page number
     */
    active?: number;
    /**
     * An array of urls
     */
    paginationItems: PaginationItem[];
    /**
     * A url to move back to previous
     */
    backLink?: string;
    /**
     * A url to move next to page
     */
    nextLink?: string;
    /**
     * An additional class, optional
     */
    className?: string;
    children?: ReactNode;
}
export declare const Pagination: {
    ({ backLink, active, nextLink, paginationItems, className, children, ...attributeOptions }: PaginationProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        paginationItems: PropTypes.Requireable<(PropTypes.InferProps<{
            url: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        backLink: PropTypes.Requireable<string>;
        nextLink: PropTypes.Requireable<string>;
        active: PropTypes.Requireable<number>;
    };
};
export interface PaginationItemProps {
    url: PaginationItem['url'];
    page: number;
    active?: number;
}
export declare const PaginationItem: {
    ({ url, page, active }: PaginationItemProps): JSX.Element;
    propTypes: {
        page: PropTypes.Requireable<number>;
        active: PropTypes.Requireable<number>;
        url: PropTypes.Requireable<string>;
    };
};
export declare const PaginationEllipsis: () => JSX.Element;
export default Pagination;

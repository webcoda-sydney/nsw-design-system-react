import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
export interface TagProps {
    /**
     *  The link for this tag, optional
     */
    link?: string;
    /**
     *  The text for the tag
     */
    text: string;
    linkComponent?: string;
    children?: ReactNode;
    className?: string;
    href?: string;
    to?: string;
}
export declare const Tag: {
    ({ link, text, linkComponent, className, ...attributeOptions }: TagProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        link: PropTypes.Requireable<string>;
        text: PropTypes.Validator<string>;
        linkComponent: PropTypes.Requireable<string | ((...args: any[]) => any)>;
    };
};
/**
 * DEFAULT
 * The tags component
 *
 */
export interface TagListProps {
    /**
     * The tags, format: { link: '', text: '', onClick: () }
     */
    tags: TagProps[];
    /**
     * An additional class, optional
     */
    className?: string;
}
declare const TagList: ({ tags, className, ...attributeOptions }: TagListProps) => JSX.Element;
export default TagList;

import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
/**
 * The content block component
 *
 * @param {string}   image              - The image URL/path (optional)
 * @param {string}   icon               - The icon markup (optional)
 * @param {string}   imageAlt           - The alt text for image (mandatory if image supplied)
 * @param {string}   copy               - The content of the content block
 * @param {string}   headline           - Title for card
 * @param {object}   mainLink           - Add a view more link
 * @param {bool}     content            - Removes highlight bar if true
 * @param {string}   className          - An additional class, optional
 * @param {array}    links               - A list of anchor tags and its links
 * @param {object}   attributeOptions   - Default HTML attributes
 */
export interface ContentBlockLink {
    text: string;
    url: string;
}
export interface ContentBlockProps {
    /**
     * The image URL/path (optional)
     */
    image?: string;
    /**
     * The icon markup (optional)
     */
    icon?: string;
    /**
     * The alt text for image (mandatory if image supplied)
     */
    imageAlt?: string;
    /**
     * The content of the content block
     */
    copy?: string;
    /**
     * Title for card
     */
    headline: string;
    /**
     * Add a view more link
     */
    mainLink?: ContentBlockLink;
    /**
     * Removes highlight bar if true
     */
    content?: boolean;
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * A list of anchor tags and its links
     */
    links?: ContentBlockLink[];
}
export declare const ContentBlock: {
    ({ links, mainLink, headline, copy, image, imageAlt, icon, className, }: ContentBlockProps): JSX.Element;
    propTypes: {
        image: PropTypes.Requireable<string>;
        imageAlt: PropTypes.Requireable<string>;
        headline: PropTypes.Validator<string>;
        icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        copy: PropTypes.Requireable<string>;
        links: PropTypes.Requireable<(PropTypes.InferProps<{
            url: PropTypes.Requireable<string>;
            text: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        mainLink: PropTypes.Requireable<PropTypes.InferProps<{
            url: PropTypes.Validator<string>;
            text: PropTypes.Validator<string>;
        }>>;
        className: PropTypes.Requireable<string>;
    };
};
export interface ContentBlockImageProps {
    /**
     * Image source
     */
    src: string;
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * Alt text
     */
    imageAlt?: string;
}
export declare const ContentBlockImage: {
    ({ src, className, imageAlt, ...attributesOptions }: ContentBlockImageProps): JSX.Element;
    propTypes: {
        src: PropTypes.Validator<string>;
        imageAlt: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
};
export interface ContentBlockIconProps {
    className?: string;
    children: ReactNode;
}
export declare const ContentBlockIcon: {
    ({ children, className, ...attributesOptions }: ContentBlockIconProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export interface ContentBlockCopyProps {
    className?: string;
    children: ReactNode;
}
export declare const ContentBlockCopy: {
    ({ children, className, ...attributesOptions }: ContentBlockCopyProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export interface ContentBlockHeadingProps {
    className?: string;
    children: ReactNode;
}
export declare const ContentBlockHeading: {
    ({ children, className, ...attributesOptions }: ContentBlockHeadingProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default ContentBlock;

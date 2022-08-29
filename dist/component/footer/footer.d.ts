import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
/**
 * A section for the footer that sits at the end
 */
export interface FooterLinksItem {
    url: string;
    text: string;
}
export interface FooterLinksProps {
    /**
     * The inside of this section
     */
    children?: ReactNode;
    /**
     * The section links, format: { url: '', text: '' }
     */
    footerLinks: FooterLinksItem[];
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const FooterLinks: {
    ({ footerLinks, className, ...attributeOptions }: FooterLinksProps): JSX.Element;
    propTypes: {
        footerLinks: PropTypes.Requireable<(PropTypes.InferProps<{
            url: PropTypes.Validator<string>;
            text: PropTypes.Validator<string>;
        }> | null | undefined)[]>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * A section for the footer that sits at the end
 */
export interface FooterSectionGroupProps {
    /**
     * The inside of this section
     */
    children?: ReactNode;
    /**
     * The heading section link, format: { url: '', text: '' }
     */
    heading: FooterLinksItem;
    /**
     * The section links, format: { url: '', text: '' }
     */
    sectionLinks: FooterLinksItem[];
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const FooterSectionGroup: {
    ({ heading, sectionLinks, className, ...attributeOptions }: FooterSectionGroupProps): JSX.Element;
    propTypes: {
        heading: PropTypes.Requireable<PropTypes.InferProps<{
            url: PropTypes.Validator<string>;
            text: PropTypes.Validator<string>;
        }>>;
        sectionLinks: PropTypes.Requireable<(PropTypes.InferProps<{
            url: PropTypes.Validator<string>;
            text: PropTypes.Validator<string>;
        }> | null | undefined)[]>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * A section for the footer that contains navigational elements
 */
export interface FooterUpperProps {
    /**
     * The inside of this section
     */
    children: ReactNode;
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * The aria-label attribute, optional
     */
    ariaLabel?: string;
}
export declare const FooterUpper: {
    ({ children, className, ariaLabel, ...attributeOptions }: FooterUpperProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        ariaLabel: PropTypes.Requireable<string>;
    };
};
/**
 * A section for the footer that sits at the end
 */
export interface FooterLowerProps {
    /**
     * The inside of this section
     */
    children: ReactNode;
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const FooterLower: {
    ({ children, className, ...attributeOptions }: FooterLowerProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * DEFAULT
 * The footer component
 */
export interface FooterProps {
    /**
     * The inside of this section
     */
    children: ReactNode;
    /**
     * An additional class, optional
     */
    className?: string;
}
declare const Footer: {
    ({ children, className, ...attributeOptions }: FooterProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
};
export default Footer;

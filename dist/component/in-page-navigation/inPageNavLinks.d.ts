import PropTypes from 'prop-types';
/**
 * The section component for the InpageNavLinks component
 *
 */
export interface InpageNavLinksItemProps {
    /**
     * The link of this section
     */
    url: string;
    /**
     * The title of the section
     */
    title: string;
}
export declare const InpageNavLinksItem: {
    ({ url, title, ...attributeOptions }: InpageNavLinksItemProps): JSX.Element;
    propTypes: {
        url: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
    };
};
/**
 * The inpage-nav component
 */
export interface InPageNavLinksProps {
    /**
     * The title of the content link block, default: Contents
     */
    title: string;
    /**
     * An array of objects of all sections
     */
    links: InpageNavLinksItemProps[];
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * The aria-label attribute, optional
     */
    ariaLabel?: string;
}
export declare const InPageNavLinks: ({ title, links, ariaLabel, className, ...attributeOptions }: InPageNavLinksProps) => JSX.Element;
export default InPageNavLinks;

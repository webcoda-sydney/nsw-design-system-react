import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
/**
 * Docs gen
 * Page alert
 *
 */
export interface SectionProps {
    /**
     * Theme (default = white)
     */
    style?: 'white' | 'brand-dark' | 'brand-light' | 'brand-supplementary' | 'black' | 'off-white' | 'grey-01' | 'grey-02' | 'grey-03' | 'grey-04';
    /**
     * Padding style
     */
    padding?: 'full' | 'half' | 'none';
    /**
     * Whether to wrap children in nsw-container
     */
    container?: boolean;
    /**
     * Anything inside the component
     */
    children?: ReactNode;
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * Whether the section is inline
     */
    box?: boolean;
}
export declare const Section: {
    ({ children, style, container, padding, box, className, ...attributeOptions }: SectionProps): JSX.Element;
    propTypes: {
        padding: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<string>;
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        container: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        box: PropTypes.Requireable<boolean>;
    };
};
export default Section;

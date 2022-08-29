import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
export interface HeroBannerProps {
    /**
     * The title of the banner
     */
    title?: string;
    /**
     * The intro of the banner
     */
    intro?: string;
    /**
     * The call to action of the banner
     */
    cta?: {
        url: string;
        text: string;
    };
    /**
     * The object of the image
     */
    image?: {
        src: string;
        alt: string;
    };
    /**
     * Dark Variant
     */
    dark?: boolean;
    /**
     * Style Variant
     */
    style?: 'dark' | 'light' | 'white';
    /**
     * Wide Variant
     */
    wide?: boolean;
    /**
     * Fixed minimum height
     */
    featured?: boolean;
    /**
     * An additional class, optional
     */
    className?: string;
    children?: ReactNode;
}
export declare const HeroBanner: {
    ({ title, intro, cta, style, wide, featured, image, children, className, ...attributeOptions }: HeroBannerProps): JSX.Element;
    propTypes: {
        title: PropTypes.Validator<string>;
        intro: PropTypes.Validator<string>;
        style: PropTypes.Requireable<string>;
        wide: PropTypes.Requireable<boolean>;
        featured: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        cta: PropTypes.Requireable<PropTypes.InferProps<{
            url: PropTypes.Requireable<string>;
            text: PropTypes.Requireable<string>;
        }>>;
        image: PropTypes.Requireable<PropTypes.InferProps<{
            src: PropTypes.Requireable<string>;
            alt: PropTypes.Requireable<string>;
        }>>;
    };
};
export default HeroBanner;

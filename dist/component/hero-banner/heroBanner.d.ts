import type { MouseEvent, ReactNode } from 'react';
export interface HeroBannerImageProps {
    src: string;
    alt: string;
}
export interface HeroBannerProps {
    /**
     * The title of the banner
     */
    title?: string;
    /**
     * The intro of the banner
     */
    intro?: ReactNode;
    /**
     * The call to action of the banner
     */
    cta?: {
        url: string;
        text: string;
        onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
    };
    /**
     * The object of the image
     */
    image?: ReactNode | HeroBannerImageProps;
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
export declare const HeroBanner: ({ title, intro, cta, style, wide, featured, image, children, className, ...attributeOptions }: HeroBannerProps) => JSX.Element;
export default HeroBanner;

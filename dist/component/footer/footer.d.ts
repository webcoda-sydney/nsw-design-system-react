import type { ElementType, ReactNode } from 'react';
/**
 * A section for the footer that sits at the end
 */
export interface FooterLinksItem {
    url: string;
    text: string;
    target?: HTMLAnchorElement['target'];
    linkComponent?: string | ElementType;
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
export declare const FooterLinks: ({ footerLinks, className, ...attributeOptions }: FooterLinksProps) => JSX.Element;
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
export declare const FooterSectionGroup: ({ heading, sectionLinks, className, ...attributeOptions }: FooterSectionGroupProps) => JSX.Element;
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
export declare const FooterUpper: ({ children, className, ariaLabel, ...attributeOptions }: FooterUpperProps) => JSX.Element;
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
export declare const FooterLower: ({ children, className, ...attributeOptions }: FooterLowerProps) => JSX.Element;
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
declare const Footer: ({ children, className, ...attributeOptions }: FooterProps) => JSX.Element;
export default Footer;

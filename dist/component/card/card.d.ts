import type { ElementType, ReactNode } from 'react';
/**
 * The card  component
 */
export interface CardProps {
    /**
     * The link that clicking the card goes to
     */
    link?: string;
    linkTarget?: HTMLAnchorElement['target'];
    /**
     * The tag (optional)
     */
    tag?: string;
    /**
     * Card style
     */
    style?: string;
    /**
     * The date (optional)
     */
    date?: string;
    /**
     * The date display format (optional, def to '4th June 2021')
     */
    dateMomentFormat?: string;
    /**
     * The image URL/path (optional)
     */
    image?: ReactNode;
    /**
     * The alt text for image (mandatory if image supplied)
     */
    imageAlt?: string;
    /**
     * Title for card
     */
    headline: ReactNode;
    /**
     * Adds highlight bar if true
     */
    highlight?: boolean;
    /**
     * An additional class, optional
     */
    className?: string;
    href?: string;
    children?: ReactNode;
    linkComponent?: string | ElementType;
}
declare const Card: ({ link, linkTarget, style, headline, highlight, tag, date, image, imageAlt, className, children, linkComponent: LinkComponent, ...attributesOptions }: CardProps) => JSX.Element;
/**
 * An inner container for the card, with padding of 1 rem
 */
export interface CardContentProps {
    /**
     * An additional class, optional
     */
    className?: string;
    children?: ReactNode;
}
export declare const CardContent: ({ className, children, ...attributesOptions }: CardContentProps) => JSX.Element;
/**
 * An inner container for the card, with padding of 1 rem
 */
export interface CardHeaderProps {
    /**
     * Image source
     */
    link?: string;
    linkTarget?: CardProps['linkTarget'];
    linkComponent?: CardProps['linkComponent'];
    /**
     * An additional class, optional
     */
    className?: string;
    children?: ReactNode;
}
export declare const CardHeader: ({ className, link, linkComponent: LinkComponent, linkTarget, children }: CardHeaderProps) => JSX.Element;
/**
 * An image inside the card
 */
export interface CardImageProps {
    /**
     * Image source
     */
    src?: string;
    alt?: string;
    /**
     * An additional class, optional
     */
    className?: string;
    children?: ReactNode;
}
export declare const CardImage: ({ src, className, alt, children, ...attributesOptions }: CardImageProps) => JSX.Element;
/**
 * An paragraph inside the card
 */
export interface CardCopyProps {
    src?: string;
    children?: ReactNode;
    className?: string;
}
export declare const CardCopy: ({ src, children, className, ...attributesOptions }: CardCopyProps) => JSX.Element;
/**
 * An tag inside the card
 */
export interface CardTagProps {
    children?: ReactNode;
    className?: string;
}
export declare const CardTag: ({ children, className, ...attributesOptions }: CardTagProps) => JSX.Element;
/**
 * An date inside the card
 */
export interface CardDateProps {
    date: string;
    children?: ReactNode;
    className?: string;
}
export declare const CardDate: ({ className, date, ...attributesOptions }: CardDateProps) => JSX.Element;
/**
 * A horizontal rule used to divide content inside the card
 */
export interface CardDividerProps {
    children?: ReactNode;
    className?: string;
}
export declare const CardDivider: ({ className, ...attributesOptions }: CardDividerProps) => JSX.Element;
/**
 * Use when making the entire click area of card clickable.
 */
export interface CardLinkProps {
    /**
     * The location of the link
     */
    link: string;
    /**
     * The text of the link
     */
    text: string;
    /**
     * An additional class, optional
     */
    className?: string;
    children?: ReactNode;
}
export declare const CardLink: ({ link, text, className, ...attributesOptions }: CardLinkProps) => JSX.Element;
/**
 * The footer section of the card
 */
export interface CardFooterProps {
    children?: ReactNode;
    className?: string;
    dark?: boolean;
    alt?: string;
}
export declare const CardFooter: ({ dark, children, className, ...attributesOptions }: CardFooterProps) => JSX.Element;
/**
 * The footer section of the card
 */
export interface CardTitleProps {
    children?: ReactNode;
    className?: string;
}
export declare const CardTitle: ({ children, className, ...attributeOptions }: CardTitleProps) => JSX.Element;
export default Card;

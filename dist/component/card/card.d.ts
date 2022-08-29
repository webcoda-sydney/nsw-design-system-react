import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
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
    style: string;
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
    image?: string;
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
}
declare const Card: {
    ({ link, linkTarget, style, headline, highlight, tag, date, image, imageAlt, className, children, ...attributesOptions }: CardProps): JSX.Element;
    propTypes: {
        link: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<string>;
        tag: PropTypes.Requireable<string>;
        date: PropTypes.Requireable<string>;
        image: PropTypes.Requireable<string>;
        imageAlt: PropTypes.Requireable<string>;
        headline: PropTypes.Validator<string>;
        highlight: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
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
export declare const CardContent: {
    ({ className, children, ...attributesOptions }: CardContentProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
/**
 * An inner container for the card, with padding of 1 rem
 */
export interface CardHeaderProps {
    /**
     * Image source
     */
    link?: string;
    linkTarget?: CardProps['linkTarget'];
    /**
     * An additional class, optional
     */
    className?: string;
    children?: ReactNode;
}
export declare const CardHeader: {
    ({ className, link, linkTarget, children }: CardHeaderProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        link: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
/**
 * An image inside the card
 */
export interface CardImageProps {
    /**
     * Image source
     */
    src: string;
    alt?: string;
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const CardImage: {
    ({ src, className, alt, ...attributesOptions }: CardImageProps): JSX.Element;
    propTypes: {
        src: PropTypes.Validator<string>;
        className: PropTypes.Requireable<string>;
        alt: PropTypes.Requireable<string>;
    };
};
/**
 * An paragraph inside the card
 */
export interface CardCopyProps {
    src?: string;
    children?: ReactNode;
    className?: string;
}
export declare const CardCopy: {
    ({ src, children, className, ...attributesOptions }: CardCopyProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        src: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
/**
 * An tag inside the card
 */
export interface CardTagProps {
    children?: ReactNode;
    className?: string;
}
export declare const CardTag: {
    ({ children, className, ...attributesOptions }: CardTagProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
/**
 * An date inside the card
 */
export interface CardDateProps {
    date: string;
    children?: ReactNode;
    className?: string;
}
export declare const CardDate: {
    ({ className, date, ...attributesOptions }: CardDateProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        date: PropTypes.Validator<string>;
    };
};
/**
 * A horizontal rule used to divide content inside the card
 */
export interface CardDividerProps {
    children?: ReactNode;
    className?: string;
}
export declare const CardDivider: {
    ({ className, ...attributesOptions }: CardDividerProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
    };
};
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
export declare const CardLink: {
    ({ link, text, className, ...attributesOptions }: CardLinkProps): JSX.Element;
    propTypes: {
        link: PropTypes.Validator<string>;
        text: PropTypes.Validator<string>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * The footer section of the card
 */
export interface CardFooterProps {
    children?: ReactNode;
    className?: string;
    dark?: boolean;
    alt?: string;
}
export declare const CardFooter: {
    ({ dark, children, className, ...attributesOptions }: CardFooterProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        dark: PropTypes.Requireable<boolean>;
        alt: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
/**
 * The footer section of the card
 */
export interface CardTitleProps {
    children?: ReactNode;
    className?: string;
}
export declare const CardTitle: {
    ({ children, className, ...attributeOptions }: CardTitleProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default Card;

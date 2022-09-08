import PropTypes from 'prop-types';
import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from 'react';
export declare type ButtonProps = (ComponentPropsWithoutRef<'button'> | ComponentPropsWithoutRef<'a'>) & {
    /**
     * The component used for the link
     */
    linkComponent?: string;
    /**
     * If this is a link the location it goes
     */
    link?: string;
    /**
     * Anything inside
     */
    children: ReactNode;
    /**
     * The button style
     */
    style?: string;
    /**
     * The type attribute, default: 'button', optional
     */
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    /**
     * The block option, optional
     */
    block?: boolean;
    /**
     * An additional class, optionaltype
     */
    className?: string;
    /**
     * Any other attribute options
     */
    href?: string;
    to?: string;
};
export declare const Button: {
    ({ linkComponent, link, children, style, type, block, className, ...attributeOptions }: ButtonProps): JSX.Element;
    propTypes: {
        link: PropTypes.Requireable<string>;
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        style: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        block: PropTypes.Requireable<boolean>;
        linkComponent: PropTypes.Requireable<string | ((...args: any[]) => any)>;
        className: PropTypes.Requireable<string>;
    };
};
export default Button;

import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
export declare type ButtonProps = (ComponentPropsWithoutRef<'button'> | ComponentPropsWithoutRef<'a'>) & {
    /**
     * The component used for the link
     */
    linkComponent?: ReactElement;
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
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;
export default Button;

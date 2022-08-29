import PropTypes from 'prop-types';
import type { ButtonHTMLAttributes } from 'react';
export interface ButtonProps {
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
    children: string;
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
}
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

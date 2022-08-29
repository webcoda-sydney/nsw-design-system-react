import type { ReactNode } from 'react';
import PropTypes from 'prop-types';
export interface AlertProps {
    /**
     * Alert title
     */
    title?: string;
    /**
     * What kind of alert this is
     */
    as: 'info' | 'warning' | 'error' | 'success';
    /**
     * Add the alt variation class, optional
     */
    alt?: boolean;
    /**
     * Add the dark variation class, optional
     */
    dark?: boolean;
    /**
     * Anything inside the component
     */
    children: ReactNode;
    /**
     *  An additional class, optional
     */
    className?: string;
}
export declare const Alert: {
    ({ title, as, children, className, ...attributeOptions }: AlertProps): JSX.Element;
    propTypes: {
        as: PropTypes.Validator<string>;
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
    };
};
export default Alert;

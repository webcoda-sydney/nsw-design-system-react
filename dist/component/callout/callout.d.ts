import type { ReactNode } from 'react';
import PropTypes from 'prop-types';
export interface CalloutProps {
    /**
     * The title of the header
     */
    title: string;
    /**
     * The tag level (<h1/> <h2/> etc), default: '1'
     */
    level?: number;
    /**
     * Anything inside
     */
    children: ReactNode;
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const Callout: {
    ({ title, level, children, className, ...attributeOptions }: CalloutProps): JSX.Element;
    propTypes: {
        title: PropTypes.Validator<string>;
        level: PropTypes.Requireable<number>;
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
};
export default Callout;

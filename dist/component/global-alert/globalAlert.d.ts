import { ReactNode } from 'react';
import PropTypes from 'prop-types';
export interface GlobalAlertProps {
    title: string;
    content: string;
    ctaText?: string;
    ctaHref?: string;
    as?: 'critical' | 'light' | 'default';
    className?: string;
    children?: ReactNode;
}
export declare const GlobalAlert: {
    (props: GlobalAlertProps): JSX.Element;
    propTypes: {
        title: PropTypes.Validator<string>;
        content: PropTypes.Validator<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        ctaText: PropTypes.Requireable<string>;
        ctaHref: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        as: PropTypes.Requireable<string>;
    };
};
export default GlobalAlert;

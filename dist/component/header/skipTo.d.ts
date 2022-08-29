import PropTypes from 'prop-types';
export interface SkipToProps {
    nav: string;
    content: string;
}
export declare const SkipTo: {
    ({ nav, content }: SkipToProps): JSX.Element;
    propTypes: {
        nav: PropTypes.Validator<string>;
        content: PropTypes.Validator<string>;
    };
};

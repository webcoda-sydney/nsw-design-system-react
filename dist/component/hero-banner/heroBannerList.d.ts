import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
export interface HeroBannerListProps {
    subtitle: string;
    children: ReactNode;
}
export declare const HeroBannerList: {
    ({ subtitle, children }: HeroBannerListProps): JSX.Element;
    propTypes: {
        subtitle: PropTypes.Validator<string>;
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
};
export default HeroBannerList;

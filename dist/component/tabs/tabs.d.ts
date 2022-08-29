import PropTypes from 'prop-types';
import { ReactNode } from 'react';
export interface TabsProps {
    className?: string;
    children?: ReactNode;
}
export declare const Tabs: {
    (props: TabsProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export interface TabItemWrapperProps {
    children: ReactNode;
}
export declare const TabItemWrapper: {
    ({ children }: TabItemWrapperProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
};
export interface TabItemProps {
    urlHash: string;
    title: string;
}
export declare const TabItem: {
    ({ urlHash, title }: TabItemProps): JSX.Element;
    propTypes: {
        urlHash: PropTypes.Validator<string>;
        title: PropTypes.Validator<string>;
    };
};
export interface TabSectionProps {
    urlHash: string;
    children: ReactNode;
}
export declare const TabSection: {
    ({ urlHash, children }: TabSectionProps): JSX.Element;
    propTypes: {
        urlHash: PropTypes.Validator<string>;
        children: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    };
};
export default Tabs;

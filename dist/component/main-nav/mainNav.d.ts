import PropTypes from 'prop-types';
import { ReactNode } from 'react';
export interface NavItem {
    id?: string;
    url: string;
    text: string;
    description?: string;
    target?: string;
    subNav?: NavItem[];
}
export interface MainNavProps {
    /**
     * Array of navigation item objects, format { link: '', text: '' }
     */
    navItems: NavItem[];
    /**
     * Display menu as mega menu
     */
    megaMenu?: boolean;
    /**
     * An additional class, optional
     */
    className?: string;
    renderLink?: (e: NavItem) => ReactNode;
    /**
     * Enable outside click to close the sub navigation
     */
    isCloseWhenOutsideClick?: boolean;
}
export declare const MainNav: (props: MainNavProps) => JSX.Element;
export declare const SubNavHeader: {
    ({ url, text, description, id, target }: Omit<NavItem, 'subNav'>): JSX.Element;
    propTypes: {
        url: PropTypes.Requireable<string>;
        text: PropTypes.Requireable<string>;
        description: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        target: PropTypes.Requireable<string>;
    };
};
export declare type SubNavProps = NavItem & {
    renderLink?: MainNavProps['renderLink'];
};
export declare const SubNav: {
    ({ id, subNav, url, text, description, target, renderLink }: SubNavProps): JSX.Element | null;
    propTypes: {
        subNav: PropTypes.Validator<(PropTypes.InferProps<PropTypes.ValidationMap<any>> | null | undefined)[]>;
        url: PropTypes.Requireable<string>;
        text: PropTypes.Requireable<string>;
        description: PropTypes.Requireable<string>;
        renderLink: PropTypes.Requireable<(...args: any[]) => any>;
        target: PropTypes.Requireable<string>;
    };
};

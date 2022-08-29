import React from 'react';
import PropTypes from 'prop-types';
/**
 * Displays across the top of all NSW Government sites
 */
export interface HeaderProps {
    /**
     * Main site title
     */
    siteTitle?: string;
    /**
     * Optional additional descriptor
     */
    siteDescriptor?: string;
    /**
     * Location of the co-brand logo file
     */
    logo?: string;
    /**
     * Link to the homepage or root url
     */
    headerUrl: string;
    /**
     * Show responsive mobile menu
     */
    mobile?: boolean;
    /**
     * Show search bar menu
     */
    search?: boolean;
    /**
     * Event handler for header search
     */
    onSubmit?: (e: React.FormEvent) => void;
}
export declare const Header: {
    (props: HeaderProps): JSX.Element;
    propTypes: {
        siteTitle: PropTypes.Requireable<string>;
        siteDescriptor: PropTypes.Requireable<string>;
        logo: PropTypes.Requireable<string>;
        headerUrl: PropTypes.Validator<string>;
        mobile: PropTypes.Requireable<boolean>;
        search: PropTypes.Requireable<boolean>;
        onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default Header;

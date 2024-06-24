import React, { ElementType } from 'react';
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
    /**
     * Link component of the logo
     */
    linkComponent?: string | ElementType;
    /**
     * Main logo slot
     */
    slotMainLogo?: React.ReactNode;
}
export declare const Header: (props: HeaderProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export default Header;

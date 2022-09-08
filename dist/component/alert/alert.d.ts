import type { ReactNode } from 'react';
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
    compact?: boolean;
}
export declare const Alert: ({ title, as, children, className, compact, ...attributeOptions }: AlertProps) => JSX.Element;
export default Alert;

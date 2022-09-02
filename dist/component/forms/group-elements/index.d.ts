import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import type { FormOption } from '..';
/**
 * DEFAULT
 * The FormHelper component
 */
export interface FormHelperProps {
    /**
     * Adds invalid/valid state to form group
     */
    status?: 'valid' | 'invalid' | 'default';
    /**
     * Unique ID for this checkbox group
     */
    htmlId?: string;
    /**
     * Anything inside the component
     */
    children?: ReactNode;
    /**
     *  An additional class, optional
     */
    className?: string;
}
export declare const FormHelper: {
    ({ htmlId, children, className, status, ...attributeOptions }: FormHelperProps): JSX.Element;
    propTypes: {
        htmlId: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        error: PropTypes.Requireable<boolean>;
    };
};
/**
 * The label component
 */
export interface FormLabelProps {
    /**
     * Text of the for attribute
     */
    htmlFor?: string;
    /**
     * Text of the label, required
     */
    text: string;
    /**
     * Add the dark variation class, optional
     */
    dark?: boolean;
    /**
     * Display the label inline, optional
     */
    inline?: boolean;
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * Is sreen-reader only
     */
    isSrOnly?: boolean;
}
export declare const FormLabel: ({ htmlFor, text, dark, inline, className, isSrOnly, ...attributeOptions }: FormLabelProps) => JSX.Element;
/**
 * The form group component
 *
 */
export interface FormGroupProps {
    /**
     * Whether the field is in error
     */
    error?: boolean;
    /**
     * Text for error message
     */
    statusText?: string;
    /**
     * Text for label
     */
    label: string;
    /**
     * Adds invalid state to form group
     */
    status?: FormHelperProps['status'];
    /**
     * Text for helper
     */
    helper?: string;
    /**
     * The options for the select, format: { value: '', text: '' }
     */
    options?: FormOption[];
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * Any other attribute options
     */
    htmlId?: string;
    children?: ReactNode;
    /**
     * Hide label but readable for screen-reader
     */
    hideLabel?: boolean;
    isInputGroup?: boolean;
    isInputGroupIcon?: boolean;
}
export declare const FormGroup: ({ htmlId, status, children, label, helper, statusText, error, className, hideLabel, isInputGroup, isInputGroupIcon, ...attributeOptions }: FormGroupProps) => JSX.Element;

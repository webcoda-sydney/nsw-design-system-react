import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { FormGroupProps, FormHelperProps } from '../group-elements';
/**
 * DEFAULT
 * The TextInput component
 *
 */
export declare type TextInputProps = (ComponentPropsWithoutRef<'input'> | ComponentPropsWithoutRef<'textarea'>) & {
    /**
     * The kind of input, can be either 'input' or 'textarea', default: 'input'
     */
    as?: 'input' | 'textarea';
    /**
     * Add the block variation class, optional
     */
    block?: boolean;
    /**
     * Add the number variation class, optional
     */
    number?: boolean;
    /**
     * The type of the field, optional, default: text
     */
    type?: string;
    status?: FormHelperProps['status'];
    htmlId?: FormHelperProps['htmlId'];
};
export declare const TextInput: ({ as, status, block, number, htmlId, type, className, ...attributeOptions }: TextInputProps) => JSX.Element;
/**
 * The text group component
 *
 */
export declare type FormGroupTextProps = TextInputProps & {
    /**
     * Text for error message
     */
    statusText?: string;
    /**
     * Text for label
     */
    label: string;
    /**
     * Text for helper
     */
    helper?: FormGroupProps['helper'];
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * Input type
     */
    inputType?: string;
    children?: ReactNode;
    isInputGroup?: FormGroupProps['isInputGroup'];
    isInputGroupIcon?: FormGroupProps['isInputGroupIcon'];
    hideLabel: FormGroupProps['hideLabel'];
    placeholder?: string;
};
export declare const FormGroupText: ({ status, className, inputType, statusText, label, helper, htmlId, as, children, isInputGroup, isInputGroupIcon, hideLabel, ...attributeOptions }: FormGroupTextProps) => JSX.Element;

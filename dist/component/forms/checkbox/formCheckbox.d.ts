import PropTypes from 'prop-types';
import type { FormOption } from '..';
import { FormGroupProps, FormHelperProps } from '../group-elements';
/**
 * An item inside the Select component
 *
 */
export interface CheckboxItemProps {
    /**
     * The text of this option
     */
    text: string;
    value: FormOption['value'];
    htmlId?: FormHelperProps['htmlId'];
    status?: FormHelperProps['status'];
    as?: 'group' | false;
    uniqueID?: string;
}
export declare const CheckboxItem: {
    ({ text, htmlId, value, status, as, uniqueID, ...attributeOptions }: CheckboxItemProps): JSX.Element;
    propTypes: {
        text: PropTypes.Validator<string>;
        value: PropTypes.Validator<string>;
        className: PropTypes.Requireable<string>;
        htmlId: PropTypes.Requireable<string>;
        uniqueID: PropTypes.Requireable<(...args: any[]) => any>;
        status: PropTypes.Requireable<string>;
        as: PropTypes.Requireable<string>;
    };
};
/**
 * The checkbox group component
 */
export interface FormGroupCheckboxProps extends FormGroupProps {
    /**
     * Adds invalid/valid state to form group
     */
    status?: CheckboxItemProps['status'];
    /**
     * Text for error message
     */
    statusText?: string;
    /**
     * Unique ID for this checkbox group
     */
    htmlId?: string;
    /**
     * Text for label
     */
    label?: string;
    /**
     * Text for helper
     */
    helper?: string;
    /**
     * The options for the select, format: { value: '', text: '' }
     */
    options: FormOption[];
    /**
     * An additional class, optional
     */
    className?: string;
    as?: 'group' | false;
}
export declare const FormGroupCheckbox: {
    ({ className, as, status, label, options, htmlId, statusText, helper }: FormGroupCheckboxProps): JSX.Element;
    propTypes: {
        status: PropTypes.Requireable<string>;
        statusText: PropTypes.Requireable<string>;
        htmlId: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        as: PropTypes.Requireable<string | boolean>;
        helper: PropTypes.Requireable<string>;
        options: PropTypes.Validator<(PropTypes.InferProps<{
            value: PropTypes.Requireable<string>;
            text: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        className: PropTypes.Requireable<string>;
    };
};

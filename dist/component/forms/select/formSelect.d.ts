import PropTypes from 'prop-types';
import { FormGroupProps, FormHelperProps } from '../group-elements';
import type { FormOption } from '..';
/**
 * An item inside the Select component
 */
export declare const SelectItem: {
    ({ text, value }: FormOption): JSX.Element;
    propTypes: {
        text: PropTypes.Validator<string>;
        value: PropTypes.Validator<string>;
    };
};
/**
 * DEFAULT
 * The select component
 * */
export interface SelectProps {
    /**
     * The options for the select, format: { value: '', text: '' }
     */
    options: FormOption[];
    /**
     * The block option
     */
    block?: boolean;
    /**
     * Mark this field as either 'valid' or 'invalid', optional
     */
    status?: FormHelperProps['status'];
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * Option value of the selected item
     */
    selected?: string;
    htmlId?: string;
}
export declare const Select: {
    ({ htmlId, selected, options, block, status, className, ...attributeOptions }: SelectProps): JSX.Element;
    propTypes: {
        options: PropTypes.Validator<(PropTypes.InferProps<{
            value: PropTypes.Validator<string>;
            text: PropTypes.Validator<string>;
        }> | null | undefined)[]>;
        block: PropTypes.Requireable<boolean>;
        htmlId: PropTypes.Requireable<string>;
        status: PropTypes.Requireable<string>;
        selected: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * The text group component
 *
 */
export declare type FormGroupSelectProps = FormGroupProps & SelectProps;
export declare const FormGroupSelect: {
    ({ status, selected, statusText, label, helper, options, htmlId, }: FormGroupSelectProps): JSX.Element;
    propTypes: {
        status: PropTypes.Requireable<string>;
        statusText: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        helper: PropTypes.Requireable<string>;
        selected: PropTypes.Requireable<string>;
        options: PropTypes.Validator<(PropTypes.InferProps<{
            value: PropTypes.Validator<string>;
            text: PropTypes.Validator<string>;
        }> | null | undefined)[]>;
        htmlId: PropTypes.Requireable<string>;
    };
};

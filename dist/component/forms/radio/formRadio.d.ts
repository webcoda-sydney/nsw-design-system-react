import PropTypes from 'prop-types';
import { FormHelperProps } from '../group-elements';
import type { FormGroupCheckboxProps } from '../checkbox/formCheckbox';
import type { FormOption } from '..';
/**
 * An item inside the Radio component
 */
export interface RadioItemProps extends Pick<FormHelperProps, 'htmlId' | 'status'> {
    /**
     * The text of this option
     */
    text: string;
    /**
     * The value of this option
     */
    value: FormOption['value'];
    uniqueID?: string;
}
export declare const RadioItem: {
    ({ text, htmlId, value, status, uniqueID, ...attributeOptions }: RadioItemProps): JSX.Element;
    propTypes: {
        text: PropTypes.Validator<string>;
        value: PropTypes.Validator<string>;
        className: PropTypes.Requireable<string>;
        htmlId: PropTypes.Requireable<string>;
        status: PropTypes.Requireable<string>;
        as: PropTypes.Requireable<string>;
        uniqueID: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
/**
 * The Form group radio component
 *
 * @param  {string}  status           - Adds invalid state to form group
 * @param  {string}  statusText        - Text for error message
 * @param  {string}  label            - Text for label
 * @param  {string}  helper           - Text for helper
 * @param  {array}   options          - The options for the select, format: { value: '', text: '' }
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */
export interface FormGroupRadioProps extends FormGroupCheckboxProps {
}
export declare const FormGroupRadio: {
    ({ className, as, label, helper, status, htmlId, statusText, options }: FormGroupRadioProps): JSX.Element;
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

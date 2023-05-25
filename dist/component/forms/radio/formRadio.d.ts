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
    onChange?: FormGroupCheckboxProps['onChange'];
    checked?: boolean;
}
export declare const RadioItem: ({ text, htmlId, value, status, uniqueID, onChange, checked, ...attributeOptions }: RadioItemProps) => JSX.Element;
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
export declare const FormGroupRadio: ({ className, as, label, helper, status, htmlId, statusText, options, onChange }: FormGroupRadioProps) => JSX.Element;

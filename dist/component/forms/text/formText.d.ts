import PropTypes from 'prop-types';
import { FormHelperProps } from '../group-elements';
/**
 * DEFAULT
 * The TextInput component
 *
 */
export interface TextInputProps extends Pick<FormHelperProps, 'status' | 'htmlId' | 'className'> {
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
}
export declare const TextInput: {
    ({ as, status, block, number, htmlId, type, className, ...attributeOptions }: TextInputProps): JSX.Element;
    propTypes: {
        as: PropTypes.Requireable<string>;
        block: PropTypes.Requireable<boolean>;
        number: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        htmlId: PropTypes.Requireable<string>;
        status: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
    };
};
/**
 * The text group component
 *
 */
export interface FormGroupTextProps extends Pick<TextInputProps, 'as' | 'htmlId' | 'status'> {
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
    helper: string;
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * Input type
     */
    inputType?: string;
}
export declare const FormGroupText: {
    ({ status, className, inputType, statusText, label, helper, htmlId, as, ...attributeOptions }: FormGroupTextProps): JSX.Element;
    propTypes: {
        status: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        as: PropTypes.Requireable<string>;
        statusText: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        helper: PropTypes.Requireable<string>;
        htmlId: PropTypes.Requireable<string>;
        inputType: PropTypes.Requireable<string>;
    };
};

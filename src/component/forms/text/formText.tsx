import React from 'react'
import PropTypes from 'prop-types'
import nextId from 'react-id-generator'
import { FormGroup, FormHelperProps } from '../group-elements'
import type { FormOption } from '..'

/**
 * DEFAULT
 * The TextInput component
 *
 */
export interface TextInputProps
	extends Pick<FormHelperProps, 'status' | 'htmlId' | 'className'> {
	/**
	 * The kind of input, can be either 'input' or 'textarea', default: 'input'
	 */
	as?: 'input' | 'textarea'
	/**
	 * Add the block variation class, optional
	 */
	block?: boolean
	/**
	 * Add the number variation class, optional
	 */
	number?: boolean
	/**
	 * The type of the field, optional, default: text
	 */
	type?: string
}
export const TextInput = ({
	as = 'input',
	status,
	block,
	number,
	htmlId = '0',
	type = 'text',
	className = '',
	...attributeOptions
}: TextInputProps) =>
	as === 'textarea' ? (
		<textarea
			className={
				`nsw-form__input ${className}` +
				`${block ? ' nsw-form__input--block' : ''}` +
				`${number ? ' nsw-form__input--number' : ''}`
			}
			aria-invalid={status === 'invalid' ? 'true' : 'false'}
			aria-describedby={
				status === 'invalid'
					? `helper${htmlId} error${htmlId}`
					: `helper${htmlId}`
			}
			id={htmlId}
			{...attributeOptions}
		/>
	) : (
		<input
			className={
				`nsw-form__input ${className}` +
				`${block ? ' nsw-form__input--block' : ''}` +
				`${number ? ' nsw-form__input--number' : ''}`
			}
			aria-invalid={status === 'invalid' ? 'true' : 'false'}
			aria-describedby={
				status === 'invalid'
					? `helper${htmlId} error${htmlId}`
					: `helper${htmlId}`
			}
			type={type}
			{...attributeOptions}
			id={htmlId}
		/>
	)

TextInput.propTypes = {
	as: PropTypes.oneOf(['input', 'text', 'textarea']),
	block: PropTypes.bool,
	number: PropTypes.bool,
	className: PropTypes.string,
	htmlId: PropTypes.string,
	status: PropTypes.oneOf(['valid', 'invalid', 'default']),
	type: PropTypes.string
}
/**
 * The text group component
 *
 */
export interface FormGroupTextProps
	extends Pick<TextInputProps, 'as' | 'htmlId' | 'status'> {
	/**
	 * Text for error message
	 */
	statusText?: string
	/**
	 * Text for label
	 */
	label: string
	/**
	 * Text for helper
	 */
	helper: string
	/**
	 * An additional class, optional
	 */
	className?: string

	/**
	 * Input type
	 */
	inputType?: string
}
export const FormGroupText = ({
	status = 'default',
	className = '',
	inputType,
	statusText,
	label,
	helper,
	htmlId = nextId(),
	as,
	...attributeOptions
}: FormGroupTextProps) => (
	<FormGroup
		status={status}
		statusText={statusText}
		label={label}
		helper={helper}
		htmlId={htmlId}
	>
		<TextInput
			{...attributeOptions}
			as={as}
			status={status}
			htmlId={htmlId}
			type={inputType}
		/>
	</FormGroup>
)

FormGroupText.propTypes = {
	status: PropTypes.oneOf(['valid', 'invalid', 'default']),
	className: PropTypes.string,
	as: PropTypes.oneOf(['input', 'textarea']),
	statusText: PropTypes.string,
	label: PropTypes.string,
	helper: PropTypes.string,
	htmlId: PropTypes.string,
	inputType: PropTypes.string
}

import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import nextId from 'react-id-generator'
import { FormGroup, FormGroupProps, FormHelperProps } from '../group-elements'

/**
 * DEFAULT
 * The TextInput component
 *
 */
export type TextInputProps = (ComponentPropsWithoutRef<'input'> | ComponentPropsWithoutRef<'textarea'>) & {
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

	status?: FormHelperProps['status']
	htmlId?: FormHelperProps['htmlId']
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
}: TextInputProps) => {
	if(as === 'textarea') {
		return (
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
			{...attributeOptions as ComponentPropsWithoutRef<'textarea'>}
		/>
		)
	}

	return (
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
			{...(attributeOptions as ComponentPropsWithoutRef<'input'>)}
			id={htmlId}
		/>
	)
}

// TextInput.propTypes = {
// 	as: PropTypes.oneOf(['input', 'text', 'textarea']),
// 	block: PropTypes.bool,
// 	number: PropTypes.bool,
// 	className: PropTypes.string,
// 	htmlId: PropTypes.string,
// 	status: PropTypes.oneOf(['valid', 'invalid', 'default']),
// 	type: PropTypes.string
// }
/**
 * The text group component
 *
 */
export type FormGroupTextProps = TextInputProps & {
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
	helper?: FormGroupProps['helper']
	/**
	 * An additional class, optional
	 */
	className?: string

	/**
	 * Input type
	 */
	inputType?: string
	children?: ReactNode
	isInputGroup?: FormGroupProps['isInputGroup']
	isInputGroupIcon?: FormGroupProps['isInputGroupIcon']
	hideLabel: FormGroupProps['hideLabel']
	placeholder?: string
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
	children,
	isInputGroup = false,
	isInputGroupIcon = false,
	hideLabel,
	...attributeOptions
}: FormGroupTextProps) => (
	<FormGroup
		className={className}
		status={status}
		statusText={statusText}
		label={label}
		helper={helper}
		htmlId={htmlId}
		isInputGroup={isInputGroup}
		isInputGroupIcon={isInputGroupIcon}
		hideLabel={hideLabel}
	>
		<TextInput
			{...attributeOptions}
			as={as}
			status={status}
			htmlId={htmlId}
			type={inputType}
		/>
		{children}
	</FormGroup>
)

// FormGroupText.propTypes = {
// 	status: PropTypes.oneOf(['valid', 'invalid', 'default']),
// 	className: PropTypes.string,
// 	as: PropTypes.oneOf(['input', 'textarea']),
// 	statusText: PropTypes.string,
// 	label: PropTypes.string,
// 	helper: PropTypes.string,
// 	htmlId: PropTypes.string,
// 	inputType: PropTypes.string
// }

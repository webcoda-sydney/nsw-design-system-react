import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import nextId from 'react-id-generator'
import type { FormOption } from '..'

const defHtmlId = nextId()

/**
 * DEFAULT
 * The FormHelper component
 */
export interface FormHelperProps {
	/**
	 * Adds invalid/valid state to form group
	 */
	status?: 'valid' | 'invalid' | 'default'

	/**
	 * Unique ID for this checkbox group
	 */
	htmlId?: string

	/**
	 * Anything inside the component
	 */
	children?: ReactNode

	/**
	 *  An additional class, optional
	 */
	className?: string
}
export const FormHelper = ({
	htmlId = defHtmlId,
	children,
	className,
	status,
	...attributeOptions
}: FormHelperProps) => (
	<span
		id={`${status === 'invalid' ? 'error' : 'helper'}${htmlId}`}
		className={`nsw-form__helper ${
			status === 'invalid' ? ' nsw-form__helper--error' : ''
		} ${status === 'valid' ? ' nsw-form__helper--valid' : ''} ${className}`}
		{...attributeOptions}
	>
		<span className='material-icons nsw-material-icons' aria-hidden='true'>
			{status === 'invalid' ? 'cancel' : ''}
			{status === 'valid' ? 'check_circle' : ''}
		</span>
		{children}
	</span>
)

FormHelper.propTypes = {
	htmlId: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	error: PropTypes.bool
}

/**
 * The label component
 */
export interface FormLabelProps {
	/**
	 * Text of the for attribute
	 */
	htmlFor?: string

	/**
	 * Text of the label, required
	 */
	text: string

	/**
	 * Add the dark variation class, optional
	 */
	dark?: boolean

	/**
	 * Display the label inline, optional
	 */
	inline?: boolean

	/**
	 * An additional class, optional
	 */
	className?: string
}
export const FormLabel = ({
	htmlFor,
	text,
	dark,
	inline,
	className = '',
	...attributeOptions
}: FormLabelProps) => (
	<label
		htmlFor={htmlFor}
		className={`nsw-form__label ${className}`}
		{...attributeOptions}
	>
		{text}
	</label>
)

FormLabel.propTypes = {
	text: PropTypes.string.isRequired,
	dark: PropTypes.bool,
	inline: PropTypes.bool,
	className: PropTypes.string,
	htmlFor: PropTypes.string
}

/**
 * The form group component
 *
 */
export interface FormGroupProps {
	/**
	 * Whether the field is in error
	 */
	error?: boolean
	/**
	 * Text for error message
	 */
	statusText?: string
	/**
	 * Text for label
	 */
	label: string
	/**
	 * Adds invalid state to form group
	 */
	status?: FormHelperProps['status']
	/**
	 * Text for helper
	 */
	helper?: string
	/**
	 * The options for the select, format: { value: '', text: '' }
	 */
	options?: FormOption[]
	/**
	 * An additional class, optional
	 */
	className?: string
	/**
	 * Any other attribute options
	 */
	htmlId?: string

	children?: ReactNode
}

export const FormGroup = ({
	htmlId = nextId(),
	status = 'default',
	children,
	label,
	helper,
	statusText,
	error,
	className = '',
	...attributeOptions
}: FormGroupProps) => (
	<div className={`nsw-form__group ${className}`} {...attributeOptions}>
		<FormLabel htmlFor={htmlId} text={label} />
		{helper ? <FormHelper htmlId={htmlId}>{helper}</FormHelper> : ''}
		{React.Children.map(children, (child) =>
			React.cloneElement(child as any, { error })
		)}
		{status ? (
			<FormHelper htmlId={htmlId} status={status}>
				{statusText}
			</FormHelper>
		) : (
			''
		)}
	</div>
)

FormGroup.propTypes = {
	status: PropTypes.oneOf(['invalid', 'valid', 'default']),
	error: PropTypes.bool,
	className: PropTypes.string,
	htmlId: PropTypes.string,
	label: PropTypes.string,
	children: PropTypes.node,
	helper: PropTypes.string,
	statusText: PropTypes.string,
	uniqueID: PropTypes.func
}

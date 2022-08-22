import React from 'react'
import PropTypes from 'prop-types'
import nextId from 'react-id-generator'
import { FormGroup, FormGroupProps, FormHelperProps } from '../group-elements'
import type { FormOption } from '..'

const defHtmlId = nextId()

/**
 * An item inside the Select component
 */
export const SelectItem = ({ text, value }: FormOption) => (
	<option value={value}>{text}</option>
)

SelectItem.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
}

/**
 * DEFAULT
 * The select component
 * */
export interface SelectProps {
	/**
	 * The options for the select, format: { value: '', text: '' }
	 */
	options: FormOption[]
	/**
	 * The block option
	 */
	block?: boolean
	/**
	 * Mark this field as either 'valid' or 'invalid', optional
	 */
	status?: FormHelperProps['status']
	/**
	 * An additional class, optional
	 */
	className?: string
	/**
	 * Option value of the selected item
	 */
	selected?: string

	htmlId?: string
}
export const Select = ({
	htmlId,
	selected,
	options,
	block,
	status = 'default',
	className = '',
	...attributeOptions
}: SelectProps) => (
	<select
		className={`nsw-form__select ${className}`}
		aria-invalid={status === 'invalid' ? 'true' : undefined}
		aria-describedby={
			status === 'invalid'
				? `helper${htmlId} error${htmlId}`
				: `helper${htmlId}`
		}
		id={htmlId}
		defaultValue={selected}
		{...attributeOptions}
	>
		{options.map((option) => (
			<SelectItem key={option.value} {...option} />
		))}
	</select>
)

Select.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	).isRequired,
	block: PropTypes.bool,
	htmlId: PropTypes.string,
	status: PropTypes.oneOf(['valid', 'invalid', 'default']),
	selected: PropTypes.string,
	className: PropTypes.string
}

/**
 * The text group component
 *
 */
export type  FormGroupSelectProps = FormGroupProps & SelectProps
export const FormGroupSelect = ({
	status = 'default',
	selected,
	statusText,
	label,
	helper,
	options,
	htmlId =  defHtmlId,
}: FormGroupSelectProps) => (
	<FormGroup
		status={status}
		statusText={statusText}
		label={label}
		helper={helper}
		htmlId={htmlId}
	>
		<Select options={options} selected={selected} />
	</FormGroup>
)

FormGroupSelect.propTypes = {
	status: PropTypes.oneOf(['valid', 'invalid', 'default']),
	statusText: PropTypes.string,
	label: PropTypes.string,
	helper: PropTypes.string,
	selected: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	).isRequired,
	htmlId: PropTypes.string
}

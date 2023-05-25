import PropTypes from 'prop-types'
import { ChangeEvent, Fragment } from 'react'
import nextId from 'react-id-generator'
import type { FormOption } from '..'
import { FormGroupProps, FormHelper, FormHelperProps } from '../group-elements'

/**
 * An item inside the Select component
 *
 */
export interface CheckboxItemProps {
	/**
	 * The text of this option
	 */
	text: string
	value: FormOption['value']
	htmlId?: FormHelperProps['htmlId']
	status?: FormHelperProps['status']
	as?: 'group' | false
	uniqueID?: string
	onChange?: FormGroupCheckboxProps['onChange']
	checked?: boolean
}
export const CheckboxItem = ({
	text,
	htmlId,
	value,
	status,
	as,
	uniqueID = nextId(),
	onChange,
	checked = false,
	...attributeOptions
}: CheckboxItemProps) => (
	<Fragment>
		<input
			className='nsw-form__checkbox-input'
			type='checkbox'
			name={htmlId}
			aria-invalid={
				status === 'invalid' && !(as === 'group') ? 'true' : undefined
			}
			aria-describedby={
				status === 'invalid'
					? `helper${htmlId} error${htmlId}`
					: `helper${htmlId}`
			}
			id={uniqueID}
			value={value}
			checked={checked}
			onChange={onChange}
			{...attributeOptions}
		/>
		<label className='nsw-form__checkbox-label' htmlFor={uniqueID}>
			{text}
		</label>
	</Fragment>
)

CheckboxItem.propTypes = {
	text: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	className: PropTypes.string,
	htmlId: PropTypes.string,
	uniqueID: PropTypes.func,
	status: PropTypes.oneOf(['valid', 'invalid', 'default']),
	as: PropTypes.string
}

/**
 * The checkbox group component
 */

export interface FormGroupCheckboxProps extends FormGroupProps {
	/**
	 * Adds invalid/valid state to form group
	 */
	status?: CheckboxItemProps['status']

	/**
	 * Text for error message
	 */
	statusText?: string

	/**
	 * Unique ID for this checkbox group
	 */
	htmlId?: string

	/**
	 * Text for label
	 */
	label: string

	/**
	 * Text for helper
	 */
	helper?: string

	/**
	 * The options for the select, format: { value: '', text: '' }
	 */
	options: FormOption[]

	/**
	 * An additional class, optional
	 */
	className?: string

	as?: 'group' | false

	onChange?: (e: ChangeEvent<HTMLInputElement>) => any
}
export const FormGroupCheckbox = ({
	className = '',
	as,
	status = 'default',
	label,
	options,
	htmlId = nextId(),
	statusText,
	helper,
	onChange,
}: FormGroupCheckboxProps) => (
	<div className={`nsw-form__group ${className}`}>
		<fieldset
			className='nsw-form__fieldset'
			aria-invalid={status === 'invalid' ? 'true' : undefined}
		>
			{as === 'group' ? (
				<legend>
					<span className='nsw-form__legend'>{label}</span>
					{helper ? (
						<FormHelper htmlId={htmlId}>{helper}</FormHelper>
					) : (
						''
					)}
					{status ? (
						<FormHelper htmlId={htmlId} status={status}>
							{statusText}
						</FormHelper>
					) : (
						''
					)}
				</legend>
			) : (
				''
			)}

			<div>
				{options.map((option) => (
					<CheckboxItem
						key={option.value}
						{...option}
						as={as}
						htmlId={htmlId}
						status={status}
						checked={option.selected}
						onChange={onChange}
					/>
				))}
			</div>
			{status && as !== 'group' ? (
				<FormHelper htmlId={htmlId} status={status}>
					{statusText}
				</FormHelper>
			) : (
				''
			)}
		</fieldset>
	</div>
)

FormGroupCheckbox.propTypes = {
	status: PropTypes.oneOf(['valid', 'invalid', 'default']),
	statusText: PropTypes.string,
	htmlId: PropTypes.string,
	label: PropTypes.string,
	as: PropTypes.oneOf(['group', false]),
	helper: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			text: PropTypes.string
		})
	).isRequired,
	className: PropTypes.string
}

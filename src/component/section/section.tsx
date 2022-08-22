import PropTypes from 'prop-types'
import type { ReactNode } from 'react'

/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
	full: '',
	half: 'nsw-section--half-padding',
	none: 'nsw-section--no-padding'
}

/**
 * Docs gen
 * Page alert
 *
 */
export interface SectionProps {
	/**
	 * Theme (default = white)
	 */
	style?:
		| 'white'
		| 'brand-dark'
		| 'brand-light'
		| 'brand-supplementary'
		| 'black'
		| 'off-white'
		| 'grey-01'
		| 'grey-02'
		| 'grey-03'
		| 'grey-04'
	/**
	 * Padding style
	 */
	padding?: 'full' | 'half' | 'none'
	/**
	 * Whether to wrap children in nsw-container
	 */
	container?: boolean
	/**
	 * Anything inside the component
	 */
	children?: ReactNode
	/**
	 * An additional class, optional
	 */
	className?: string
	/**
	 * Whether the section is inline
	 */
	box?: boolean
}
export const Section = ({
	children,
	style = 'white',
	container = true,
	padding = 'full',
	box = false,
	className = '',
	...attributeOptions
}: SectionProps) => (
	<div
		className={`nsw-section ${className} ${
			options[padding]
		} nsw-section--${style} ${box ? 'nsw-section--box' : ''}`}
		{...attributeOptions}
	>
		<div className={container ? 'nsw-container' : ''}>{children}</div>
	</div>
)

Section.propTypes = {
	padding: PropTypes.oneOf(['full', 'half', 'none']),
	style: PropTypes.oneOf([
		'white',
		'brand-dark',
		'brand-light',
		'brand-supplementary',
		'black',
		'off-white',
		'grey-01',
		'grey-02',
		'grey-03',
		'grey-04'
	]),
	children: PropTypes.node.isRequired,
	container: PropTypes.bool,
	className: PropTypes.string,
	box: PropTypes.bool
}
export default Section

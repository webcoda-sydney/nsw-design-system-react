import type { ReactNode } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
  info: 'nsw-in-page-alert--info',
  warning: 'nsw-in-page-alert--warning',
  error: 'nsw-in-page-alert--error',
  success: 'nsw-in-page-alert--success',
};

/**
 * All different kind of alert icons
 *
 * @type {Object}
 */
const icons = {
	info: 'ic:baseline-info',
	warning: 'ic:baseline-error',
	error: 'ic:baseline-cancel',
	success: 'ic:baseline-check-circle'
}

export interface AlertProps {
    /**
     * Alert title
     */
    title?: string

    /**
     * What kind of alert this is
     */
    as: 'info' | 'warning' | 'error' | 'success'

    /**
     * Add the alt variation class, optional
     */
    alt?: boolean

    /**
     * Add the dark variation class, optional
     */
    dark?: boolean

    /**
     * Anything inside the component
     */
    children: ReactNode

    /**
     *  An additional class, optional
     */
    className?: string

	compact?: boolean
}

export const Alert = ({
	title = '',
	as,
	children,
	className = '',
	compact = false,
	...attributeOptions
}: AlertProps) => (
	<div
		className={`nsw-in-page-alert ${className} ${options[as]} ${
			compact ? 'nsw-in-page-alert--compact' : ''
		}`.trim()}
		{...attributeOptions}
	>
		<Icon
			icon={icons[as]}
			className='nsw-in-page-alert__icon'
		/>
		<div className='nsw-in-page-alert__content'>
			{title && <h5>{title}</h5>}
			{children}
		</div>
	</div>
)

// Alert.propTypes = {
//   as: PropTypes.oneOf(['info', 'warning', 'error', 'success']).isRequired,
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
//   title: PropTypes.string,
// };

export default Alert;

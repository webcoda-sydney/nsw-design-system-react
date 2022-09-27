import { useRef, useEffect, ReactNode } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

/**
 * All different kind of button options
 *
 * @type {Object}
 */
const options = {
	critical: 'nsw-global-alert--critical',
	light: 'nsw-global-alert--light',
	default: ''
}

const buttonStyles = {
	default: 'nsw-button nsw-button--white',
	critical: 'nsw-button nsw-button--white',
	light: 'nsw-button nsw-button--dark'
}

export interface GlobalAlertProps {
	title: string
	content: string
	ctaText?: string
	ctaHref?: string
	as?: 'critical' | 'light' | 'default'
	className?: string
	children?: ReactNode
}
export const GlobalAlert = (props: GlobalAlertProps) => {

	const {
		title,
		content,
		ctaText,
		ctaHref,
		as = 'default',
		className = '',
		children,
		...attributeOptions
	} = props
	const ref = useRef(null)

	useEffect(() => {
		(async () => {
			const { GlobalAlert } = await import('nsw-design-system/src/main')
			new GlobalAlert(ref.current).init()
		})()
	}, [])

	return (
		<div
			ref={ref}
			className={`nsw-global-alert ${className} ${options[as]}`}
			{...attributeOptions}
		>
			<div className='nsw-global-alert__wrapper'>
				<div className='nsw-global-alert__content'>
					<div className='nsw-global-alert__title'>{title}</div>
					<p>{content}</p>
				</div>
				<p>
					{ctaText && ctaHref ? (
						<a
							href={ctaHref}
							className={
								as ? buttonStyles[as] : buttonStyles['default']
							}
						>
							{ctaText}
						</a>
					) : (
						''
					)}
				</p>
				<button
					type='button'
					className='nsw-icon-button js-close-alert'
				>
					<Icon icon="ic:baseline-close" />
					<span className='sr-only'>Close message</span>
				</button>
			</div>
		</div>
	)
}

GlobalAlert.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	children: PropTypes.node,
	ctaText: PropTypes.string,
	ctaHref: PropTypes.string,
	className: PropTypes.string,
	as: PropTypes.oneOf(['critical', 'light', 'default'])
}

export default GlobalAlert

import { useRef, useEffect, ReactNode } from 'react'
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
	content: ReactNode
	ctaText?: string
	ctaHref?: string
	as?: 'critical' | 'light' | 'default'
	className?: string
	children?: ReactNode
	onClose?: (_e: React.MouseEvent<HTMLButtonElement>) => void
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
		onClose,
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
					{
						typeof content === 'string'  ? (
							<p>{content}</p>
						) : content
					}
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
					onClick={onClose}
				>
					<Icon icon="ic:baseline-close" />
					<span className='sr-only'>Close message</span>
				</button>
			</div>
		</div>
	)
}

export default GlobalAlert

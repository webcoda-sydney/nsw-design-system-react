import PropTypes from 'prop-types'
import type { ElementType, ReactNode } from 'react'

/**
 * The card  component
 */
export interface CardProps {
	/**
	 * The link that clicking the card goes to
	 */
	link?: string

	linkTarget?: HTMLAnchorElement['target']

	/**
	 * The tag (optional)
	 */
	tag?: string

	/**
	 * Card style
	 */
	style?: string

	/**
	 * The date (optional)
	 */
	date?: string

	/**
	 * The date display format (optional, def to '4th June 2021')
	 */
	dateMomentFormat?: string

	/**
	 * The image URL/path (optional)
	 */
	image?: ReactNode

	/**
	 * The alt text for image (mandatory if image supplied)
	 */
	imageAlt?: string

	/**
	 * Title for card
	 */
	headline: ReactNode

	/**
	 * Adds highlight bar if true
	 */
	highlight?: boolean

	/**
	 * An additional class, optional
	 */
	className?: string

	href?: string

	children?: ReactNode

	linkComponent?: string | ElementType
}

const Card = ({
	link,
	linkTarget,
	style = 'white',
	headline,
	highlight,
	tag,
	date,
	image,
	imageAlt,
	className = '',
	children,
	linkComponent: LinkComponent = 'a',
	...attributesOptions
}: CardProps) => {
	let CardContainer = 'div' as ElementType

	if (link !== undefined) {
		CardContainer = 'div'
		// attributesOptions.href = link
	}

	const renderImage = () => {
		if(!image) {
			return ''
		}
		if(typeof image === 'string') {
			return <CardImage src={image} alt={imageAlt || ''} />
		}
		if(typeof image === 'function') {
			return <CardImage alt={imageAlt || ''}>{image}</CardImage>
		}
	}

	return (
		<CardContainer
			className={
				`nsw-card nsw-card--${style} ${className}` +
				`${headline && !children ? 'nsw-card--headline' : ''} ` +
				`${highlight ? 'nsw-card--highlight' : ''} `
			}
			{...attributesOptions}
		>
			{renderImage()}
			<CardContent>
				{tag ? <CardTag>{tag}</CardTag> : ''}
				{date ? <CardDate date={date} /> : ''}
				{headline ? (
					<CardHeader
						link={link}
						linkTarget={linkTarget}
						linkComponent={LinkComponent}
					>
						{headline}
					</CardHeader>
				) : (
					''
				)}
				{children}
			</CardContent>
		</CardContainer>
	)
}

/**
 * An inner container for the card, with padding of 1 rem
 */
export interface CardContentProps {
	/**
	 * An additional class, optional
	 */
	className?: string

	children?: ReactNode
}
export const CardContent = ({
	className,
	children,
	...attributesOptions
}: CardContentProps) => (
	<div className={`nsw-card__content ${className}`} {...attributesOptions}>
		{children}
		<span
			className='material-icons nsw-material-icons nsw-card__icon'
			aria-hidden='true'
		>
			east
		</span>
	</div>
)

/**
 * An inner container for the card, with padding of 1 rem
 */
export interface CardHeaderProps {
	/**
	 * Image source
	 */
	link?: string
	linkTarget?: CardProps['linkTarget']
	linkComponent?: CardProps['linkComponent']

	/**
	 * An additional class, optional
	 */
	className?: string

	children?: ReactNode
}
export const CardHeader = ({
	className = '',
	link,
	linkComponent: LinkComponent = 'a',
	linkTarget,
	children
}: CardHeaderProps) => {
	const HeadingTag = 'div'
	if (link !== undefined) {
		return (
			<HeadingTag className={`nsw-card__title ${className}`}>
				<LinkComponent
					href={link}
					target={linkTarget}
					className='nsw-card__link'
				>
					{children}
				</LinkComponent>
			</HeadingTag>
		)
	}
	return <HeadingTag className='nsw-card__title'>{children}</HeadingTag>
}

/**
 * An image inside the card
 */
export interface CardImageProps {
	/**
	 * Image source
	 */
	src?: string

	alt?: string
	/**
	 * An additional class, optional
	 */
	className?: string
	children?: ReactNode
}
export const CardImage = ({
	src,
	className = '',
	alt = '',
	children,
	...attributesOptions
}: CardImageProps) => (
	<div className='nsw-card__image'>
		{
			children || (
				<img className={className} src={src} alt={alt} {...attributesOptions} />
			)
		}
	</div>
)

/**
 * An paragraph inside the card
 */
export interface CardCopyProps {
	src?: string
	children?: ReactNode
	className?: string
}
export const CardCopy = ({
	src,
	children,
	className = '',
	...attributesOptions
}: CardCopyProps) => (
	<div className={`nsw-card__copy ${className}`} {...attributesOptions}>
		{children}
	</div>
)

/**
 * An tag inside the card
 */
export interface CardTagProps {
	children?: ReactNode
	className?: string
}
export const CardTag = ({
	children,
	className = '',
	...attributesOptions
}: CardTagProps) => (
	<p className={`nsw-card__tag ${className}`} {...attributesOptions}>
		{children}
	</p>
)

/**
 * An date inside the card
 */
export interface CardDateProps {
	date: string
	children?: ReactNode
	className?: string
}
export const CardDate = ({
	className = '',
	date,
	...attributesOptions
}: CardDateProps) => (
	<p className={`nsw-card__date ${className}`} {...attributesOptions}>
		<time dateTime={date}>{date}</time>
	</p>
)

/**
 * A horizontal rule used to divide content inside the card
 */

export interface CardDividerProps {
	children?: ReactNode
	className?: string
}
export const CardDivider = ({
	className = '',
	...attributesOptions
}: CardDividerProps) => (
	<hr className={`nsw-card__divider ${className}`} {...attributesOptions} />
)

/**
 * Use when making the entire click area of card clickable.
 */
export interface CardLinkProps {
	/**
	 * The location of the link
	 */
	link: string

	/**
	 * The text of the link
	 */
	text: string

	/**
	 * An additional class, optional
	 */
	className?: string

	children?: ReactNode
}
export const CardLink = ({
	link,
	text,
	className = '',
	...attributesOptions
}: CardLinkProps) => (
	<a
		href={link}
		className={`nsw-card--clickable__link ${className}`}
		{...attributesOptions}
	>
		{text}
	</a>
)

/**
 * The footer section of the card
 */
export interface CardFooterProps {
	children?: ReactNode
	className?: string
	dark?: boolean
	alt?: string
}
export const CardFooter = ({
	dark = false,
	children,
	className = '',
	...attributesOptions
}: CardFooterProps) => (
	<div className={`nsw-card__footer ${className}`} {...attributesOptions}>
		{children}
	</div>
)

/**
 * The footer section of the card
 */
export interface CardTitleProps {
	children?: ReactNode
	className?: string
}
export const CardTitle = ({
	children,
	className = '',
	...attributeOptions
}: CardTitleProps) => {
	const HeadingTag = `div`

	return (
		<HeadingTag
			className={`nsw-card__title ${className}`}
			{...attributeOptions}
		>
			{children}
		</HeadingTag>
	)
}

export default Card

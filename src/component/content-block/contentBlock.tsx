import PropTypes from 'prop-types'
import type { ReactNode } from 'react'

/**
 * The content block component
 *
 * @param {string}   image              - The image URL/path (optional)
 * @param {string}   icon               - The icon markup (optional)
 * @param {string}   imageAlt           - The alt text for image (mandatory if image supplied)
 * @param {string}   copy               - The content of the content block
 * @param {string}   headline           - Title for card
 * @param {object}   mainLink           - Add a view more link
 * @param {bool}     content            - Removes highlight bar if true
 * @param {string}   className          - An additional class, optional
 * @param {array}    links               - A list of anchor tags and its links
 * @param {object}   attributeOptions   - Default HTML attributes
 */

export interface ContentBlockLink {
	text: string
	url: string
}

export interface ContentBlockProps {
	/**
	 * The image URL/path (optional)
	 */
	image?: string

	/**
	 * The icon markup (optional)
	 */
	icon?: string

	/**
	 * The alt text for image (mandatory if image supplied)
	 */
	imageAlt?: string

	/**
	 * The content of the content block
	 */
	copy?: string

	/**
	 * Title for card
	 */
	headline: string

	/**
	 * Add a view more link
	 */
	mainLink?: ContentBlockLink

	/**
	 * Removes highlight bar if true
	 */
	content?: boolean

	/**
	 * An additional class, optional
	 */
	className?: string

	/**
	 * A list of anchor tags and its links
	 */
	links?: ContentBlockLink[]
}

export const ContentBlock = ({
	links,
	mainLink,
	headline,
	copy,
	image,
	imageAlt,
	icon,
	className = '',
}: ContentBlockProps) => {
	const ContentBlockContainer = 'div'
	return (
		<ContentBlockContainer className={`nsw-content-block ${className}`}>
			{image ? <ContentBlockImage src={image} imageAlt={imageAlt || ''} /> : ''}
			{icon ? <ContentBlockIcon>{icon}</ContentBlockIcon> : ''}
			<div className='nsw-content-block__content'>
				{headline ? (
					<ContentBlockHeading>{headline}</ContentBlockHeading>
				) : (
					''
				)}
				{copy ? <ContentBlockCopy>{copy}</ContentBlockCopy> : ''}
				<ul className='nsw-content-block__list'>
					{links
						? links.map((link) => (
								<li key={link.text}>
									<a href={link.url}>{link.text}</a>
								</li>
						  ))
						: ''}
				</ul>
				{mainLink ? (
					<div className='nsw-content-block__link'>
						<a href={mainLink.url}>{mainLink.text}</a>
					</div>
				) : (
					''
				)}
			</div>
		</ContentBlockContainer>
	)
}

ContentBlock.propTypes = {
	image: PropTypes.string,
	imageAlt: PropTypes.string,
	headline: PropTypes.string.isRequired,
	icon: PropTypes.node,
	copy: PropTypes.string,
	links: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string,
			text: PropTypes.string
		})
	),
	mainLink: PropTypes.shape({
		url: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	}),
	className: PropTypes.string
}

export interface ContentBlockImageProps {
	/**
	 * Image source
	 */
	src: string

	/**
	 * An additional class, optional
	 */
	className?: string

	/**
	 * Alt text
	 */
	imageAlt?: string
}

export const ContentBlockImage = ({
	src,
	className = '',
	imageAlt,
	...attributesOptions
}: ContentBlockImageProps) => (
	<div className='nsw-content-block__image'>
		<img
			src={src}
			alt={imageAlt}
			className='nsw-content-block__image'
			{...attributesOptions}
		/>
	</div>
)

ContentBlockImage.propTypes = {
	src: PropTypes.string.isRequired,
	imageAlt: PropTypes.string,
	className: PropTypes.string
}

export interface ContentBlockIconProps {
	className?: string
	children: ReactNode
}

export const ContentBlockIcon = ({
	children,
	className = '',
	...attributesOptions
}: ContentBlockIconProps) => (
	<div className='nsw-content-block__image' {...attributesOptions}>
		<div className='nsw-content-block__icon'>{children}</div>
	</div>
)

ContentBlockIcon.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}

export interface ContentBlockCopyProps {
	className?: string
	children: ReactNode
}

export const ContentBlockCopy = ({
	children,
	className = '',
	...attributesOptions
}: ContentBlockCopyProps) => (
	<p
		className={`nsw-content-block__copy ${className}`}
		{...attributesOptions}
	>
		{children}
	</p>
)

ContentBlockCopy.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}

export interface ContentBlockHeadingProps {
	className?: string
	children: ReactNode
}
export const ContentBlockHeading = ({
	children,
	className = '',
	...attributesOptions
}: ContentBlockHeadingProps) => (
	<h2 className='nsw-content-block__title' {...attributesOptions}>
		{children}
	</h2>
)

ContentBlockHeading.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}

export default ContentBlock

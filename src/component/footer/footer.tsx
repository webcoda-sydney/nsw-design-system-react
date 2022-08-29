import PropTypes from 'prop-types'
import type { ReactNode } from 'react'
/**
 * A section for the footer that sits at the end
 */

export interface FooterLinksItem {
	url: string
	text: string
	target?: HTMLAnchorElement['target']
}
export interface FooterLinksProps {
	/**
	 * The inside of this section
	 */
	children?: ReactNode

	/**
	 * The section links, format: { url: '', text: '' }
	 */
	footerLinks: FooterLinksItem[]

	/**
	 * An additional class, optional
	 */
	className?: string
}

export const FooterLinks = ({
	footerLinks,
	className = '',
	...attributeOptions
}: FooterLinksProps) => (
	<ul className={className} {...attributeOptions}>
		{footerLinks.map(({ url, text, target }, index) => (
			<li key={url+text+index}>
				<a href={url} target={target}>{text}</a>
			</li>
		))}
	</ul>
)

FooterLinks.propTypes = {
	footerLinks: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	),
	className: PropTypes.string
}

/**
 * A section for the footer that sits at the end
 */
export interface FooterSectionGroupProps {
	/**
	 * The inside of this section
	 */
	children?: ReactNode

	/**
	 * The heading section link, format: { url: '', text: '' }
	 */
	heading: FooterLinksItem
	/**
	 * The section links, format: { url: '', text: '' }
	 */
	sectionLinks: FooterLinksItem[]
	/**
	 * An additional class, optional
	 */
	className?: string
}

export const FooterSectionGroup = ({
	heading,
	sectionLinks,
	className = '',
	...attributeOptions
}: FooterSectionGroupProps) => (
	<div className={`nsw-footer__group ${className}`} {...attributeOptions}>
		<h3 className='nsw-footer__heading'>
			<a href={heading.url}>{heading.text}</a>
		</h3>
		<ul className='nsw-footer__list'>
			{sectionLinks.map(({ url, text, target }, index) => (
				<li key={url + text + index}>
					<a href={url} target={target}>{text}</a>
				</li>
			))}
		</ul>
	</div>
)

FooterSectionGroup.propTypes = {
	heading: PropTypes.shape({
		url: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	}),
	sectionLinks: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		})
	),
	className: PropTypes.string
}

/**
 * A section for the footer that contains navigational elements
 */
export interface FooterUpperProps {
	/**
	 * The inside of this section
	 */
	children: ReactNode

	/**
	 * An additional class, optional
	 */
	className?: string

	/**
	 * The aria-label attribute, optional
	 */
	ariaLabel?: string
}

export const FooterUpper = ({
	children,
	className = '',
	ariaLabel = 'footer',
	...attributeOptions
}: FooterUpperProps) => (
	<nav
		className={`nsw-footer__upper ${className}`}
		aria-label={ariaLabel}
		{...attributeOptions}
	>
		<div className='nsw-container'>{children}</div>
	</nav>
)

FooterUpper.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	ariaLabel: PropTypes.string
}

/**
 * A section for the footer that sits at the end
 */
export interface FooterLowerProps {
	/**
	 * The inside of this section
	 */
	children: ReactNode

	/**
	 * An additional class, optional
	 */
	className?: string
}
export const FooterLower = ({
	children,
	className = '',
	...attributeOptions
}: FooterLowerProps) => (
	<div className={`nsw-footer__lower ${className}`} {...attributeOptions}>
		{children}
	</div>
)

FooterLower.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

/**
 * DEFAULT
 * The footer component
 */
export interface FooterProps {
	/**
	 * The inside of this section
	 */
	children: ReactNode

	/**
	 * An additional class, optional
	 */
	className?: string
}
const Footer = ({ children, className = '', ...attributeOptions }: FooterProps) => (
	<footer
		className={`nsw-footer ${className}`}
		{...attributeOptions}
		role='contentinfo'
	>
		{children}
	</footer>
)

Footer.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string
}

export default Footer

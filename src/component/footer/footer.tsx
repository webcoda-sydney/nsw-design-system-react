import type { ElementType, ReactNode } from 'react'
/**
 * A section for the footer that sits at the end
 */

export interface FooterLinksItem {
	url: string
	text: string
	target?: HTMLAnchorElement['target']
	linkComponent?: string | ElementType
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
		{footerLinks.map(
			(
				{
					url,
					text,
					target,
					linkComponent: LinkComponent = 'a',
					...attrs
				},
				index
			) => (
				<li key={url + text + index}>
					<LinkComponent {...attrs} href={url} target={target}>
						{text}
					</LinkComponent>
				</li>
			)
		)}
	</ul>
)

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
}: FooterSectionGroupProps) => {
		const HeadingLink = heading.linkComponent ? heading.linkComponent : 'a'
		return (
			<div className={`nsw-footer__group ${className}`} {...attributeOptions}>
				<h3 className='nsw-footer__heading'>
					<HeadingLink href={heading.url} target={heading.target}>{heading.text}</HeadingLink>
				</h3>
				<ul className='nsw-footer__list'>
					{sectionLinks.map(
						(
							{
								url, text, target, linkComponent: LinkComponent = 'a', ...attrs
							},
							index
						) => (
							<li key={url + text + index}>
								<LinkComponent {...attrs} href={url} target={target}>
									{text}
								</LinkComponent>
							</li>
						)
					)}
				</ul>
			</div>
		)
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
const Footer = ({
	children,
	className = '',
	...attributeOptions
}: FooterProps) => (
	<footer
		className={`nsw-footer ${className}`}
		{...attributeOptions}
		role='contentinfo'
	>
		{children}
	</footer>
)

export default Footer

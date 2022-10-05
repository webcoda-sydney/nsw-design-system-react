import React, { useId } from 'react'
import PropTypes from 'prop-types'

/**
 * The section component for the InpageNavLinks component
 *
 */
export interface InpageNavLinksItemProps {
	/**
	 * The link of this section
	 */
	url: string
	/**
	 * The title of the section
	 */
	title: string
}
export const InpageNavLinksItem = ({ url, title, ...attributeOptions }: InpageNavLinksItemProps) => (
	<li>
		<a href={`${url}`} {...attributeOptions}>
			{title}
		</a>
	</li>
)

InpageNavLinksItem.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string
}

/**
 * The inpage-nav component
 */
export interface InPageNavLinksProps {
	/**
	 * The title of the content link block, default: Contents
	 */
	title: string
	/**
	 * An array of objects of all sections
	 */
	links: InpageNavLinksItemProps[]
	/**
	 * An additional class, optional
	 */
	className?: string
	/**
	 * The aria-label attribute, optional
	 */
	ariaLabel?: string
}
export const InPageNavLinks = ({
	title,
	links,
	ariaLabel = useId(),
	className = '',
	...attributeOptions
}: InPageNavLinksProps) => (
	<nav
		className={`nsw-in-page-nav ${className}`}
		aria-labelledby={ariaLabel}
		{...attributeOptions}
	>
		<div id={ariaLabel} className='nsw-in-page-nav__title'>
			{title}
		</div>

		<ul>
			{links
				? links.map((link) => (
						<InpageNavLinksItem {...link} key={link.title} />
				  ))
				: ''}
		</ul>
	</nav>
)

// InPageNavLinks.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	links: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			url: PropTypes.string,
// 			title: PropTypes.string.isRequired,
// 			li: PropTypes.shape
// 		})
// 	).isRequired,
// 	className: PropTypes.string,
// 	ariaLabel: PropTypes.string
// }

export default InPageNavLinks

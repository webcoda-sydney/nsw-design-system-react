import PropTypes from 'prop-types'
import type { ElementType, ReactNode } from 'react'

/**
 * An item inside the LinkList component
 *
 */
export interface LinkListItemProps {
	/**
	 * The link Text or link html
	 */
	text: ReactNode

	/**
	 * The link URL
	 */
	link: string

	/**
	 * The target URL
	 */
	target?: HTMLAnchorElement['target']

	/**
	 * The component used for the link
	 */
	linkComponent?: string | Function

	/**
	 * The onClick event handler
	 */
	onClick?: () => void

	children?: ReactNode

	href?: string
	to?: string
	rel?: HTMLAnchorElement['rel']
}

export const LinkListItem = ({
	text,
	link,
	linkComponent = 'a',
	children,
	onClick,
	...attributeOptions
}: LinkListItemProps) => {
	const LinkComponent = linkComponent as ElementType

	// If there is no link provided and an onClick function
	if (typeof onClick === 'function') {
		;(attributeOptions as any).onClick = onClick

		// if we find an onClick event but no link we make it a
		// link so onClick can be added (no button support yet)
		if (!link) {
			link = '#'
		}
	}

	// If we are using a normal link
	if (LinkComponent === 'a') {
		attributeOptions.href = link
		attributeOptions.rel = attributeOptions?.target === '_blank' ? 'nofollow noopener' : undefined
	} else if (typeof LinkComponent === 'function') {
		// If we are using a link component
		attributeOptions.to = link
	}

	if (link) {
		return (
			<li className='nsw-link-list__item'>
				<LinkComponent {...attributeOptions}>
					<span>{text}</span>
					<span
						className='material-icons nsw-material-icons nsw-link-list__icon'
						aria-hidden='true'
					>
						east
					</span>
				</LinkComponent>
				{children}
			</li>
		)
	}

	return (
		<li className='nsw-link-list__item'>
			{text}
			{children}
		</li>
	)
}

/**
 * DEFAULT
 * The Link List component
 */
export interface LinkListProps {
	/**
	 * All items inside the link list to be passed to LinkListItem, format: { link: '', text: '', onClick: () }
	 */
	items: LinkListItemProps[]
	/**
	 * An additional class, optional
	 */
	className?: string
	/**
	 * The component used for the link
	 */
	linkComponent?: string
}
export const LinkList = ({
	items,
	className = '',
	...attributeOptions
}: LinkListProps) => (
	<div className='nsw-link-list'>
		<ul
			className={`nsw-link-list__list ${className}`}
			{...attributeOptions}
		>
			{items.map((item, index) => (
				<LinkListItem
					key={item.href || '' + index}
					{...item}
				/>
			))}
		</ul>
	</div>
)
export default LinkList

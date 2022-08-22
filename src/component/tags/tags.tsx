import PropTypes from 'prop-types'
import type { ElementType, ReactNode } from 'react'

export interface TagProps {
	/**
	 *  The link for this tag, optional
	 */
	link?: string
	/**
	 *  The text for the tag
	 */
	text: string

	linkComponent?: string
	children?: ReactNode
	className?: string

	href?: string
	to?: string
}
export const Tag = ({
	link,
	text,
	linkComponent = 'a',
	className = '',
	...attributeOptions
}: TagProps) => {
	const TagContainer = 'span'
	const LinkComponent = linkComponent as ElementType

	if (LinkComponent === 'a') {
		attributeOptions.href = link
	} else if (typeof LinkComponent === 'function') {
		// If we are using a link component
		attributeOptions.to = link
	}

	return link ? (
		<LinkComponent className={`nsw-tag ${className}`} {...attributeOptions}>
			{text}
		</LinkComponent>
	) : (
		<TagContainer {...attributeOptions} className={`nsw-tag ${className}`}>
			{text}
		</TagContainer>
	)
}

Tag.propTypes = {
	className: PropTypes.string,
	link: PropTypes.string,
	text: PropTypes.string.isRequired,
	linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

/**
 * DEFAULT
 * The tags component
 *
 */

export interface TagListProps {
	/**
	 * The tags, format: { link: '', text: '', onClick: () }
	 */
	tags: TagProps[]
	/**
	 * An additional class, optional
	 */
	className?: string
}
const TagList = ({
	tags,
	className = '',
	...attributeOptions
}: TagListProps) => (
	<div className={`nsw-list nsw-list--8 ${className}`} {...attributeOptions}>
		{tags.map((tag) => (
			<Tag
				key={tag.text}
				{...tag}
				linkComponent={tag.linkComponent}
				link={tag.link}
				text={tag.text}
			/>
		))}
	</div>
)

// TagList.propTypes = {
// 	tags: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			link: PropTypes.string,
// 			text: PropTypes.string.isRequired,
// 			li: PropTypes.shape
// 		})
// 	).isRequired,
// 	className: PropTypes.string
// }

export default TagList

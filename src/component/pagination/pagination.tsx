import PropTypes from 'prop-types'
import type { ReactNode } from 'react'

export interface PaginationItem {
	url: string
}
/**
 * Docs gen
 * Pagination
 */
export interface PaginationProps {
	/**
	 * Active page number
	 */
	active?: number
	/**
	 * An array of urls
	 */
	paginationItems: PaginationItem[]
	/**
	 * A url to move back to previous
	 */
	backLink?: string
	/**
	 * A url to move next to page
	 */
	nextLink?: string
	/**
	 * An additional class, optional
	 */
	className?: string

	children?: ReactNode
}
export const Pagination = ({
	backLink,
	active,
	nextLink,
	paginationItems,
	className,
	children,
	...attributeOptions
}: PaginationProps) => (
	<div className={`nsw-container ${className}`} {...attributeOptions}>
		<nav className='nsw-pagination' aria-label='Pagination'>
			<ul>
				<li>
					<a className='nsw-icon-button' href={backLink}>
						<span
							className='material-icons nsw-material-icons'
							aria-hidden='true'
						>
							keyboard_arrow_left
						</span>
						<span className='sr-only'>Back</span>
					</a>
				</li>
				{paginationItems
					? paginationItems.map((paginationItem, i) => (
							<PaginationItem
								url={paginationItem.url}
								page={i + 1}
								key={`pagination-${i}`}
								active={active}
							/>
					  ))
					: ''}
				{children}
				<li>
					<a href={nextLink} className='nsw-icon-button'>
						<span
							className='material-icons nsw-material-icons'
							aria-hidden='true'
						>
							keyboard_arrow_right
						</span>
						<span className='sr-only'>Next</span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
)

Pagination.propTypes = {
	className: PropTypes.string,
	paginationItems: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string
		})
	),
	children: PropTypes.node,
	backLink: PropTypes.string,
	nextLink: PropTypes.string,
	active: PropTypes.number
}

export interface PaginationItemProps {
	url: PaginationItem['url']
	page: number
	active?: number
}
export const PaginationItem = ({ url, page, active }: PaginationItemProps) => (
	<li>
		<a className={active === page ? 'active' : ''} href={url}>
			<span>
				<span className='sr-only'>Page </span>
				{page}
			</span>
		</a>
	</li>
)

export const PaginationEllipsis = () => (
	<li>
		<span>&hellip;</span>
	</li>
)

PaginationItem.propTypes = {
	page: PropTypes.number,
	active: PropTypes.number,
	url: PropTypes.string
}

export default Pagination

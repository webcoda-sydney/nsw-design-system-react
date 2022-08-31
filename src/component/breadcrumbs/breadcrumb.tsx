import PropTypes from 'prop-types'
import type { ElementType, ReactNode } from 'react'

export interface BreadcrumbProps {
    /**
     * The aria label of the component
     */
    label?: string

    /**
     * Items inside the breadcrumbs passed on to BreadcrumbLinkList
     */
    items: BreadcrumbLinkListItemProps[]

    /**
     * The component used for the link
     */
    linkComponent?: string

    /**
     * An additional class, optional
     */
    className?: string
}

export const Breadcrumbs = ({
    label,
    items,
    linkComponent = 'a',
    className = '',
    ...attributeOptions
}: BreadcrumbProps) => (
    <nav
        className={`nsw-breadcrumbs ${className}`}
        aria-label={label}
        {...attributeOptions}
    >
        <BreadcrumbLinkList
            inline
            linkComponent={linkComponent}
            items={items}
        />
    </nav>
)

Breadcrumbs.propTypes = {
    label: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string
}

export interface BreadcrumbLinkListItemProps {
	/**
	 * The link Text or link html
	 */
	text: ReactNode

	/**
	 * The link URL, optional
	 */
	link: string

	/**
	 * The component used for the link
	 */
	linkComponent?: string | ElementType

	children?: ReactNode

	/**
	 * The onClick event handler
	 */
	onClick?: () => void

	/**
	 * Any other attribute options
	 */
	href?: string
	to?: string
}

export const BreadcrumbLinkListItem = ({
    text,
    link,
    linkComponent = 'a',
    children,
    onClick,
    ...attributeOptions
}: BreadcrumbLinkListItemProps) => {
    const LinkComponent = linkComponent as ElementType

    // If there is no link provided and an onClick function
    if (typeof onClick === 'function') {
        (attributeOptions as any).onClick = onClick
        // if we find an onClick event but no link we make it
        // a link so onClick can be added (no button support yet)
        if (!link) {
            link = '#'
        }
    }

    // If we are using a normal link
    if (LinkComponent === 'a') {
        attributeOptions.href = link
    } else if (typeof LinkComponent === 'function') {
        // If we are using a link component
        attributeOptions.to = link
    }

    if (link) {
        return (
            <li>
                <LinkComponent {...attributeOptions}>{text}</LinkComponent>
                {children}
            </li>
        )
    }

    return (
        <li>
            {text}
            {children}
        </li>
    )
}

BreadcrumbLinkListItem.propTypes = {
    text: PropTypes.node.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

/**
 * DEFAULT
 * The Link List component
 *
 * @param  {array}   items            - All items inside the link list to be passed to
 *                                      BreadcrumbLinkListItem, format: { link: '', text: '',
 *                                      onClick: () }
 * @param  {string}  className        - An additional class, optional
 * @param  {string}  linkComponent    - The component used for the link
 * @param  {object}  attributeOptions - Any other attribute options, optional
 */

export interface BreadcrumbLinkListProps {
    /**
     * Whether it's shown inline or not
     */
    inline?: boolean

    /**
     * All items inside the link list to be passed to BreadcrumbLinkListItem
     */
    items: BreadcrumbLinkListItemProps[]

    /**
     * An additional class, optional
     */
    className?: string
}

export const BreadcrumbLinkList = ({
    inline,
    items,
    className = '',
    ...attributeOptions
}: BreadcrumbLinkListProps) => (
    <ol
        className={`nsw-breadcrumb__list ${className}${
            inline ? ' nsw-breadcrumb__list--inline' : ''
        }`}
        {...attributeOptions}
    >
        {items.map((item) => (
            <BreadcrumbLinkListItem
				key={item.text as string}
                {...item}
            />
        ))}
    </ol>
)

// BreadcrumbLinkList.propTypes = {
//     inline: PropTypes.bool,
//     items: PropTypes.arrayOf(
//         PropTypes.shape({
//             link: PropTypes.string,
//             text: PropTypes.node.isRequired,
//             li: PropTypes.shape,
//         })
//     ).isRequired,
//     linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
//     className: PropTypes.string
// }

export default Breadcrumbs

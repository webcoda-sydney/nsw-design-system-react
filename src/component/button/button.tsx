import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef, ReactNode } from 'react'

export type ButtonProps = (ComponentPropsWithoutRef<'button'> | ComponentPropsWithoutRef<'a'>)  & {
	/**
	 * The component used for the link
	 */
	linkComponent?: ReactNode

	/**
	 * If this is a link the location it goes
	 */

	link?: string

	/**
	 * Anything inside
	 */
	children: ReactNode

	/**
	 * The button style
	 */
	style?: string

	/**
	 * The type attribute, default: 'button', optional
	 */
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']

	/**
	 * The block option, optional
	 */
	block?: boolean

	/**
	 * An additional class, optionaltype
	 */
	className?: string

	/**
	 * Any other attribute options
	 */
	href?: string
	to?: string
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({
    linkComponent = 'button',
    link,
    children,
    style = 'dark',
    type = 'button',
    block,
    className = '',
    ...attributeOptions
}, ref) => {
    if (link) {
        const LinkComponent = linkComponent as ElementType

        // If we are using a normal link
        if (LinkComponent === 'a') {
            attributeOptions.href = link || attributeOptions.href
            // If we are using a link component
        }
		else if (typeof LinkComponent === 'function') {
            attributeOptions.to = link
        }

        return (
            <LinkComponent
				ref={ref as ForwardedRef<HTMLAnchorElement>}
                className={`nsw-button ${className} nsw-button--${style}${
                    block ? ' nsw-button--block' : ''
                }`}
                {...attributeOptions as ComponentPropsWithoutRef<'a'>}
            >
                {children}
            </LinkComponent>
        )
    }

    return (
        <button
			ref={ref as ForwardedRef<HTMLButtonElement>}
            type={type}
            className={`nsw-button ${className} nsw-button--${style}${
                block ? ' nsw-button--block' : ''
            }`}
            {...attributeOptions as ComponentPropsWithoutRef<'button'>}
        >
            {children}
        </button>
    )
})

// Button.propTypes = {
//     link: PropTypes.string,
//     children: PropTypes.node.isRequired,
//     style: PropTypes.oneOf([
//         'dark',
//         'dark-outline',
//         'dark-outline-solid',
//         'light',
//         'light-outline',
//         'white',
//         'danger'
//     ]),
//     type: PropTypes.string,
//     block: PropTypes.bool,
//     linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
//     className: PropTypes.string
// }

export default Button

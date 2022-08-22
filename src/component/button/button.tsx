import PropTypes from 'prop-types'
import type { ButtonHTMLAttributes, ElementType } from 'react'

export interface ButtonProps {
	/**
	 * The component used for the link
	 */
	linkComponent?: string

	/**
	 * If this is a link the location it goes
	 */

	link?: string

	/**
	 * Anything inside
	 */
	children: string

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

export const Button = ({
    linkComponent = 'a',
    link,
    children,
    style = 'dark',
    type = 'button',
    block,
    className = '',
    ...attributeOptions
}: ButtonProps) => {
    if (link) {
        const LinkComponent = linkComponent as ElementType

        // If we are using a normal link
        if (LinkComponent === 'a') {
            attributeOptions.href = link
            // If we are using a link component
        } else if (typeof LinkComponent === 'function') {
            attributeOptions.to = link
        }

        return (
            <LinkComponent
                className={`nsw-button ${className} nsw-button--${style}${
                    block ? ' nsw-button--block' : ''
                }`}
                {...attributeOptions}
            >
                {children}
            </LinkComponent>
        )
    }

    return (
        <button
            type={type}
            className={`nsw-button ${className} nsw-button--${style}${
                block ? ' nsw-button--block' : ''
            }`}
            {...attributeOptions}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    link: PropTypes.string,
    children: PropTypes.node.isRequired,
    style: PropTypes.oneOf([
        'dark',
        'dark-outline',
        'dark-outline-solid',
        'light',
        'light-outline',
        'white',
        'danger'
    ]),
    type: PropTypes.string,
    block: PropTypes.bool,
    linkComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    className: PropTypes.string
}

export default Button

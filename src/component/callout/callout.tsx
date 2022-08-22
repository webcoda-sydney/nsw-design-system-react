import type { ElementType, ReactNode } from 'react'
import PropTypes from 'prop-types'

export interface CalloutProps {
	/**
	 * The title of the header
	 */
  	title: string

	/**
	 * The tag level (<h1/> <h2/> etc), default: '1'
	 */
	level?: number

	/**
	 * Anything inside
	 */
	children: ReactNode

	/**
	 * An additional class, optional
	 */
	className?: string
}

export const Callout = ({
    title,
    level = 4,
    children,
    className = '',
    ...attributeOptions
}: CalloutProps) => {
    const HeadingTag = `h${level}` as ElementType

    return (
        <div className={`nsw-callout ${className}`} {...attributeOptions}>
            <div className='nsw-callout__content'>
                <HeadingTag className='nsw-callout__title'>{title}</HeadingTag>
                {children}
            </div>
        </div>
    )
}

Callout.propTypes = {
    title: PropTypes.string.isRequired,
    level: PropTypes.number,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Callout

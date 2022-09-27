import { Fragment, ReactNode, useState } from 'react'
import PropTypes from 'prop-types'
import useIdExtended from '@/hooks/useIdExtended'
import Icon from '../Icon'
export interface AccordionProps {
    header: ReactNode
    body: ReactNode
    closed?: boolean
    className?: string
}

export const Accordion = (props: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const uID = useIdExtended('accordion')
    const { header, body, closed, className = '', ...attributeOptions } = props

    return (
		<Fragment>
			<div className='nsw-accordion__title'>
				<button
					type='button'
					aria-expanded={isOpen}
					aria-controls={uID}
					className={`nsw-accordion__button ${
						isOpen ? 'is-open' : ''
					}`}
					onClick={() => setIsOpen((prevState) => !prevState)}
				>
					{header}
					<Icon
						icon='ic:baseline-keyboard-arrow-down'
						className='nsw-accordion__icon'
					/>
				</button>
			</div>
			<div className='nsw-accordion__content' id={uID} hidden={!isOpen}>
				<div className='nsw-wysiwyg-content'>{body}</div>
			</div>
		</Fragment>
	)
}

Accordion.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
    className: PropTypes.string
}

export interface AccordionGroupProps {
    className?: string
    children: ReactNode
}

export const AccordionGroup = ({
    className,
    children,
    ...attributeOptions
}: AccordionGroupProps) => (
    <div
        className={`nsw-accordion ready ${className ? className : ''}`}
        {...attributeOptions}
    >
        {children}
    </div>
)

AccordionGroup.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
}

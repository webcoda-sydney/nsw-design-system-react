import { Fragment, ReactNode, useState, useEffect } from 'react'
import useIdExtended from '@/hooks/useIdExtended'
import Icon from '../Icon'
export interface AccordionProps {
    header: ReactNode
    body: ReactNode
    closed?: boolean
    className?: string
}

export const Accordion = (props: AccordionProps) => {
    const { header, body, closed = true, className = '', ...attributeOptions } = props
    const [isOpen, setIsOpen] = useState(!closed)
    const uID = useIdExtended('accordion')

	useEffect(() => {
		setIsOpen(!closed)
	}, [closed])

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

import PropTypes from 'prop-types'
import { ReactNode, useEffect, useRef } from 'react'

export interface TabsProps {
	className?: string
	children?: ReactNode
}
export const Tabs = (props: TabsProps) => {
	const { className = '', children, ...attributeOptions } = props
	const refTabs = useRef(null)

	useEffect(() => {
		;(async () => {
			const { Tabs: TabsObject } = await import(
				'nsw-design-system/src/main'
			)
			new TabsObject(refTabs.current).init()
		})()
	}, [])

	return (
		<div
			ref={refTabs}
			className={`nsw-tabs js-tabs ${className}`}
			{...attributeOptions}
		>
			{children}
		</div>
	)
}

Tabs.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node
}
export interface TabItemWrapperProps {
	children: ReactNode
}
export const TabItemWrapper = ({ children }: TabItemWrapperProps) => (
	<ul className='nsw-tabs__list'>{children}</ul>
)

TabItemWrapper.propTypes = {
	children: PropTypes.node.isRequired
}
export interface TabItemProps {
	urlHash: string
	title: string
}
export const TabItem = ({ urlHash, title }: TabItemProps) => (
	<li className='nsw-tabs__list-item'>
		<a href={`#${urlHash}`} className='nsw-tabs__link'>
			{title}
		</a>
	</li>
)

TabItem.propTypes = {
	urlHash: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export interface TabSectionProps {
	urlHash: string
	children: ReactNode
}
export const TabSection = ({ urlHash, children }: TabSectionProps) => (
	<section id={urlHash} className='nsw-tabs__content'>
		{children}
	</section>
)

TabSection.propTypes = {
	urlHash: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default Tabs

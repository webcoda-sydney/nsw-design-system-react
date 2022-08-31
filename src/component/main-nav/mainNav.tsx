import PropTypes from 'prop-types'
import { ElementType, ReactNode, useEffect, useRef } from 'react'
import useIdExtended from '@/hooks/useIdExtended'
import useBreakpoint from 'use-breakpoint'

export interface NavItem {
	id?: string
	url: string
	text: string
	description?: string
	target?: string
	subNav?: NavItem[]
	linkComponent?: string | ElementType
}
export interface MainNavProps {
	/**
	 * Array of navigation item objects, format { link: '', text: '' }
	 */
	navItems: NavItem[]
	/**
	 * Display menu as mega menu
	 */
	megaMenu?: boolean
	/**
	 * An additional class, optional
	 */
	className?: string

	/**
	 * Enable outside click to close the sub navigation
	 */
	isCloseWhenOutsideClick?: boolean
}

const BREAKPOINTS = {
	mobile: 0,
	tablet: 992
}

export const MainNav = (props: MainNavProps) => {
	const {
		navItems,
		megaMenu,
		className = '',
		isCloseWhenOutsideClick = true,
		...attributeOptions
	} = props

	const { breakpoint } = useBreakpoint(BREAKPOINTS, 'mobile')
	const refMainNavList = useRef<HTMLUListElement>(null)

	const closeActiveSubNav = () => {
		const link = refMainNavList.current?.querySelector(
			'ul > li > a.active'
		) as HTMLElement | undefined
		if (link) {
			link.click()
		}
		return link
	}

	useEffect(() => {
		;(async () => {
			const { Navigation } = await import('nsw-design-system/src/main')
			new Navigation().init()
		})()
	}, [])

	useEffect(() => {
		if (isCloseWhenOutsideClick && breakpoint !== 'mobile') {
			const outsideClickToCloseActiveSubNav = (e: MouseEvent) => {
				if (!(e.target as HTMLElement).closest('.nsw-main-nav__list')) {
					closeActiveSubNav()
				}
			}
			document.addEventListener('click', outsideClickToCloseActiveSubNav)

			return () => {
				document.removeEventListener(
					'click',
					outsideClickToCloseActiveSubNav
				)
			}
		}
	}, [isCloseWhenOutsideClick, breakpoint])
	return (
		<nav
			id='main-nav'
			className={`nsw-main-nav ${className} ${
				megaMenu ? 'js-mega-menu' : ''
			}`}
			aria-label='Main Navigation'
			{...attributeOptions}
		>
			<div className='nsw-main-nav__header'>
				<div id='nsw-main-nav__title'>Menu</div>
				<button
					type='button'
					className='nsw-icon-button js-close-nav'
					aria-expanded='true'
				>
					<span
						className='material-icons nsw-material-icons'
						aria-hidden='true'
					>
						close
					</span>
					<span className='sr-only'>Close Menu</span>
				</button>
			</div>
			<ul ref={refMainNavList} className='nsw-main-nav__list'>
				{navItems.map((navItem, index) => {
					const LinkComponent = navItem.linkComponent || 'a'
					return (
						<li
							key={
								navItem.id
									? `navItem-${navItem.id}`
									: navItem.url + navItem.text + index
							}
						>
							<>
								<LinkComponent
									href={navItem.url}
									target={navItem.target}
								>
									<span>{navItem.text}</span>
									{!!navItem.subNav?.length ? (
										<span
											className='material-icons nsw-material-icons nsw-main-nav__link-icon'
											aria-hidden='true'
										>
											keyboard_arrow_right
										</span>
									) : (
										''
									)}
								</LinkComponent>
								{!!navItem.subNav?.length ? (
									<SubNav
										subNav={navItem.subNav}
										url={navItem.url}
										text={navItem.text}
										target={navItem.target}
										description={navItem.description}
										id={navItem.id}
										linkComponent={LinkComponent}
									/>
								) : (
									''
								)}
							</>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

// MainNav.propTypes = {
// 	navItems: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			url: PropTypes.string,
// 			text: PropTypes.string,
// 			description: PropTypes.string,
// 			target: PropTypes.string,
// 			subNav: PropTypes.arrayOf
// 		})
// 	).isRequired,
// 	megaMenu: PropTypes.bool,
// 	className: PropTypes.string,
// 	renderLink: PropTypes.func
// }

export const SubNavHeader = ({
	url,
	text,
	description,
	id,
	target,
	linkComponent: LinkComponent = 'a'
}: Omit<NavItem, 'subNav'>) => (
	<>
		<div className='nsw-main-nav__header'>
			<button
				type='button'
				className='nsw-icon-button nsw-icon-button--flex js-close-sub-nav'
				aria-controls={`sub-nav-${id}`}
				aria-expanded='true'
			>
				<span
					className='material-icons nsw-material-icons'
					aria-hidden='true'
				>
					keyboard_arrow_left
				</span>
				<span>
					Back
					<span className='sr-only'> to previous menu</span>
				</span>
			</button>
			<button
				type='button'
				className='nsw-icon-button js-close-nav'
				aria-expanded='true'
			>
				<i
					className='material-icons nsw-material-icons'
					aria-hidden='true'
				>
					close
				</i>
				<span className='sr-only'>Close Menu</span>
			</button>
		</div>
		<div className='nsw-main-nav__title'>
			<LinkComponent href={url} target={target}>
				<span>{text}</span>
				<span
					className='material-icons nsw-material-icons'
					aria-hidden='true'
				>
					east
				</span>
			</LinkComponent>
		</div>
		<div className='nsw-main-nav__description'>{description}</div>
	</>
)

export type SubNavProps = NavItem
export const SubNav = ({
	id = '',
	subNav,
	url,
	text,
	description,
	target,
	linkComponent = 'a',
}: SubNavProps) => {
	const _id = id || useIdExtended()
	if (!subNav) return null
	return (
		<div
			className='nsw-main-nav__sub-nav'
			id={`sub-nav-${_id}`}
			role='region'
			aria-label={text}
		>
			<SubNavHeader
				url={url}
				text={text}
				description={description}
				id={_id}
				target={target}
				linkComponent={linkComponent}
			/>
			<ul className='nsw-main-nav__sub-list'>
				{subNav.map((subNavItem, index) => {
					const subNavId = _id + index
					const LinkComponent = subNavItem.linkComponent || 'a'
					return (
						<li key={subNavId}>
							<>
								<LinkComponent
									href={subNavItem.url}
									target={subNavItem.target}
								>
									<span>{subNavItem.text}</span>
									{!!subNavItem.subNav?.length ? (
										<span
											className='material-icons nsw-material-icons nsw-main-nav__link-icon'
											aria-hidden='true'
										>
											keyboard_arrow_right
										</span>
									) : (
										''
									)}
								</LinkComponent>

								{!!subNavItem.subNav?.length ? (
									<div
										className='nsw-main-nav__sub-nav'
										id={`sub-nav-${subNavId}`}
										role='region'
										aria-label={`${text} Submenu`}
									>
										<SubNavHeader
											url={url}
											text={text}
											description={description}
											id={subNavId}
											linkComponent={LinkComponent}
										/>
										<ul className='nsw-main-nav__sub-list'>
											{subNavItem.subNav.map(
												(subSubNavItem, index) => {
													const SubLinkComponent = subSubNavItem.linkComponent || 'a'
													return (
														<li
															key={subSubNavItem.url +
																subSubNavItem.text +
																index}
														>
															<SubLinkComponent
																href={subSubNavItem.url}
																target={subSubNavItem.target}
																className='nsw-subnavigation__link'
															>
																<span>
																	{subSubNavItem.text}
																</span>
																{!!subSubNavItem
																	.subNav
																	?.length ? (
																	<span
																		className='material-icons nsw-material-icons nsw-main-nav__link-icon'
																		aria-hidden='true'
																	>
																		keyboard_arrow_right
																	</span>
																) : (
																	''
																)}
															</SubLinkComponent>
														</li>
													)
												}
											)}
										</ul>
									</div>
								) : (
									''
								)}
							</>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

SubNav.propTypes = {
	subNav: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string,
			text: PropTypes.string,
			subNav: PropTypes.arrayOf
		})
	).isRequired,
	url: PropTypes.string,
	text: PropTypes.string,
	description: PropTypes.string,
	renderLink: PropTypes.func,
	target: PropTypes.string
}

import PropTypes from 'prop-types'
import { ReactNode, useEffect, useRef } from 'react'
import useIdExtended from '@/hooks/useIdExtended'
import useBreakpoint from 'use-breakpoint'

export interface NavItem {
	id?: string
	url: string
	text: string
	description?: string
	target?: string
	subNav?: NavItem[]
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

	renderLink?: (e: NavItem) => ReactNode

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
		renderLink,
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
		if (isCloseWhenOutsideClick && breakpoint === 'mobile') {
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
				{navItems.map((navItem, index) => (
					<li
						key={
							navItem.id
								? `navItem-${navItem.id}`
								: navItem.url + navItem.text + index
						}
					>
						<>
							{renderLink ? (
								renderLink(navItem)
							) : (
								<a href={navItem.url} target={navItem.target}>
									<span>{navItem.text}</span>
									{navItem.subNav ? (
										<span
											className='material-icons nsw-material-icons nsw-main-nav__link-icon'
											aria-hidden='true'
										>
											keyboard_arrow_right
										</span>
									) : (
										''
									)}
								</a>
							)}
							{navItem.subNav ? (
								<SubNav
									subNav={navItem.subNav}
									url={navItem.url}
									text={navItem.text}
									target={navItem.target}
									description={navItem.description}
									id={navItem.id}
									renderLink={renderLink}
								/>
							) : (
								''
							)}
						</>
					</li>
				))}
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
	target
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
			<a href={url} target={target}>
				<span>{text}</span>
				<span
					className='material-icons nsw-material-icons'
					aria-hidden='true'
				>
					east
				</span>
			</a>
		</div>
		<div className='nsw-main-nav__description'>{description}</div>
	</>
)

SubNavHeader.propTypes = {
	url: PropTypes.string,
	text: PropTypes.string,
	description: PropTypes.string,
	id: PropTypes.string,
	target: PropTypes.string
}

export type SubNavProps = NavItem & {
	renderLink?: MainNavProps['renderLink']
}
export const SubNav = ({
	id = '',
	subNav,
	url,
	text,
	description,
	target,
	renderLink
}: SubNavProps) => {
	const _id = id || useIdExtended()
	if(!subNav) return null
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
			/>
			<ul className='nsw-main-nav__sub-list'>
				{subNav.map((subNavItem, index) => {
					const subNavId = _id + index
					return (
						<li key={subNavId}>
							<>
								{renderLink ? (
									renderLink(subNavItem)
								) : (
									<a
										href={subNavItem.url}
										target={subNavItem.target}
									>
										<span>{subNavItem.text}</span>
										{subNavItem.subNav ? (
											<span
												className='material-icons nsw-material-icons nsw-main-nav__link-icon'
												aria-hidden='true'
											>
												keyboard_arrow_right
											</span>
										) : (
											''
										)}
									</a>
								)}

								{subNavItem.subNav ? (
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
										/>
										<ul className='nsw-main-nav__sub-list'>
											{subNavItem.subNav.map(
												(subSubNavItem, index) => (
													<li
														key={
															subSubNavItem.url +
															subSubNavItem.text +
															index
														}
													>
														{renderLink ? (
															renderLink(
																subSubNavItem
															)
														) : (
															<a
																href={
																	subSubNavItem.url
																}
																target={
																	subSubNavItem.target
																}
																className='nsw-subnavigation__link'
															>
																<span>
																	{
																		subSubNavItem.text
																	}
																</span>
																{subSubNavItem.subNav ? (
																	<span
																		className='material-icons nsw-material-icons nsw-main-nav__link-icon'
																		aria-hidden='true'
																	>
																		keyboard_arrow_right
																	</span>
																) : (
																	''
																)}
															</a>
														)}
													</li>
												)
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

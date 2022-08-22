import PropTypes from 'prop-types'
import type { ReactNode } from 'react'

export interface HeroBannerListProps {
	subtitle: string
	children: ReactNode
}
export const HeroBannerList = ({ subtitle, children }: HeroBannerListProps) => (
	<div className='nsw-hero-banner__links'>
		<div className='nsw-hero-banner__list'>
			<div className='nsw-hero-banner__sub-title'>{subtitle}</div>
			{children}
		</div>
	</div>
)

HeroBannerList.propTypes = {
	subtitle: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default HeroBannerList

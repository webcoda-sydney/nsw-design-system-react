import PropTypes from 'prop-types'
import type { ReactNode } from 'react'

/**
 * Media combines visual elements with text to give context and alignment within content.
 *
 */

const options = {
	default: '',
	dark: 'nsw-media--dark',
	light: 'nsw-media--light',
	transparent: 'nsw-media--transparent'
}

export interface MediaProps {
	/**
	 * The file location of the image file
	 */
	image?: string
	/**
	 * The file locaiton of the video file
	 */
	video?: string
	/**
	 * The alt text of the media file
	 */
	title?: string
	/**
	 * Caption text to support or describe media image/video
	 */
	caption?: string
	/**
	 * Media caption background style
	 */
	style?: 'default' | 'dark' | 'light' | 'transparent'
	/**
	 * Media positioned to the left in percentage width with increments of 30, 40, 50
	 */
	left?: 'none' | '30' | '40' | '50'
	/**
	 * Media positioned to the right in percentage width with increments of 30, 40, 50
	 */
	right?: 'none' | '30' | '40' | '50'
	/**
	 * Media positioned to the center in percentage width with increments of 60, 70, 80, 90
	 */
	center?: 'none' | '60' | '70' | '80' | '90'

	/**
	 * Anything inside
	 */
	children?: ReactNode
}
export const Media = ({
	image,
	video,
	title,
	caption,
	left,
	right,
	center,
	children,
	style = 'default'
}: MediaProps) => (
	<figure
		className={`nsw-media ${
			left === undefined || left === 'none'
				? ''
				: ` nsw-media--left-${left}`
		}
		${options[style]}
		${right === undefined || right === 'none' ? '' : ` nsw-media--right-${right}`}
		${center === undefined || center === 'none' ? '' : ` nsw-media--${center}`}`}
	>
		{video ? (
			<div className='nsw-media__video'>
				<iframe
					src={video}
					title={title}
					frameBorder='0'
					allowFullScreen
				></iframe>
			</div>
		) : (
			''
		)}
		{image ? <img src={image} alt={title} /> : ''}
		{children}
		{!!caption && <figcaption>{caption}</figcaption>}
	</figure>
)

Media.propTypes = {
	style: PropTypes.oneOf(['default', 'dark', 'light', 'transparent']),
	video: PropTypes.string,
	image: PropTypes.string,
	caption: PropTypes.string,
	title: PropTypes.string,
	right: PropTypes.oneOf(['none', '30', '40', '50']),
	left: PropTypes.oneOf(['none', '30', '40', '50']),
	center: PropTypes.oneOf(['none', '60', '70', '80', '90'])
}

export default Media

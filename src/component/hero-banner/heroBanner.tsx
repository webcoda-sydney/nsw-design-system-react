import PropTypes from 'prop-types'
import type { MouseEvent, ReactNode } from 'react'

/**
 * Hero banner
 *
 * @param  {string}  title            - The title of the banner
 * @param  {string}  intro            - The intro of the banner
 * @param  {object}  cta              - The call to action of the banner
 * @param  {object}  image            - The object of the image
 * @param  {boolean} dark             - Dark Variant
 * @param  {boolean} style            - Style Variant
 * @param  {boolean} wide             - Wide Variant
 * @param  {boolean} featured         - Fixed minimum height
 * @param  {string}  className        - An additional class, optional
 * @param  {object}  attributeOptions - Any other attribute options
 */

const options = {
	dark: 'nsw-hero-banner--dark',
	light: 'nsw-hero-banner--light',
	white: 'nsw-hero-banner--white'
}

const buttonStyles = {
	dark: 'nsw-button nsw-button--white',
	light: 'nsw-button nsw-button--dark',
	white: 'nsw-button nsw-button--dark'
}

export interface HeroBannerImageProps {
	src: string
	alt: string
}

export interface HeroBannerProps {
	/**
	 * The title of the banner
	 */
	title?: string
	/**
	 * The intro of the banner
	 */
	intro?: ReactNode
	/**
	 * The call to action of the banner
	 */
	cta?: {
		url: string
		text: string
		onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
	}
	/**
	 * The object of the image
	 */
	image?: ReactNode | HeroBannerImageProps
	/**
	 * Dark Variant
	 */
	dark?: boolean
	/**
	 * Style Variant
	 */
	style?: 'dark' | 'light' | 'white'
	/**
	 * Wide Variant
	 */
	wide?: boolean
	/**
	 * Fixed minimum height
	 */
	featured?: boolean
	/**
	 * An additional class, optional
	 */
	className?: string
	children?: ReactNode
}

const renderImage = (image?: HeroBannerProps['image']) => {
	if (image) {
		if (
			typeof image !== 'number' && typeof image !== 'string' && typeof image !== 'boolean' && 'src' in image
		) {
			return (
				<img
					className='nsw-hero-banner__image'
					src={image.src}
					alt={image.alt}
				/>
			)
		}
		return image
	}
	return <div className='nsw-hero-banner__bg' />
}

export const HeroBanner = ({
	title = 'Hero Banner',
	intro,
	cta,
	style = 'white',
	wide,
	featured,
	image,
	children,
	className = '',
	...attributeOptions
}: HeroBannerProps) => {
	return (
		<div
			className={`nsw-hero-banner ${style ? options[style] : ''} ${
				wide ? 'nsw-hero-banner--wide' : ''
			} ${featured ? ' nsw-hero-banner--featured' : ''}  ${className}`}
			{...attributeOptions}
		>
			<div className='nsw-hero-banner__container'>
				<div className='nsw-hero-banner__wrapper'>
					<div className='nsw-hero-banner__content nsw-wysiwyg-content'>
						<h1>{title}</h1>
						<div className='nsw-intro'>{intro}</div>
						{cta ? (
							<div className='nsw-hero-banner__button'>
								<a
									href={cta.url}
									className={`nsw-button ${buttonStyles[style]}`}
									onClick={cta.onClick}
								>
									{cta.text}
								</a>
							</div>
						) : (
							''
						)}
					</div>
					{children}
					<div className='nsw-hero-banner__box' role='presentation'>
						{renderImage(image)}
					</div>
				</div>
			</div>
		</div>
	)
}
export default HeroBanner

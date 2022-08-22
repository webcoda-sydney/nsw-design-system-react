import PropTypes from 'prop-types'

export const Masthead = ({ text = 'A NSW Government website' }) => (
	<div className='nsw-masthead'>
		<div className='nsw-container'>
			<p>{text}</p>
		</div>
	</div>
)

Masthead.propTypes = {
	text: PropTypes.string
}

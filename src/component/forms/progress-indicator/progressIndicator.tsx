import PropTypes from 'prop-types'

export interface ProgressIndicatorProps {
	step: number | string
	of: number
}
export const ProgressIndicator = ({ step, of, ...attributeOptions }: ProgressIndicatorProps) => (
	<div className='nsw-progress-indicator' {...attributeOptions}>
		<div className='nsw-progress-indicator__count'>
			Step {step} of {of}
		</div>
		<div className='nsw-progress-indicator__bar'>
			{
				// eslint-disable-next-line react/no-array-index-key
				[...Array(of)]
					.fill(undefined)
					.map((value, index) =>
						index + 1 <= step ? (
							<ProgressIndicatorStep key={index} active />
						) : (
							<ProgressIndicatorStep key={index} />
						)
					)
			}
		</div>
	</div>
)
ProgressIndicator.propTypes = {
	step: PropTypes.number.isRequired,
	of: PropTypes.number.isRequired
}
export interface ProgressIndicatorStepProps {
	active?: boolean
}
export const ProgressIndicatorStep = ({ active }: ProgressIndicatorStepProps) => (
	<div className={`${active ? 'active' : ''}`} />
)

ProgressIndicatorStep.propTypes = {
	active: PropTypes.bool
}

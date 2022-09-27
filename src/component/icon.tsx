import { Icon as IconifyIcon, IconProps } from '@iconify/react'
import clsx from 'clsx'

function Icon(props: IconProps) {
	const { icon, className, width = 24, height = 24, ...others } = props
	return (
		<IconifyIcon
			{...others}
			className={clsx('nsw-material-icons', className)}
			icon={icon}
			width={width}
			height={height}
		/>
	)
}
export default Icon

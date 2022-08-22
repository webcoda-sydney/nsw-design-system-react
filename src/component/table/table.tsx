import PropTypes from 'prop-types'
import type { ReactNode } from 'react'
import nextId from 'react-id-generator'

/**
 * The table component
 */
export interface TableProps<TData> {
	/**
	 * The description or summary of the table.
	 */
	caption?: string
	/**
	 * The column headings
	 */
	headers: {
		key: keyof TData
		title: string
		width: number
	}[]
	/**
	 * The table data in the body
	 */
	data: TData[]
	/**
	 * A solid border around the table
	 */
	striped?: boolean
	/**
	 * Colourise every other table row
	 */
	bordered?: boolean
	/**
	 * Position the caption on top
	 */
	captionTop?: boolean
	/**
	 * An additional class, optional
	 */
	className?: string
	/**
	 * If first cell is a header cell or not
	 */
	firstCellIsHeader?: boolean
}
const Table = <TData, >({
	caption,
	headers,
	data,
	striped = false,
	bordered,
	captionTop,
	className = '',
	firstCellIsHeader,
	...attributeOptions
}: TableProps<TData>) => (
	<table
		className={`nsw-table ${striped ? 'nsw-table--striped ' : ' '} ${
			bordered ? 'nsw-table--bordered ' : ' '
		} ${captionTop ? 'nsw-table--caption-top ' : ' '} ${className}`}
		{...attributeOptions}
	>
		{caption && <TableCaption tableCaption={caption} />}
		<TableHead>
			<TableRow>
				{headers.map((header, index) => (
					<TableHeader
						title={header.title}
						key={`tableHeader-${nextId()}`}
						width={header.width}
					/>
				))}
			</TableRow>
		</TableHead>
		<TableBody>
			{data.map((row, rowIndex) => (
				<TableRow key={`tableRow-${nextId()}`}>
					{headers.map((header, columnIndex) => {
						// check to render first cell in rows as a header or not
						if (columnIndex === 0 && firstCellIsHeader === true) {
							return (
								<TableHeader
									key={`tableHeader-${nextId()}`}
									scope='row'
									title={
										row[header.key] ? row[header.key] as unknown as string : ''
									}
								/>
							)
						}
						return (
							<TableCell
								key={`tableCell-${nextId()}`}
								data={row[header.key] ? row[header.key] as unknown as string : ''}
								// type={header?.type}
								// render={
								// 	header.render
								// 		? header.render(row[header.key], row)
								// 		: null
								// }
							/>
						)
					})}
				</TableRow>
			))}
		</TableBody>
	</table>
)

Table.propTypes = {
	caption: PropTypes.string,
	headers: PropTypes.arrayOf(Object).isRequired,
	data: PropTypes.arrayOf(Object).isRequired,
	striped: PropTypes.bool,
	bordered: PropTypes.bool,
	captionTop: PropTypes.bool,
	className: PropTypes.string,
	firstCellIsHeader: PropTypes.bool
}

export interface TableBodyProps {
	className?: string
}
export const TableBody = ({
	className = '',
	...attributeOptions
}: TableBodyProps) => <tbody className={className} {...attributeOptions} />

TableBody.propTypes = {
	className: PropTypes.string
}

/**
 * The table head component
 */
export interface TableHeadProps {
	children?: ReactNode
	className?: string
}
export const TableHead = ({
	children,
	className = '',
	...attributeOptions
}: TableHeadProps) => (
	<thead className={className} {...attributeOptions}>
		{children}
	</thead>
)

TableHead.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}

/**
 * The table header component
 *
 */
export interface TableHeaderProps {
	/**
	 * The title of table header/column
	 */
	title: string
	/**
	 * Type of the header, can be either text or numeric for left or right alignment respectively.
	 */
	type?: string
	/**
	 * Width of the header/column in percentage
	 */
	width?: number
	/**
	 * Scope of the header, can be 'row' or 'col'
	 */
	scope?: string
	/**
	 * An additional class, optional
	 */
	className?: string
}
export const TableHeader = ({
	title,
	width,
	scope = 'col',
	className = '',
	...attributeOptions
}: TableHeaderProps) => {
	;(attributeOptions as any).width = width ? `${width}%` : undefined
	return (
		<th {...attributeOptions} className={className} scope={scope}>
			{title}
		</th>
	)
}

TableHeader.propTypes = {
	title: PropTypes.string.isRequired,
	width: PropTypes.number,
	className: PropTypes.string,
	scope: PropTypes.string
}


/**
 * The data/cell component
 *
 */
export interface TableCellProps {
	/**
	 * The cell data
	 */
	data?: string
	/**
	 * An additional class, optional
	 */
	className?: string
}
export const TableCell = ({
	data,
	className = '',
	...attributeOptions
}: TableCellProps) => (
	<td className={className} {...attributeOptions}>
		{data}
	</td>
)

TableCell.propTypes = {
	data: PropTypes.string,
	className: PropTypes.string
}

/**
 * The table row component
 */
export interface TableRowProps {
	children?: ReactNode
	className?: string
}
export const TableRow = ({
	children,
	className = '',
	...attributeOptions
}: TableRowProps) => (
	<tr className={className} {...attributeOptions}>
		{children}
	</tr>
)

TableRow.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
}

/**
 * The table caption component
 *
 */
export interface TableCaptionProps {
	/**
	 * The title of the table caption
	 */
	tableCaption?: string
	/**
	 * The id of the caption
	 */
	captionId?: string
	/**
	 * An additional class, optional
	 */
	className?: string
}
export const TableCaption = ({
	captionId,
	tableCaption,
	className = '',
	...attributeOptions
}: TableCaptionProps) =>
	tableCaption ? (
		<caption className={className} {...attributeOptions}>
			{tableCaption}
		</caption>
	) : null

TableCaption.propTypes = {
	tableCaption: PropTypes.string,
	captionId: PropTypes.string,
	className: PropTypes.string
}

/**
 * Table wrapper for responsive tables with horizontal scrolling on smaller devices
 */
export interface TableResponsiveWrapperProps {
	children?: ReactNode
}
export const TableResponsiveWrapper = ({
	children
}: TableResponsiveWrapperProps) => (
	<div className='nsw-table-responsive' role='region'>
		{children}
	</div>
)

TableResponsiveWrapper.propTypes = {
	children: PropTypes.node
}

export default Table

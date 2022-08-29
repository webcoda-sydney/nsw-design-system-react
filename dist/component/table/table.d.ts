import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
/**
 * The table component
 */
export interface TableProps<TData> {
    /**
     * The description or summary of the table.
     */
    caption?: string;
    /**
     * The column headings
     */
    headers: {
        key: keyof TData;
        title: string;
        width: number;
    }[];
    /**
     * The table data in the body
     */
    data: TData[];
    /**
     * A solid border around the table
     */
    striped?: boolean;
    /**
     * Colourise every other table row
     */
    bordered?: boolean;
    /**
     * Position the caption on top
     */
    captionTop?: boolean;
    /**
     * An additional class, optional
     */
    className?: string;
    /**
     * If first cell is a header cell or not
     */
    firstCellIsHeader?: boolean;
}
declare const Table: {
    <TData>({ caption, headers, data, striped, bordered, captionTop, className, firstCellIsHeader, ...attributeOptions }: TableProps<TData>): JSX.Element;
    propTypes: {
        caption: PropTypes.Requireable<string>;
        headers: PropTypes.Validator<unknown[]>;
        data: PropTypes.Validator<unknown[]>;
        striped: PropTypes.Requireable<boolean>;
        bordered: PropTypes.Requireable<boolean>;
        captionTop: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        firstCellIsHeader: PropTypes.Requireable<boolean>;
    };
};
export interface TableBodyProps {
    className?: string;
}
export declare const TableBody: {
    ({ className, ...attributeOptions }: TableBodyProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
    };
};
/**
 * The table head component
 */
export interface TableHeadProps {
    children?: ReactNode;
    className?: string;
}
export declare const TableHead: {
    ({ children, className, ...attributeOptions }: TableHeadProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * The table header component
 *
 */
export interface TableHeaderProps {
    /**
     * The title of table header/column
     */
    title: string;
    /**
     * Type of the header, can be either text or numeric for left or right alignment respectively.
     */
    type?: string;
    /**
     * Width of the header/column in percentage
     */
    width?: number;
    /**
     * Scope of the header, can be 'row' or 'col'
     */
    scope?: string;
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const TableHeader: {
    ({ title, width, scope, className, ...attributeOptions }: TableHeaderProps): JSX.Element;
    propTypes: {
        title: PropTypes.Validator<string>;
        width: PropTypes.Requireable<number>;
        className: PropTypes.Requireable<string>;
        scope: PropTypes.Requireable<string>;
    };
};
/**
 * The data/cell component
 *
 */
export interface TableCellProps {
    /**
     * The cell data
     */
    data?: string;
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const TableCell: {
    ({ data, className, ...attributeOptions }: TableCellProps): JSX.Element;
    propTypes: {
        data: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * The table row component
 */
export interface TableRowProps {
    children?: ReactNode;
    className?: string;
}
export declare const TableRow: {
    ({ children, className, ...attributeOptions }: TableRowProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * The table caption component
 *
 */
export interface TableCaptionProps {
    /**
     * The title of the table caption
     */
    tableCaption?: string;
    /**
     * The id of the caption
     */
    captionId?: string;
    /**
     * An additional class, optional
     */
    className?: string;
}
export declare const TableCaption: {
    ({ captionId, tableCaption, className, ...attributeOptions }: TableCaptionProps): JSX.Element | null;
    propTypes: {
        tableCaption: PropTypes.Requireable<string>;
        captionId: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
    };
};
/**
 * Table wrapper for responsive tables with horizontal scrolling on smaller devices
 */
export interface TableResponsiveWrapperProps {
    children?: ReactNode;
}
export declare const TableResponsiveWrapper: {
    ({ children }: TableResponsiveWrapperProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export default Table;

import { ReactNode } from 'react';
import PropTypes from 'prop-types';
export interface AccordionProps {
    header: ReactNode;
    body: ReactNode;
    closed?: boolean;
    className?: string;
}
export declare const Accordion: {
    (props: AccordionProps): JSX.Element;
    propTypes: {
        header: PropTypes.Validator<string>;
        body: PropTypes.Validator<string | number | boolean | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        className: PropTypes.Requireable<string>;
    };
};
export interface AccordionGroupProps {
    className?: string;
    children: ReactNode;
}
export declare const AccordionGroup: {
    ({ className, children, ...attributeOptions }: AccordionGroupProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};

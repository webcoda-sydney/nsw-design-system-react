import { ReactNode } from 'react';
export interface AccordionProps {
    header: ReactNode;
    body: ReactNode;
    closed?: boolean;
    className?: string;
}
export declare const Accordion: (props: AccordionProps) => JSX.Element;
export interface AccordionGroupProps {
    className?: string;
    children: ReactNode;
}
export declare const AccordionGroup: ({ className, children, ...attributeOptions }: AccordionGroupProps) => JSX.Element;

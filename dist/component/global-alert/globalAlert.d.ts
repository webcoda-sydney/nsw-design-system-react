import { ReactNode } from 'react';
export interface GlobalAlertProps {
    title: string;
    content: ReactNode;
    ctaText?: string;
    ctaHref?: string;
    as?: 'critical' | 'light' | 'default';
    className?: string;
    children?: ReactNode;
    onClose?: (_e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const GlobalAlert: (props: GlobalAlertProps) => JSX.Element;
export default GlobalAlert;

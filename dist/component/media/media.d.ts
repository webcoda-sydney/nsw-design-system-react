import PropTypes from 'prop-types';
import type { ReactNode } from 'react';
export interface MediaProps {
    /**
     * The file location of the image file
     */
    image?: string;
    /**
     * The file locaiton of the video file
     */
    video?: string;
    /**
     * The alt text of the media file
     */
    title?: string;
    /**
     * Caption text to support or describe media image/video
     */
    caption?: string;
    /**
     * Media caption background style
     */
    style?: 'default' | 'dark' | 'light' | 'transparent';
    /**
     * Media positioned to the left in percentage width with increments of 30, 40, 50
     */
    left?: 'none' | '30' | '40' | '50';
    /**
     * Media positioned to the right in percentage width with increments of 30, 40, 50
     */
    right?: 'none' | '30' | '40' | '50';
    /**
     * Media positioned to the center in percentage width with increments of 60, 70, 80, 90
     */
    center?: 'none' | '60' | '70' | '80' | '90';
    /**
     * Anything inside
     */
    children: ReactNode;
}
export declare const Media: {
    ({ image, video, title, caption, left, right, center, children, style }: MediaProps): JSX.Element;
    propTypes: {
        style: PropTypes.Requireable<string>;
        video: PropTypes.Requireable<string>;
        image: PropTypes.Requireable<string>;
        caption: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        right: PropTypes.Requireable<string>;
        left: PropTypes.Requireable<string>;
        center: PropTypes.Requireable<string>;
    };
};
export default Media;

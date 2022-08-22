import type { ReactNode } from 'react';
import PropTypes from 'prop-types';

/**
 * All different kind of alerts
 *
 * @type {Object}
 */
const options = {
  info: 'nsw-in-page-alert--info',
  warning: 'nsw-in-page-alert--warning',
  error: 'nsw-in-page-alert--error',
  success: 'nsw-in-page-alert--success',
};

/**
 * All different kind of alert icons
 *
 * @type {Object}
 */
const icons = {
  info: 'info',
  warning: 'cancel',
  error: 'error',
  success: 'check_circle',
};

export interface AlertProps {
    /**
     * Alert title
     */
    title?: string

    /**
     * What kind of alert this is
     */
    as: 'info' | 'warning' | 'error' | 'success'

    /**
     * Add the alt variation class, optional
     */
    alt?: boolean

    /**
     * Add the dark variation class, optional
     */
    dark?: boolean

    /**
     * Anything inside the component
     */
    children: ReactNode

    /**
     *  An additional class, optional
     */
    className?: string
}

export const Alert = ({
  title = '',
  as,
  children,
  className = '',
  ...attributeOptions
}: AlertProps) => (
  <div
    className={`nsw-in-page-alert ${className} ${options[as]}`}
    {...attributeOptions}
  >
    <span
      className="material-icons nsw-material-icons nsw-in-page-alert__icon"
    >
      {icons[as]}
    </span>
    <div className="nsw-in-page-alert__content">
      <h4>{title}</h4>
      {children}
    </div>
  </div>
);

Alert.propTypes = {
  as: PropTypes.oneOf(['info', 'warning', 'error', 'success']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Alert;

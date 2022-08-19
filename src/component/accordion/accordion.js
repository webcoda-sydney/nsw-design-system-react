import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useIdExtended from '../../hooks/useIdExtended';'../../hooks/useIdExtended'

export const Accordion = (props) =>{
    const [isOpen, setIsOpen] = useState(false)
    const uID = useIdExtended('accordion')
    const {header, body, closed, className = '', ...attributeOptions} = props

    return (
      <React.Fragment>
        <div className='nsw-accordion__title'>
          <button
            type='button'
            aria-expanded={ isOpen }
            aria-controls={ uID }
            className={`nsw-accordion__button ${isOpen ? 'is-open' : ''}`}
            onClick={() => setIsOpen((prevState) => !prevState )}
          >
            {header}
            <i
              className='material-icons nsw-material-icons nsw-accordion__icon'
              focusable='false'
              aria-hidden='true'
            >
              keyboard_arrow_right
            </i>
          </button>
        </div>
        <div className="nsw-accordion__content"
             id={uID}
             hidden={ isOpen ? '' : 'hidden' }>
          <div className="nsw-wysiwyg-content">
            {body}
          </div>
        </div>
      </React.Fragment>
    );
}

Accordion.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Accordion.defaultProps = {
  className: null,
};

export const AccordionGroup = ({className, children, ...attributeOptions}) => (
  <div className={`nsw-accordion ready ${className ? className : ''}`} {...attributeOptions}>
    {children}
  </div>
);

AccordionGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

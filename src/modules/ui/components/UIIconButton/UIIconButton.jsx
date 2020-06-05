import React from 'react';
import PropTypes from 'prop-types';
import './UIIconButton.scss';

const UIIconButton = (props) => {
  const {
    icon, children, onClick, extraClassName, title,
  } = props;
  const buttonClassName = `ui-icon-button icon-${icon} ${extraClassName}`;

  return (
    <button type="button" className={buttonClassName} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

UIIconButton.defaultProps = {
  icon: '',
  extraClassName: '',
  title: '',
  onClick: null,
  children: null,
};

UIIconButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func,
  extraClassName: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export { UIIconButton };

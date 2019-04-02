import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SprkLink = props => {
  const {
    children,
    element,
    variant,
    additionalClasses,
    idString,
    analyticsString,
    href,
    onClick,
    ...other
  } = props;
  const TagName = element || 'a';
  const classNames = classnames(additionalClasses, {
    'sprk-b-Link': variant !== 'unstyled',
    'sprk-b-Link--simple': variant === 'simple',
    'sprk-b-Link--plain': variant === 'plain',
    'sprk-b-Link--disabled': variant === 'disabled',
    'sprk-b-Link--simple sprk-b-Link--has-icon': variant === 'has-icon',
  });

  const noDefault = e => {
    e.preventDefault();
  };

  const clickEvent = href === '#' ? e => noDefault(e) : onClick;

  return (
    <TagName
      className={classNames}
      data-analytics={analyticsString}
      data-id={idString}
      href={href}
      onClick={clickEvent}
      {...other}
    >
      {children}
    </TagName>
  );
};

SprkLink.propTypes = {
  // The children that will be rendered inside the link
  children: PropTypes.node,
  // The link variant that determines the class names
  variant: PropTypes.oneOf([
    'base',
    'simple',
    'has-icon',
    'plain',
    'disabled',
    'unstyled',
  ]),
  // The string to use for the data-id attribute
  idString: PropTypes.string,
  // The string to use for the data-analytics attribute
  analyticsString: PropTypes.string,
  // Any additional classes to add to the link
  additionalClasses: PropTypes.string,
};

SprkLink.defaultProps = {
  variant: 'base',
  href: '#',
};

export default SprkLink;

import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyle } from './styles';

export default function Button({ children, ...rest }) {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

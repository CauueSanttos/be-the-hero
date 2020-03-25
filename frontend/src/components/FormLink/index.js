import React from 'react';
import PropTypes from 'prop-types';

import { FormLinkStyle } from './styles';

export default function FormLink({ children, ...rest }) {
  return <FormLinkStyle {...rest}>{children}</FormLinkStyle>;
}

FormLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

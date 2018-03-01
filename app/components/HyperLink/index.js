/**
*
* HyperLink
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class HyperLink extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a>
        <FormattedMessage {...messages.header} />
      </a>
    );
  }
}

HyperLink.propTypes = {

};

export default HyperLink;

/**
*
* BbcmainNormalNews
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class BbcmainNormalNews extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

BbcmainNormalNews.propTypes = {

};

export default BbcmainNormalNews;

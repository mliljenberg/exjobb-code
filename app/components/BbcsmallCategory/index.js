/**
*
* BbcsmallCategory
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class BbcsmallCategory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

BbcsmallCategory.propTypes = {

};

export default BbcsmallCategory;

/**
*
* QqheaderColumns
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
border-color: dodgerblue;
border-top-style: solid;
border-width: 1px;
`;
const Header = styled.a`
margin:10px;
color:dodgerblue;
:hover {
cursor: pointer;
}
`;


class QqheaderColumns extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Header>{this.props.text}</Header>
      </Wrapper>
    );
  }
}

QqheaderColumns.propTypes = {
  text: PropTypes.string,
};

export default QqheaderColumns;

/**
*
* QqheaderColumns
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-color: #1E88E5;
  border-top-style: solid;
  border-width: 1px;
  margin-bottom: 1em;
`;
const Header = styled.a`
  margin:10px;
  color: #1E88E5;
  :hover {
  cursor: pointer;
  }
`;


class QqheaderColumns extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Header onClick={(e) => this.props.handleClick(this.props.text, e)}>{this.props.text}</Header>
      </Wrapper>
    );
  }
}

QqheaderColumns.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default QqheaderColumns;

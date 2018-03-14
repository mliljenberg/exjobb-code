/**
*
* BbccategoryHeader
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 30px 0px 30px 0px;
`
const Header = styled.h3`
  
`;
const Line = styled.div`
border-top: solid;
width: 90%;
margin-top: 33px;
margin-left: 10px;

`;


class BbccategoryHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Header>{this.props.text}</Header>
        <Line />
      </Wrapper>
    );
  }
}

BbccategoryHeader.propTypes = {
  text: PropTypes.string,
};

export default BbccategoryHeader;

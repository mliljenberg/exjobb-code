/**
*
* BbcratingCategory
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height ? props.height : 200}px;
  flex-wrap: wrap;
`;
const Header = styled.h4 `
  margin: 0px 0px 0px 10px;
  word-wrap: break-word;
  :hover {
  color:dodgerblue;
  cursor: pointer;
  }
`;
const Index = styled.h4 `
  color: red;
  margin: 0px 0px 0px 10px;
`;
const Row = styled.div `
  display: flex;
  flex-direction: row;
  margin-top: 35px;
  width: 450px;
`;


class BbcratingCategory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper height={((this.props.headers.length / 2) * 65)}>
        {this.props.headers.map((header, index) => (<Row key={header} onClick={(e) => this.props.handleClick(header, e)}><Index>{index + 1}</Index><Header>{header}</Header></Row>))}
      </Wrapper>
    );
  }
}

BbcratingCategory.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleClick: PropTypes.func.isRequired,
};

export default BbcratingCategory;

/**
*
* BbcmainSmallGridNews
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Header = styled.h4`
  margin: 5px;
  margin-top: 20px;
  word-wrap: break-word;
  width: 250px;
  :hover {
  color:dodgerblue;
  cursor: pointer;
  }
`;

class BbcmainSmallGridNews extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.news.map((header) => (<Header onClick={(e) => this.props.handleClick(header, e)} >{header}</Header>))}
      </Wrapper>
    );
  }
}

BbcmainSmallGridNews.propTypes = {
  news: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func.isRequired,
};

export default BbcmainSmallGridNews;

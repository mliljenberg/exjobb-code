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
const Header = styled.h3`
  margin: 5px;
  word-wrap: break-word;
`;

class BbcmainSmallGridNews extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.news.map((header) => (<Header>{header}</Header>))}
      </Wrapper>
    );
  }
}

BbcmainSmallGridNews.propTypes = {
  news: PropTypes.arrayOf(PropTypes.string),
};

export default BbcmainSmallGridNews;

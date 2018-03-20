/**
 *
 * BbcmainBigNews
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BbcbigImage from '../BbcbigImage';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  width: 20vw;
`;

const Wrapper = styled.div`
 margin: 10px 0 10px 0;
 display: flex;
  flex-direction: row;
`;
const Header = styled.h1`
  :hover {
  color:dodgerblue;
  cursor: pointer;
  }
`;
const Text = styled.p`
  :hover {
  color:dodgerblue;
  cursor: pointer;
  }
`;

class HeadNews extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <TextWrapper>
          <Header onClick={(e) => this.props.handleClick(this.props.header, e)}>{this.props.header}</Header>
          <Text onClick={(e) => this.props.handleClick(this.props.header, e)}>{this.props.text}</Text>
        </TextWrapper>
        <BbcbigImage onClick={(e) => this.props.handleClick(this.props.header, e)} src={this.props.src} />
      </Wrapper>
    );
  }
}

HeadNews.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  handleClick: PropTypes.func.isRequired,

};

export default HeadNews;

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

class HeadNews extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <TextWrapper>
          <h1>{this.props.header}</h1>
          <p>{this.props.text}</p>
        </TextWrapper>
        <BbcbigImage src={this.props.src} />
      </Wrapper>
    );
  }
}

HeadNews.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,

};

export default HeadNews;

/**
 *
 * BbcmainBigNews
 *
 */

import React from 'react';
import styled from 'styled-components';

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
          <h1>Header</h1>
          <p>Text text text text text</p>
        </TextWrapper>
        <BbcbigImage />
      </Wrapper>
    );
  }
}

HeadNews.propTypes = {

};

export default HeadNews;

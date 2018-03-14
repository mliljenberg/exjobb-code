/**
*
* BbcmainBigNews
*
*/

import React from 'react';
import styled from 'styled-components';
import HeadNews from './HeadNews';

import BbcmainSmallGridNews from '../BbcmainSmallGridNews';
import BbcimageRow from '../BbcimageRow';

const Wrapper = styled.div`
  margin: 10px;
`;


class BbcmainBigNews extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <HeadNews />
        <BbcimageRow images={[{ src: 'asdlkjaksdjhalsdjh', header: 'lkföskdjfsökdfjosidfiejsirjghbiu', text: 'kajsdlkajhsdklasj' }, { src: 'asdlkjaksdjhalsdjh', header: 'lkföskdjfsökdfjosidfiejsirjghbiu', text: 'kajsdlkajhsdklasj' }, { src: 'asdlkjaksdjhalsdjh', header: 'lkföskdjfsökdfjosidfiejsirjghbiu', text: 'kajsdlkajhsdklasj' }, { src: 'asdlkjaksdjhalsdjh', header: 'lkföskdjfsökdfjosidfiejsirjghbiu', text: 'kajsdlkajhsdklasj' }]} />
        <div>
          <div />
          <BbcmainSmallGridNews news={['sdkjhfksjdhf', 'kjsdföksjdföaksjfaosöidf', 'asjdfaskjhdföaksjhdfasjhdf', 'asdöhföasdhjfsaidhfäaosidf', 'asjdkfhlakjfhlkasjdfhksdf', 'sadjhfköjshdfasdfökj']} />
        </div>
      </Wrapper>
    );
  }
}

BbcmainBigNews.propTypes = {

};

export default BbcmainBigNews;

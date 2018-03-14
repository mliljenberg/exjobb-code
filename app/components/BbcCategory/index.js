/**
*
* BbcCategory
*
*/

import React from 'react';
import styled from 'styled-components';
import BbccategoryHeader from '../BbccategoryHeader';
import BbcbigImage from '../BbcbigImage';
import BbcimageRow from '../BbcimageRow';


const Wrapper = styled.div`

`;
const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const RowWrapper = styled.div`
  margin-left: 20px;
  width: 100%;
`;

class BbcCategory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <TopRow>
          <BbcbigImage />
          <RowWrapper>
            <BbcimageRow images={[{ src: 'bla bla', header: 'bla bla' }, { src: 'bla bla', header: 'bla bla' }]} />
          </RowWrapper>
        </TopRow>
        <BbcimageRow images={[{ src: 'bla bla', header: 'bla bla' }, { src: 'bla bla', header: 'bla bla' }, { src: 'bla bla', header: 'bla bla' }, { src: 'bla bla', header: 'bla bla' }]} />
      </Wrapper>
    );
  }
}

BbcCategory.propTypes = {

};

export default BbcCategory;

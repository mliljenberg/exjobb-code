/**
*
* BbcbigImage
*
*/

import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
  background-color: red;
  min-width: 480px;
  min-height: 300px;
  margin: 0px;
  padding: 0px;
`;
const Header = styled.h2`
 margin: 0px;
 padding: 0px;
 margin-left: 10px;
`;


class BbcbigImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Image src={'bla'} alt={'should load here'} />
        <Header>Image text</Header>
      </div>
    );
  }
}

BbcbigImage.propTypes = {

};

export default BbcbigImage;

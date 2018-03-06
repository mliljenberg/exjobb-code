/**
*
* QqseveralImages
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-top: 1em;
  border-color: dodgerblue;
  border-top-style: solid;
  border-width: 1px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Img = styled.div`
  background-color: red;
  width: 145px;
  height: 80px;
  margin: 10px;
  margin-bottom:2px;
  
  
  :hover{
  cursor: pointer;
  }
`;
const Description = styled.div`
font-size: small;
margin-left: 12px;
margin-top: 0px;
margin-bottom: 1em;

`;
const Header = styled.div`
margin: 10px;
margin-bottom: 0px;
color:dodgerblue;
:hover {
cursor: pointer;
}
`;


class QqseveralImages extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.id);
    return (
      <MainWrapper>
        <Header>{this.props.header}</Header>
        <Wrapper>
          <div>
            <Img>{this.props.src1}</Img>
            <Description>{this.props.src1Text}</Description>
          </div>
          <div>
            <Img>{this.props.src2}</Img>
            <Description>{this.props.src2Text}</Description>
          </div>
        </Wrapper>
      </MainWrapper>
    );
  }
}

QqseveralImages.propTypes = {
  header: PropTypes.string.isRequired,
  src1: PropTypes.string.isRequired,
  src1Text: PropTypes.string.isRequired,
  src2: PropTypes.string.isRequired,
  src2Text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default QqseveralImages;

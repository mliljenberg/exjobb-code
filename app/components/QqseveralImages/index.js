/**
*
* QqseveralImages
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  margin-top:2em;
  
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


class QqseveralImages extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.id);
    return (
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
    );
  }
}

QqseveralImages.propTypes = {
  src1: PropTypes.string.isRequired,
  src1Text: PropTypes.string.isRequired,
  src2: PropTypes.string.isRequired,
  src2Text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default QqseveralImages;

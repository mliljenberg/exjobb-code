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
  border-color: #1E88E5;
  border-top-style: solid;
  border-width: 1px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Img = styled.img`
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
  :hover {
    cursor: pointer;
    color: #1E88E5;
  }

`;
const Header = styled.div`
  margin: 10px;
  margin-bottom: 0px;
  color:#1E88E5;
`;


class QqseveralImages extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MainWrapper>
        <Header>{this.props.header}</Header>
        <Wrapper>
          <div>
            <Img onClick={(e) => this.props.handleClick(this.props.src1Text, e)} src={this.props.src1} />
            <Description onClick={(e) => this.props.handleClick(this.props.src1Text, e)} >{this.props.src1Text}</Description>
          </div>
          <div>
            <Img onClick={(e) => this.props.handleClick(this.props.src2Text, e)} src={this.props.src2} />
            <Description onClick={(e) => this.props.handleClick(this.props.src2Text, e)}>{this.props.src2Text}</Description>
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
  handleClick: PropTypes.func.isRequired,
};

export default QqseveralImages;

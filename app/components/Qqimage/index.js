/**
*
* Qqimage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
display: flex;
flex-direction: row;
 `;
const Img = styled.img`
min-width: 100px;
min-height: 75px;
max-width: 100px;
max-height: 75px;
margin:10px;
margin-left:5px;
:hover{
cursor: pointer;
}
`;
const Text = styled.p`
color: #1E88E5;
font-size:medium;
:hover{
cursor: pointer;
}
`;

class Qqimage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Img onClick={(e) => this.props.handleClick(this.props.text, e)} src={this.props.src} />
        <Text onClick={(e) => this.props.handleClick(this.props.text, e)}>{this.props.text}</Text>
      </Wrapper>
    );
  }
}

Qqimage.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Qqimage;

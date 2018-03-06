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
const Img = styled.div`
background-color: red;
min-width: 100px;
min-height: 75px;
margin:10px;
margin-left:5px;
:hover{
cursor: pointer;
}
`;
const Text = styled.p`
color: dodgerblue;
font-size:medium;
:hover{
cursor: pointer;
}
`;

class Qqimage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.id);
    return (
      <Wrapper>
        <Img>{this.props.src}</Img>
        <Text>{this.props.text}</Text>
      </Wrapper>
    );
  }
}

Qqimage.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Qqimage;

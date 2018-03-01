/**
*
* Button
*
*/

import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
background-color: #337ab7;
color: white;
width: 100px;
height: 40px;
margin: 10px;
`;


class Button extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ButtonWrapper onClick={this.props.onClick}>
        {this.props.text}
      </ButtonWrapper>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

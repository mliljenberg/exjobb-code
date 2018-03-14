/**
*
* RadioQuestion
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {RadioButton, RadioButtonGroup} from 'material-ui';

const Wrapper = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 50px;
  margin-top: 20px;
  width: 50%;
`;
const radioStyle = {
  width:'auto',
  marginLeft:'15px',
}
const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled.p`
margin: 0;
padding: 0;
`;

class RadioQuestion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <p>
          {this.props.question}
        </p>
        <RadioButtonWrapper>
          <RadioWrapper>
            <Text>1</Text>
            <RadioButton style={radioStyle} />
          </RadioWrapper>
          <RadioWrapper>
            <Text>2</Text>
            <RadioButton style={radioStyle} />
          </RadioWrapper>
          <RadioWrapper>
            <Text>3</Text>
            <RadioButton style={radioStyle} />
          </RadioWrapper>
          <RadioWrapper>
            <Text>4</Text>
            <RadioButton style={radioStyle} />
          </RadioWrapper>
          <RadioWrapper>
            <Text>5</Text>
            <RadioButton style={radioStyle} />
          </RadioWrapper>
        </RadioButtonWrapper>
      </Wrapper>
    );
  }
}

RadioQuestion.propTypes = {
  question: PropTypes.string.isRequired,

};

export default RadioQuestion;

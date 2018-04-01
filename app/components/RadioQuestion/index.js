/**
*
* RadioQuestion
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RadioButton, RadioButtonGroup } from 'material-ui';

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
  width: 'auto',
  marginLeft: '15px',
};
const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.h4`
  margin: 20px;
`;
const styles = {
  block: {
    Width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  radioButton: {
    width: '100px',
    marginBottom: 70,
    marginTop: 20,
    marginLeft: 50,
  },
};

class RadioQuestion extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <p>
          {this.props.question}
        </p>
        <RowWrapper>
          <Text>Strongly Agree</Text>
          <RadioButtonGroup name="notRight" labelPosition="right" style={styles.block}>
            <RadioButton
              value="reverse"
              label="1"
              style={styles.radioButton}
            />
            <RadioButton
              value="2"
              label="2"
              style={styles.radioButton}
            />
            <RadioButton
              value="3"
              label="3"
              style={styles.radioButton}
            />
            <RadioButton
              value="4"
              label="4"
              style={styles.radioButton}
            />
            <RadioButton
              value="5"
              label="5"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <Text>Strongly Disagree</Text>
        </RowWrapper>
      </Wrapper>
    );
  }
}

RadioQuestion.propTypes = {
  question: PropTypes.string.isRequired,

};

export default RadioQuestion;

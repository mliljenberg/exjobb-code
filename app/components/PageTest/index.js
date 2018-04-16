/**
*
* PageTest
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RaisedButton, Paper } from 'material-ui';

const Wrapper = styled.div`
  width: 90vw; 
  height: 15vh;
  //height: 300px;
  right: 5vw;
  top:85vh;
  position: fixed;
  padding:0;
  margin: 0;
`;
const PaperWrapper = styled.div`
  height: 15vh;
  margin-top: -20px;
  padding-top: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  .textContent{
    margin: 10px;
  }
`;
const buttonStyle = {
  margin: '10px',
  color: '#FFF',
};
const Question = styled.div`
  margin:15px;
  width: 35vw;
`;
const Selected = styled.div`
  margin:5px;
  width: 19vw;
  font-size: small;
  overflow-wrap: break-word;
`;

const Timer = styled.h3`
  margin: 10px;
`;
const SelectedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  margin:10px;
  height: 100%;
  width: 45vw;
`;
const ButtonWrapper = styled.div`
  height: fit-content;
`;
class PageTest extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Paper>
          <PaperWrapper>
            <Question>{this.props.question}</Question>
            <SelectedWrapper>
              <Timer>{this.props.questionsLeft}</Timer>
              <Selected><b>Selected: </b>{this.props.selected}</Selected>
              <ButtonWrapper>
                <RaisedButton onClick={this.props.skipClicked} style={buttonStyle} backgroundColor={'#EF5350'} className={'specialButton'} >Skip Task</RaisedButton>
                <RaisedButton onClick={this.props.nextClicked} style={buttonStyle} backgroundColor={'#1976D2'} className={'specialButton'} >Next</RaisedButton>
              </ButtonWrapper>
            </SelectedWrapper>
          </PaperWrapper>
        </Paper>
      </Wrapper>
    );
  }
}

PageTest.propTypes = {
  questionsLeft: PropTypes.string,
  question: PropTypes.string.isRequired,
  skipClicked: PropTypes.func.isRequired,
  nextClicked: PropTypes.func.isRequired,
  selected: PropTypes.string,
};

export default PageTest;

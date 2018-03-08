/**
*
* PageTest
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RaisedButton, Paper } from 'material-ui';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
}



const Timer = styled.h1`
margin: 10px;
`;
class PageTest extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Paper>
          <PaperWrapper>
            <Timer>{this.props.time}</Timer>
            <p>{this.props.question}</p>
            <div>
              <RaisedButton onClick={this.props.skipClicked} style={buttonStyle} backgroundColor={'#EF5350'} className={'specialButton'} >Skip Task</RaisedButton>
              <RaisedButton onClick={this.props.nextClicked} style={buttonStyle} backgroundColor={'#1976D2'} className={'specialButton'} >Next</RaisedButton>
            </div>
          </PaperWrapper>
        </Paper>
      </Wrapper>
    );
  }
}

PageTest.propTypes = {
  time: PropTypes.number,
  question: PropTypes.string.isRequired,
  skipClicked: PropTypes.func.isRequired,
  nextClicked: PropTypes.func.isRequired,
};

export default PageTest;

/**
 *
 * Sus
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Paper, RaisedButton } from 'material-ui';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSus from './selectors';
import reducer from './reducer';
import saga from './saga';
import RadioQuestion from '../../components/RadioQuestion';
import { finishTestAction } from './actions';
import makeSelectHomePage from '../HomePage/selectors';
import {push} from "react-router-redux";


const Wrapper = styled.div`
background-color: white;
height: 100vh;
`;
const PaperWrapper = styled.div`
width: 80vw;
background-color: #fafafa;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const ButtonWrapper = styled.div`
  margin: 20px;
`;

const stylePaper = {
  margin: '20px 10vw 0 10vw',
};

export class Sus extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      mainId: this.props.homePage.mainId,
      Question1: '',
      Question2: '',
      Question3: '',
      Question4: '',
      Question5: '',
      Question6: '',
      Question7: '',
      Question8: '',
      Question9: '',
      Question10: '',
      Question11: '',
    };
    this.onFinishClicked = this.onFinishClicked.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onFinishClicked() {
    let finished = true;
    Object.values(this.state).forEach((value) => {
      if (finished) {
        if (value === '') {
          alert('Please answer all questions before finishing the test.');
          finished = false;
        }
      }
    });
    if (finished) {
      this.props.onFinishTest(this.state);
      this.props.onNextPage();
    }
  }
  onHandleChange(id, value) {
    const returnObj = {};
    returnObj[id] = value;
    this.setState(returnObj);
  }

  render() {
    return (
      <Wrapper>
        <Paper style={stylePaper}>
          <PaperWrapper>
            <h1>Header stuff</h1>
            <RadioQuestion questionId={'Question1'} handleChange={this.onHandleChange} question={'I liked the design of the site / 我喜欢网站的设计'} />
            <RadioQuestion questionId={'Question2'} handleChange={this.onHandleChange} question={'The design of this site was similar too other news sites / 这个网站的设计与其他新闻网站类似'} />
            <RadioQuestion questionId={'Question3'} handleChange={this.onHandleChange} question={'I think that I would like to use this site frequently / 我认为我想经常使用这个网站'} />
            <RadioQuestion questionId={'Question4'} handleChange={this.onHandleChange} question={'I thought the site was easy to use / 我认为该网站很容易使用'} />
            <RadioQuestion questionId={'Question5'} handleChange={this.onHandleChange} question={'The design of this site was unusual to me / 这个网站的设计对我来说是不寻常的'} />
            <RadioQuestion questionId={'Question6'} handleChange={this.onHandleChange} question={'I thought there was too much inconsistency in this site / 我认为这个网站有太多不一致的地方'} />
            <RadioQuestion questionId={'Question7'} handleChange={this.onHandleChange} question={'I felt very confident using the site / 我对使用该网站非常有信心'} />
            <RadioQuestion questionId={'Question8'} handleChange={this.onHandleChange} question={'I thought the material i was looking for was easy to find / 我认为我寻找的材料很容易找到'} />
            <RadioQuestion questionId={'Question9'} handleChange={this.onHandleChange} question={'I found the site very cumbersome to use / 我发现该网站使用起来非常麻烦'} />
            <RadioQuestion questionId={'Question10'} handleChange={this.onHandleChange} question={'I thought that the amount of information on this site was too sparse / 我认为这个网站上的信息量太稀少了'} />
            <RadioQuestion questionId={'Question11'} handleChange={this.onHandleChange} question={'I felt overwhelmed using this site / 我感到不知所措使用这个网站'} />
            <ButtonWrapper>
              <RaisedButton onClick={this.onFinishClicked} primary> Finish Test </RaisedButton>
            </ButtonWrapper>
          </PaperWrapper>
        </Paper>
      </Wrapper>
    );
  }
}

Sus.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onFinishTest: PropTypes.func,
  onNextPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sus: makeSelectSus(),
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFinishTest: (answers) => { dispatch(finishTestAction(answers)); },
    onNextPage: () => dispatch(push('/done')),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'sus', reducer });
const withSaga = injectSaga({ key: 'sus', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Sus);

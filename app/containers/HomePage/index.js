/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { push } from 'react-router-redux';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';


import { CircularProgress, MenuItem, Paper, RaisedButton, SelectField } from 'material-ui';
import { startTest } from './actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
const Wrapper = styled.div`
background-color: white;
height: 100vh;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  margin: 20px;
`;

const Text = styled.p`
  text-align: left;
  font-size: larger;

`;
const PaperWrapper = styled.div`
width: 80vw;
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const ButtonWrapper = styled.div`
  margin: 20px;
  margin-top: 50px;
  align-self: center;
`;

const stylePaper = {
  margin: '20px 10vw 0 10vw',
};

const enText = (<div><Text> Hi and thanks for participating in the following test.<br /> <br />
  My name is Marcus and this test is a part of my master thesis research, which explores cross-cultural website usability. The test will take roughly 5-10 minutes and the format is as follows: Once the test finished loading, you will be shown a news site.  On this news site, you will be asked to find different articles and images. In some instances, you will be asked to directly click on an item based on its description. In other cases, a more general description will be given. After clicking on the item you are asked to find, please click next to proceed. If you are unable to complete a certain task, you can skip it. All solutions to the required tasks can be found on the website, so please aim to complete the task before skipping it. After the 13 tasks, you will be asked a couple of general questions on the site you used.
  <br /><br /> IMPORTANT:  Please avoid using search tools since this will make your results meaningless. Also please try to do the test without interruptions since your actions and click patterns will be timed and recorded. Use a computer for this test it is not meant to be done on a phone! Avoid using the back button, you can not redo a task if you did a mistake that is fine just continue with the test. </Text></div>);

const zhText = (<div><Text>嗨，感谢您参加以下测试。<br /><br />
  我的名字是马库斯，这个测试是我的硕士论文研究的一部分，它探索了跨文化网站的可用性。测试将花费大约5-10分钟，格式如下：一旦测试完成加载，您将看到一个新闻网站。在这个新闻网站上，你会被要求找到不同的文章和图像。在某些情况下，系统会要求您根据其描述直接点击某个项目。在其他情况下，将给出更一般的描述。点击您要查找的项目后，请点击下一步继续。如果您无法完成某个任务，则可以跳过它。所有必要任务的解决方案都可以在网站上找到，所以请在跳过之前完成任务。完成13个任务后，您会在您使用的网站上询问几个常见问题。
  <br /><br />重要提示：请避免使用搜索工具，因为这会使结果变得毫无意义。此外，请尝试不中断地进行测试，因为您的操作和点击模式将被定时和记录。使用电脑进行这项测试并不意味着要在手机上完成！避免使用后退按钮，如果你犯了一个错误，那么你就不能重做任务，只要继续测试。</Text></div>);

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    value: null,
    age: null,
    gender: null,
    loading: false,
    ready: false,
  };

  handleChange = (event, value, label) => {
    const obj = {};
    obj[label] = value;
    this.setState(obj);
  };

  finishSelections = () => {
    let finished = true;
    Object.values(this.state).forEach((value) => {
      if (finished) {
        if (value === null) {
          finished = false;
          alert('Please select a value for each dropdown to continue.');
        }
      }
    });
    if (finished) {
      console.log(this.state);
      this.setState({ ready: true });
    }
  };

  startTest = () => {
    this.setState({ loading: true });
    const language = this.state.value ? 'en' : 'zh';
    this.props.onStartTest(language, this.state.gender, this.state.age);
  }

  render() {
    if (this.props.homePage.ready == true) {
      this.props.onTestReady(this.props.homePage.site);
    }
    let start = (<div>Hmmm something wrong</div>);
    if (!this.state.ready) {
      start = (
        <SmallWrapper>
          <Text>Welcome please answer the following questions to start.</Text>
          <SelectField
            floatingLabelText="Language"
            value={this.state.value}
            onChange={(e, value) => { this.handleChange(e, value, 'value'); }}
          >
            <MenuItem value={0} primaryText="Chinese" />
            <MenuItem value={1} primaryText="English" />
          </SelectField>

          <SelectField
            floatingLabelText="Gender"
            value={this.state.gender}
            onChange={(e, value) => { this.handleChange(e, value, 'gender'); }}
          >
            <MenuItem value={0} primaryText="Male" />
            <MenuItem value={1} primaryText="Female" />
          </SelectField>

          <SelectField
            floatingLabelText="Age"
            value={this.state.age}
            onChange={(e, index, value) => { this.handleChange(e, value, 'age'); }}
          >
            <MenuItem value={17} primaryText="Under 18" />
            <MenuItem value={20} primaryText="18-24 years old" />
            <MenuItem value={26} primaryText="25-34 years old" />
            <MenuItem value={36} primaryText="35-44 years old" />
            <MenuItem value={46} primaryText="45-54 years old" />
            <MenuItem value={56} primaryText="55-64 years old" />
            <MenuItem value={66} primaryText="65-74 years old" />
            <MenuItem value={76} primaryText="75 years or older" />
          </SelectField>
          <RaisedButton onClick={this.finishSelections} primary> Continue </RaisedButton>
        </SmallWrapper>);
    } else if (this.state.loading) {
      start = (
        <div>
          <Text>
            {this.state.value ? 'english' : 'chinese'}
          </Text>
          <ButtonWrapper>
            <CircularProgress size={80} thickness={5} />
          </ButtonWrapper>
        </div>
      );
    } else if (!this.state.value && this.state.value !== null) {
      start = (
        <SmallWrapper>
            {zhText}
          <ButtonWrapper>
            <RaisedButton onClick={this.startTest} primary> 开始 </RaisedButton>
          </ButtonWrapper>
        </SmallWrapper>
      );
    } else if (this.state.value && this.state.value !== null) {
      start = (
        <SmallWrapper>
          {enText}
          <ButtonWrapper>
            <RaisedButton onClick={this.startTest} primary> Start </RaisedButton>
          </ButtonWrapper>
        </SmallWrapper>
      );
    }

    return (
      <Wrapper>
        <Paper style={stylePaper}>
          <PaperWrapper>
            {start}
          </PaperWrapper>
        </Paper>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  onStartTest: PropTypes.func,
  onTestReady: PropTypes.func,
};
const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onStartTest: (language, gender, age) => dispatch(startTest(language, gender, age)),
    onTestReady: (site) => dispatch(push(`/${site}`)),
    dispatch,
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);


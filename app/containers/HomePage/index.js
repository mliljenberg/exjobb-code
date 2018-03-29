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


import { CircularProgress, MenuItem, Paper, RaisedButton, SelectField } from 'material-ui';
import { startTest } from './actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import { compose } from 'redux';
import saga from './saga';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';


const zhText = 'chiese here';
const enText = 'english text here';

const Wrapper = styled.div`
background-color: white;
height: 100vh;
`;

const Text = styled.div`
  text-align: center;
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
`;

const stylePaper = {
  margin: '20px 10vw 0 10vw',
};


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    value: null,
    loading: false,
  };

  handleChange = (event, index, value) => this.setState({ value });

  startTest = () => {
    this.setState({ loading: true });
    const language = this.state.value ? 'en' : 'zh';
    this.props.onStartTest(language);
  }

  render() {
    if (this.props.homePage.ready == true) {
      this.props.onTestReady(this.props.homePage.site);
    }
    let start = (<div>Hmmm something wrong</div>);
    if (this.state.value === null) {
      start = (
        <div>
          <Text>Welcome to my master thesis test! Start by selecting language!</Text>
          <SelectField
            floatingLabelText="Select language"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={false} primaryText="Chinese" />
            <MenuItem value primaryText="English" />
          </SelectField>
        </div>);
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
    } else if (!this.state.value) {
      start = (
        <div>
          <Text>
            {zhText}
          </Text>
          <ButtonWrapper>
            <RaisedButton onClick={this.startTest} primary> 开始 </RaisedButton>
          </ButtonWrapper>
        </div>
      );
    } else if (this.state.value) {
      start = (
        <div>
          <Text>
            {enText}
          </Text>
          <ButtonWrapper>
            <RaisedButton onClick={this.startTest} primary> Start </RaisedButton>
          </ButtonWrapper>
        </div>
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
    onStartTest: (language) => dispatch(startTest(language)),
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


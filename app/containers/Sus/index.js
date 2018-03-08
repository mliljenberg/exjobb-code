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
}

export class Sus extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Paper style={stylePaper}>
          <PaperWrapper>
            <h1>Header stuff</h1>
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <RadioQuestion question={'stuff'} />
            <ButtonWrapper>
              <RaisedButton primary> Finish Test </RaisedButton>
            </ButtonWrapper>
          </PaperWrapper>
        </Paper>
      </Wrapper>
    );
  }
}

Sus.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sus: makeSelectSus(),
});

function mapDispatchToProps(dispatch) {
  return {
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

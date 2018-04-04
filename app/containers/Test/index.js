/**
 *
 * Test
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
//  import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTest from './selectors';
import reducer from './reducer';
import saga from './saga';
//  import messages from './messages';
import Button from '../../components/Button';
import { sendToDB } from './actions';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: large;
  padding-top: 50px;
`;
export class Test extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <p>Thank You for helping me complete my master thesis! <br /> If you have any questions or feedback please send me a <a href="mailto:dic13mli@student.lu.se">email.</a> </p>
      </Wrapper>
    );
  }
}

Test.propTypes = {
  //  dispatch: PropTypes.func,
  onSendToDB: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  test: makeSelectTest(),
});


function mapDispatchToProps(dispatch) {
  return {
    onSendToDB: () => { dispatch(sendToDB()); },
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'test', reducer });
const withSaga = injectSaga({ key: 'test', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Test);

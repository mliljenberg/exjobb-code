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

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTest from './selectors';
import reducer from './reducer';
import saga from './saga';
//  import messages from './messages';
import Button from '../../components/Button';
import { sendToDB } from './actions';

export class Test extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(e) {
    console.info('button was Clicked', e);
    this.props.onSendToDB();
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Test</title>
          <meta name="description" content="Description of Test" />
        </Helmet>
        <Button text={'Click Me!'} onClick={this.buttonClicked} />
      </div>
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
/**
 *
 * Sus
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSus from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Sus extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Sus</title>
          <meta name="description" content="Description of Sus" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
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

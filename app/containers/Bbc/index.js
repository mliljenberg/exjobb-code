/**
 *
 * Bbc
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
import makeSelectBbc from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class Bbc extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Bbc</title>
          <meta name="description" content="Description of Bbc" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Bbc.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bbc: makeSelectBbc(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'bbc', reducer });
const withSaga = injectSaga({ key: 'bbc', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Bbc);

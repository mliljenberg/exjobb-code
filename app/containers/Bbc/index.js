/**
 *
 * Bbc
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBbc from './selectors';
import reducer from './reducer';
import saga from './saga';

import PageTest from '../../components/PageTest';
import BbcCategory from '../../components/BbcCategory';
import Bbcheader from '../../components/Bbcheader';
import BbcmainNews from '../../components/BbcmainNews';
import Bbcshare from '../../components/Bbcshare';
import Bbcfooter from '../../components/Bbcfooter';
import BbcratingCategory from '../../components/BbcratingCategory';
import BbccategoryHeader from '../../components/BbccategoryHeader';
import BbcimageRow from '../../components/BbcimageRow';


const PageWrapper = styled.div`
`;


export class Bbc extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Bbcheader />
        <PageWrapper>
          <BbcmainNews />
          <BbccategoryHeader />
          <BbcCategory />
          <BbccategoryHeader />
          <BbcCategory />
          <BbccategoryHeader />
          <BbcimageRow />
          <BbccategoryHeader />
          <BbcratingCategory />
          <BbccategoryHeader />
          <BbcCategory />
          <BbccategoryHeader />
          <BbcimageRow />
        </PageWrapper>
        <Bbcshare />
        <Bbcfooter />
        <PageTest question={'hej hej'} skipClicked={''} nextClicked={''} />
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

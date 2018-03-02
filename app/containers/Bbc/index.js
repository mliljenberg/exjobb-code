/**
 *
 * Bbc
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBbc from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import BBCHeader from '../../components/Bbcheader';
import BBCMainBigNews from '../../components/BbcmainBigNews';
import BBCMainNormalNews from '../../components/BbcmainNormalNews';
import BBCMainSmallGridNews from '../../components/BbcmainSmallGridNews';
import BBCCategoryHeader from '../../components/BbccategoryHeader';
import BBCBigImage from '../../components/BbcbigImage';
import BBCImageRow from '../../components/BbcimageRow';
import BBCSmallCategory from '../../components/BbcsmallCategory';
import BBCRatingCategory from '../../components/BbcratingCategory';
import BBCShare from '../../components/Bbcshare';
import BBCFooter from '../../components/Bbcfooter';


const PageWrapper = styled.div`
`;
const RowWrapper = styled.div`
`;
const Category = styled.div`
`;
const MainWrapper = styled.div`
`;

export class Bbc extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <BBCHeader />
        <PageWrapper>

          <MainWrapper>
            <RowWrapper>
              <BBCMainBigNews />
              <BBCMainNormalNews />
              <BBCMainNormalNews />
            </RowWrapper>

            <RowWrapper >
              <BBCMainNormalNews />
              <BBCMainNormalNews />
              <BBCMainNormalNews />
              <BBCMainSmallGridNews />
            </RowWrapper>
          </MainWrapper>

          <Category>
            <BBCCategoryHeader />
            <BBCBigImage />
            <BBCImageRow />
            <BBCImageRow />
          </Category>

          <Category>
            <BBCCategoryHeader />
            <BBCBigImage />
            <BBCImageRow />
            <BBCImageRow />
          </Category>

          <BBCSmallCategory />

          <BBCRatingCategory />

          <Category>
            <BBCCategoryHeader />
            <BBCBigImage />
            <BBCImageRow />
            <BBCImageRow />
          </Category>

          <Category>
            <BBCCategoryHeader />
            <BBCBigImage />
            <BBCImageRow />
            <BBCImageRow />
          </Category>

          <BBCSmallCategory />
        </PageWrapper>
        <BBCShare></BBCShare>
        <BBCFooter></BBCFooter>
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

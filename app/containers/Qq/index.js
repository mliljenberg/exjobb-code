/**
 *
 * Qq
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
import makeSelectQq from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import QQHeader from '../../components/Qqheader';
import QQHeaderColumns from '../../components/QqheaderColumns';
import QQImage from '../../components/Qqimage';
import QQText from '../../components/Qqtext';
import QQSeveralImages from '../../components/QqseveralImages';
import QQSocialMedia from '../../components/QqsocialMedia';
import PageTest from '../../components/PageTest';


const MainWrapper = styled.div`
`;
const PageWrapper = styled.div`
`;
const CategoryWrapper = styled.div`
`;
const LeftColumn = styled.div`
`;
const MiddleColumn = styled.div`
`;
const RightColumn = styled.div`
`;
const CommercialColumn = styled.div`
`;

/**
 * Se till att spara varje text columns medelanden i en lista som skickas in.
 *
 */

export class Qq extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <QQHeader />
        <PageWrapper>

          <MainWrapper>
            <LeftColumn>
              <QQHeaderColumns />
              <QQText />
              <QQImage />
              <QQText />
              <QQImage />
              <QQText />
            </LeftColumn>
            <MiddleColumn>
              <QQText />
              <QQSeveralImages />
              <QQText />
              <QQSeveralImages />
              <QQText />
            </MiddleColumn>
            <CommercialColumn></CommercialColumn>
          </MainWrapper>

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns />
              <QQImage />
              <QQText />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns />
              <QQImage />
              <QQText />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns />
              <QQImage />
              <QQText />
            </RightColumn>
          </CategoryWrapper>

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns />
              <QQImage />
              <QQText />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns />
              <QQImage />
              <QQText />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns />
              <QQImage />
              <QQText />
            </RightColumn>
          </CategoryWrapper>

        </PageWrapper>
        <QQSocialMedia />
        <PageTest />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Qq.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  qq: makeSelectQq(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'qq', reducer });
const withSaga = injectSaga({ key: 'qq', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Qq);

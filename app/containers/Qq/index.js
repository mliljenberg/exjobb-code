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
import { zhContent } from './content';

const BackWrapper = styled.div`
  background-color: red;
  margin-top: 0px;
  padding-top: 3em;
  padding-bottom: 3em;
  
`;
const MainWrapper = styled.div`
  display:flex ;
  flex-direction: row;
`;
const PageWrapper = styled.div`
 width: 82vw;
 margin-left: 9vw;
 background-color: white;
`;
const MainLeftColumn = styled.div`
  width: 350px;
  margin: 1em;

`;
const MainMiddleColumn = styled.div`
  width: 350px;
  margin: 1em;
  margin-left: 3em;
`;
const CategoryWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;
const LeftColumn = styled.div`
  width: 350px;
  margin: 1em;

`;
const MiddleColumn = styled.div`
  width: 350px;
  margin: 1em;
`;
const RightColumn = styled.div`
  width: 350px;
  margin: 1em;
`;
const CommercialColumn = styled.div`
`;

/**
 * Se till att spara varje text columns medelanden i en lista som skickas in.
 *
 */

export class Qq extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    console.log(zhContent);
  }
  render() {
    return (
      <BackWrapper>

        <PageWrapper>
          <QQHeader box1={zhContent.main_header.box1} box2={zhContent.main_header.box2} box3={zhContent.main_header.box3} box4={zhContent.main_header.box4} box5={zhContent.main_header.box5} box6={zhContent.main_header.box6} />
          <MainWrapper>
            <MainLeftColumn>
              <QQHeaderColumns id={1} text={zhContent.left_top_column.header1} />
              <QQText id={2} text={zhContent.left_top_column.text1} />
              <QQImage id={3} src={zhContent.left_top_column.img1.src} text={zhContent.left_top_column.img1.text} />
              <QQText id={4} text={zhContent.left_top_column.text2} />
              <QQImage id={5} src={zhContent.left_top_column.img2.src} text={zhContent.left_top_column.img2.text} />
              <QQText id={6} text={zhContent.left_top_column.text3} />
            </MainLeftColumn>
            <MainMiddleColumn>
              <QQHeaderColumns id={7} text={zhContent.mid_top_column.header1} />
              <QQText id={8} text={zhContent.mid_top_column.text1} />
              <QQSeveralImages id={9} src1={zhContent.mid_top_column.many_img1.src1} src2={zhContent.mid_top_column.many_img1.src1} src2Text={zhContent.mid_top_column.many_img1.src2_text} src1Text={zhContent.mid_top_column.many_img1.src2_text} />
              <QQText id={10} text={zhContent.mid_top_column.text2} />
              <QQSeveralImages id={11} src1={zhContent.mid_top_column.many_img2.src1} src2={zhContent.mid_top_column.many_img2.src1} src2Text={zhContent.mid_top_column.many_img2.src2_text} src1Text={zhContent.mid_top_column.many_img2.src2_text} />
              <QQText id={12} text={zhContent.mid_top_column.text3} />
            </MainMiddleColumn>
            <CommercialColumn></CommercialColumn>
          </MainWrapper>

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns id={13} text={zhContent.left_category_column1.header} />
              <QQImage id={14} src={zhContent.left_category_column1.img.src} text={zhContent.left_category_column1.img.text} />
              <QQText id={15} text={zhContent.left_category_column1.text} />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns id={16} text={zhContent.mid_category_column1.header} />
              <QQImage id={17} src={zhContent.mid_category_column1.img.src} text={zhContent.mid_category_column1.img.text} />
              <QQText id={18} text={zhContent.mid_category_column1.text} />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns id={19} text={zhContent.right_category_column1.header} />
              <QQImage id={20} src={zhContent.right_category_column1.img.src} text={zhContent.right_category_column1.img.text} />
              <QQText id={21} text={zhContent.right_category_column1.text} />
            </RightColumn>
          </CategoryWrapper>

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns id={22} text={zhContent.left_category_column2.header} />
              <QQImage id={23} src={zhContent.left_category_column2.img.src} text={zhContent.left_category_column2.img.text} />
              <QQText id={24} text={zhContent.left_category_column2.text} />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns id={25} text={zhContent.mid_category_column1.header} />
              <QQText id={26} text={zhContent.mid_category_column2.text} />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns id={27} text={zhContent.right_category_column2.header} />
              <QQImage id={28} src={zhContent.right_category_column2.img.src} text={zhContent.right_category_column2.img.text} />
              <QQText id={29} text={zhContent.right_category_column2.text} />
            </RightColumn>
          </CategoryWrapper>

        </PageWrapper>
        <QQSocialMedia />
        <PageTest />
        <FormattedMessage {...messages.header} />
      </BackWrapper>
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

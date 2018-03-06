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
import { enContent, zhContent } from './content';

const BackWrapper = styled.div`
  background: linear-gradient(#F44336, #EF5350, white);
  //background: linear-gradient(to top,rgba(255,0,0,0), rgba(255,0,0,1));
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
 background-color: #fafafa;
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
const Banner = styled.img`
  width: 750px;
  height: 75px;
  margin-top: 10px;
  margin-left: 17px;
  background-color: black;
`;
let content = {};
const zh = true;

/**
 * Se till att spara varje text columns medelanden i en lista som skickas in.
 *
 */

export class Qq extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    if (zh) {
      content = zhContent;
    } else {
      content = enContent;
    }
  }
  render() {
    return (
      <BackWrapper>
        <QQSocialMedia />

        <PageWrapper>
          <QQHeader zh={zh} box1={content.main_header.box1} box2={content.main_header.box2} box3={content.main_header.box3} box4={content.main_header.box4} box5={content.main_header.box5} box6={content.main_header.box6} />
          <Banner />
          <MainWrapper>
            <MainLeftColumn>
              <QQHeaderColumns id={1} text={content.left_top_column.header1} />
              <QQText id={2} text={content.left_top_column.text1} />
              <QQImage id={3} src={content.left_top_column.img1.src} text={content.left_top_column.img1.text} />
              <QQText id={4} text={content.left_top_column.text2} />
              <QQImage id={5} src={content.left_top_column.img2.src} text={content.left_top_column.img2.text} />
              <QQText id={6} text={content.left_top_column.text3} />
            </MainLeftColumn>
            <MainMiddleColumn>
              <QQHeaderColumns id={7} text={content.mid_top_column.header1} />
              <QQText id={8} text={content.mid_top_column.text1} />
              <QQSeveralImages id={9} header={content.mid_top_column.many_img1.header} src1={content.mid_top_column.many_img1.src1} src2={content.mid_top_column.many_img1.src2} src2Text={content.mid_top_column.many_img1.src2_text} src1Text={content.mid_top_column.many_img1.src1_text} />
              <QQText id={10} text={content.mid_top_column.text2} />
              <QQSeveralImages id={11} header={content.mid_top_column.many_img2.header} src1={content.mid_top_column.many_img2.src1} src2={content.mid_top_column.many_img2.src2} src2Text={content.mid_top_column.many_img2.src2_text} src1Text={content.mid_top_column.many_img2.src1_text} />
              <QQText id={12} text={content.mid_top_column.text3} />
            </MainMiddleColumn>
            <CommercialColumn></CommercialColumn>
          </MainWrapper>
          <Banner />

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns id={13} text={content.left_category_column1.header} />
              <QQImage id={14} src={content.left_category_column1.img.src} text={content.left_category_column1.img.text} />
              <QQText id={15} text={content.left_category_column1.text} />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns id={16} text={content.mid_category_column1.header} />
              <QQImage id={17} src={content.mid_category_column1.img.src} text={content.mid_category_column1.img.text} />
              <QQText id={18} text={content.mid_category_column1.text} />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns id={19} text={content.right_category_column1.header} />
              <QQImage id={20} src={content.right_category_column1.img.src} text={content.right_category_column1.img.text} />
              <QQText id={21} text={content.right_category_column1.text} />
            </RightColumn>
          </CategoryWrapper>

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns id={22} text={content.left_category_column2.header} />
              <QQImage id={23} src={content.left_category_column2.img.src} text={content.left_category_column2.img.text} />
              <QQText id={24} text={content.left_category_column2.text} />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns id={25} text={content.mid_category_column1.header} />
              <QQText id={26} text={content.mid_category_column2.text} />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns id={27} text={content.right_category_column2.header} />
              <QQImage id={28} src={content.right_category_column2.img.src} text={content.right_category_column2.img.text} />
              <QQText id={29} text={content.right_category_column2.text} />
            </RightColumn>
          </CategoryWrapper>

        </PageWrapper>

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

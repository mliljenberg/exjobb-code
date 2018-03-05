/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import QQHeader from '../../components/Qqheader';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';


import QQText from '../../components/Qqtext';
import Qqimage from '../../components/Qqimage';
import QqheaderColumns from '../../components/QqheaderColumns';
import QqseveralImages from '../../components/QqseveralImages';

const Wrapper = styled.div`
width:350px;

`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <QQHeader />
        <button onClick={this.props.onLocaleToggle}>Change language</button>
        <Wrapper>
          <QqheaderColumns text={'要闻'} />
          <QQText text={['NBA-字母哥35+9雄鹿20分逆转 科比获奥斯卡奖', '英超-明4时视频播水晶宫vs曼联 红魔欲夺回第二', '2018年GDP增长预期目标为6.5%左右', '政府工作报告:五年来重点城市重污染天数减少一半', '新能源汽车车辆购置税优惠政策再延长三年', '居民基本医保人均财政补助再增40元', '弘扬新时代奋斗精神：我奋斗我幸福', '向雷锋同志学习55周年：永恒的雷锋永远的榜样']} />
          <Qqimage text={'NBA-字母哥35+9雄鹿20分逆转 科比获奥斯卡奖'} src={'image here'} />
          <QQText text={['NBA-字母哥35+9雄鹿20分逆转 科比获奥斯卡奖', '英超-明4时视频播水晶宫vs曼联 红魔欲夺回第二', '2018年GDP增长预期目标为6.5%左右', '政府工作报告:五年来重点城市重污染天数减少一半', '新能源汽车车辆购置税优惠政策再延长三年', '居民基本医保人均财政补助再增40元', '弘扬新时代奋斗精神：我奋斗我幸福', '向雷锋同志学习55周年：永恒的雷锋永远的榜样']} />
          <QqseveralImages src1={'Image 1'} src1Text={'吴秀波配音表白黑猩猩'} src2={'Image 2'} src2Text={'吴秀波配音表白黑猩猩'} />
        </Wrapper>
      </div>
    );
  }
}

HomePage.propTypes = {
  onLocaleToggle: PropTypes.func,
};
const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: () => dispatch(changeLocale('de')),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

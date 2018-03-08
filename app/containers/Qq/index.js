/**
 *
 * Qq
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
import makeSelectQq from './selectors';
import reducer from './reducer';
import saga from './saga';
import QQHeader from '../../components/Qqheader';
import QQHeaderColumns from '../../components/QqheaderColumns';
import QQImage from '../../components/Qqimage';
import QQText from '../../components/Qqtext';
import QQSeveralImages from '../../components/QqseveralImages';
import QQSocialMedia from '../../components/QqsocialMedia';
import PageTest from '../../components/PageTest';
import { enContent, zhContent } from './content';
import { clickAction, finishQuestionAction, startTimerAction } from './actions';

const BackWrapper = styled.div`
  background: linear-gradient(#F44336, #EF5350, white);
  //background: linear-gradient(to top,rgba(255,0,0,0), rgba(255,0,0,1));
  margin-top: 0px;
  margin-bottom: 100px;
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
 //width: 750px;
  //height: 75px;
  margin-top: 10px;
  margin-left: 17px;
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
    this.state = { lastItemClicked: '' };

    if (zh) {
      content = zhContent;
    } else {
      content = enContent;
    }
    this.HandleOnClick = this.HandleOnClick.bind(this);
    this.NextClicked = this.NextClicked.bind(this);
    this.SkipClicked = this.SkipClicked.bind(this);
  }

  HandleOnClick(message, event) {
    console.info('Click Message: ', message);
    console.info('click event: ', event);
    console.log(event.screenX);
    console.log(event.screenY);
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      width = w.innerWidth || e.clientWidth || g.clientWidth,
      height = w.innerHeight || e.clientHeight || g.clientHeight;
    const relativePosX = event.screenX / width;
    const relativePosY = event.screenY / height;

    this.props.onClickAction(message, event.screenX, event.screenY, width, height, relativePosX, relativePosY, this.props.qq.timer);
    this.setState({ lastItemClicked: message });
  }
  // TODO: add this for chinese from messages...
  NextClicked() {
    if (this.state.lastItemClicked === '') {
      alert('You have to click something before you can move on');
    } else {
      this.props.finishQuestionAction(this.state.lastItemClicked, this.props.qq.timer, this.props.qq.timer);
      this.setState({ lastItemClicked: '' });
      this.props.onStartTimer();
    }
  }
  SkipClicked() {
    this.props.finishQuestionAction('', this.props.qq.timer, this.props.qq.timer);
    this.setState({ lastItemClicked: '' });
    this.props.onStartTimer();
  }

  render() {
    return (
      <BackWrapper>
        <QQSocialMedia handleClick={this.HandleOnClick} />

        <PageWrapper>
          <QQHeader handleClick={this.HandleOnClick} zh={zh} box1={content.main_header.box1} box2={content.main_header.box2} box3={content.main_header.box3} box4={content.main_header.box4} box5={content.main_header.box5} box6={content.main_header.box6} />
          <Banner src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/banner1.png'} />
          <MainWrapper>
            <MainLeftColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.left_top_column.header1} />
              <QQText handleClick={this.HandleOnClick} text={content.left_top_column.text1} />
              <QQImage handleClick={this.HandleOnClick} src={content.left_top_column.img1.src} text={content.left_top_column.img1.text} />
              <QQText handleClick={this.HandleOnClick} text={content.left_top_column.text2} />
              <QQImage handleClick={this.HandleOnClick} src={content.left_top_column.img2.src} text={content.left_top_column.img2.text} />
              <QQText handleClick={this.HandleOnClick} text={content.left_top_column.text3} />
            </MainLeftColumn>
            <MainMiddleColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.mid_top_column.header1} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_top_column.text1} />
              <QQSeveralImages handleClick={this.HandleOnClick} header={content.mid_top_column.many_img1.header} src1={content.mid_top_column.many_img1.src1} src2={content.mid_top_column.many_img1.src2} src2Text={content.mid_top_column.many_img1.src2_text} src1Text={content.mid_top_column.many_img1.src1_text} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_top_column.text2} />
              <QQSeveralImages handleClick={this.HandleOnClick} header={content.mid_top_column.many_img2.header} src1={content.mid_top_column.many_img2.src1} src2={content.mid_top_column.many_img2.src2} src2Text={content.mid_top_column.many_img2.src2_text} src1Text={content.mid_top_column.many_img2.src1_text} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_top_column.text3} />
            </MainMiddleColumn>
            <CommercialColumn></CommercialColumn>
          </MainWrapper>
          <Banner src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/banner2.png'} />

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.left_category_column1.header} />
              <QQImage handleClick={this.HandleOnClick} src={content.left_category_column1.img.src} text={content.left_category_column1.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.left_category_column1.text} />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.mid_category_column1.header} />
              <QQImage handleClick={this.HandleOnClick} src={content.mid_category_column1.img.src} text={content.mid_category_column1.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_category_column1.text} />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.right_category_column1.header} />
              <QQImage handleClick={this.HandleOnClick} src={content.right_category_column1.img.src} text={content.right_category_column1.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.right_category_column1.text} />
            </RightColumn>
          </CategoryWrapper>

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.left_category_column2.header} />
              <QQImage handleClick={this.HandleOnClick} src={content.left_category_column2.img.src} text={content.left_category_column2.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.left_category_column2.text} />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.mid_category_column1.header} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_category_column2.text} />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.right_category_column2.header} />
              <QQImage handleClick={this.HandleOnClick} src={content.right_category_column2.img.src} text={content.right_category_column2.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.right_category_column2.text} />
            </RightColumn>
          </CategoryWrapper>

        </PageWrapper>

        <PageTest time={this.props.qq.timer} question={this.props.qq.currentQuestion} nextClicked={this.NextClicked} skipClicked={this.SkipClicked} />
      </BackWrapper>
    );
  }
}

Qq.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onStartTimer: PropTypes.func,
  onClickAction: PropTypes.func,
  finishQuestionAction: PropTypes.func,
  lastItemClicked: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  qq: makeSelectQq(),
});

function mapDispatchToProps(dispatch) {
  return {
    onStartTimer: () => { dispatch(startTimerAction()); },
    onClickAction: (clickId, posX, posY, screenWidth, screenHeight, relativePosX, relativePosY, relativeTime) => { dispatch(clickAction(clickId, posX, posY, screenWidth, screenHeight, relativePosX, relativePosY, relativeTime)); },
    finishQuestionAction: (lastClickId, totalTime, endTime) => { dispatch(finishQuestionAction(lastClickId, totalTime, endTime)); },
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

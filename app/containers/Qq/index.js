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
import { push } from 'react-router-redux';

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
import { clickAction, finishQuestionAction, startTimerAction, inputQuestions, imageLoaded, finishTest } from './actions';
import { CircularProgress, Dialog, RaisedButton } from 'material-ui';
import makeSelectHomePage from '../HomePage/selectors';


const BackWrapper = styled.div`
  background: linear-gradient(#1565C0, #157ed8, white);
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
 width: 1200px;
 margin-left: 9vw;
 background-color: #fafafa;
`;
const MainLeftColumn = styled.div`
  min-width: 350px;
  margin: 1em;

`;
const MainMiddleColumn = styled.div`
  min-width: 350px;
  margin: 1em;
  margin-left: 3em;
`;
const CategoryWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;
const LeftColumn = styled.div`
  min-width: 350px;
  margin: 1em;

`;
const MiddleColumn = styled.div`
  min-width: 350px;
  margin: 1em;
`;
const RightColumn = styled.div`
  min-width: 350px;
  margin: 1em;
`;
const CommercialColumn = styled.div`
  width: 350px;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Banner = styled.img`
 //width: 750px;
  //height: 75px;
  margin-top: 10px;
  margin-left: 17px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
`;
const Image = styled.img`
  max-width: 350px;
`;
const customContentStyle = {
  width: '90%',
  height: '90%',
  maxHeight: 'none',
  maxWidth: 'none',
};

let content = {};
const zh = false;

/**
 * Se till att spara varje text columns medelanden i en lista som skickas in.
 *
 */

export class Qq extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { lastItemClicked: '', open: true };

    if (this.props.homePage.language === 'zh') {
      content = zhContent;
    } else {
      content = enContent;
    }
    this.props.onInputQuestions(this.props.homePage.questions);
    this.HandleOnClick = this.HandleOnClick.bind(this);
    this.NextClicked = this.NextClicked.bind(this);
    this.SkipClicked = this.SkipClicked.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  HandleOnClick(message, event) {
    console.info('Click Message: ', message);
    console.info('click event: ', event);
    console.log(event.screenX);
    console.log(event.screenY);
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || e.clientWidth || g.clientWidth;
    const height = w.innerHeight || e.clientHeight || g.clientHeight;
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
      this.props.finishQuestionAction(this.state.lastItemClicked, this.props.qq.timer);
      this.setState({ lastItemClicked: '' });
      this.props.onStartTimer();
    }
  }
  SkipClicked() {
    this.props.finishQuestionAction('', this.props.qq.timer);
    this.setState({ lastItemClicked: '' });
    this.props.onStartTimer();
  }
  handleClose = () => {
    this.setState({ open: false });
    this.props.onStartTimer();
  };
  handleImageLoaded() {
    this.props.onImageLoaded();
  }


  render() {
    if (this.props.qq.finished) {
      this.props.onFinishTest(this.props.qq.questions);
      this.props.onNextPage('sus');
    }
    const actions = (
      <LoadingWrapper>
        <h3>Please wait while images are loading</h3>
        <CircularProgress
          mode="determinate"
          value={(this.props.qq.imagesLoaded / 12) * 100}
          size={80}
          thickness={5}
        />
        <RaisedButton
          label="Start Test"
          primary
          onClick={this.handleClose}
          disabled={((this.props.qq.imagesLoaded / 12) < 1)}
        />
      </LoadingWrapper>
    );
    return (
      <BackWrapper>
        <Dialog open={this.state.open} actions={actions} modal contentStyle={customContentStyle} />
        <QQSocialMedia handleClick={this.HandleOnClick} />

        <PageWrapper>
          <QQHeader handleClick={this.HandleOnClick} zh={zh} box1={content.main_header.box1} box2={content.main_header.box2} box3={content.main_header.box3} box4={content.main_header.box4} box5={content.main_header.box5} box6={content.main_header.box6} />
          <Banner onLoad={this.handleImageLoaded} src={content.ads_src.banner_top} />
          <MainWrapper>
            <MainLeftColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.left_top_column.header1} />
              <QQText handleClick={this.HandleOnClick} text={content.left_top_column.text1} />
              <QQImage handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} src={content.left_top_column.img1.src} text={content.left_top_column.img1.text} />
              <QQText handleClick={this.HandleOnClick} text={content.left_top_column.text2} />
              <QQImage handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} src={content.left_top_column.img2.src} text={content.left_top_column.img2.text} />
              <QQText handleClick={this.HandleOnClick} text={content.left_top_column.text3} />
            </MainLeftColumn>
            <MainMiddleColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.mid_top_column.header1} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_top_column.text1} />
              <QQSeveralImages handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} header={content.mid_top_column.many_img1.header} src1={content.mid_top_column.many_img1.src1} src2={content.mid_top_column.many_img1.src2} src2Text={content.mid_top_column.many_img1.src2_text} src1Text={content.mid_top_column.many_img1.src1_text} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_top_column.text2} />
              <QQSeveralImages handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} header={content.mid_top_column.many_img2.header} src1={content.mid_top_column.many_img2.src1} src2={content.mid_top_column.many_img2.src2} src2Text={content.mid_top_column.many_img2.src2_text} src1Text={content.mid_top_column.many_img2.src1_text} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_top_column.text3} />
            </MainMiddleColumn>
            <CommercialColumn><Image src={content.ads_src.side_big} alt={'test'} />
              <Image src={content.ads_src.side_small} alt={'test'} />
            </CommercialColumn>
          </MainWrapper>
          <Banner onLoad={this.handleImageLoaded} src={content.ads_src.banner_mid} />

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.left_category_column1.header} />
              <QQImage handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} src={content.left_category_column1.img.src} text={content.left_category_column1.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.left_category_column1.text} />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.mid_category_column1.header} />
              <QQImage handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} src={content.mid_category_column1.img.src} text={content.mid_category_column1.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_category_column1.text} />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.right_category_column1.header} />
              <QQImage handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} src={content.right_category_column1.img.src} text={content.right_category_column1.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.right_category_column1.text} />
            </RightColumn>
          </CategoryWrapper>

          <CategoryWrapper>
            <LeftColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.left_category_column2.header} />
              <QQImage handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} src={content.left_category_column2.img.src} text={content.left_category_column2.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.left_category_column2.text} />
            </LeftColumn>
            <MiddleColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.mid_category_column1.header} />
              <QQText handleClick={this.HandleOnClick} text={content.mid_category_column2.text} />
            </MiddleColumn>
            <RightColumn>
              <QQHeaderColumns handleClick={this.HandleOnClick} text={content.right_category_column2.header} />
              <QQImage handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} src={content.right_category_column2.img.src} text={content.right_category_column2.img.text} />
              <QQText handleClick={this.HandleOnClick} text={content.right_category_column2.text} />
            </RightColumn>
          </CategoryWrapper>

        </PageWrapper>

        <PageTest selected={this.state.lastItemClicked} questionsLeft={`${this.props.qq.index + 1}/${this.props.qq.questions.length}`} question={this.props.qq.currentQuestion} nextClicked={this.NextClicked} skipClicked={this.SkipClicked} />
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
  onInputQuestions: PropTypes.func,
  onImageLoaded: PropTypes.func,
  onFinishTest: PropTypes.func,
  onNextPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  qq: makeSelectQq(),
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onStartTimer: () => { dispatch(startTimerAction()); },
    onFinishTest: (questions) => { dispatch(finishTest(questions)); },
    onImageLoaded: () => { dispatch(imageLoaded()); },
    onInputQuestions: (questions) => { dispatch(inputQuestions(questions)); },
    onNextPage: (site) => dispatch(push(`/${site}`)),
    onClickAction: (clickId, posX, posY, screenWidth, screenHeight, relativePosX, relativePosY, relativeTime) => { dispatch(clickAction(clickId, posX, posY, screenWidth, screenHeight, relativePosX, relativePosY, relativeTime)); },
    finishQuestionAction: (lastClickId, totalTime) => { dispatch(finishQuestionAction(lastClickId, totalTime)); },
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

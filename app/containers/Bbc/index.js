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
import { CircularProgress, RaisedButton, Dialog } from 'material-ui';
import { push } from 'react-router-redux';

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
import BbcratingCategory from '../../components/BbcratingCategory';
import BbccategoryHeader from '../../components/BbccategoryHeader';
import BbcimageRow from '../../components/BbcimageRow';
import { enContent, zhContent } from './content';
import { clickAction, finishQuestionAction, startTimerAction, inputQuestions, imageLoaded, finishTest } from './actions';
import makeSelectHomePage from '../HomePage/selectors';


let content = {};

const PageWrapper = styled.div`
margin: 0 10vw 0 10vw;
width: 1100px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40vh;
`;

const customContentStyle = {
  width: '90%',
  height: '90%',
  maxHeight: 'none',
  maxWidth: 'none',
};


const imagePath = function (path) {
  return `https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/bbc/${path}`;
};


export class Bbc extends React.Component { // eslint-disable-line react/prefer-stateless-function
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

    this.props.onClickAction(message, event.screenX, event.screenY, width, height, relativePosX, relativePosY, this.props.bbc.timer);
    this.setState({ lastItemClicked: message });
  }

  handleImageLoaded() {
    this.props.onImageLoaded();
  }

  // TODO: add this for chinese from messages...
  NextClicked() {
    if (this.state.lastItemClicked === '') {
      alert('You have to click something before you can move on');
    } else {
      this.props.finishQuestionAction(this.state.lastItemClicked, this.props.bbc.timer);
      this.setState({ lastItemClicked: '' });
      this.props.onStartTimer();
    }
  }
  SkipClicked() {
    this.props.finishQuestionAction('', this.props.bbc.timer);
    this.setState({ lastItemClicked: '' });
    this.props.onStartTimer();
  }
  handleClose = () => {
    this.setState({ open: false });
    this.props.onStartTimer();
  };


  render() {
    if (this.props.bbc.finished) {
      this.props.onFinishTest(this.props.bbc.questions);
      this.props.onNextPage('sus');
    }
    const actions = (
      <LoadingWrapper>
        <h3>Please wait while images are loading</h3>
        <CircularProgress
          mode="determinate"
          value={(this.props.bbc.imagesLoaded / 41) * 100}
          size={80}
          thickness={5}
        />
        <RaisedButton
          label="Start Test"
          primary
          onClick={this.handleClose}
          disabled={((this.props.bbc.imagesLoaded / 41) < 1)}
        />
      </LoadingWrapper>
    );

    return (
      <div>
        <Dialog open={this.state.open} actions={actions} modal contentStyle={customContentStyle} />
        <Bbcheader menus={content.header} handleClick={this.HandleOnClick} />
        <PageWrapper>
          <BbcmainNews comercialSrc={content.ad_src} handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} grid_news={content.main_news.grid_news} image_row={content.main_news.image_row} image_row_src={[(imagePath('head_news/1.png')), (imagePath('head_news/2.png')), (imagePath('head_news/3.png')), (imagePath('head_news/4.png'))]} main_src={imagePath('head_news/big.png')} main={content.main_news.main} comercial_src={'Find image'} />
          <BbccategoryHeader header={content.header_must_see} />
          <BbcCategory handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} big_image_header={content.category_must_see.header} big_image_src={imagePath('must_see/big.png')} bot_image_row_text={content.category_must_see.row} bot_image_src={[imagePath('must_see/2.1.png'), imagePath('must_see/2.2.png'), imagePath('must_see/2.3.png'), imagePath('must_see/2.4.png')]} top_image_row_text={content.category_must_see.top_row} top_image_src={[imagePath('must_see/1.1.png'), imagePath('must_see/1.2.png')]} />
          <BbccategoryHeader header={content.header_most_watched} />
          <BbcratingCategory handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} headers={content.rating_most_watched} />
          <BbccategoryHeader header={content.header_full_story} />
          <BbcCategory handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} big_image_header={content.category_full_story.header} big_image_src={imagePath('full_story/big.png')} bot_image_row_text={content.category_full_story.row} bot_image_src={[imagePath('full_story/2.1.png'), imagePath('full_story/2.2.png'), imagePath('full_story/2.3.png'), imagePath('full_story/2.4.png')]} top_image_row_text={content.category_full_story.top_row} top_image_src={[imagePath('full_story/1.1.png'), imagePath('full_story/1.2.png')]} />
          <BbccategoryHeader header={content.header_long_read} />
          <BbcimageRow handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} images_src={[imagePath('long_reads/1.png'), imagePath('long_reads/2.png'), imagePath('long_reads/3.png'), imagePath('long_reads/4.png')]} images_text={content.image_row_long_reads} />
          <BbccategoryHeader header={content.header_most_read} />
          <BbcratingCategory handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} headers={content.rating_most_read} />
          <BbccategoryHeader header={content.header_world} />
          <BbcCategory handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} big_image_header={content.category_around_world.header} big_image_src={imagePath('world/big.png')} bot_image_row_text={content.category_around_world.row} bot_image_src={[imagePath('world/2.1.png'), imagePath('world/2.2.png'), imagePath(('world/2.3.png')), imagePath(('world/2.4.png'))]} top_image_row_text={content.category_around_world.top_row} top_image_src={[imagePath(('world/1.1.png')), imagePath('world/1.2.png')]} />
          <BbccategoryHeader header={content.header_sport} />
          <BbcCategory handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} big_image_header={content.category_sport.header} big_image_src={imagePath('sport/big.png')} bot_image_row_text={content.category_sport.row} bot_image_src={[imagePath('sport/2.1.png'), imagePath('sport/2.2.png'), imagePath('sport/2.3.png'), imagePath('sport/2.4.png')]} top_image_row_text={content.category_sport.top_row} top_image_src={[imagePath('sport/1.1.png'), imagePath('sport/1.2.png')]} />
          <BbccategoryHeader header={content.header_newsbeat} />
          <BbcimageRow handleLoad={this.handleImageLoaded} handleClick={this.HandleOnClick} images_src={[imagePath('newsbeat/1.png'), imagePath('newsbeat/2.png'), imagePath('newsbeat/3.png'), imagePath(('newsbeat/4.png'))]} images_text={content.image_row_newsbeat} />
          <BbccategoryHeader header={content.header_social_media} />
          <Bbcshare handleClick={this.HandleOnClick} />
        </PageWrapper>
        <PageTest selected={this.state.lastItemClicked} questionsLeft={`${this.props.bbc.index + 1}/${this.props.bbc.questions.length}`} question={this.props.bbc.currentQuestion} nextClicked={this.NextClicked} skipClicked={this.SkipClicked} />
      </div>
    );
  }
}

Bbc.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onStartTimer: PropTypes.func,
  onClickAction: PropTypes.func,
  onInputQuestions: PropTypes.func,
  finishQuestionAction: PropTypes.func,
  lastItemClicked: PropTypes.string,
  onImageLoaded: PropTypes.func,
  onFinishTest: PropTypes.func,
  onNextPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  bbc: makeSelectBbc(),
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onStartTimer: () => { dispatch(startTimerAction()); },
    onImageLoaded: () => { dispatch(imageLoaded()); },
    onFinishTest: (questions) => { dispatch(finishTest(questions)); },
    onNextPage: (site) => dispatch(push(`/${site}`)),
    onInputQuestions: (questions) => { dispatch(inputQuestions(questions)); },
    onClickAction: (clickId, posX, posY, screenWidth, screenHeight, relativePosX, relativePosY, relativeTime) => { dispatch(clickAction(clickId, posX, posY, screenWidth, screenHeight, relativePosX, relativePosY, relativeTime)); },
    finishQuestionAction: (lastClickId, totalTime) => { dispatch(finishQuestionAction(lastClickId, totalTime)); },
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

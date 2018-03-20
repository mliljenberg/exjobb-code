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
import { enContent, zhContent } from './content';
import { clickAction, finishQuestionAction, startTimerAction } from '../Qq/actions';


let content = {};
const zh = false;

const PageWrapper = styled.div`
margin: 0 10vw 0 10vw;
`;

const imagePath = 'we will put main path here';


export class Bbc extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { lastItemClicked: '', open: true };

    if (zh) {
      content = zhContent;
    } else {
      content = enContent;
    }
    this.HandleOnClick = this.HandleOnClick.bind(this);
    this.NextClicked = this.NextClicked.bind(this);
    this.SkipClicked = this.SkipClicked.bind(this);
    this.handleClose = this.handleClose.bind(this);
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

  // TODO: add this for chinese from messages...
  NextClicked() {
    if (this.state.lastItemClicked === '') {
      alert('You have to click something before you can move on');
    } else {
      this.props.finishQuestionAction(this.state.lastItemClicked, this.props.bbc.timer, this.props.bbc.timer);
      this.setState({ lastItemClicked: '' });
      this.props.onStartTimer();
    }
  }
  SkipClicked() {
    this.props.finishQuestionAction('', this.props.bbc.timer, this.props.bbc.timer);
    this.setState({ lastItemClicked: '' });
    this.props.onStartTimer();
  }
  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    return (
      <div>
        <Bbcheader />
        <PageWrapper>
          <BbcmainNews handleClick={this.HandleOnClick} grid_news={content.main_news.grid_news} image_row={content.main_news.image_row} image_row_src={[imagePath, imagePath, imagePath, imagePath]} main_src={imagePath} main={content.main_news.main} comercial_src={'Find image'} />
          <BbccategoryHeader header={'fix this'} />
          <BbcCategory handleClick={this.HandleOnClick} big_image_header={content.category_must_see.header} big_image_src={imagePath} bot_image_row_text={content.category_must_see.row} bot_image_src={[imagePath, imagePath, imagePath, imagePath]} top_image_row_text={content.category_must_see.top_row} top_image_src={[imagePath, imagePath]} />
          <BbccategoryHeader header={'fix this'} />
          <BbcratingCategory handleClick={this.HandleOnClick} headers={content.rating_most_watched} />
          <BbccategoryHeader header={'fix this'} />
          <BbcCategory handleClick={this.HandleOnClick} big_image_header={content.category_full_story.header} big_image_src={imagePath} bot_image_row_text={content.category_full_story.row} bot_image_src={[imagePath, imagePath, imagePath, imagePath]} top_image_row_text={content.category_full_story.top_row} top_image_src={[imagePath, imagePath]} />
          <BbccategoryHeader header={'fix this'} />
          <BbcimageRow handleClick={this.HandleOnClick} images_src={[imagePath, imagePath, imagePath, imagePath]} images_text={content.image_row_long_reads} />
          <BbccategoryHeader header={'fix this'} />
          <BbcratingCategory handleClick={this.HandleOnClick} headers={content.rating_most_read} />
          <BbccategoryHeader header={'fix this'} />
          <BbcCategory handleClick={this.HandleOnClick} big_image_header={content.category_around_world.header} big_image_src={imagePath} bot_image_row_text={content.category_around_world.row} bot_image_src={[imagePath, imagePath, imagePath, imagePath]} top_image_row_text={content.category_around_world.top_row} top_image_src={[imagePath, imagePath]} />
          <BbccategoryHeader header={'fix this'} />
          <BbcCategory handleClick={this.HandleOnClick} big_image_header={content.category_sport.header} big_image_src={imagePath} bot_image_row_text={content.category_sport.row} bot_image_src={[imagePath, imagePath, imagePath, imagePath]} top_image_row_text={content.category_sport.top_row} top_image_src={[imagePath, imagePath]} />
          <BbccategoryHeader header={'fix this'} />
          <BbcimageRow handleClick={this.HandleOnClick} images_src={[imagePath, imagePath, imagePath, imagePath]} images_text={content.image_row_newsbeat} />
        </PageWrapper>
        <Bbcshare />
        <Bbcfooter />
        <PageTest selected={this.state.lastItemClicked} questionsLeft={`${this.props.bbc.index + 1}/${this.props.bbc.questions.length}`} question={this.props.bbc.currentQuestion} nextClicked={this.NextClicked} skipClicked={this.SkipClicked} />
      </div>
    );
  }
}

Bbc.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onStartTimer: PropTypes.func,
  onClickAction: PropTypes.func,
  finishQuestionAction: PropTypes.func,
  lastItemClicked: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  bbc: makeSelectBbc(),
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

const withReducer = injectReducer({ key: 'bbc', reducer });
const withSaga = injectSaga({ key: 'bbc', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Bbc);

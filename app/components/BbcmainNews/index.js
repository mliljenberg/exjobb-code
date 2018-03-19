/**
*
* BbcmainBigNews
*
*/

import React from 'react';
import styled from 'styled-components';
import HeadNews from './HeadNews';
import PropTypes from 'prop-types';

import BbcmainSmallGridNews from '../BbcmainSmallGridNews';
import BbcimageRow from '../BbcimageRow';
import BbcimageRowText from "../BbcimageRowText";

const Wrapper = styled.div`
  margin: 10px;
`;
const RowWrapper = styled.div` 
  display: flex;
  flex-direction: row;
`;


class BbcmainNews extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <HeadNews header={this.props.main.header} text={this.props.main.text} src={this.props.main_src} />
        <BbcimageRowText images_text={this.props.image_row} images_src={this.props.image_row_src} />
        <div>
          <RowWrapper>
            <BbcimageRow images_text={['something here']} images_src={['something here aswell']} />
            <BbcmainSmallGridNews news={this.props.grid_news} />
          </RowWrapper>
        </div>
      </Wrapper>
    );
  }
}

BbcmainNews.propTypes = {
  main: PropTypes.shape({
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
  image_row: PropTypes.array.isRequired,
  grid_news: PropTypes.array.isRequired,
  image_row_src: PropTypes.array.isRequired,
  main_src: PropTypes.string.isRequired,
  comercial_src: PropTypes.string,
};

export default BbcmainNews;

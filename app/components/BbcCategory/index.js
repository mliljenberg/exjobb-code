/**
*
* BbcCategory
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import BbcbigImage from '../BbcbigImage';
import BbcimageRow from '../BbcimageRow';


const Wrapper = styled.div`
  
`;
const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const RowWrapper = styled.div`
  margin-left: 20px;
  width: 100%;
`;

class BbcCategory extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <TopRow>
          <BbcbigImage handleClick={this.props.handleClick} header={this.props.big_image_header} src={this.props.big_image_src} />
          <RowWrapper>
            <BbcimageRow handleClick={this.props.handleClick} images_text={this.props.top_image_row_text} images_src={this.props.top_image_src} />
          </RowWrapper>
        </TopRow>
        <BbcimageRow handleClick={this.props.handleClick} images_text={this.props.bot_image_row_text} images_src={this.props.bot_image_src} /></Wrapper>
    );
  }
}

BbcCategory.propTypes = {
  big_image_header: PropTypes.string.isRequired,
  big_image_src: PropTypes.string.isRequired,
  top_image_row_text: PropTypes.array.isRequired,
  top_image_src: PropTypes.array.isRequired,
  bot_image_row_text: PropTypes.array.isRequired,
  bot_image_src: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BbcCategory;

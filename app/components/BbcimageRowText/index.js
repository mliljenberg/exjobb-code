/**
 *
 * BbcimageRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Image = styled.div`
  width: 220px;
  height: 115px;
  background-color: red;
  margin: 0px;
  padding: 0px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;


`;
const Header = styled.h5 `
  margin: 0px;
  padding: 0px;
`;

const Text = styled.p`
  margin-top: 5px;
`;

class BbcimageRowText extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.images_src[0]);
    return (
      <Wrapper>
        {this.props.images_text.map((image, index) =>
          (<div><Image src={this.props.images_src[index]} /><Header>{image.header}</Header><Text>{image.text}</Text></div>)
        )}
      </Wrapper>
    );
  }
}

BbcimageRowText.propTypes = {
  images_text: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ),
  images_src: PropTypes.array,
};

export default BbcimageRowText;

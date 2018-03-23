/**
 *
 * BbcimageRow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Image = styled.img`
  
  background-color: red;
  margin: 0px;
  padding: 0px;
  :hover {
  color:dodgerblue;
  cursor: pointer;
  }
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
  :hover {
  color:dodgerblue;
  cursor: pointer;
  }
`;

const Text = styled.p`
  margin-top: 5px;
  width:250px;
  :hover {
  color:dodgerblue;
  cursor: pointer;
  }
`;

class BbcimageRowText extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.images_text.map((image, index) =>
          (<div><Image src={this.props.images_src[index]} onClick={(e) => this.props.handleClick(image.header, e)} /><Header onClick={(e) => this.props.handleClick(image.header, e)}>{image.header}</Header><Text onClick={(e) => this.props.handleClick(image.header, e)}>{image.text}</Text></div>)
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
  handleClick: PropTypes.func.isRequired,
};

export default BbcimageRowText;

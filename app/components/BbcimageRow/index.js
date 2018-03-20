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
  width: 220px;
  word-wrap: break-word;
  :hover {
  color:dodgerblue;
  cursor: pointer;
}
`;


class BbcimageRow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.images_text.map((image, index) =>
          (<div><Image src={this.props.images_src[index]} onClick={(e) => this.props.handleClick(image, e)} /><Header onClick={(e) => this.props.handleClick(image, e)}>{image}</Header></div>)
        )}
      </Wrapper>
    );
  }
}

BbcimageRow.propTypes = {
  images_text: PropTypes.array.isRequired,
  images_src: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default BbcimageRow;

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


class BbcimageRow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.images_text.map((image, index) =>
          (<div><Image src={this.props.images_src[index]} /><Header>{image}</Header></div>)
        )}
      </Wrapper>
    );
  }
}

BbcimageRow.propTypes = {
  images_text: PropTypes.array.isRequired,
  images_src: PropTypes.array.isRequired,
};

export default BbcimageRow;

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
  width: 100%;

`;
const Header = styled.h5 `
  margin: 0px;
  padding: 0px;
`;

const Text = styled.p`
  margin-top: 5px;
`;

class BbcimageRow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.images.map((image) =>
          (<div><Image src={image.src} /><Header>{image.header}</Header><Text>{image.text}</Text></div>)
        )}
      </Wrapper>
    );
  }
}

BbcimageRow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
  ),
};

export default BbcimageRow;

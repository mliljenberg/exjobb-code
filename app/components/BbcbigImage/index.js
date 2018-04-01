/**
*
* BbcbigImage
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Image = styled.img`
  background-color: red;
  min-width: 480px;
  min-height: 300px;
  margin: 0px;
  padding: 0px;
  :hover {
  color:dodgerblue;
  cursor: pointer;
  }
`;
const Header = styled.h2`
 margin: 0px;
 padding: 0px;
 margin-left: 10px;
 :hover {
  color:dodgerblue;
  cursor: pointer;
  }
`;


class BbcbigImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Image onLoad={this.props.handleLoad} onClick={(e) => this.props.handleClick(this.props.header, e)} src={this.props.src} alt={'Something went wrong'} />
        <Header onClick={(e) => this.props.handleClick(this.props.header, e)}>{this.props.header}</Header>
      </div>
    );
  }
}

BbcbigImage.propTypes = {
  src: PropTypes.string.isRequired,
  header: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleLoad: PropTypes.func.isRequired,
};

export default BbcbigImage;

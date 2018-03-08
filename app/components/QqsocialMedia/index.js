/**
*
* QqsocialMedia
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";


const Fixed = styled.div`
  width: 7vw; 
  //height: 300px;
  right:10px;
  top:30vh;
  position: fixed;
  
`;


const Feedback = styled.img`
  height: 50px;
  width: 50px;
  margin-left: 50px;
  opacity:0.7;
   :hover {
  cursor: pointer;
  opacity:1;
  }
`;

const SocialMedia = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 5px;
  margin-left: 50px;
  opacity:0.7;
  :hover {
  cursor: pointer;
  opacity:1;
  }
`;


class QqsocialMedia extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Fixed>
        <Feedback onClick={(e) => this.props.handleClick('Feedback', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/contact.png'} />
        <SocialMedia onClick={(e) => this.props.handleClick('Facebook', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/facebook-logo.png'} />
        <SocialMedia onClick={(e) => this.props.handleClick('Twitter', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/twitter-logo.png'} />
        <SocialMedia onClick={(e) => this.props.handleClick('WeChat', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/wechat-logo.png'} />
        <SocialMedia onClick={(e) => this.props.handleClick('Instagram', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/ig-logo.png'} />
      </Fixed>
    );
  }
}

QqsocialMedia.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default QqsocialMedia;

/**
*
* QqsocialMedia
*
*/

import React from 'react';
import styled from 'styled-components';


const Fixed = styled.div`
  width: 7vw; 
  //height: 300px;
  right:10px;
  top:45vh;
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
        <Feedback src={'http://www.futuresoluindia.com/img/Email-Logo.png'} />
        <SocialMedia src={'http://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo.png'} />
        <SocialMedia src={'https://www.ioby.org/blog/wp-content/uploads/2017/04/Twitter-logo2.png'} />
        <SocialMedia src={'https://seeklogo.com/images/W/wechat-logo-C88C575BE0-seeklogo.com.png'} />
        <SocialMedia src={'https://instagram-brand.com/wp-content/themes/ig-branding/assets/images/ig-logo-email.png'} />
      </Fixed>
    );
  }
}

QqsocialMedia.propTypes = {

};

export default QqsocialMedia;

/**
*
* Bbcshare
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
  height: 200px;
  margin-top: 50px;
`;

const SocialMedia = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  :hover {
  cursor: pointer;
  }
`

class Bbcshare extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <SocialMedia onClick={(e) => this.props.handleClick('Feedback', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/contact.png'} />
        <SocialMedia onClick={(e) => this.props.handleClick('Facebook', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/facebook-logo.png'} />
        <SocialMedia onClick={(e) => this.props.handleClick('Twitter', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/twitter-logo.png'} />
        <SocialMedia onClick={(e) => this.props.handleClick('WeChat', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/wechat-logo.png'} />
        <SocialMedia onClick={(e) => this.props.handleClick('Instagram', e)} src={'https://s3.ap-northeast-2.amazonaws.com/marcus-thesis/qq/ig-logo.png'} />

      </Wrapper>
    );
  }
}

Bbcshare.propTypes = {
  handleClick: PropTypes.func,
};

export default Bbcshare;

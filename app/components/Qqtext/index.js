/**
*
* Qqtext
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
font-size: smaller;
`;
const Paragraph = styled.p`
margin:0.5em;
padding:0;
:hover {
color:dodgerblue;
cursor: pointer;
}
`;

class Qqtext extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {this.props.text.map((line) => (<Paragraph key={line}>{line}</Paragraph>))}
      </Wrapper>
    );
  }
}

Qqtext.propTypes = {
  text: PropTypes.array,

};

export default Qqtext;

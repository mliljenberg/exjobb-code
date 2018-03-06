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
margin-top: 0.7em;
padding:0;
:hover {
color:dodgerblue;
cursor: pointer;
}
`;

class Qqtext extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.id);
    return (
      <Wrapper>
        {this.props.text.map((line) => (<Paragraph key={line}>{line}</Paragraph>))}
      </Wrapper>
    );
  }
}

Qqtext.propTypes = {
  text: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,

};

export default Qqtext;

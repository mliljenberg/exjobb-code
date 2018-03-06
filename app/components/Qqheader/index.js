/**
*
* Qqheader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
  background-color: dodgerblue;
  color:white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
`;
const Box = styled.div`
  margin:1em 0em 1em 0px;
  padding-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;
const Row = styled.div`
  margin-top: 5px;
  padding: 0px;
  display: flex;
  flex-direction: row;
`;
const Text = styled.p`
  margin: 0px 0px 0px 20px;
  :hover{
  cursor: pointer;
  }

`;


class Qqheader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Box>
          <Row>
            {this.props.box1.row1.map((item) => (<Text>{item}</Text>))}
          </Row>
          <Row>
            {this.props.box1.row2.map((item) => (<Text>{item}</Text>))}
          </Row>
        </Box>
        <Box>
          <Row>
            {this.props.box2.row1.map((item) => (<Text>{item}</Text>))}
          </Row>
          <Row>
            {this.props.box2.row2.map((item) => (<Text>{item}</Text>))}
          </Row>
        </Box>
        <Box>
          <Row>
            {this.props.box3.row1.map((item) => (<Text>{item}</Text>))}
          </Row>
          <Row>
            {this.props.box3.row2.map((item) => (<Text>{item}</Text>))}
          </Row>
        </Box>
        <Box>
          <Row>
            {this.props.box4.row1.map((item) => (<Text>{item}</Text>))}
          </Row>
          <Row>
            {this.props.box4.row2.map((item) => (<Text>{item}</Text>))}
          </Row>
        </Box>
        <Box>
          <Row>
            {this.props.box5.row1.map((item) => (<Text>{item}</Text>))}
          </Row>
          <Row>
            {this.props.box5.row2.map((item) => (<Text>{item}</Text>))}
          </Row>
        </Box>
        <Box>
          <Row>
            {this.props.box6.row1.map((item) => (<Text>{item}</Text>))}
          </Row>
          <Row>
            {this.props.box6.row2.map((item) => (<Text>{item}</Text>))}
          </Row>
        </Box>
      </Wrapper>
    );
  }
}

Qqheader.propTypes = {
  box1: PropTypes.object.isRequired,
  box2: PropTypes.object.isRequired,
  box3: PropTypes.object.isRequired,
  box4: PropTypes.object.isRequired,
  box5: PropTypes.object.isRequired,
  box6: PropTypes.object.isRequired,


};

export default Qqheader;

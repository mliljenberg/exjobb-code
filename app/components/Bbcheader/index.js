/**
*
* Bbcheader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
  background-color: #1565C0;
  color:white;
  display: flex;
  height: 75px;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 0;
`;


const Row = styled.div`
  margin-left: 5%;
  padding: 0px;
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  margin: 0px 0px 0px 20px;
  :hover{
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: white;
  }`;

const Header = styled.h1`
  margin: 0 0 0 20px;
  font-family: Avenir;

`;

class Bbcheader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Row>
          <Header>News</Header>
        </Row>
        <Row>
          <Text>hej</Text>
          <Text>hej</Text>
          <Text>hej</Text>
          <Text>hej</Text>
          <Text>hej</Text>
          <Text>hej</Text>
        </Row>
      </Wrapper>
    );
  }
}

Bbcheader.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.objectOf({ header: PropTypes.string, list: PropTypes.array })),

};

export default Bbcheader;

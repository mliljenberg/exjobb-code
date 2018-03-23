/**
*
* Bbcheader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navbar, NavDropdown, MenuItem, Nav } from 'react-bootstrap';


const Wrapper = styled.div`
  background-color: #1565C0;
  color:white;
  display: flex;
  height: 85px;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  margin-top: 0;
  .header-bootstrap {
    background-color: #1565C0;
    color: white;
  a{
    color: black;
  }
  :hover {
  }
  }
  .text-bootstrap {
    color: white;
    text-decoration: none;
  }
`;


const Row = styled.div`
  margin-left: 5%;
  margin-top: 5px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  :hover{
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: white;
  }
`;

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
          <Navbar >
            <Nav >
              {this.props.menus.map((item, index) => (
                <NavDropdown eventKey={index} title={item.header} id="basic-nav-dropdown">
                  {item.list.map((nextItem, indexTwo) => (
                    <MenuItem onClick={(e) => this.props.handleClick(nextItem, e)} eventKey={`${index}.${indexTwo}`}>{nextItem}</MenuItem>
                  ))}
                </NavDropdown>
                ))}
            </Nav>
          </Navbar>
        </Row>
      </Wrapper>
    );
  }
}

Bbcheader.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.objectOf({ header: PropTypes.string, list: PropTypes.array })),
  handleClick: PropTypes.func,
};

export default Bbcheader;

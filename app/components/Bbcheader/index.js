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
  li{
  :hover{
  color:black;
  }
  }
  a{
  color: white;
  :visited {
    color: black;
  }
  :active{
  color:black;
  }
  }
  .header-bootstrap {
    color: white;
   .dropdown-toggle{
   color: white;
   }
  :hover {
    color: white;
    text-decoration: none;
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
          <Navbar bsStyle={'header-bootstrap'} >
            <Nav bsStyle={'header-bootstrap'}>
              {this.props.menus.map((item, index) => (
                <NavDropdown bsStyle={'header-bootstrap'} eventKey={index} title={item.header} id="basic-nav-dropdown">
                  {item.list.map((nextItem, indexTwo) => (
                    <MenuItem bsStyle={'header-bootstrap'} onClick={(e) => this.props.handleClick(nextItem, e)} eventKey={`${index}.${indexTwo}`}>{nextItem}</MenuItem>
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
  menus: PropTypes.array,
  handleClick: PropTypes.func,
};

export default Bbcheader;

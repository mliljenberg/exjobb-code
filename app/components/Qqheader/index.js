/**
*
* Qqheader
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
  background-color: #1565C0;
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
const BoxEng = styled.div`
  margin:1em 0em 0.5em 0px;
  display: flex;
  width: 300px;
  border-right-style: solid;
  border-left-style: solid;
  border-width: 1px;
  flex-direction: column;
  justify-content: center;
  
`;
const Row = styled.div`
  margin-top: 5px;
  padding: 0px;
  display: flex;
  flex-direction: row;
`;
const RowEng = styled.div`
  font-size: small;
  margin-top: 5px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
`;
const Text = styled.p`
  margin: 0px 0px 0px 20px;
  :hover{
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: white;
  }

`;
const TextEng = styled.p`
  margin: 0px 0px 0px 0px;
  width:61px;
  text-align:center;
  :hover{
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: white;
  }

`;

class Qqheader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.zh) {
      return (
        <Wrapper>
          <Box>
            <Row>
              {this.props.box1.row1.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
            <Row>
              {this.props.box1.row2.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
          </Box>
          <Box>
            <Row>
              {this.props.box2.row1.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
            <Row>
              {this.props.box2.row2.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
          </Box>
          <Box>
            <Row>
              {this.props.box3.row1.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
            <Row>
              {this.props.box3.row2.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
          </Box>
          <Box>
            <Row>
              {this.props.box4.row1.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
            <Row>
              {this.props.box4.row2.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
          </Box>
          <Box>
            <Row>
              {this.props.box5.row1.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
            <Row>
              {this.props.box5.row2.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
          </Box>
          <Box>
            <Row>
              {this.props.box6.row1.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
            <Row>
              {this.props.box6.row2.map((item) => (<Text key={item} >{item}</Text>))}
            </Row>
          </Box>
        </Wrapper>);
    }
    return (
      <Wrapper>
        <BoxEng>
          <RowEng>
            {this.props.box1.row1.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
          <RowEng>
            {this.props.box1.row2.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
        </BoxEng>
        <BoxEng>
          <RowEng>
            {this.props.box2.row1.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
          <RowEng>
            {this.props.box2.row2.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
        </BoxEng>
        <BoxEng>
          <RowEng>
            {this.props.box3.row1.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
          <RowEng>
            {this.props.box3.row2.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
        </BoxEng>
        <BoxEng>
          <RowEng>
            {this.props.box4.row1.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
          <RowEng>
            {this.props.box4.row2.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
        </BoxEng>
        <BoxEng>
          <RowEng>
            {this.props.box5.row1.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
          <RowEng>
            {this.props.box5.row2.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
        </BoxEng>
        <BoxEng>
          <RowEng>
            {this.props.box6.row1.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
          <RowEng>
            {this.props.box6.row2.map((item) => (<TextEng key={item} >{item}</TextEng>))}
          </RowEng>
        </BoxEng>
      </Wrapper>);
  }
}

Qqheader.propTypes = {
  box1: PropTypes.object.isRequired,
  box2: PropTypes.object.isRequired,
  box3: PropTypes.object.isRequired,
  box4: PropTypes.object.isRequired,
  box5: PropTypes.object.isRequired,
  box6: PropTypes.object.isRequired,
  zh: PropTypes.bool.isRequired,


};

export default Qqheader;

import React from 'react';
import styled from 'styled-components'

export const List =styled.div`

`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 50px;
  border: 1px solid #DDDDDD;
  margin-top: -1px;
`
const Icon = styled.div`
  text-align: right;
  padding-right: 10px;
  padding-top: 10px;
`
const Name = styled.div`
  text-align: left;
  line-height: 40px;
  padding-top: 5px;
`
const Count = styled.div`
  line-height: 40px;
  font-size: 22px;
  font-weight: 500;
  padding-right: 30px;
`

export const ListItem = (props) => {
  return (
    <Wrapper>
      <Icon>{props.icon}</Icon>
      <Name>{props.children}</Name>
      <Count>x{props.count}</Count>
    </Wrapper>
  );
};

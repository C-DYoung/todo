import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import Checkbox from '../Checkbox';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

export default function TodoItem() {
  return (
    <Box>
      <Checkbox></Checkbox>
      <Block marginLeft="50px" />
    </Box>
  );
}

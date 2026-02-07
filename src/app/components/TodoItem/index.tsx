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
  // <></> 는 단순하게 코드상으로 연결 하는 것
  return (
    <Box>
      <div style={{ background: 'yellow' }}>여기 보여?</div>
      <Checkbox checked={true} />
      <Block marginLeft="50px" />
    </Box>
  );
}

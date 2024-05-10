import React from 'react';
// 현재 파일은 모듈이라 위에 처럼 react를 선언 해줘야함. 왜 ,.. ?
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%auto;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput() {
  // <></> 는 단순하게 코드상으로 연결 하는 것
  return (
    <Box>
      <Input placeholder="할 일을 입력해 주세요" />
    </Box>
  );
}

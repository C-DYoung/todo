import React from 'react';
import styled from 'styled-components';

const Circle = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 2px solid ${props => (props.checked ? 'red' : '#eee')};
  padding: 3px;
`;

export default function Checkbox({
  checked, //todo 완료 확인
  onClick, // todo 체크박스 클릭시 실행함
}: {
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      <Circle checked={checked} onClick={onClick}></Circle>
    </>
  );
}

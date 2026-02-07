import React from 'react';
import styled from 'styled-components';

export default styled.div<{
  marginTop?: string; // props로 값이 오지않을수도 있어 ?를 붙임
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}>`
  // 값이 오지않으면 or 연산자를 통해 값이 0이 되도록 함
  margin-top: ${props => props.marginTop || '0'};
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
`;

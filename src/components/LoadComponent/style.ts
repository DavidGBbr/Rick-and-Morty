import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;

export const loadEffect = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const Loader = styled.div`
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #000;
  height: 80px;
  width: 80px;
  animation: ${loadEffect} 1s infinite;
`;

import styled from "styled-components";

export const Item = styled.div`
  background-color: #1b1c1e;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  h2 {
    font-family: monospace;
    text-align: center;
  }

  @media (max-width: 370px) {
    align-items: center;
    img {
      width: 80%;
      align-self: center;
    }
  }
`;

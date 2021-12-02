import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  width: 300px;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  img {
    width: 100px;
    border-radius: 5px;
  }
  h4 {
    width: 200px;
  }
  a {
    text-decoration: none;
    color: #2196F3;
    font-weight: bold;
  }
  a:hover {
    opacity: 0.7;
  }
  svg {
    position: relative;
    top: 3px;
  }
`;
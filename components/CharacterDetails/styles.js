import styled from "styled-components";

export const ContainerPageDetails = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  text-align: center;
  a {
    color: white;
    font-weight: bold;
    position: relative;
    top: 10px;
    border-radius: 5px;
    background-color: #2196F3;
    text-decoration: none;
    padding: 10px;
  }
  a:hover {
    opacity: 0.8;
  }
  h1 {
    margin-top: 30px;
  }
`;


export const ContainerDetails = styled.div`
  display: flex;
  margin: 20px auto;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  width: 80%;
  height: 700px;
  border: 3px solid #2196F3;
  border-radius: 3px;
  div {
    color: #fff;
    display: flex;
    padding:10px;
    border-radius: 3px;
    p {
      margin-right: 10px;
    }
    p:before {
      content: '•';
    }
  }
`;
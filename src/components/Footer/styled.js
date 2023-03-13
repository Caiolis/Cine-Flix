import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #DFE6ED;
  border-top: 1px solid #9EADBA;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  position: relative;
  bottom: 0px;
  img {
    max-width: 60px;
    width: 100%;
    border-radius: 2px;
    border: 6px solid #FFF;
    box-shadow: 0px 2px 4px 0px #0000001A;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
`

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 26px;
  font-weight: 400;
  color: #293845;
  margin-left: 20px;
`;
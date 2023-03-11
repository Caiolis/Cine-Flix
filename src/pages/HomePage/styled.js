import styled from "styled-components";

export const Title = styled.h2`
  font-family: Roboto, "sans-serif";
  font-weight: 400;
  font-size: 24px;
  color: #293845;
  margin: 50px 0px;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 11px 38px;
  padding: 0px 30px;
`;

export const MovieContainer = styled.div`
  max-width: 145px;
  width: 100%;
  padding: 8px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  img {
    width: 100%;
  }
`;

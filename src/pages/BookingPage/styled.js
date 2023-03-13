import styled from "styled-components";

export const Title = styled.h2`
  font-family: Roboto, "sans-serif";
  font-weight: 400;
  font-size: 24px;
  color: #293845;
  margin: 50px 0px;
  text-align: center;
`;

export const TimeContainer = styled.div`
  width: 100%;
  padding: 0px 24px;
`;

export const TimeDay = styled.h3`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  color: #293845;
  margin-bottom: 20px;
`;

export const TimeHourContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 23px;
`

export const TimeHour = styled.button`
  outline: none;
  border: none;
  border-radius: 3px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  color: #FFF;
  background-color: #E8833A;
  width: 83px;
  height: 43px;
  &:hover {
    background-color: #c26725;
  }
`;

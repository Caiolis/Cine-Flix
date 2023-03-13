import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const SucessMessage = styled.h1 `
	font-family: Roboto;
	font-size: 24px;
	font-weight: 700;
	line-height: 28px;
	text-align: center;
	color: #247A6B;
	margin: 50px 0px;
`;

export const InfoWrapper = styled.div `
	width: 100%;
	padding: 0px 28px;
	margin-bottom: 30px;
`;

export const InfoTitle = styled.h2 `
	font-family: Roboto;
	font-size: 24px;
	font-weight: 700;
	color: #293845;
`;

export const InfoDescription = styled.h3 `
	font-family: Roboto;
	font-size: 22px;
	font-weight: 400;
	color: #293845;
`;

export const HomeButton = styled.button`
	outline: none;
  border: none;
  border-radius: 3px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  color: #FFF;
  background-color: #E8833A;
  width: 225px;
  height: 42px;
	margin-top: 50px;
  &:hover {
    background-color: #c26725;
  }
`;
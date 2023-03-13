import styled from "styled-components";

export const Title = styled.h2`
  font-family: Roboto, "sans-serif";
  font-weight: 400;
  font-size: 24px;
  color: #293845;
  margin: 40px 0px 20px 0px;
  text-align: center;
`;

export const SeatsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
	flex-wrap: wrap;
  gap: 18px 7px;
	padding: 0px 24px;
`;

export const SeatsCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 500px;
  border: 1px solid ${(props) => (props.isAvailable ? (props.selected ? '#0E7D71' : "#808F9D") : "#F7C52B")};
  background-color: ${(props) => (props.isAvailable ? (props.selected ? '#1AAE9E' : "#C3CFD9") : "#FBE192")};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SeatsNumbers = styled.h6`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  color: #000000;
`;

export const CaptionContainer = styled.div `
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 20px;
`;

export const IndivualCaptionContainer = styled.div `
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;


export const CaptionCircle = styled.div`
	width: 30px;
  height: 30px;
  border-radius: 500px;
  border: 1px solid ${(props) => props.circleBorderColor};
  background-color: ${(props) => props.circleBackgroundColor};
`;

export const CaptionText = styled.p `
	font-family: Roboto;
	font-size: 13px;
	font-weight: 400;
	color: #4E5A65;
	text-align: center;
	margin-top: 10px;
`;

export const FormWrapper = styled.div`
	width: 100%;
	padding: 0px 24px;
	margin: 42px 0px 30px 0px;
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const 	InputWrapper = styled.div`
	width: 100%;
	input {
		width: 100%;
		height: 51px;
		padding: 0px 18px;
		border: 1px solid #D4D4D4;
		border-radius: 3px;
		outline: none;
		color: #AFAFAF;
		font-family: Roboto;
		font-size: 18px;
		font-style: italic;
		font-weight: 400;
		margin-bottom: 10px;
	}
`;

export const FormLabel = styled.label`
	font-family: Roboto;
	font-size: 18px;
	font-weight: 400;
	color: #293845;

`

export const SendButton = styled.button`
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
	margin-top: 35px;
  &:hover {
    background-color: #c26725;
  }
`;
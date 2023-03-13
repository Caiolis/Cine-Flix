import {
  Title,
  SeatsCircle,
  SeatsNumbers,
  SeatsContainer,
  CaptionContainer,
  IndivualCaptionContainer,
  CaptionCircle,
  CaptionText,
	FormWrapper,
	InputWrapper,
	FormLabel,
	SendButton
} from "./styled";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

export default function SeatsPage({ sucessInformation, setSucessInformation }) {

  const { idSessao } = useParams();
  const [seatsInfo, setSeatsInfo] = useState([]);
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [seatsNumberInfo, setSeatsNumberInfo] = useState([]);
	const [name, setName] = useState("");
	const [cpf, setCpf] = useState("");
	const navigate = useNavigate();

	const buyingCart = {
		ids: selectedSeats,
		name: name,
		cpf: cpf
	};
	

  // Resquests the information about the chosen movie in the API
  useEffect(() => {
    const prommise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
    );

    prommise.then((response) => setSeatsInfo(response.data));
    prommise.catch((error) => console.log(error));
  }, []);

	function formSubmit(e) {
		e.preventDefault();
		const buyingInfo = {
			movieName: seatsInfo.movie.title,
			movieDay: seatsInfo.day.date,
			movieHour: seatsInfo.name,
			movieSeats: seatsNumberInfo,
			movieBuyer: buyingCart.name,
			movieCpf: buyingCart.cpf
		}

		setSucessInformation(buyingInfo);
		
		const prommise = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', buyingCart);
		prommise.then(response => navigate('/sucesso', sucessInformation));
		prommise.catch(error => console.log(error));

	}

	console.log(seatsInfo);
  return (
    <>
      <Title>Selecione o(s) assento(s)</Title>
      <SeatsContainer >
        {seatsInfo.length == 0
          ? "loading"
          : seatsInfo.seats.map((seats) => (
              <Seats
                key={seats.id}
                seatNumber={seats.name}
                isAvailable={seats.isAvailable}
								setSelectedSeats={setSelectedSeats}
								selectedSeats={selectedSeats}
								seatsNumberInfo={seatsNumberInfo}
								setSeatsNumberInfo={setSeatsNumberInfo}
								seatIdentifier={seats.id}
              />
            ))}
      </SeatsContainer>
      <CaptionContainer>

        <IndivualCaptionContainer>
          <CaptionCircle
            circleBackgroundColor={"#1AAE9E"}
            circleBorderColor={"#0E7D71"}
          />
          <CaptionText>Selecionado</CaptionText>
        </IndivualCaptionContainer>

        <IndivualCaptionContainer>
          <CaptionCircle
            circleBackgroundColor={"#C3CFD9"}
            circleBorderColor={"#7B8B99"}
          />
          <CaptionText>Disponível</CaptionText>
        </IndivualCaptionContainer>

        <IndivualCaptionContainer>
          <CaptionCircle
            circleBackgroundColor={"#FBE192"}
            circleBorderColor={"#F7C52B"}
          />
          <CaptionText>Indisponível</CaptionText>
        </IndivualCaptionContainer>

      </CaptionContainer>
			
			<FormWrapper>
				<form onSubmit={formSubmit}>
						<InputWrapper>
							<FormLabel htmlFor="name">Nome do comprador:</FormLabel>
							<input id="name" type="text" placeholder="Digite seu nome..." required value={name} onChange={e => setName(e.target.value)}/>
						</InputWrapper>

						<InputWrapper>
							<FormLabel htmlFor="cpf">CPF do comprador:</FormLabel>
							<input id="cpf" type="text" placeholder="Digite seu CPF..." required onChange={e => setCpf(e.target.value)}/>
						</InputWrapper>

						<SendButton type="submit">Reservar assento(s)</SendButton>
				</form>		
			</FormWrapper>			
			
			{seatsInfo.length == 0 ? 'loading' : <Footer movieBanner={seatsInfo.movie.posterURL} movieTitle={seatsInfo.movie.title} moviteSessionDay={seatsInfo.day.weekday} moviteSessionHour={seatsInfo.name}/>}
    </>
  );
}

function Seats({ seatNumber, isAvailable, seatIdentifier, setSelectedSeats, selectedSeats, seatsNumberInfo, setSeatsNumberInfo }) {
	const [selected, setSelected] = useState(false);

	function handleSeatClick() {
		if(isAvailable) {
			if(selectedSeats.includes(seatIdentifier)) {
				const removeSelectedSeats = selectedSeats.indexOf(seatIdentifier);
				const removeSeatNumber = seatsNumberInfo.indexOf(seatNumber)
				selectedSeats.splice(removeSelectedSeats, 1);
				seatsNumberInfo.splice(removeSeatNumber, 1);
			} else {
				setSelectedSeats([...selectedSeats, seatIdentifier]);
				setSeatsNumberInfo([...seatsNumberInfo, seatNumber]);
			}
			setSelected(!selected);
		} else {
			alert('This seat is not available');
		}
	}

  return (
    <SeatsCircle isAvailable={isAvailable} selected={selected} onClick={() => handleSeatClick()}>
      <SeatsNumbers>{seatNumber}</SeatsNumbers>
    </SeatsCircle>
  );
}

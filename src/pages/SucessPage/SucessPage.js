import { SucessMessage, InfoWrapper, InfoTitle, InfoDescription, HomeButton, Container } from './styled';
import { Link, useLocation } from 'react-router-dom';

export default function SucessPage({ sucessInformation }) {

	console.log(sucessInformation);
	return (
		<>
			<SucessMessage>Pedido feito<br/> com sucesso!</SucessMessage>

			<InfoWrapper data-test="movie-info">
				<InfoTitle>Filme e sessão</InfoTitle>
				<InfoDescription>{sucessInformation.movieName}</InfoDescription>
				<InfoDescription>{sucessInformation.movieDay} {sucessInformation.movieHour}</InfoDescription>
			</InfoWrapper>

			<InfoWrapper data-test="seats-info">
				<InfoTitle>Ingressos</InfoTitle>
				{sucessInformation.movieSeats.map((seat, index) => <InfoDescription key={index}>Assento {seat}</InfoDescription>)}
			</InfoWrapper>

			<InfoWrapper data-test="client-info">
				<InfoTitle>Comprador</InfoTitle>
				<InfoDescription>Nome: {sucessInformation.movieBuyer}</InfoDescription>
				<InfoDescription>CPF: {sucessInformation.movieCpf}</InfoDescription>
			</InfoWrapper>

			<Container>
				<Link to="/" data-test="go-home-btn">
					<HomeButton>Voltar pra Home</HomeButton>
				</Link>
			</Container>
		</>
	);
} 
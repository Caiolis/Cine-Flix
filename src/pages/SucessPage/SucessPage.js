import { SucessMessage, InfoWrapper, InfoTitle, InfoDescription, HomeButton, Container } from './styled';
import { Link, useLocation } from 'react-router-dom';

export default function SucessPage({ sucessInformation }) {

	console.log(sucessInformation);
	return (
		<>
			<SucessMessage>Pedido feito<br/> com sucesso!</SucessMessage>

			<InfoWrapper>
				<InfoTitle>Filme e sessão</InfoTitle>
				<InfoDescription>{sucessInformation.movieName}</InfoDescription>
				<InfoDescription>{sucessInformation.movieDay} {sucessInformation.movieHour}</InfoDescription>
			</InfoWrapper>

			<InfoWrapper>
				<InfoTitle>Ingressos</InfoTitle>
				{sucessInformation.movieSeats.map((seat, index) => <InfoDescription key={index}>Assento {seat}</InfoDescription>)}
			</InfoWrapper>

			<InfoWrapper>
				<InfoTitle>Comprador</InfoTitle>
				<InfoDescription>Nome: {sucessInformation.movieBuyer}</InfoDescription>
				<InfoDescription>CPF: {sucessInformation.movieCpf}</InfoDescription>
			</InfoWrapper>

			<Container>
				<Link to="/">
					<HomeButton>Voltar pra Home</HomeButton>
				</Link>
			</Container>
		</>
	);
} 
import { SucessMessage, InfoWrapper, InfoTitle, InfoDescription, HomeButton, Container } from './styled';
import { Link } from 'react-router-dom';

export default function SucessPage() {
	return (
		<>
			<SucessMessage>Pedido feito<br/> com sucesso!</SucessMessage>

			<InfoWrapper>
				<InfoTitle>Filme e sessão</InfoTitle>
				<InfoDescription>Enola Holmes</InfoDescription>
				<InfoDescription>24/06/2021 15:00</InfoDescription>
			</InfoWrapper>

			<InfoWrapper>
				<InfoTitle>Ingressos</InfoTitle>
				<InfoDescription>Assento 15</InfoDescription>
				<InfoDescription>Assento 16</InfoDescription>
			</InfoWrapper>

			<InfoWrapper>
				<InfoTitle>Comprador</InfoTitle>
				<InfoDescription>Nome: João da Silva Sauro</InfoDescription>
				<InfoDescription>CPF: 123.456.789-10</InfoDescription>
			</InfoWrapper>

			<Container>
				<Link to="/">
					<HomeButton>Voltar pra Home</HomeButton>
				</Link>
			</Container>
		</>
	);
} 
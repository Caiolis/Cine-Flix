import { Container, Title } from './styled';

export default function Footer({ movieBanner, movieTitle }) {
  return (
    <Container>
      <img src={movieBanner} alt={movieTitle} />
      <Title>{movieTitle}</Title>
    </Container>
  );
}
import { Container, TitleContainer, Title } from './styled';

export default function Footer({ movieBanner, movieTitle, moviteSessionDay, moviteSessionHour }) {
  return (
    <Container>
      <img src={movieBanner} alt={movieTitle} />
      <TitleContainer>
        <Title>{movieTitle}</Title>
        {moviteSessionDay || moviteSessionHour != '' ? <Title>{moviteSessionDay} - {moviteSessionHour}</Title> : ''}
      </TitleContainer>
    </Container>
  );
}
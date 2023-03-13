import { Container, TitleContainer, Title } from './styled';

export default function Footer({ movieBanner, movieTitle, moviteSessionDay, moviteSessionHour }) {
  return (
    <Container data-test="footer">
      <img src={movieBanner} alt={movieTitle} />
      <TitleContainer>
        <Title>{movieTitle}</Title>
        {moviteSessionDay || moviteSessionHour != '' ? <Title>{moviteSessionDay} - {moviteSessionHour}</Title> : ''}
      </TitleContainer>
    </Container>
  );
}
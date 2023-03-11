import { useEffect, useState } from "react";
import { Title, Container, MovieContainer } from "./styled";
import axios from "axios";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  // Get the list of the movies from the API
  useEffect(() => {
    const prommise = axios.get(
      "https://mock-api.driven.com.br/api/v8/cineflex/movies"
    );
    prommise.then((response) => setMovies(response.data));
    prommise.catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Title>Selecione o filme</Title>
      <Container>
        {movies.map((item) => (
          <MovieBanners
            key={item.id}
            moviePoster={item.posterURL}
            movieName={item.title}
          />
        ))}
      </Container>
    </>
  );
}

function MovieBanners({ moviePoster, movieName }) {
  return (
    <MovieContainer>
      <img src={moviePoster} alt={movieName} />
    </MovieContainer>
  );
}

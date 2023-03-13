import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Title,
  TimeContainer,
  TimeDay,
  TimeHour,
  TimeHourContainer,
} from "./styled";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

export default function BookingPage() {
  const { idFilme } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  // Resquests the information about the chosen movie in the API
  useEffect(() => {
    const prommise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
    );

    prommise.then((response) => setMovieInfo(response.data));
    prommise.catch((error) => console.log(error));
  }, []);

  console.log(movieInfo);

  return (
    <>
      <Title>Selecione o horário</Title>

      {movieInfo.length == 0
        ? "carregando"
        : movieInfo.days.map((item) => (
            <TimeContainer>
              <TimeDay>
                {" "}
                {item.weekday} - {item.date}{" "}
              </TimeDay>
              <TimeHourContainer>
                {item.showtimes.map((time) => (
                  <Link to={`/assentos/${time.id}`}>
                    <TimeHour>{time.name}</TimeHour>
                  </Link>
                ))}
              </TimeHourContainer>
            </TimeContainer>
          ))}

      <Footer movieBanner={movieInfo.posterURL} movieTitle={movieInfo.title} />
    </>
  );
}

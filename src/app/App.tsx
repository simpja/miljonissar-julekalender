import React from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import { CalendarData } from "../types/CalendarTypes";

const calendarData: CalendarData = {
  0: {
    date: 0,
    soundCloudUrl: "https://soundcloud.com/simpja/episode-0-intro",
  },
  1: {
    date: 1,
    soundCloudUrl:
      "https://soundcloud.com/simpja/episode-1-milj-nissane-vaknar",
  },
  2: {
    date: 2,
    soundCloudUrl: "https://soundcloud.com/simpja/episode-2-oskar-sylte-og",
  },
  3: {
    date: 3,
    soundCloudUrl: "https://soundcloud.com/simpja/episode-3-ikkje-plukk-aleine",
  },
  4: {
    date: 4,
    soundCloudUrl: "https://soundcloud.com/simpja/episode-4-myten-om-sopplus",
  },
  5: {
    date: 5,
    soundCloudUrl: "https://soundcloud.com/simpja/episode-5-med-handa-i",
  },
  6: {
    date: 6,
    soundCloudUrl: "https://soundcloud.com/simpja/episode-6-kjaerleiken",
  },
  7: {
    date: 7,
    soundCloudUrl:
      "https://soundcloud.com/simpja/episode-7-fullvaksen-mannekorv",
  },
  8: {
    date: 8,
    soundCloudUrl:
      "https://soundcloud.com/simpja/episode-8-beinhidnobetjenelso",
  },
  9: {
    date: 9,
    soundCloudUrl: "https://soundcloud.com/simpja/episode-9-ein-underleg-gra",
  },
  10: {
    date: 10,
    soundCloudUrl: "https://soundcloud.com/simpja/episode-10-familietragedio",
  },
};

const ChristmasCalendarContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: #b22222;
  margin-bottom: 32px;
  font-family: "Mountains of Christmas", cursive;
`;

const App: React.FC = () => {
  return (
    <ChristmasCalendarContainer>
      <Title>Miljønyssjane dei grønes julekalender</Title>
      <Calendar data={calendarData} />
    </ChristmasCalendarContainer>
  );
};

export default App;

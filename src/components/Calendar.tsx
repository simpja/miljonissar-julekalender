import React, { useState } from "react";
import styled from "styled-components";
import CalendarDay from "./CalendarDay";
import { CalendarData } from "../types/CalendarTypes";

interface CalendarProps {
  data: CalendarData;
}

const CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CalendarDayWrapper = styled.div`
  flex-basis: calc(25% - 12px);
  width: 100%;

  @media (max-width: 768px) {
    flex-basis: 100%;
    max-width: 300px;
  }
`;

const Calendar: React.FC<CalendarProps> = ({ data }) => {
  const [openDays, setOpenDays] = useState<Set<number>>(new Set());

  const handleDayToggle = (date: number) => {
    setOpenDays((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(date)) {
        newSet.delete(date);
      } else {
        newSet.add(date);
      }
      return newSet;
    });
  };

  return (
    <CalendarContainer>
      {Array.from({ length: 11 }, (_, i) => i).map((day) => (
        <CalendarDayWrapper key={day}>
          <CalendarDay
            day={data[day] || { date: day, soundCloudUrl: "" }}
            isOpen={openDays.has(day)}
            onToggle={() => handleDayToggle(day)}
          />
        </CalendarDayWrapper>
      ))}
    </CalendarContainer>
  );
};

export default Calendar;

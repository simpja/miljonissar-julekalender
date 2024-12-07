import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SoundCloudPlayer from './SoundCloudPlayer';
import ChristmasBall from './ChristmasBall';
import { CalendarDay as CalendarDayType } from '../types/CalendarTypes';

interface CalendarDayProps {
  day: CalendarDayType;
  isOpen: boolean;
  onToggle: () => void;
}

const DayContainer = styled.div`
  width: 100%;
  padding-bottom: 100%; // This creates a square aspect ratio
  position: relative;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Back = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: rotateY(180deg);
`;

const colors = ['Red', 'Green', 'Blue', 'Gold'];

const CalendarDay: React.FC<CalendarDayProps> = ({ day, isOpen, onToggle }) => {
  const color = colors[day.date % colors.length];

  return (
    <DayContainer>
      <ContentContainer>
        <Front>
          <ChristmasBall day={day.date} color={color} isFlipped={isOpen} onClick={onToggle} />
        </Front>
        <Back
          initial={false}
          animate={{ rotateY: isOpen ? 0 : -180 }}
          transition={{ duration: 0.6 }}
        >
          <SoundCloudPlayer url={day.soundCloudUrl} isVisible={isOpen} />
        </Back>
      </ContentContainer>
    </DayContainer>
  );
};

export default CalendarDay;


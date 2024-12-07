import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface ChristmasBallProps {
  day: number;
  color: string;
  isFlipped: boolean;
  onClick: () => void;
}

const BallContainer = styled(motion.div)`
  cursor: pointer;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 240px;
  margin: 0 auto;
`;

const BallSVG = styled(motion.svg)`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const ChristmasBall: React.FC<ChristmasBallProps> = ({
  day,
  color,
  isFlipped,
  onClick,
}) => {
  return (
    <BallContainer
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 0.6 }}
      onClick={onClick}
    >
      <BallSVG viewBox="0 0 100 120">
        <defs>
          <radialGradient
            id={`grad-${color}`}
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: `dark${color}`, stopOpacity: 1 }}
            />
          </radialGradient>
        </defs>
        <circle cx="50" cy="60" r="50" fill={`url(#grad-${color})`} />
        <circle
          cx="50"
          cy="60"
          r="45"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.5"
        />
        <circle cx="50" cy="15" r="6" fill="#silver" />
        <path
          d="M50 15 L50 5 Q55 0 60 5 L60 10"
          fill="none"
          stroke="#silver"
          strokeWidth="2"
        />
        <text
          x="50"
          y="70"
          fontFamily="Mountains of Christmas"
          fontSize="24"
          fill="white"
          textAnchor="middle"
        >
          {day}
        </text>
      </BallSVG>
    </BallContainer>
  );
};

export default ChristmasBall;

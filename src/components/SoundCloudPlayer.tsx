import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface SoundCloudPlayerProps {
  url: string;
  isVisible: boolean;
}

const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ url, isVisible }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isVisible && !iframeLoaded) {
      setIframeLoaded(true);
    }
  }, [isVisible, iframeLoaded]);

  if (!isVisible) {
    return null;
  }

  return (
    <PlayerContainer>
      {iframeLoaded && (
        <iframe
          width="100%"
          height="100%"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
        ></iframe>
      )}
    </PlayerContainer>
  );
};

export default SoundCloudPlayer;


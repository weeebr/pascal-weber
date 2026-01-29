import styled, { css } from 'styled-components';

// Standalone color palette for /mama page
const colors = {
  light: {
    background: '#faf9f7',
    cardBg: '#ffffff',
    cardBorder: '#e5e5e5',
    title: '#2d2d2d',
    customTitle: '#b85a3c',
    groupLabel: '#888888',
    divider: '#ebebeb',
  },
  dark: {
    background: '#1a1a1a',
    cardBg: '#2a2a2a',
    cardBorder: '#3a3a3a',
    title: '#f0f0f0',
    customTitle: '#e8a088',
    groupLabel: '#999999',
    divider: '#3a3a3a',
  }
};

export const MamaWrapper = styled.div`
  min-height: 100vh;
  padding: ${props => props.isPhone ? '16px' : '32px'};
  background: ${colors.light.background};

  &.dark {
    background: ${colors.dark.background};
  }
`;

export const VideosGrid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const VideoCard = styled.div`
  width: ${props => props.isMobile ? '100%' : '300px'};
  background: ${colors.light.cardBg};
  border: 1px solid ${colors.light.cardBorder};
  border-radius: 6px;
  overflow: hidden;

  &.dark {
    background: ${colors.dark.cardBg};
    border-color: ${colors.dark.cardBorder};
  }

  ${props => props.isGroup && css`
    border-left: 3px solid ${colors.light.customTitle};
    
    &.dark {
      border-left-color: ${colors.dark.customTitle};
    }
  `}
`;

export const VideoThumbnail = styled.a`
  display: block;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::after {
    content: '▶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    padding-left: 2px;
    opacity: 0.8;
  }
`;

export const VideoInfo = styled.div`
  padding: 10px 12px;
  height: 52px;
  box-sizing: border-box;
`;

export const VideoTitle = styled.a`
  display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.light.title};
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  &:hover {
    text-decoration: underline;
  }

  .dark & {
    color: ${colors.dark.title};
  }
`;

export const GroupedVideos = styled.div`
  display: block;
  padding: 8px 12px 10px;
  border-top: 1px solid ${colors.light.divider};
  max-height: 100px;
  overflow-y: scroll;

  .dark & {
    border-top-color: ${colors.dark.divider};
  }
`;

export const GroupedVideoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 4px;
  margin-bottom: 4px;
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }

  img {
    width: 50px;
    height: 28px;
    object-fit: cover;
    border-radius: 3px;
    flex-shrink: 0;
  }

  span {
    flex: 1;
    font-size: 11px;
    color: ${colors.light.title};
    line-height: 1.3;
  }

  .dark & span {
    color: ${colors.dark.title};
  }
`;

export const LoadingPlaceholder = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .dark & {
    background: linear-gradient(90deg, #333 25%, #444 50%, #333 75%);
    background-size: 200% 100%;
  }
`;

export const GroupLabel = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  color: ${colors.light.groupLabel};
  margin-bottom: 6px;
  display: block;

  .dark & {
    color: ${colors.dark.groupLabel};
  }
`;

export const CustomTitle = styled.div`
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${colors.light.customTitle};
  margin-bottom: 4px;

  .dark & {
    color: ${colors.dark.customTitle};
  }
`;

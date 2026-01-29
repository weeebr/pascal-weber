import React from 'react';
import { useTheme, useThemeBreakpoints } from 'shared/hooks';
import { mamaVideos } from 'shared/mama-videos';
import {
  MamaWrapper,
  VideosGrid,
  VideoCard,
  VideoThumbnail,
  VideoInfo,
  VideoTitle,
  GroupedVideos,
  GroupedVideoItem,
  LoadingPlaceholder,
  GroupLabel,
  CustomTitle,
  Duration,
} from './styles';

/**
 * Format duration in minutes to readable string
 * e.g., 52 -> "52m", 90 -> "1h 30m", 125 -> "2h 5m"
 */
const formatDuration = (minutes) => {
  if (!minutes || minutes <= 0) return null;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
  }
  return `${mins}m`;
};

/**
 * Extract video ID from various YouTube URL formats
 * Supports: youtube.com/watch?v=, youtu.be/, youtube.com/embed/, youtube.com/shorts/
 * Also handles tracking params like ?si=...
 */
const getVideoId = (url) => {
  if (!url) return null;
  
  // Handle youtu.be short links (including with tracking params like ?si=...)
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) return shortMatch[1];
  
  // Handle youtube.com/watch?v=
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return watchMatch[1];
  
  // Handle youtube.com/embed/
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  
  // Handle youtube.com/shorts/
  const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];
  
  return null;
};

/**
 * Get YouTube thumbnail URL
 */
const getThumbnail = (videoId) => `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

/**
 * Get YouTube video URL for linking
 */
const getVideoUrl = (videoId) => `https://www.youtube.com/watch?v=${videoId}`;

/**
 * Custom hook to fetch video title from YouTube oEmbed API
 */
const useVideoTitle = (url) => {
  const [title, setTitle] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!url) return;
    
    const fetchTitle = async () => {
      try {
        const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
        const response = await fetch(oembedUrl);
        if (response.ok) {
          const data = await response.json();
          setTitle(data.title);
        }
      } catch (error) {
        console.error('Failed to fetch video title:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTitle();
  }, [url]);

  return { title, loading };
};

/**
 * Single video card component
 */
const SingleVideoCard = ({ url, customTitle, duration, darkClass, isMobile }) => {
  const videoId = getVideoId(url);
  const { title, loading } = useVideoTitle(url);
  const formattedDuration = formatDuration(duration);

  if (!videoId) return null;

  return (
    <VideoCard className={darkClass} isMobile={isMobile}>
      <VideoThumbnail href={getVideoUrl(videoId)} target="_blank" rel="noopener noreferrer">
        <img src={getThumbnail(videoId)} alt={title || 'YouTube video'} />
        {formattedDuration && <Duration>{formattedDuration}</Duration>}
      </VideoThumbnail>
      <VideoInfo>
        {customTitle && <CustomTitle>{customTitle}</CustomTitle>}
        {loading ? (
          <LoadingPlaceholder style={{ height: '20px', borderRadius: '4px' }} />
        ) : (
          <VideoTitle href={getVideoUrl(videoId)} target="_blank" rel="noopener noreferrer">
            {title || 'Untitled Video'}
          </VideoTitle>
        )}
      </VideoInfo>
    </VideoCard>
  );
};

/**
 * Hook to fetch multiple video titles
 */
const useMultipleVideoTitles = (urls) => {
  const [titles, setTitles] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!urls || urls.length === 0) return;

    const fetchTitles = async () => {
      const results = {};
      await Promise.all(
        urls.map(async (url) => {
          try {
            const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
            const response = await fetch(oembedUrl);
            if (response.ok) {
              const data = await response.json();
              results[url] = data.title;
            }
          } catch (error) {
            console.error('Failed to fetch video title:', error);
          }
        })
      );
      setTitles(results);
      setLoading(false);
    };

    fetchTitles();
  }, [urls]);

  return { titles, loading };
};

/**
 * Grouped videos card component (multiple related videos)
 */
const GroupedVideoCard = ({ urls, customTitle, durations, darkClass, isMobile }) => {
  const { titles, loading } = useMultipleVideoTitles(urls);
  const firstVideoId = getVideoId(urls[0]);
  
  // Calculate total duration
  const totalDuration = durations?.reduce((sum, d) => sum + (d || 0), 0) || 0;
  const formattedDuration = formatDuration(totalDuration);

  if (!firstVideoId) return null;

  return (
    <VideoCard className={darkClass} isMobile={isMobile} isGroup>
      <VideoThumbnail href={getVideoUrl(firstVideoId)} target="_blank" rel="noopener noreferrer">
        <img src={getThumbnail(firstVideoId)} alt={titles[urls[0]] || 'YouTube video'} />
        {formattedDuration && <Duration>{formattedDuration}</Duration>}
      </VideoThumbnail>
      <VideoInfo>
        {customTitle && <CustomTitle>{customTitle}</CustomTitle>}
        {loading ? (
          <LoadingPlaceholder style={{ height: '20px', borderRadius: '4px' }} />
        ) : (
          <VideoTitle href={getVideoUrl(firstVideoId)} target="_blank" rel="noopener noreferrer">
            {titles[urls[0]] || 'Untitled Video'}
          </VideoTitle>
        )}
      </VideoInfo>
      <GroupedVideos>
        <GroupLabel>{urls.length - 1} more video{urls.length > 2 ? 's' : ''}</GroupLabel>
        {urls.slice(1).map((url, idx) => {
          const videoId = getVideoId(url);
          if (!videoId) return null;
          
          return (
            <GroupedVideoItem 
              key={idx} 
              href={getVideoUrl(videoId)} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={getThumbnail(videoId)} alt={titles[url] || 'YouTube video'} />
              <span>{loading ? 'Loading...' : (titles[url] || 'Untitled Video')}</span>
            </GroupedVideoItem>
          );
        })}
      </GroupedVideos>
    </VideoCard>
  );
};

/**
 * Parse video item
 * Format:
 * - Single: { title: "", url: "...", duration: 52 }
 * - Grouped: { title: "", urls: ["..."], durations: [52, 48] }
 * Duration is in minutes. Empty title ("") won't be displayed.
 */
const parseVideoItem = (item) => {
  if (typeof item !== 'object' || item === null) return null;
  
  // Get custom title (empty string becomes null so it won't display)
  const customTitle = item.title?.trim() || null;
  
  if (item.urls) {
    return { 
      url: null, 
      urls: item.urls, 
      customTitle, 
      durations: item.durations || [] 
    };
  }
  if (item.url) {
    return { 
      url: item.url, 
      urls: null, 
      customTitle, 
      duration: item.duration || 0 
    };
  }
  
  return null;
};

/**
 * Main MamaPage component
 */
export const MamaPage = () => {
  const { darkClass } = useTheme();
  const { isMobile, isPhone } = useThemeBreakpoints();

  return (
    <MamaWrapper className={darkClass} isMobile={isMobile} isPhone={isPhone}>
      <VideosGrid>
        {mamaVideos.map((item, index) => {
          const parsed = parseVideoItem(item);
          if (!parsed) return null;
          
          const { url, urls, customTitle, duration, durations } = parsed;
          
          if (urls) {
            return (
              <GroupedVideoCard
                key={index}
                urls={urls}
                customTitle={customTitle}
                durations={durations}
                darkClass={darkClass}
                isMobile={isMobile}
              />
            );
          }
          
          return (
            <SingleVideoCard
              key={index}
              url={url}
              customTitle={customTitle}
              duration={duration}
              darkClass={darkClass}
              isMobile={isMobile}
            />
          );
        })}
      </VideosGrid>
    </MamaWrapper>
  );
};

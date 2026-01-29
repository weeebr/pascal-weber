/**
 * YouTube Video Collection for /mama page
 * 
 * Format:
 * - Single video: { title: "", url: "...", duration: 52 }
 * - Grouped videos: { title: "", urls: ["..."], durations: [52, 48, 55] }
 * 
 * Duration is in minutes. For grouped videos, durations array matches urls array.
 * Custom titles appear above the YouTube title.
 * Leave title empty ("") to show only the YouTube title.
 */

export const mamaVideos = [
  { title: "🇬🇧 John McAfee", url: "https://youtu.be/EQfRO09j_3E?si=4RAxOIFpxPjGM8-D", duration: 26 },
  { title: "🇬🇧  Südamerika: Vergessene Zivilisationen", url: "https://youtu.be/ZvVn05Es7N8?si=_EP0iPq30VAMRLZU", duration: 52 },
  {
    title: "🇩🇪 Geld & Gold",
    urls: [
      "https://youtu.be/Xq0vr545syE?si=54HAwJ4rc_rJh6r2",
      "https://youtu.be/PF3xLNCfy34?si=O16rf_ShUbvZTAf9",
      "https://youtu.be/baM_VwyzFCY?si=BWR3rPl-I8eKEE7B",
      "https://youtu.be/cX0q1gJqpBY?si=EKCMrxd_qniY2Fm-",
    ],
    durations: [52, 55, 57, 59],
  },
  { title: "🇬🇧 Climate change: Doch nicht mensch-verursacht?", url: "https://youtu.be/Zt32chvO_iY?si=KrE2PyZw0JruJmod", duration: 132 },
  {
    title: "🇩🇪 Welt-Städte",
    urls: [
      "https://youtu.be/lEiY25DCBiU?si=j5YB3LS7rZPFSI6E",
      "https://youtu.be/0-6tlSsIofU?si=Zo-SrTNi_zsJHoXE",
      "https://youtu.be/JhFiWnlB6eY?si=jbHnO8my3aqZJrD_",
      "https://youtu.be/DSdkkfI7Q3U?si=HCXs3FAAIf9EG4Ux",
    ],
    durations: [53, 52, 52, 52],
  },
  { title: "🇩🇪 Alhambra", url: "https://youtu.be/CQh9BBwbgmM?si=CoI8lIXHFD9Pcf1E", duration: 92 },
  {
    title: "🇩🇪 Magellan",
    urls: [
      "https://youtu.be/KGrw-ZghIMQ?si=6ZIDcFY-4hnEsiYM",
      "https://youtu.be/vYWsWnbK4_o?si=I17a9Y8yDiVqnRyz",
      "https://youtu.be/-AOOSQqoUF4?si=hy_rzXk-sQG0u4Q_",
      "https://youtu.be/UFN6pK9EIfk?si=pCuyU5-kMzD2H0MK",
    ],
    durations: [53, 55, 52, 54],
  },
  { title: "🇩🇪 Zürich: Schutz vor Überschwemmungen", url: "https://youtu.be/SojUtu3NjN0?si=TSNSm84UmIOmZu5u", duration: 14 },
  { title: "🇬🇧 Die Wikinger: Viel grösserer Einfluss auf Europa als gedacht - kulturell, wirtschaftlich, politisch", url: "https://youtu.be/GcJSF6gKq2g", duration: 157 },
  { title: "🇬🇧 Fiji: Ein Kult übernimmt eine Insel", url: "https://youtu.be/zVgj3dFjWhs?si=-VSWRnAvitOwwTox", duration: 38 },
  { title: "🇬🇧 News: Der Aufstieg der Mainstream-Media", url: "https://youtu.be/AUOQ9Ub632I", duration: 97 },
];

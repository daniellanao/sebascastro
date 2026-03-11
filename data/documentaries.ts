export type Documentary = {
  id: string;
  title: string;
  /** YouTube embed URL. Add ?controls=0 to hide control bar (only play button); modestbranding=1 for less branding; rel=0 to hide related videos. */
  videoUrl: string;
};

export const documentaries: Documentary[] = [
  {
    id: "1",
    title: "Lenovo Next Lvl : El primer documental de gaming peruano",
    videoUrl:
      "https://www.youtube.com/embed/ys4wODu-J4o?si=kFMkwZT1_uOgq4n_&controls=0&modestbranding=1&rel=0",
  },
];

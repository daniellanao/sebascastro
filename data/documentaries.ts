export type Documentary = {
  id: string;
  title: string;
  /** Optional long-form description. */
  description?: string;
  /** YouTube embed URL. Add ?controls=0 to hide control bar (only play button); modestbranding=1 for less branding; rel=0 to hide related videos. */
  videoUrl: string;
};

export const documentaries: Documentary[] = [
  {
    id: "1",
    title: "NEXT LVL (2017)",
    description:
      "In Peru, being a gamer is an act of resilience. While society dismisses it as a mere hobby, an elite group has turned it into their life's work. We follow the protagonists of this industry through their ultimate challenge: a global-scale Dota 2 tournament. Between the sacrifice of their personal lives and the extreme pressure of high-level training, this Lenovo documentary reveals the human side of eSports. It's not just a game; it's a fight for recognition in a country that is only just beginning to understand them.",
    videoUrl:
      "https://www.youtube.com/embed/ys4wODu-J4o?si=kFMkwZT1_uOgq4n_&controls=0&modestbranding=1&rel=0",
  },
];

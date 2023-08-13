/** Category type shape */
export type CategoryType = 'all' | 'favorites' | 'ia' | 'songs' | 'dnd' | 'sot' | 'drg';

/** Tab types */
export type TabType = 'gallery' | 'soundboard' | 'story';

/** App state shape */
export type AppState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;

  tab: TabType;
  category: CategoryType;
  storyIndex: number;
  favorites: string[];
};

/** Soundboard asset shape */
export type SoundBoardAsset = {
  id: string,
  max?: number;
  soundPrefix?: string;
  icon: string;
  label: string;
  sound?: string;
  categories: CategoryType[],
};

/** Gallery asset shape */
export type GalleryAsset = {
  name: string;
};

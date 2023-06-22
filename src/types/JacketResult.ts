import { JackettCategory } from "./JackettCategory";

export interface JackettResult {
  Album: string | null;
  Artist: string | null;
  Auhor: string | null;
  BlackholeLink: string | null;
  BookTitle: string | null;
  Category: JackettCategory[];
  CategoryDesc: string | null;
  Description: string | null;
  /** URL of the torrent */
  Details: string;
  /** The multiplier it costs to download this torrent, only used for private trackers */
  DownloadVolumeFactor: number;
  Files: null; // @TODO
  FirstSeen: string; // Date string
  Gain: number;
  Genres: string[];
  Guid: string;
  Imdb: string | null;
  InfoHash: string | null;
  Label: string | null;
  Languages: string[];
  Link: string;
  MagnetUri: string | null;
  /** The minimum ratio you need to get for this torrent for it to not count as a hit and run, only used for private trackers */
  MinimumRatio: number;
  /** The minimum seed time you need to get for this torrent for it to not count as a hit and run, only used for private trackers */
  MinimumSeedTime: number;
  Peers: number;
  Poster: string | null;
  PublishDate: string; // Date string
  Publisher: string | null;
  RageID: number | null;
  Seeders: number;
  /** The size of the torrent in bytes */
  Size: number;
  Subs: string[];
  TMDb: null;
  TVDBId: null;
  TVMazeId: null;
  Title: string;
  Track: string | null;
  Tracker: string;
  TrackerId: string;
  TrackerType: 'public' | 'private';
  TraktId: null;
  UploadVolumeFactor: number;
  Year: number | null;
}

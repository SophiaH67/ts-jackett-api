import { JackettCategory } from './JackettCategory';

export interface JackettSearchOptions {
  query: string;
  category?: JackettCategory[];
  tracker?: string[];
  limit?: number;
}

import { JackettResult } from "./JacketResult";
import { JackettIndexer } from "./JackettIndexer";

export interface JackettSearchResult {
  Indexers: JackettIndexer[];
  Results: JackettResult[];
}

import { JackettSearchOptions } from './types/JackettSearchOptions';
import { JackettSearchResult } from './types/JackettSearchResult';

export class JackettApi {
  constructor(
    private readonly baseUrl: string,
    private readonly apiKey: string
  ) {}

  public async search(
    query: JackettSearchOptions
  ): Promise<JackettSearchResult> {
    const getParams = new URLSearchParams();
    getParams.set('apikey', this.apiKey);
    getParams.set('Query', query.query);
    if (query.category) {
      for (const category of query.category) {
        getParams.append('Category[]', category.toString());
      }
    }
    if (query.tracker) {
      for (const tracker of query.tracker) {
        getParams.append('Tracker[]', tracker);
      }
    }

    const response = await fetch(
      `${this.baseUrl}/api/v2.0/indexers/all/results?${getParams.toString()}`
    );

    const json = await response.json();
    return json;
  }
}

import { Information } from "./information";

export interface NewsDataResponse {
  information: Information;
  news:        News[];
}

export interface News {
  category: string;
  date:     string;
  id:       number;
  news:     string;
  type:     string;
  url:      string;
  url_api:  string;
}

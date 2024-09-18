import { Information } from "./information";

export interface CreaturesDataResponse {
  creatures:   Creatures;
  information: Information;
}

export interface Creatures {
  boosted:       Boosted;
  creature_list: Boosted[];
}

export interface Boosted {
  featured:  boolean;
  image_url: string;
  name:      string;
  race:      string;
}
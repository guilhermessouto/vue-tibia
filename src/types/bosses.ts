import { Information } from "./information";

export interface BossesDataResponse {
  boostable_bosses: BoostableBosses;
  information:      Information;
}

export interface BoostableBosses {
  boostable_boss_list: Boost[];
  boosted:             Boost;
}

export interface Boost {
  featured:  boolean;
  image_url?: string;
  name:      string;
}

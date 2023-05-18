import { Game } from "./game.model";

export interface UserPreferences {
  genre : Array<string>;
  games : Array<Game>;
  preferdAvaliation? : string;
}

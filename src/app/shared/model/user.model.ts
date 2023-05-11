import { UserPreferences } from "./userPreferences.model";

export interface User{
  id? : number;
  username : string;
  password : string;
  firstName : string;
  lastName : string;
  perfilIcon : string;
  preferences: UserPreferences;
}

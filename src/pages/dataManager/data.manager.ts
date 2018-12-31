import { PrefManager } from "./prefManager/pref.manager";
import { ApiService } from "./apiManager/api.manager";
import { DatabaseManager } from "./databaseManager/database.manager";

export interface DataManager extends PrefManager, ApiService, DatabaseManager{
   isLogged() : void;
}

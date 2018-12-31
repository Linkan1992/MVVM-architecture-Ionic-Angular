import { Injectable } from "@angular/core";
import { DatabaseManager } from "./database.manager";

@Injectable()
export class DatabaseManagerHelper implements DatabaseManager {
  
  
    insertParam(): number {
        console.log("insertParam method not implemented.");
        return 1;
    }

    fetchParam(): void {
        console.log("fetchParam method not implemented.");
    }

    deleteParam(): void {
        console.log("deleteParam method not implemented.");
    }
    
    updateParam(): void {
        console.log("updateParam method not implemented.");
    }


}
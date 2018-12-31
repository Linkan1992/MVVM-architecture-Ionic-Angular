import { NgModule } from "@angular/core";
import { HomePage } from "./home";
import { IonicPageModule } from "ionic-angular";
import { HomePageNavigator } from "./HomeNavigator";
import { HomePageViewModel } from "./HomeViewModel";


@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)],
    providers: [{provide:HomePageNavigator, useClass:HomePage}, HomePageViewModel],
    exports : [ HomePage]
})

export class HomePageModule {
   
}

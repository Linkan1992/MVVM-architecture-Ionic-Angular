import { NgModule } from "@angular/core";
import { HomePage } from "./home";
import { IonicPageModule } from "ionic-angular";
import { HomePageNavigator } from "./HomeNavigator";
import { HomePageViewModel } from "./HomeViewModel";


@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)],
    providers: [HomePageViewModel, {provide:HomePageNavigator, useClass:HomePage}],
    exports : [HomePage]
})

export class HomePageModule {
   
}

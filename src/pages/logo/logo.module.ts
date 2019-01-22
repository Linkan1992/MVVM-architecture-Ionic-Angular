import { NgModule } from "@angular/core";
import { LogoPage } from "./logo";
import { IonicPageModule } from "ionic-angular";
import { HeaderViewPage } from "../../child-view/header-view/header-view";


@NgModule({
declarations : [LogoPage, HeaderViewPage],
imports : [IonicPageModule.forChild(LogoPage)],
providers : [],
exports : []})

export class LogoPageModule{

}
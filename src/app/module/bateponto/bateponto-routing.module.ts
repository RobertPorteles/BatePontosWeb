import { RouterModule, Routes } from "@angular/router";
import { Log } from "./components/pages/log/log";
import { NgModule } from "@angular/core";
import { Login } from "./components/pages/login/login";

export const routes: Routes = [
    {
        path: "login", component: Login
    },
    {
        path: "log", component: Log
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BatepontoRoutingModule { }
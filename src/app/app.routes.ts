import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "overview",
    component: ListComponent
  },
  {
    path: "login",
    component: FormComponent
  },
  { path: "detail/:id", component: DetailComponent },
  {
    path: "",
    redirectTo: "overview",
    pathMatch: "full"
  }
];
export const appRouterModule = RouterModule.forRoot(routes);
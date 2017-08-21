import { ListComponent } from "./list.component";
import { DetailComponent } from "./detail.component";

export const routes = [
  { path: "", component: ListComponent },
  { path: "detail", component: DetailComponent }
];

export const navigatableComponents = [
  ListComponent,
  DetailComponent
];

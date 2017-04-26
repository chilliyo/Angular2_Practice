/**
 * Created by Qili on 2/12/17.
 */
import { Routes } from "@angular/router";
import { FeedStartComponent } from "../feed-start.component";
import { ProjectEditComponent } from "../project-edit/project-edit.component";
import { ProjectDetailComponent } from "../project-detail/project-detail.component";

export const PROJECT_ROUTES: Routes = [
  { path: '', component: FeedStartComponent },
  { path: 'new',component: ProjectEditComponent },
  { path: ':id', component: ProjectDetailComponent},
  { path: ':id/edit', component: ProjectEditComponent}
];

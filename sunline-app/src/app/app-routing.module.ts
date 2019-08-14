import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { AllSubjectsComponent } from "./all-subjects/all-subjects.component";
import { SubjectDetailsComponent } from "./subject-details/subject-details.component";

const routes: Routes = [
  { path: "home", component: AllSubjectsComponent },
  { path: "add", component: AddComponent },
  { path: "subject/:subjName", component: SubjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

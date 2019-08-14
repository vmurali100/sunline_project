import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AddComponent } from './add/add.component';
import { AllSubjectsComponent } from './all-subjects/all-subjects.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
@NgModule({
  declarations: [AppComponent, AddComponent, AllSubjectsComponent, SubjectDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

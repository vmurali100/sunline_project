import { Component } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  allSubjects: Object;
  allTopics: Object;
  subject = "";
  constructor(private commonService: CommonService) {}
  addTopic(formObj) {
    console.log(formObj.value);
    this.commonService.addTopic(formObj.value).subscribe(res => {
      console.log(res);
      formObj.reset();
    });
  }
  ngOnInit() {}
  getAllTopics() {
    console.log(this.subject);
    this.commonService.getAll(this.subject).subscribe(res => {
      console.log(res);
      this.allTopics = res;
    });
  }
}

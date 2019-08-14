import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-all-subjects",
  templateUrl: "./all-subjects.component.html",
  styleUrls: ["./all-subjects.component.css"]
})
export class AllSubjectsComponent implements OnInit {
  allSubjects: Object;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getAll("allSubjects").subscribe(res => {
      console.log(res);
      this.allSubjects = res;
      this.commonService.saveSubjectDetails(this.allSubjects);
    });
  }
}

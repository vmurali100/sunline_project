import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subject-details",
  templateUrl: "./subject-details.component.html",
  styleUrls: ["./subject-details.component.css"]
})
export class SubjectDetailsComponent implements OnInit {
  subjectDetails: Object;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get("subjName"));
      let subjName = params.get("subjName");
      this.commonService.getSubjectDetails(subjName).subscribe(res => {
        this.subjectDetails = res;
      });
    });
  }
}

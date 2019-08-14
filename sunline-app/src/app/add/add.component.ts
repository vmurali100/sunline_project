import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  subjectDetails: any;
  topicsNames;
  topicsDetails;
  subject: string = "HTML";
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.subjectDetails = this.commonService.getSubjectDetailsFromService();
    if (!this.subjectDetails) {
      this.commonService
        .getSubjectDetails("allSubjects")
        .subscribe(response => {
          this.subjectDetails = response;
          this.getDefaultSubjectDetails();
        });
    } else {
      this.getDefaultSubjectDetails();
    }
  }
  getDefaultSubjectDetails() {
    this.commonService.getSubjectDetails(this.subject).subscribe(response => {
      this.topicsNames = response;
    });
  }
  getTopicsNames() {
    this.getDefaultSubjectDetails();
  }
  addTopic(obj) {
    console.log(obj.value);
    
  }
}

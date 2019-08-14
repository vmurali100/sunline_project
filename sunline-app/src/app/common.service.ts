import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CommonService {
  savedSubjectDetails: any;
  constructor(private _http: HttpClient) {}

  addTopic(obj) {
    obj["id"] = null;
    let header = {
      "Content-type": "application/json"
    };
    return this._http.post("http://localhost:3000/", obj, {
      headers: header
    });
  }

  getAll(val) {
    return this._http.get("http://localhost:3000/" + val);
  }
  getSubjectDetails(subjectName) {
    return this._http.get("http://localhost:3000/" + subjectName);
  }
  saveSubjectDetails(subjectDetails) {
    this.savedSubjectDetails = subjectDetails;
  }
  getSubjectDetailsFromService() {
    return this.savedSubjectDetails;
  }
}

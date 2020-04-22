import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MotelService } from "../motel.service";
import { FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.css"]
})
export class StudentFormComponent implements OnInit {
  motels = [];

  studentForm = new FormGroup({
    sid: new FormControl(null),
    name: new FormControl(""),
    avatar: new FormControl(""),
    roll_number: new FormControl(""),
    address: new FormControl(""),
    motelId: new FormControl(""),
    room_no: new FormControl("")
  });

  studentData = null;
  constructor(
    private motelService: MotelService,
    private studentService: MotelService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.motelService.getMotels().subscribe(data => {
      console.log(data);
      this.motels = data;
    });
    this.activeRoute.paramMap.subscribe(params => {
      let sid = params.get("sid");
      this.studentService.getStudentById(sid).subscribe(data => {
        this.studentForm.setValue(data);

        //dong nay dung de lay ra studentdata.motelid
        console.log(data);
        this.studentData = data;
      });
    });
  }

  saveStudent() {
    if (this.studentForm.value.sid == null) {
      this.studentService
        .addNewStudent(this.studentForm.value)
        .subscribe(data => {
          console.log(data);
          alert("detail/:" + this.studentData.motelId);
          this.route.navigate(["../detail/:" + this.studentData.motelId]);
        });
    } else {
      this.studentService
        .updateStudent(this.studentForm.value)
        .subscribe(data => {
          console.log(data);
          alert("detail/:" + this.studentData.motelId);
          this.route.navigate(["../detail/:" + this.studentData.motelId]);
        });
    }
  }
}

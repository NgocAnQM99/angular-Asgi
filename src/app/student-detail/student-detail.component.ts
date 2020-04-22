import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MotelService} from '../motel.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentData = null;
  // motelData = null;
   constructor(
    private studentService: MotelService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let studentsid = params.get('studentsid');
      this.studentService.getStudentById(studentsid).subscribe(data => {
        console.log(data);
        this.studentData = data;
      })
    })

    // lay link de return trang khach san truoc do   this.linkmotel +this.motelData.motelId
// this.activeRoute.paramMap.subscribe(params => {
//       let motelId = params.get('motelId');
//       this.studentService.getMotelById(motelId).subscribe(data => {
//         console.log(data);
//         this.motelData = data;
//       })
//     })
// ko dung duoc -- > da sua lai ,motelId chua test
  }

  removeStudent(){
    let conf = confirm('Do you want delete this Student  ? ');
    if(conf){
      this.studentService.removeStudentById(this.studentData.sid).subscribe(data => {
         alert( "detail/:" +this.studentData.motelId);
        this.route.navigate(['../detail/:'+this.studentData.motelId ]);
      });
    }
    
  }

}
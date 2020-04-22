import { Component, OnInit } from '@angular/core';
import {MotelService} from '../motel.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentComponent implements OnInit {

  students = [];
  constructor(private studentService: MotelService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(data => {
      console.log(data);
      this.students = data;
    });
  }

}
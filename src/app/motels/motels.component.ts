import { Component, OnInit } from '@angular/core';
import {MotelService} from '../motel.service';
@Component({
  selector: 'app-motels',
  templateUrl: './motels.component.html',
  styleUrls: ['./motels.component.css']
})
export class MotelsComponent implements OnInit {

  motels = [];
  constructor(private motelService: MotelService) { }

  ngOnInit() {
    this.motelService.getMotels().subscribe(data => {
      console.log(data);
      this.motels = data;
    });
  }

}
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MotelService} from '../motel.service';

@Component({
  selector: 'app-motel-detail',
  templateUrl: './motel-detail.component.html',
  styleUrls: ['./motel-detail.component.css']
})
export class MotelDetailComponent implements OnInit {
  motelData = null;
  constructor(
    private motelService: MotelService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let motelid = params.get('motelid');
      this.motelService.getMotelById(motelid).subscribe(data => {
        console.log(data);
        this.motelData = data;
      })
    })
  }

  removeMotel(){
    let conf = confirm('Do you want delete this X tel ? ');
    if(conf){
      this.motelService.removeMotelById(this.motelData.id).subscribe(data => {
        this.route.navigate(['']);
      });
    }
    
  }

}
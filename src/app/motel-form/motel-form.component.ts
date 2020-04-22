import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MotelService} from '../motel.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-motel-form',
  templateUrl: './motel-form.component.html',
  styleUrls: ['./motel-form.component.css']
})
export class MotelFormComponent implements OnInit {
  motelForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(''),
    image: new FormControl(''),
    address: new FormControl(''),
    owner: new FormControl('')
  });
  constructor(
    private motelService: MotelService,
    private route: Router,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      let motelid = params.get('id');
      this.motelService.getMotelById(motelid).subscribe(data => {
        this.motelForm.setValue(data);
      })
    })
  }

  saveMotel(){
    if(this.motelForm.value.id == null){
    
      this.motelService.addNewMotel(this.motelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }else{
    
      this.motelService.updateMotel(this.motelForm.value).subscribe(data => {
        console.log(data);
        this.route.navigate(['']);
      })
    }
  }

}
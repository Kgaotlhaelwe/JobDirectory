import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-info',
  templateUrl: './job-info.page.html',
  styleUrls: ['./job-info.page.scss'],
})
export class JobInfoPage implements OnInit {
  moreInfo ;

  constructor(public activatedRoute : ActivatedRoute,) { 

    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(res);
      this.moreInfo =res ;
  });
  }

  ngOnInit() {

  }

}

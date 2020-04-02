import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listJobs = [] ;
  listTitle = [] ;

  

  constructor(private router: Router) {
    this.getData() ;
  
    
  }


 async getData(){
    let response = await fetch('https://us-central1-mlab-challenge.cloudfunctions.net/jobs');
  if (response.ok) { // if HTTP-status is 200-299
      // get the response body (the method explained below)
      let json = await response.json();
      this.listJobs =json ;
      

     }
  }

 

 async showInfo(id){
   
    let url =`https://us-central1-mlab-challenge.cloudfunctions.net/job?id=${id}`
    let test  = await fetch(url) ;
    console.log(test)
    let j = await test.json();
    console.log(j)
   
    this.router.navigate(['/job-info'],{
      queryParams: j,
      });
  }

  initializeItems() {
    this.listJobs.forEach((data)=>{
      this.listTitle.push(data.title)
    })

    console.log(this.listTitle) ;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
    this.listTitle = this.listTitle.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

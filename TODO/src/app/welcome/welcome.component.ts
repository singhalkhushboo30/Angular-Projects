import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message='Welcome1';
  name:any='';
  welcomeMessageFromService:string='';
  constructor(private route:ActivatedRoute,private dataService:WelcomeDataService) { }

  ngOnInit(): void {
   // console.log(this.message);
    console.log(this.route.snapshot.params['name']);
    this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    console.log(this.dataService.executeHelloWorldBeanService());
    this.dataService.executeHelloWorldBeanService().subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
    //console.log("get welcome message");
  }
  getWelcomeMessageWithPathVariable(){
    // console.log(this.dataService.executeHelloWorldServiceWithPathVariable(name));
    this.dataService.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
    //console.log("get welcome message");
  }
  handleSuccessfulResponse(response:any){
    this.welcomeMessageFromService=response.message;
    //console.log(response);
    //console.log(response.message);
  }
  handleErrorResponse(error:any){
    //console.log(error);
    //console.log(error.message);
    this.welcomeMessageFromService=error.error.message;
  }

}

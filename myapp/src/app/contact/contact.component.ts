import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:any;
  onSubmit(contactForm:any){
    console.log(contactForm.value);
  }

  saveData(){
    
    localStorage.setItem('session',JSON.stringify(this.contactForm.value));
  }
  constructor() { }

  ngOnInit():void{
  }

}

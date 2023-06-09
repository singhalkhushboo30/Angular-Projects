import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8082/hello-world-bean');
    // console.log("Execute Hello World Bean Service");
  }
  executeHelloWorldServiceWithPathVariable(name:StaticRange){
    return this.http.get<HelloWorldBean>(`http://localhost:8082/hello-world/path-variable/${name}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  item!:Employee;
  employee!: Employee;
  sortBy:string;
  searchBy:string;
  emp:Employee[]=[];
  
  constructor() {
    this.searchBy="";
    this.sortBy="";
   }

   onSubmit(form: any){
    form.reset();
   }

   onSave(){
    this.emp.push(this.employee);
    const isData=localStorage.getItem("EmpData");
    if(isData==null){
       const newArr=[];
       this.employee.employeeId=1;
       newArr.push(this.employee);
       localStorage.setItem("EmpData",JSON.stringify(newArr));
    }else{
      const oldData=JSON.parse(isData);
      const newId=oldData.length+1;
      this.employee.employeeId=newId;
      oldData.push(this.employee);
      localStorage.setItem("EmpData",JSON.stringify(oldData));
    }
    this.getAllEmployee();
   }
   getAllEmployee(){
    const isData:string|null=localStorage.getItem("EmpData");
    if(isData!=null){
      const localData=JSON.parse(isData);
      this.emp=localData;

    }
   }
  ngOnInit(): void {
    this.employee=new Employee();
    this.getAllEmployee();
  }

  onEdit(item:Employee){
    this.employee=item;
 }
 onDelete(item:Employee){
   const isData=localStorage.getItem("EmpData");
   if(isData!=null){
     const localData=JSON.parse(isData);
     for(let index=0;index<localData.length;index++){
       if(localData[index].employeeId==item.employeeId){
           localData.splice(0,1);
       }
     }
     localStorage.setItem("EmpData",JSON.stringify(localData));
     this.getAllEmployee();
   }
 }
 onSearch(){
  const isData=localStorage.getItem("EmpData");
  if(isData!=null){
    const localData=JSON.parse(isData);
    if(this.sortBy=="Name"){
      const filteredData=localData.filter((m:Employee) =>
      {return m.name.toLocaleLowerCase().startsWith(this.searchBy.toLocaleLowerCase())})
      this.emp=filteredData;
    }else 
    if(this.sortBy=="Technology"){
      const filteredData=localData.filter((m:Employee) =>
      {return m.technology.toLocaleLowerCase().startsWith(this.searchBy.toLocaleLowerCase())})
      this.emp=filteredData;
    }
    else 
    if(this.sortBy=="Designation"){
      const filteredData=localData.filter((m:Employee) =>
      {return m.designation.toLocaleLowerCase().startsWith(this.searchBy.toLocaleLowerCase())})
      this.emp=filteredData;
    }
    else 
    if(this.sortBy=="Core Expertise"){
      const filteredData=localData.filter((m:Employee) =>
      {return m.coreExpertise.toLocaleLowerCase().startsWith(this.searchBy.toLocaleLowerCase())})
      this.emp=filteredData;
    }
    
  }
 }

}

export class Employee{
  employeeId:number;
  name:string 
  technology:string;
  designation:string;
  skill:string;
  coreExpertise:string;
  isCertification:string;
  certificateName:string;
  company:string;
  fewDetails:string;
  constructor(){
    this.employeeId=0;
    this.name="";
    this.technology="";
    this.designation="";
    this.skill="";
    this.coreExpertise="";
    this.isCertification="";
    this.certificateName="";
    this.company="";
    this.fewDetails="";
  }
}

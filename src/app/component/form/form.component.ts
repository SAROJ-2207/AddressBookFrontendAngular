import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/model/person';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Id: any = this.router.snapshot.paramMap.get("Id");
  
  userDetail: Person = new Person("","","","","","","","");

  constructor(
    private service: UserserviceService,
    private router:ActivatedRoute,
    private route: Router
  ) { };
  
  ngOnInit(): void {
  
  }

  addUser(userDetail:any){
    console.log(this.userDetail);
    this.service.addUserData(this.service.id).subscribe((data:any)=>{
      this.route.navigate([""]);
    }
    )
  }
  
onsubmit(){
 console.log(this.userDetail);
  alert("Data Submitted Successfully...");
  this.service.addUserData(this.userDetail).subscribe((data:any)=>{
     console.log(data);
     this.route.navigate([""]);
     this.service.updateContact(0,null);
  });
}


onUpdate(){
  this.service.updateContact(this.Id,this.userDetail).subscribe((data:any)=>{
    console.log(data.object);
    this.route.navigate([""]);
  })
}
}

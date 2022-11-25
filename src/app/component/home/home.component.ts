import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allUser:any;
  constructor(
    private router:Router,
    private service: UserserviceService
   
  ) { }

  ngOnInit(): void {
    this.getallUser();
  }

  getallUser(){
    this.service.getListUser().subscribe((result:any)=>{
      console.log(result)
      this.allUser = result;
       }
    )
    console.log(this.allUser);
   }

   onDelete(id:any){
      this.service.deleteContactByID(id).subscribe((data:any)=>{
        console.log(id);
          console.log("Deleted Contact successfully...");
          this.ngOnInit();
      }
      )
    }
  
    onUpdateData(Id:Number){    
    this.router.navigate(["updateEmp",Id]);
  }
}


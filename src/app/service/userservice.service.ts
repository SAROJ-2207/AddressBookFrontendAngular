import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  id: Number=0;
  person:any;

  constructor( private http:HttpClient) { }

  getListUser(){
   return this.http.get("http://localhost:8999/addressbook/getalldata");
  }
  
  addUserData(person:any){
   return this.http.post("http://localhost:8999/addressbook/addAddressbook",person);
  }

  getUserById(Id:any){
    return this.http.get("http://localhost:8999/addressbook/getDataByID/"+Id);
  }

  deleteContactByID(did:Number){
      return this.http.delete("http://localhost:8999/addressbook/delete/"+did);
  }

  updateContact(uid:Number,person:any){
    return this.http.put("http://localhost:8999/addressbook/updateEmployee/"+uid,person);
  }

}

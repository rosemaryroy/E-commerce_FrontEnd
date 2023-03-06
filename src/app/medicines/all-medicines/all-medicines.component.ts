import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-medicines',
  templateUrl: './all-medicines.component.html',
  styleUrls: ['./all-medicines.component.css']
})
export class AllMedicinesComponent implements OnInit {

  medicines:any
  user: string=''
  searchItem:string=""

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.allMedicines().subscribe((result:any)=>{
      console.log(result.Medicines);
      this.medicines = result.Medicines
      console.log(this.medicines);
      
    })
    this.api.searchKey.subscribe((result:any)=>{
      console.log(result);
      this.searchItem = result
      
    })
  }

}

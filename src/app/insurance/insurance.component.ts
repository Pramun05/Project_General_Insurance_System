import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl ,FormBuilder, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { insuranceService } from '../insurance/service/insurance.service';
import { NgForm } from '@angular/forms';
import {insurance}from '../insurance/Model/insurance.model'

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  constructor(private fb : FormBuilder,private insservice:insuranceService) { }

  ngOnInit(): void {
  }

  insuranceform=this.fb.group({
    manufacturer:['',[Validators.required]],
 model:['',[Validators.required]],

        drivinglicence:['',[Validators.required]],

          purchasedate:['',[Validators.required]],

            registrationnumber:['',[Validators.required]],

              enginenumber:['',[Validators.required]],

                chassisnumber:['',[Validators.required]],
                email:[''],
                VehicleType:[''],
               
  })

//post

  insurance: any ={};
  result : any;
  addinsurance()
  {
    debugger;
    console.log( this.insuranceform.value);
    this.insservice.insertvechiledata(this.insuranceform.value).subscribe((data: any)=>{this.result=data,console.log(this.result) });
  }
   
 
 
  }
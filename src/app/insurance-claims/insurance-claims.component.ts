import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { insuranceclaimsService } from '../insurance/service/insurance-claims.service';
import{NgForm}from '@angular/forms';
import{insuranceclaims}from '../insurance/Model/insurance-claims.model';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-insurance-claims',
  templateUrl: './insurance-claims.component.html',
  styleUrls: ['./insurance-claims.component.css']
})
export class InsuranceClaimsComponent implements OnInit {
  insuranceClaim: any;

  constructor(private fb : FormBuilder,private claimservice:insuranceclaimsService)
     { }

  ngOnInit(): void {
    console.log(this.Claimform.value);
    
   
  }

  Claimform=this.fb.group({
    PolicyNumber:['',[Validators.required]],
 MobileNumber:['',[Validators.required]],

        Reason:['']

         
  })

  get PolicyNumber()
  {
    return this.Claimform.get('PolicyNumber');
  }
  
  get MobileNumber()
  {
    return this.Claimform.get('MobileNumber');
  }

  get Reason()
  {
    return this.Claimform.get('Reason');
  }
  

 
  //Post
  //object
  claim:any={}; 
  result:any;
  Claim()
  {
     debugger
     this.claimservice.insertclaim(this.claim).subscribe(
       (data)=>
       {console.log(data)
         if(data=="Success")
      {
        window.alert("Record Added!!");
        
        
      }
      else{
        window.alert("Data not Found");
      }
    }
       
       );
     
  }
 

}

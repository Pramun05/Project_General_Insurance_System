import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class insuranceclaimsService
{
getClaim() {
  throw new Error('Method not implemented.');
}
addClaims(value: any) {
  throw new Error('Method not implemented.');
}
insertclaimdata(value: any) {
  throw new Error('Method not implemented.');
}

constructor(private http:HttpClient)
{


}

readonly uri="http://localhost:18821/api/Claim/Claim";




//Adding new product

insertclaim(ins:any)
    {
      
        debugger;
        return this.http.post(this.uri,ins,{responseType:'text'});
    }

}
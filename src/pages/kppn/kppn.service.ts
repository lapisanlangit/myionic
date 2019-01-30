import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KppnService {

  sethttp:any;
  baseUrl:string;

  constructor(private http: HttpClient) { 
      
      this.baseUrl='http://localhost:4000/'
  }


  getKPPN() {
    return this.http.get(this.baseUrl+'rkppn/getKPPN');
  }

}
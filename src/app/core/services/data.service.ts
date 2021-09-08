import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  constructor(private http: HttpClient,private route:ActivatedRoute ) { }

  code = "AQQ-iVmY5bLW1SbHeiWtCf8MmIMosowJZ1leijfFyqgzHeN5g-qFuP6ZhDO4gjGnnPsu-FbxM-iWJyuQrawX0ieXG-Hr7hRY2raprYa2mDQ7ZkA5NPGKJhKrmV03t4rXomsC19wwzJTst6Jf3IQ6R49vvZrSOFJXYk2zM6fCM0Nz1u4iH9cqjwqF3UbAddYVQGGlNRTA-FOqxXZCLRA";

  accesstoken(access: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('origin', 'http://localhost:4200');
    headers.append('Content-type', 'x-www-form-urlencoded');
    headers.append('grant_type', 'authorization');
    headers.append('client_id','8600z7x97tmxb2');
    headers.append('client-secret','4ECN2fqLwQXPsagt'),
    headers.append('redirect_uri',"http://localhost:4200/profile");

    return this.http.post("https://www.linkedin.com/oauth/v2/accessToken?", access, { headers: headers });

  }

  ngOnInit(){
    
  }



}

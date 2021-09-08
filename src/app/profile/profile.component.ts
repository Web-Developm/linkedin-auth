import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../core/services/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  token!: any;
  all_data: any;
  sample: any;
  url = "https://github.com/ory/hydra/issues/1421";


  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private ds: DataService) { }


  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/home']);
  }


  ngOnInit() {
    this.route.queryParamMap.subscribe(data => {
      this.token = data.get('code');
      console.log(this.token);
    });

  }

  acess_token(code: any) {
    // let data = {
    //   'grant_type': "authorization_code",
    //   'client_id': "8600z7x97tmxb2",
    //   'client_secret': "4ECN2fqLwQXPsagt",
    //   'redirect_uri': "http://localhost:4200/profile",
    //   'code': this.token,
    //   'state': 'satya'
    // }



    let url = 'https://www.linkedin.com/oauth/v2/accessToken';

    let headers = new HttpHeaders();
    headers.append('origin', '*');
    headers.append('content-type', 'x-www-form-urlencoded');
    headers.append('grant_type', 'authorization');
    headers.append('client_id', '8600z7x97tmxb2');
    headers.append('client-secret', '4ECN2fqLwQXPsagt'),
      headers.append('redirect_uri', "http://localhost:4200/profile");
    headers.append('code', code);

    this.http.post(url, { headers: headers }).subscribe(
      data => {
        console.log(data);
      }
    )


  }


  // call(code: any) {

  //   let data = {
  //     grant_type: "authorization_code",
  //     client_id: "8600z7x97tmxb2",
  //     client_secret: "4ECN2fqLwQXPsagt",
  //     redirect_uri: "http://localhost:4200/profile",
  //     code: "AQR9o8-ZVIYfPTnz3KE3jS6rFA48hSw7bk-KcbnKQFLKbBh5WKTIsZQeQze5Yc5lbF7XDyt_R02ILBoSY3I0dPMrCfrfwxYPSS6GCLPcvJ3JLfHBMaqdgFYCMl25LXJWykMvZkgoFCjhDSttlOE_DbUjBGPGB0vr6M5hKSztsgSDk2P2p74WNmKb0kwEuQFmsQX8kOjJbFVUqNymezc",
  //     state: 'satya'
  //   }

  //   //let url = 'https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=' + data.client_id + '&client_secret=' + data.client_secret + '&code=' + data.code + '&redirect_uri=' + data.redirect_uri;
  //   this.ds.accesstoken(data).subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   )
  // }



}

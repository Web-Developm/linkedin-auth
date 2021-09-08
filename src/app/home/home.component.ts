import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  data = {
    client_id: "8600z7x97tmxb2",
    client_secret: "4ECN2fqLwQXPsagt",
    redirect_uri: "http://localhost:4200/profile"
  }

  ngOnInit() {
  }

  linkedin() {
    window.location.replace('https://www.linkedin.com/oauth/v2/authorization?response_type=code&state="satya"&client_id=' + this.data.client_id + '&redirect_uri=' + this.data.redirect_uri + '&scope=r_liteprofile%20r_emailaddress%20w_member_social');
  }

}

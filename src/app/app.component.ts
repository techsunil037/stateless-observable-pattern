import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _http: HttpClient){}
  orgWebsiteUserDetails: any[] = [];
  otherWebsiteUserDetails: any[] = [];
  ngOnInit(){
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any) => {
      const users: any[] = res;
      this.orgWebsiteUserDetails = users.filter(user => (user.website).includes('.org'));
      this.otherWebsiteUserDetails = users.filter(user => !(user.website).includes('.org'));
    })
  }
}

import {Component, OnInit} from '@angular/core';
import {LoginService} from "../Services/login-service.service";
import {Subscription, take} from "rxjs";
import {InformationService} from "../Services/information.service";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  // loginSubs: Subscription = new Subscription();
  covidStatus: string = "";
  constructor( private loginService: LoginService, private informationService: InformationService) { }
  // userName: string = "";
  // userId: number = 0;
  // dob: string = "";
  // phoneNumber: string = "";
  // age: string = "";
  // department: string = "";
  // year: string = "";

  userData: {
    id: number,
    name: string,
    dob: string,
    phoneNumber: string,
    age: number,
    department: string,
    year: number,
    uuid: string
  } = null;
  ngOnInit(): void {
    // this.loginSubs = this.loginService.user.pipe(take(1)).
    // subscribe( {
    //   next: (data) => {
    //     console.log( data);
    //     // localStorage.setItem('bilkentId', String(data.id));
    //     // localStorage.setItem('name', data.name);
    //     // localStorage.setItem('dob', String(data.dob));
    //     // localStorage.setItem('phoneNumber', data.phoneNumber);
    //     // localStorage.setItem('age', String(data.age));
    //     // localStorage.setItem('department', data.department);
    //     // localStorage.setItem('year', String(data.year));
    //   },
    //   error: (err) => {
    //     console.log( "user not logged in!");
    //   }
    // });
    const localUser = localStorage.getItem('userData');
    if ( localUser) {
      this.userData = JSON.parse(localUser);
      this.userData.dob = this.userData.dob.substring(0, 10);
      this.informationService.getCovidInfo( this.userData.uuid).pipe( take(1)).subscribe( {
        next: (data) => {
          this.covidStatus = data.data.status;
        }
      });
    }
    // this.userName = String( localStorage.getItem( 'name'));
    // this.userId = Number(localStorage.getItem( 'bilkentId'));
    // this.dob = localStorage.getItem( 'dob');
    // this.phoneNumber = localStorage.getItem( 'phoneNumber');
    // this.age = localStorage.getItem( 'age');
    // this.department = localStorage.getItem( 'department');
    // this.year = localStorage.getItem( 'year');
  }


}

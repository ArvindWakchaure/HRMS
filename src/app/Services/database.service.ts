import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Demaindetail } from '../demaindetail';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  WebAPI: string;
  profiles: any;
  headers: any;

  param: any;
  sidemenu:any;
  private subject = new Subject<any>();
  private profileData = new Subject<any>();
  private isCheckIN = new BehaviorSubject<any>(null);
  PublicDomain: any;
  constructor(private http: HttpClient) {
    console.log('API Token Key: ',localStorage.getItem('AppTokenKey'));
    this.WebAPI = 'https://api.hrmsplus.in/api/'
    // this.PublicDomain='hrms.bigapollospectra.com';
    this.PublicDomain='localhost';
   }
  sendMenues(menu: any) {
    console.log(menu);
    this.subject.next(menu);
}
  getMenues(): Observable<any> {
    return this.subject.asObservable();
}
sendProfile(profile: any) {
  console.log(profile);
  this.profileData.next(profile);
}
getProfile(): Observable<any> {
  return this.profileData.asObservable();
}

changeStatus(status: any) {
  console.log(status);
  this.isCheckIN.next(status);
}

getChangeStatus(): Observable<any> {
  return this.isCheckIN.asObservable();
}
  // isAlreadyLogin(param: any) {
  //   const res = this.http.post(this.WebAPI + 'Authentication/isAlreadyLogin', param);
  //   return res;
  // }

  login(param: any): Observable<any> {
    const res = this.http.post(this.WebAPI + 'Authentication/Login', param, this.httpOptions1);
    return res;
  }
  //https://api.hrmsplus.in/api/Employee/Profile?EmployeeCode=1002&DomainName=localhost&Token=B95AD3699D7D49308EA7838EEB988D34-1002

  getProfileData(param: any): Observable<any> {
    const res = this.http.get(this.WebAPI + `Employee/Profile?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}`);
    return res;
  }

  checkIn(param: any): Observable<any> {
    const res = this.http.get(this.WebAPI + `Attendance/ValidateDevice?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}`);
    return res;
  }

  GetLocation(param: any): Observable<any> {
    const res = this.http.get(this.WebAPI + `Employee/GetLocation?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}`);
    return res;
  }
  ValidateCheckin(param: any): Observable<any> {
    const res = this.http.get(this.WebAPI + `Attendance/ValidateCheckin?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}`);
    return res;
  }

  CheckoutApi(param: any): Observable<any> {
    const res = this.http.get(this.WebAPI + `Attendance/Checkout?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}&AttendanceID=${localStorage.getItem('AttendanceID')}`);
    return res;
  }
  createAttendance(param: any): Observable<any> {
    const res = this.http.post(this.WebAPI + 'Attendance/Create', param, this.httpOptions1);
    return res;
  }
 
  OTPVarification(handler: any): Observable<any> {
    const res1 = this.http.post(this.WebAPI + 'Authentication/CheckOTP', handler);
    return res1;
  }

  resetPassword(param: any): Observable<any> {
    const res = this.http.get(this.WebAPI + `Authentication/ResetPassword?empcode=${param.empcode}&DomainName=${this.PublicDomain}`);
    return res;
  }

  attendanceList(param: any): Observable<any> {
    const res = this.http.get(this.WebAPI + `Attendance/List?empcode=${param.empcode}&domainname=${this.PublicDomain}&startdate=${param.startdate}&enddate=${param.enddate}`);
    return res;
  }


  GetHeader() {
    this.headers = new HttpHeaders();
    // alert(localStorage.getItem('AppTokenKey'));
    this.headers = this.headers.append('Authorization', 'Basic ' + localStorage.getItem('AppTokenKey'));
    this.headers = this.headers.append('Accept', 'application/json');
    this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // this.headers = this.headers.append('AppDomain ', 'ZWxlYXJuLnZpamF5c3R1ZHljaXJjbGUuY29t');
  }





  
  


  ///////////////////
  studentProfile(data: any): Observable<any> {
    return this.http.get<any>(this.WebAPI + 'Student/Profile',  this.httpOptions)
    .pipe(retry(0), catchError(this.handleError))
  }
  

  handleError(handleError: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error('Method not implemented.');
  }

  httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/x-www-form-urlencoded', 
      Authorization: 'Basic ' + localStorage.getItem('AppTokenKey')
     })
   };
   httpOptions1 = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
     })
   };
}

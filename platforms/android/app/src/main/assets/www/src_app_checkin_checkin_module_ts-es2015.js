(self["webpackChunkHRMS_Plus"] = self["webpackChunkHRMS_Plus"] || []).push([["src_app_checkin_checkin_module_ts"],{

/***/ 29499:
/*!***************************************************!*\
  !*** ./src/app/checkin/checkin-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckinPageRoutingModule": function() { return /* binding */ CheckinPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _checkin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkin.page */ 9512);




const routes = [
    {
        path: '',
        component: _checkin_page__WEBPACK_IMPORTED_MODULE_0__.CheckinPage
    }
];
let CheckinPageRoutingModule = class CheckinPageRoutingModule {
};
CheckinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckinPageRoutingModule);



/***/ }),

/***/ 76069:
/*!*******************************************!*\
  !*** ./src/app/checkin/checkin.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckinPageModule": function() { return /* binding */ CheckinPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _checkin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkin-routing.module */ 29499);
/* harmony import */ var _checkin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin.page */ 9512);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 32091);








let CheckinPageModule = class CheckinPageModule {
};
CheckinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
            _checkin_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckinPageRoutingModule
        ],
        declarations: [_checkin_page__WEBPACK_IMPORTED_MODULE_1__.CheckinPage]
    })
], CheckinPageModule);



/***/ }),

/***/ 9512:
/*!*****************************************!*\
  !*** ./src/app/checkin/checkin.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckinPage": function() { return /* binding */ CheckinPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_checkin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./checkin.page.html */ 56387);
/* harmony import */ var _checkin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin.page.scss */ 4390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _Services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/database.service */ 69372);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);
/* harmony import */ var _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/core-logic.service */ 14157);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);










let CheckinPage = class CheckinPage {
    constructor(db, geolocation, CG, device, datePipe, toastController) {
        this.db = db;
        this.geolocation = geolocation;
        this.CG = CG;
        this.device = device;
        this.datePipe = datePipe;
        this.toastController = toastController;
        this.attendanceListData = [];
    }
    ngOnInit() {
        // localStorage.setItem('showbutton', this.showbutton)
        localStorage.setItem('errorMessage', '');
        this.errorMessage = localStorage.getItem('errorMessage');
        // this.checkedoutOn = localStorage.getItem('checkedoutOn');
        this.checkedinOn = localStorage.getItem('checkedinOn');
        console.log(this.errorMessage);
        this.para = JSON.parse(localStorage.getItem('para'));
        console.log("Device IP: ", localStorage.getItem('IP'));
        this.getLocation();
        this.checkIn();
        this.getProfile();
        this.attendanceList();
    }
    ionViewWillEnter() {
        localStorage.setItem('errorMessage', '');
        this.errorMessage = localStorage.getItem('errorMessage');
        setTimeout(() => {
            this.getLocation();
        }, 1000);
        this.para = JSON.parse(localStorage.getItem('para'));
    }
    getProfile() {
        this.db.getProfileData(this.para).subscribe(res => {
            console.log(res);
            this.profiledata = res;
            this.empName = this.profiledata.empName;
            this.degignation = this.profiledata.degignation;
            this.department = this.profiledata.department;
            this.empCode = this.profiledata.empCode;
            this.profilePic = this.profiledata.profilePic;
            // this.db.sendProfile(this.profiledata);
        });
    }
    getLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            localStorage.setItem('Lat', this.latitude);
            localStorage.setItem('Long', this.longitude);
            console.log("lat: " + this.latitude + "===" + "lang: " + this.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    checkIn() {
        this.para = JSON.parse(localStorage.getItem('para'));
        console.log("Device IP: ", localStorage.getItem('IP'));
        this.db.checkIn(this.para).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Check In Response: ", res);
            if (res.isSuccess == true) {
                // localStorage.setItem('errorMessage','true');
                // this.errorMessage=localStorage.getItem('errorMessage');
                //console.log('this.errorMessage');
                // console.log(this.errorMessage);
                this.makeAttendanceCheckIN();
            }
            else if (res == "You are not allowed to make attendance with mobile") {
                // this.CG.presentAlert('You are not allowed to make attendance with mobile');
                const toast = yield this.toastController.create({
                    message: 'You are not allowed to make attendance with mobile',
                    duration: 3000
                });
                toast.present();
                //localStorage.setItem('errorMessage','You are not allowed to make attendance with mobile');
                //this.errorMessage=localStorage.getItem('errorMessage');
                //console.log('this.errorMessage');
                //console.log(this.errorMessage);
            }
        }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(error);
            // this.showbutton = true;
            const toast = yield this.toastController.create({
                message: 'Invalid device!!',
                duration: 2000
            });
            toast.present();
        }));
    }
    makeAttendanceCheckIN() {
        this.db.ValidateCheckin(this.para).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Check In Response: ", res);
            if (res.responseCode == 2005) {
                // this.showbutton=0;
                this.showbutton = false;
                localStorage.setItem('showbutton', this.showbutton);
                this.db.changeStatus(this.showbutton);
                localStorage.setItem('AttendanceID', res.attendanceID);
                const toast = yield this.toastController.create({
                    message: res.message,
                    duration: 3000
                });
                toast.present();
            }
            else if (res.responseCode == 2003) {
                // this.showbutton=1;
                this.showbutton = true;
                localStorage.setItem('showbutton', this.showbutton);
                this.db.changeStatus(this.showbutton);
                const toast = yield this.toastController.create({
                    message: res.message,
                    duration: 3000
                });
                toast.present();
            }
            else if (res.responseCode == 2004) {
                // this.showbutton=1;
                this.showbutton = true;
                localStorage.setItem('showbutton', this.showbutton);
                this.db.changeStatus(this.showbutton);
                const toast = yield this.toastController.create({
                    message: res.message,
                    duration: 3000
                });
                toast.present();
            }
            else if (res == "You are not allowed to make attendance with mobile") {
                const toast = yield this.toastController.create({
                    message: 'You are not allowed to make attendance with mobile',
                    duration: 3000
                });
                toast.present();
            }
        }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(error);
            // this.showbutton = true;
            const toast = yield this.toastController.create({
                message: 'Invalid employee code..',
                duration: 2000
            });
            toast.present();
        }));
    }
    makeAttendanceCheckOut() {
        this.para = JSON.parse(localStorage.getItem('para'));
        // this.CG.presentLoading('Please Wait...');
        this.db.CheckoutApi(this.para).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            // this.CG.dismissLoading();
            console.log("Check In Response: ", res);
            if (res.responseCode == 2002) {
                this.checkedinOn = '';
                localStorage.removeItem('checkedinOn');
                this.makeAttendanceCheckIN();
                this.attendanceList();
                const toast = yield this.toastController.create({
                    message: 'Checked out successfully !',
                    duration: 3000
                });
                toast.present();
            }
            else if (res.responseCode == 2000) {
                const toast = yield this.toastController.create({
                    message: res.message,
                    duration: 3000
                });
                toast.present();
            }
            else if (res.responseCode == 2006) {
                const toast = yield this.toastController.create({
                    message: res.message,
                    duration: 3000
                });
                toast.present();
            }
        }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(error);
            const toast = yield this.toastController.create({
                message: 'An error has occurred.',
                duration: 2000
            });
            toast.present();
        }));
    }
    CreateAttendance() {
        console.log("lat: " + this.latitude + "===" + "lang: " + this.longitude);
        this.AppDetail = {
            model: this.device.model,
            uuid: this.device.uuid
        };
        console.log(this.AppDetail);
        //alert(this.AppDetail);
        // alert(JSON.stringify(this.AppDetail));
        let para = JSON.parse(localStorage.getItem('para'));
        let parameter = {
            "EmpCode": para.EmpID,
            "DomainName": this.db.PublicDomain,
            "AttenType": "P",
            "AttenValue": "1",
            "Lat": '19.0760',
            "Long": '72.8777',
            // "Lat": localStorage.getItem('Lat'), 
            // "Long": localStorage.getItem('Long'),  
            "IP": localStorage.getItem('IP'),
            "DeviceID": this.AppDetail.uuid + "," + this.AppDetail.model,
            "Remarks": "N/A"
        };
        console.log("Create Attendance: ", parameter);
        // let temp={
        //   "EmpCode"  : para.EmpID,
        //   "DomainName":this.db.PublicDomain,
        //   "AttenType":"P",
        //   "AttenValue":"1",
        //   "Lat":localStorage.getItem('Lat'), 
        //   "Long":localStorage.getItem('Long'),  
        //   "IP":'192.168.0.128',  
        //   "DeviceID": '452760b876366fce,RMX1825',
        //   "Remarks":"N/A"
        // }
        // let temp={
        //   "EmpCode"  : para.EmpID,
        //   "DomainName":this.db.PublicDomain,
        //   "AttenType":"P",
        //   "AttenValue":"1",
        //   "Lat":'19.0760', 
        //   "Long":'72.8777',  
        //   "IP":'192.168.0.128',  
        //   "DeviceID": '452760b876366fce,RMX1825',
        //   "Remarks":"N/A"
        // }
        // console.log(temp);
        this.CG.presentLoading('Please Wait...');
        this.db.createAttendance(parameter).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.CG.dismissLoading();
            console.log(data);
            this.response = data;
            if (data.responseCode == 2001) {
                this.attendanceID = data.attendanceID;
                this.checkedinOn = data.checkedinOn;
                localStorage.setItem('checkedinOn', this.checkedinOn);
                this.checkedinOn = localStorage.getItem('checkedinOn');
                localStorage.setItem('AttendanceID', this.attendanceID);
                // this.checkIn();
                this.makeAttendanceCheckIN();
                const toast = yield this.toastController.create({
                    message: data.message,
                    duration: 2000
                });
                toast.present();
            }
        }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.CG.dismissLoading();
            console.log(err.error);
            let errordata = err.error.responseCode;
            if (errordata == 2007) {
                localStorage.setItem('errorMessage', err.error.message);
                this.errorMessage = localStorage.getItem('errorMessage');
                console.log('this.errorMessage');
                // this.CG.presentAlert(err.error.message);
            }
        }));
    }
    attendanceList() {
        const date = new Date();
        console.log(date);
        const newDate = this.datePipe.transform(date, "yyyy-MM-dd");
        let selectPara = {
            "empcode": this.para.EmpID,
            "startdate": newDate,
            "enddate": newDate
        };
        console.log(selectPara);
        this.db.attendanceList(selectPara).subscribe(res => {
            console.log(res);
            if (res.code == 200) {
                this.attendanceListData = res.data;
                console.log("attendance list: ", this.attendanceListData);
            }
        }, error => {
            console.log(error);
        });
    }
};
CheckinPage.ctorParameters = () => [
    { type: _Services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation },
    { type: _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_5__.CoreLogicService },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
CheckinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-checkin',
        template: _raw_loader_checkin_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_checkin_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckinPage);



/***/ }),

/***/ 4390:
/*!*******************************************!*\
  !*** ./src/app/checkin/checkin.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Poppins-Regular\";\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.content {\n  background-color: coral;\n  margin-top: 0px;\n  padding: 5px;\n}\n\n.content ion-img {\n  width: 50%;\n  height: auto;\n  margin-left: 23px;\n  border-radius: 50%;\n}\n\n.ionHeader {\n  font-size: 42px;\n  background-color: greenyellow;\n}\n\n.img-wrapper ion-avatar {\n  width: 100%;\n  height: auto;\n}\n\n.title {\n  font-size: 14px;\n  color: black;\n  font-weight: 500;\n  text-align: center;\n  text-transform: capitalize;\n  font-weight: 700;\n}\n\n.profile {\n  border-radius: 48%;\n  background-color: gray;\n}\n\n.assetImg {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n}\n\n.header {\n  background-color: grey;\n  width: 100%;\n  height: auto;\n  display: flex;\n  border-radius: 3px;\n}\n\nion-card {\n  border-radius: 5px;\n  height: auto;\n}\n\n.headerSpan p {\n  font-size: 20px;\n  color: gray;\n  margin-left: 20px;\n  margin-top: auto;\n}\n\nion-header {\n  background-color: greenyellow;\n}\n\n.imageParent {\n  display: flex;\n  width: 100%;\n  height: auto;\n}\n\n.imagechild img {\n  width: 100%;\n}\n\n.verticalIcon {\n  width: 10%;\n  height: auto;\n}\n\n.verticalIcon ion-icon {\n  font-size: 20px;\n}\n\nion-label p {\n  font-size: 15px;\n  font-weight: 600;\n  font-weight: 700;\n}\n\nion-item ion-label p {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n}\n\nion-item ion-label ion-icon {\n  font-size: 20px;\n  color: gray;\n}\n\nion-item ion-button {\n  color: white;\n  font-size: 20px;\n}\n\nion-item ion-icon {\n  color: white;\n  font-size: 20px;\n}\n\nion-item ion-label p {\n  color: white;\n  font-size: 20px;\n}\n\n.img-wrapper {\n  text-align: center;\n}\n\n.card {\n  box-shadow: 8px 14px 19px #d3d3d3;\n  margin-left: 12px;\n  /* border-radius: 44px; */\n  border-color: white;\n}\n\n.profileinfo {\n  color: white;\n  margin-right: 9px;\n  text-transform: capitalize;\n  text-align: end;\n}\n\n.profileinfo #name {\n  font-size: 15px;\n  color: white;\n  font-weight: bold;\n}\n\n.profileinfo #roll {\n  font-size: 10px;\n  text-align: end;\n}\n\n.ionTilte {\n  padding-left: 1px;\n}\n\n/* Set the width to the full container and center the content */\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\n/* Set the flex in order to size the text width to its content */\n\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n\n/* Set the placeholder color and opacity */\n\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\n\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n/* Set the text color */\n\nion-select::part(text) {\n  color: #545ca7;\n}\n\n/* Set the icon color and opacity */\n\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n\nh6.Update {\n  text-align: center;\n  background-color: #37B817;\n  margin: 0;\n  padding: 10px 0px;\n  color: #fff;\n}\n\nion-grid {\n  --ion-grid-columns: 12;\n  --ion-grid-padding: 5px;\n  --ion-grid-column-padding: 0px;\n  --ion-grid-width-xs: 100%;\n  --ion-grid-width-sm: 540px;\n  --ion-grid-width-md: 720px;\n  --ion-grid-width-lg: 960px;\n  --ion-grid-width-xl: 1140px;\n}\n\nion-footer {\n  width: 100%;\n  height: 54px;\n}\n\n.designdiv {\n  width: 105%;\n  height: 165px;\n  /* transform-style: preserve-3d; */\n  /* transform: scale3d(1.5, 1.5, 1.5); */\n  background: -webkit-linear-gradient(left, #f17432 1%, #eaad59 80%, #e8a34a 97%);\n  transform: skewY(-8deg);\n  margin-top: -28px;\n}\n\n.divs {\n  margin-top: -74px;\n}\n\n.divcol {\n  width: 100%;\n  display: flex;\n  padding: 23px;\n}\n\n.card {\n  border-radius: 10px;\n}\n\n.divcard {\n  width: 100%;\n  display: flex;\n  padding: 15px;\n  background-color: coral;\n}\n\n.image {\n  width: 38px;\n  height: auto;\n}\n\n.lable {\n  font-size: 19px;\n  color: white;\n}\n\n/* ----------------------------------------------\n * Generated by Animista on 2021-2-6 16:22:46\n * Licensed under FreeBSD License.\n * See http://animista.net/license for more info. \n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n\n.imageParent {\n  display: flex;\n  padding: 6px;\n}\n\n.imagechild {\n  width: 57px;\n  height: 57px;\n  /* background: white; */\n  text-align: center;\n  border: 3px solid white;\n}\n\n.title {\n  font-size: 12px;\n  margin-left: 6px;\n  margin-top: 18px;\n  color: gray;\n  text-transform: capitalize;\n}\n\n.heading {\n  margin-left: 20px;\n  font-size: 17px;\n  font-weight: bold;\n  padding-top: 16px;\n  text-transform: capitalize;\n}\n\nion-card {\n  box-shadow: 3px 6px 11px 0px #8080805c;\n  --background: #ffffff7d;\n  border-radius: 10px;\n}\n\n.icons {\n  margin-left: 143px;\n}\n\n.main {\n  width: 0;\n  height: 0;\n  border-top: 140px solid red;\n  border-right: 965px solid transparent;\n}\n\n.label {\n  width: 40%;\n  color: white;\n  font-size: 14px;\n  text-align: right;\n}\n\n.ionbutton {\n  width: 1%;\n}\n\n.lablees {\n  margin-left: 76px;\n}\n\n.iontitle {\n  margin-top: 10px;\n}\n\n.css {\n  width: 104%;\n  height: 42px;\n  /* transform: rotate3d(1, 1, 1, -7deg); */\n  margin-bottom: 18px;\n  margin-left: -9px;\n  margin-top: -74px;\n  transform: rotate(-5deg);\n}\n\n.user {\n  margin-top: -110px;\n  position: absolute;\n  margin-left: 35px;\n  display: flex;\n  font-size: 18px;\n  color: white;\n  font-weight: 700;\n}\n\n.information {\n  margin-left: 19px;\n  color: white;\n}\n\n.names {\n  font-size: 18px;\n}\n\n.classes {\n  font-size: 16px;\n}\n\n.corsses {\n  font-size: 14px;\n}\n\n.name {\n  padding: 2px;\n}\n\n.imageeee {\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n\n.ion-text-left {\n  width: 100%;\n}\n\n.subjectdiv {\n  /* border: 1px solid; */\n  /* border: 0.5px solid coral; */\n  background: #C5DDF9;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin-top: -14px;\n}\n\n.userlabel {\n  text-transform: capitalize;\n}\n\n.maindivcol {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  box-shadow: 3px 6px 11px 0px #8080805c;\n  --background: #ffffff7d;\n  border-radius: 10px;\n  margin: 10px;\n  text-align: center;\n  margin-bottom: 35px;\n  height: 120px;\n}\n\n.iconsss p {\n  position: relative;\n  top: -14px;\n  font-size: 16px !important;\n  color: #fff;\n  font-weight: 600;\n  padding: 15px 0px !important;\n  background: #00000014;\n  border-radius: 10px;\n}\n\n.iconsss img {\n  width: 50%;\n  position: relative;\n  top: -27px;\n}\n\n.dashHead {\n  position: fixed;\n  z-index: 22;\n  top: 65px;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n}\n\n.cardicondiv .maindivcol .iconsss img {\n  width: 20% !important;\n}\n\n.bg {\n  background: #3880ff;\n  background-size: cover;\n  -webkit-background-size: cover;\n  width: 100%;\n  height: 110px;\n  overflow: hidden;\n  position: relative;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  margin-bottom: 30px;\n}\n\nion-card.cardicondiv.md.hydrated {\n  --background: #ffffff;\n}\n\n.cardicondiv p {\n  color: black !important;\n  font-size: 15px !important;\n}\n\nion-content {\n  --background: aliceblue;\n}\n\n.cardicondiv .maindivcol {\n  text-align: center;\n  padding: 13px 0px 0px 0px;\n}\n\n.cardicondiv .maindivcol .iconsss ion-icon {\n  font-size: 50px;\n}\n\n.cardicondiv .maindivcol .iconsss img {\n  width: 35%;\n}\n\n.cardicondiv .maindivcol p {\n  font-size: 19px;\n  font-weight: 500;\n  color: white;\n}\n\n@-webkit-keyframes slide {\n  0% {\n    transform: translate(0px, 100px);\n  }\n  100% {\n    transform: translate(0px, 0px);\n  }\n}\n\n@keyframes slide {\n  0% {\n    transform: translate(0px, 100px);\n  }\n  100% {\n    transform: translate(0px, 0px);\n  }\n}\n\n.imgcon {\n  -webkit-animation-name: slide;\n          animation-name: slide;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.bg-dashboard p {\n  text-align: center;\n  margin: 0px;\n}\n\n.bg-dashboard h1 {\n  text-align: center;\n  margin: 0px;\n}\n\n.bg-dash-white {\n  background: #fbf0f0;\n  height: 100vh;\n  margin-top: -25px;\n  border-radius: 30px 30px;\n}\n\n.image-center {\n  margin-top: 15px !important;\n  margin: 0 auto;\n  border: 3px solid white;\n  height: 80px;\n  width: 80px;\n}\n\n.imgcon-new {\n  height: 45px;\n  margin: 5px auto;\n  display: block;\n}\n\np {\n  text-align: center;\n  margin: 5px 0px;\n}\n\n.new-menu {\n  background: #ffffff;\n  margin: 5px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 5px;\n}\n\n.menu-inner-div {\n  margin-top: -45px;\n  overflow-y: scroll;\n}\n\n.headicon1 {\n  font-size: 20px;\n}\n\n.checkinTime {\n  background: #fff;\n  border-radius: 50px;\n  color: gray;\n  margin: 15px 5px;\n  padding: 10px;\n}\n\n.checkinTime p {\n  color: #717171;\n}\n\n.checkinTime span {\n  color: #297c9d;\n  font-weight: 600;\n}\n\n.checkInBtn {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.checkInBtn ion-button {\n  width: 100px;\n  height: 100px;\n  --border-radius: 50% !important;\n}\n\n.ion-color-success {\n  font-weight: bold;\n}\n\n.ion-color-danger {\n  font-weight: bold;\n}\n\n.table-row {\n  border: 1px solid gray;\n}\n\ntable {\n  width: 100%;\n}\n\ntable td {\n  font-size: 12px;\n}\n\n.containers {\n  padding-right: 5px;\n  padding-left: 5px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\nthead {\n  background: #297c9d;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNBLGFBQUE7RUFDQSwrQkFBQTtBQWhKSjs7QUFtSkE7RUFDRSxpQkFBQTtBQWhKRjs7QUFrSkE7RUFDRSxpQkFBQTtBQS9JRjs7QUFrSkE7RUFDRSxzQkFBQTtBQS9JRjs7QUEwSkE7RUFDRSxXQUFBO0FBdkpGOztBQXdKRTtFQUNFLGVBQUE7QUF0Sko7O0FBMkpBO0VBQ0Usa0JBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUF4Sko7O0FBMEpBO0VBQ0UsbUJBQUE7RUFDRSxZQUFBO0FBdkpKIiwiZmlsZSI6ImNoZWNraW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1SZWd1bGFyJztcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogIzhjOGM4YztcbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jb250ZW50IHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMTg0MWNlYmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgaW9uLWltZyB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbn1cblxuLmlvbkhlYWRlciB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbi5pbWctd3JhcHBlciB7XG4gIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLy8gbWFyZ2luLXRvcDogMTJweDtcbiAgLy8gbWFyZ2luLWJvdHRvbTogOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLy8gLmltZy13cmFwcGVye1xuLy8gIGJvcmRlci1yYWRpdXM6IDMwJTsgXG4vLyB9XG4ucHJvZmlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDQ4JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLmFzc2V0SW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vLyBpbWd7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IGF1dG87XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vIH1cbi8vIGltZ3tcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gfVxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmhlYWRlclNwYW4ge1xuICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG59XG5cbmlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLmltYWdlUGFyZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmltYWdlY2hpbGQge1xuICAvLyB3aWR0aDogOTAlO1xuICAvLyBoZWlnaHQ6IGF1dG87XG4gIGltZyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udmVydGljYWxJY29uIHtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuaW9uLWxhYmVsIHtcbiAgcCB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuXG5pb24taXRlbSB7XG4gIGlvbi1sYWJlbCB7XG4gICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgfVxufVxuXG5pb24taXRlbSB7XG4gIGlvbi1idXR0b24ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICBpb24tbGFiZWwge1xuICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgfVxufVxuXG4uaW1nLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgYm94LXNoYWRvdzogOHB4IDE0cHggMTlweCAjZDNkM2QzO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgLyogYm9yZGVyLXJhZGl1czogNDRweDsgKi9cbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi5wcm9maWxlaW5mbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gICNuYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gICNyb2xsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxufVxuXG4uaW9uVGlsdGUge1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbn1cblxuXG4vKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cblxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cblxuLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xuXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XG4gIGNvbG9yOiAjMjBhMDhhO1xuICBvcGFjaXR5OiAxO1xufVxuXG5cbi8qXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcbiAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG4gKi9cblxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuXG4vKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cblxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGNvbG9yOiAjNTQ1Y2E3O1xufVxuXG5cbi8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xuXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgY29sb3I6ICM5NzFlNDk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmg2LlVwZGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3QjgxNztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMjtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOiA1cHg7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgLS1pb24tZ3JpZC13aWR0aC14czogMTAwJTtcbiAgLS1pb24tZ3JpZC13aWR0aC1zbTogNTQwcHg7XG4gIC0taW9uLWdyaWQtd2lkdGgtbWQ6IDcyMHB4O1xuICAtLWlvbi1ncmlkLXdpZHRoLWxnOiA5NjBweDtcbiAgLS1pb24tZ3JpZC13aWR0aC14bDogMTE0MHB4O1xuICAvLyBtYXJnaW4tdG9wOiAtNzJweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU0cHg7XG59XG5cbi5kZXNpZ25kaXYge1xuICB3aWR0aDogMTA1JTtcbiAgaGVpZ2h0OiAxNjVweDtcbiAgLyogdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDsgKi9cbiAgLyogdHJhbnNmb3JtOiBzY2FsZTNkKDEuNSwgMS41LCAxLjUpOyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZjE3NDMyIDElLCAjZWFhZDU5IDgwJSwgI2U4YTM0YSA5NyUpO1xuICB0cmFuc2Zvcm06IHNrZXdZKC04ZGVnKTtcbiAgbWFyZ2luLXRvcDogLTI4cHg7XG59XG5cbi5kaXZzIHtcbiAgbWFyZ2luLXRvcDogLTc0cHg7XG59XG5cbi5kaXZjb2wge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjNweDtcbn1cblxuLmNhcmQge1xuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xuICAvLyAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZGl2Y2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbn1cblxuLmltYWdlIHtcbiAgd2lkdGg6IDM4cHg7XG4gIGhlaWdodDogYXV0bztcbiAgLy8gbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubGFibGUge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlvbmdyaWQge1xuICAvLyAtd2Via2l0LWFuaW1hdGlvbjpzbGlkZS1md2QtdG9wIC42MHMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDthbmltYXRpb246c2xpZGUtZndkLXRvcCAuNjBzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGhcbiAgLy8gLXdlYmtpdC1hbmltYXRpb246c2xpZGUtZndkLWNlbnRlciAuNDVzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7YW5pbWF0aW9uOnNsaWRlLWZ3ZC1jZW50ZXIgLjQ1cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoXG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjEtMi02IDE2OjIyOjQ2XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8vICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtZndkLWNlbnRlcnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWig2MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWig2MHB4KX19QGtleWZyYW1lcyBzbGlkZS1md2QtY2VudGVyezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMjYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDU2MHB4KX19XG4vLyBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtZndkLXRvcHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMTYwcHgpIHRyYW5zbGF0ZVkoLTEwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigxNjBweCkgdHJhbnNsYXRlWSgtMTAwcHgpfX1Aa2V5ZnJhbWVzIHNsaWRlLWZ3ZC10b3B7NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSB0cmFuc2xhdGVZKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDE2MHB4KSB0cmFuc2xhdGVZKC0xMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooNTAwcHgpIHRyYW5zbGF0ZVkoODAwcHgpfX1cbi5pb24tdGV4dC1sZWZ0IHt9XG5cbi5pbWFnZVBhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vYmFja2dyb3VuZDogIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmMTc0MzIgMSUsI2VhYWQ1OSA4MCUsI2U4YTM0YSA5NyUpOztcbiAgcGFkZGluZzogNnB4O1xufVxuXG4uaW1hZ2VjaGlsZCB7XG4gIHdpZHRoOiA1N3B4O1xuICBoZWlnaHQ6IDU3cHg7XG4gIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IDNweCA2cHggMTFweCAwcHggIzgwODA4MDVjO1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY3ZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLy8gLXdlYmtpdC1hbmltYXRpb246c2xpZGUtZndkLWNlbnRlciAuNDVzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGg7YW5pbWF0aW9uOnNsaWRlLWZ3ZC1jZW50ZXIgLjQ1cyBjdWJpYy1iZXppZXIoLjI1LC40NiwuNDUsLjk0KSBib3RoXG59XG5cbi5pY29ucyB7XG4gIG1hcmdpbi1sZWZ0OiAxNDNweDtcbn1cblxuLmljb24ge1xuICAvLyBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgLy8gICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4ubWFpbiB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDE0MHB4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXJpZ2h0OiA5NjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmxhYmVsIHtcbiAgd2lkdGg6IDQwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8vIG1hcmdpbi1sZWZ0OiAzNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmlvbmJ1dHRvbiB7XG4gIHdpZHRoOiAxJTtcbn1cblxuLmxhYmxlZXMge1xuICBtYXJnaW4tbGVmdDogNzZweDtcbn1cblxuLmlvbnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNzcyB7XG4gIHdpZHRoOiAxMDQlO1xuICBoZWlnaHQ6IDQycHg7XG4gIC8vIGhlaWdodDogMTk2cHg7XG4gIC8vIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmMTc0MzIgMSUsICNlYWFkNTkgODAlLCAjZThhMzRhIDk3JSk7XG4gIC8qIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMSwgMSwgLTdkZWcpOyAqL1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogLTlweDtcbiAgbWFyZ2luLXRvcDogLTc0cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbn1cblxuLnVzZXIge1xuICBtYXJnaW4tdG9wOiAtMTEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaW5mb3JtYXRpb24ge1xuICBtYXJnaW4tbGVmdDogMTlweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmFtZXMge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jbGFzc2VzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29yc3NlcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5hbWUge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi8vIC5ncmlkIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDI2O1xuLy8gICBib3JkZXItcmFkaXVzOiA5cHg7XG4vLyAgIGJveC1zaGFkb3c6IDBweCAxcHggMzhweCAjODA4MDgwODc7XG4vLyAgIG1hcmdpbi10b3A6IDExcHg7XG4vLyB9XG4vLyAuc2xpZGUge1xuLy8gICB3aWR0aDogMTMxcHg7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgbWFyZ2luLWxlZnQ6IDIxcHg7XG4vLyB9XG4uaW1hZ2VlZWUge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbn1cblxuLmlvbi10ZXh0LWxlZnQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1YmplY3RkaXYge1xuICAvLyBtYXJnaW4tdG9wOiAtNjVweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQ7ICovXG4gIC8qIGJvcmRlcjogMC41cHggc29saWQgY29yYWw7ICovXG4gIC8vIGJveC1zaGFkb3c6IDJweCAzcHggMjFweCAjZmY3ZjUwOTk7XG4gIGJhY2tncm91bmQ6ICNDNURERjk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG5cbi51c2VybGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLy8gaW9uLWNvbnRlbnR7XG4vLyAgIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlL2JhY2tncm91bmQxLmpwZ1wiKSByZXBlYXRcbi8vIHRvcCBmaXhlZCwgIzA5NzdlNmI4OyBcbi8vICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgIC5tYWlubm57XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5NzdlNmI4O1xuLy8gICB9XG4vLyB9XG4ubWFpbmRpdmNvbCB7XG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxcHggLTJweCwgcmdiKDAgMCAwIC8gMTQlKSAwcHggMnB4IDJweCAwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggMHB4O1xuICBib3gtc2hhZG93OiAzcHggNnB4IDExcHggMHB4ICM4MDgwODA1YztcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmN2Q7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG4uaWNvbnNzcyBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNHB4O1xuICBmb250LXNpemU6IDE2cHghaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTVweCAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDE0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaWNvbnNzcyBpbWcge1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI3cHg7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5kYXNoSGVhZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjI7XG4gIHRvcDogNjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jYXJkaWNvbmRpdiAubWFpbmRpdmNvbCAuaWNvbnNzcyBpbWcge1xuICB3aWR0aDogMjAlIWltcG9ydGFudDtcbn1cblxuLmJnIHtcbiAgLy8gYmFja2dyb3VuZDogIzQ4NTBhNDtcbiAgYmFja2dyb3VuZDogIzM4ODBmZjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLy8gLmJnOmFmdGVyIHtcbi8vICAgY29udGVudDogXCJcIjtcbi8vICAgd2lkdGg6IDIwMCU7XG4vLyAgIGhlaWdodDogMDtcbi8vICAgcGFkZGluZy10b3A6IDIwMCU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4vLyAgIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IDYwJTtcbi8vICAgbGVmdDogNTAlO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4vLyAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB3aGl0ZSFpbXBvcnRhbnQ7XG4vLyB9XG5pb24tY2FyZC5jYXJkaWNvbmRpdi5tZC5oeWRyYXRlZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmNhcmRpY29uZGl2IHAge1xuICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHghaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAvLyAtLWJhY2tncm91bmQ6ICNDNURERjk7XG4gIC8vIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ljb24vYmFja2dyb3VuZGltYWdlLnBuZ1wiKSByZXBlYXRcbiAgLy8gdG9wIGZpeGVkLCAjMDk3N2U2Yjg7IFxuICAvLyAtd2Via2l0LWFuaW1hdGlvbjprZW5idXJucy10b3AgMnMgbGluZWFyIHJldmVyc2UgYm90aDthbmltYXRpb246a2VuYnVybnMtdG9wIDJzIGxpbmVhciByZXZlcnNlIGJvdGhcbn1cblxuLy8gQC13ZWJraXQta2V5ZnJhbWVzIGtlbmJ1cm5zLXRvcHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgMTYlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDE2JX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpO3RyYW5zZm9ybTpzY2FsZSgxLjI1KSB0cmFuc2xhdGVZKC0xNXB4KTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wO3RyYW5zZm9ybS1vcmlnaW46dG9wfX1Aa2V5ZnJhbWVzIGtlbmJ1cm5zLXRvcHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVZKDApOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgMTYlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDE2JX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpO3RyYW5zZm9ybTpzY2FsZSgxLjI1KSB0cmFuc2xhdGVZKC0xNXB4KTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46dG9wO3RyYW5zZm9ybS1vcmlnaW46dG9wfX1cbi5jYXJkaWNvbmRpdiB7XG4gIC8vIGJveC1zaGFkb3c6IDNweCA2cHggMTFweCAwcHggIzgwODA4MDVjO1xuICAvLyAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kY2FyZC5qcGdcIikgcmVwZWF0LCMwOTc3ZTZiODtcbiAgLm1haW5kaXZjb2wge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTNweCAwcHggMHB4IDBweDtcbiAgICAgIC5pY29uc3NzIHtcbiAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIHNsaWRlIHtcbiAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gIH1cbn1cblxuQC1vLWtleWZyYW1lcyBzbGlkZSB7XG4gIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTAwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUge1xuICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEwMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgfVxufVxuXG4uaW1nY29uIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuLy8vLy8vLy8vbmV3IGNzc1xuLmJnLWRhc2hib2FyZCB7XG4gIC8vIGJhY2tncm91bmQ6IzAwN2M5ZDtcbiAgLy8gaGVpZ2h0OiA1MHZoO1xuICAvLyBtYXJnaW4tYm90dG9tOiAzMTBweDtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAvLyB6LWluZGV4OiAyO1xuICAvLyB0b3A6IDBweDtcbiAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG4gIC8vIHBvc2l0aW9uOiBzdGlja3k7XG4gIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLy8gY29sb3I6ICMyOTdjOWQ7XG4gICAgICBtYXJnaW46IDBweDtcbiAgfVxuICBoMSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvLyBjb2xvcjogIzI5N2M5ZDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbi5iZy1kYXNoLXdoaXRlIHtcbiAgYmFja2dyb3VuZDogI2ZiZjBmMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHggMzBweDtcbn1cblxuLmltYWdlLWNlbnRlciB7XG4gIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogODBweDtcbn1cblxuLmltZ2Nvbi1uZXcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogNXB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5cbi5uZXctbWVudSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm1lbnUtaW5uZXItZGl2IHtcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgLy8gaGVpZ2h0OiA0MDBweDtcbn1cblxuLy8gYXJ2aW5kIGNzc1xuLmhlYWRpY29uMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5jaGVja2luVGltZXtcbiAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XG4gIC8vIGJvcmRlci1yYWRpdXM6NHB4O1xuICAvLyBjb2xvcjogZ3JheTtcbiAgLy8gbWFyZ2luOiA1cHg7XG4gIC8vIHBhZGRpbmc6IDVweDtcbiBcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luOiAxNXB4IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmNoZWNraW5UaW1lIHB7XG4gIGNvbG9yOiAjNzE3MTcxO1xufVxuLmNoZWNraW5UaW1lIHNwYW57XG4gIGNvbG9yOiAjMjk3YzlkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNoZWNrSW5CdG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDoycmVtO1xuICBpb24tYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59XG4uaW9uLWNvbG9yLXN1Y2Nlc3Mge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb24tY29sb3ItZGFuZ2VyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YWJsZS1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuLnRhYmxlLWJvZHkge1xuICB0aCB7XG5cbiAgfVxufVxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICAvLyBvdmVyZmxvdy14OmF1dG87XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRkIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMXB4O1xuICB9XG59XG4uY29udGFpbmVycyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG50aGVhZCB7XG4gIGJhY2tncm91bmQ6ICMyOTdjOWQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuIl19 */");

/***/ }),

/***/ 56387:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkin/checkin.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar class=\"headblue\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"tabs\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>CheckIn</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header class=\"\">\n  <ion-toolbar class=\"headblue\">\n      <ion-item class=\"headblue\" lines=\"none\">\n          <ion-buttons>\n              <ion-menu-button class=\"menubtn\" menu=\"first\"></ion-menu-button>\n          </ion-buttons>\n          <ion-title>CheckIn</ion-title>\n          <!-- <div class=\"profileheader\">\n              <ion-icon class=\"headicon1\" slot=\"end\"\n                  name=\"notifications-outline\" (click)=\"openNotifications()\"></ion-icon>\n          </div> -->\n      </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"bg-dashboard\">\n    <div>\n        <ion-avatar class=\"image-center\" *ngIf=\"!profilePic\">\n            <img src=\"assets/image/profile.png\">\n        </ion-avatar>\n        <ion-avatar class=\"image-center\" *ngIf=\"profilePic\">\n            <img src=\"{{profilePic}}\">\n        </ion-avatar>\n        <h1> {{ empName }}</h1>\n           <p>EMP CODE:&nbsp;{{empCode}}&nbsp;</p>\n           <!-- <p>Designation:&nbsp;{{degignation}}&nbsp;</p>\n           <p> Department:&nbsp;{{department}}&nbsp;</p> -->\n           \n           \n        </div>\n        <!-- <div class=\"checkinTime\" *ngIf=\"checkedinOn\">\n          <p><span>Checked in On :</span>{{checkedinOn}}</p>\n        </div> -->\n        <!-- <div class=\"checkinTime\" *ngIf=\"checkedoutOn\">\n            <p><span>Checked out On :</span>{{checkedoutOn}}</p>\n          </div> -->\n        \n        <div class=\"checkinTime\" *ngIf=\"errorMessage\">\n          <p><span>Message :</span> {{errorMessage}}</p>\n        </div>\n        <div class=\"checkInBtn\" (click)=\"CreateAttendance()\" *ngIf=\"showbutton== true\">\n          <ion-button color=\"success\">Check In</ion-button>\n         \n        </div>\n        <div class=\"checkInBtn\" (click)=\"makeAttendanceCheckOut()\" *ngIf=\"showbutton== false\">\n          <ion-button color=\"danger\" >Check Out</ion-button>\n          \n        </div>\n    </div>\n    <!-- <div class=\"container table-responsive\">\n      <h3>YOUR RECENT ACTIVITY</h3>\n      <table class=\"table table-bordered\">\n          <tr class=\"table-bordered\">\n            <th>Check In</th>\n            <th>Check Out</th>\n            <th>Shift</th>\n            <th>Late Remarks</th>\n            <th>Early Remarks</th>\n          </tr>\n          <tr *ngFor=\"let data of attendanceListData;\" class=\"table-bordered\">\n            <td>{{data.inTime | date:'d-MMM-y, h:mm a'}}</td>\n            <td>{{data.outTime | date:'medium'}}</td>\n            <td>{{data.shiftName}}</td>\n            <td>{{data.late_IN_Mint}}</td>\n            <td>{{data.early_OUT_Mint}}</td>\n          </tr>\n        </table>\n    </div> -->\n\n    <h4 style=\"text-align: center;\">YOUR RECENT ACTIVITY</h4> \n    <div class=\"containers table-responsive\">\n                 \n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th>Check In</th>\n            <th>Check Out</th>\n            <th>Shift</th>\n            <th>Late Remarks</th>\n            <th>Early Remarks</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr  *ngFor=\"let data of attendanceListData;\">\n            <td>{{data.inTime | date:'d-MMM-y, h:mm a'}}</td>\n            <td>{{data.outTime | date:'d-MMM-y, h:mm a'}}</td>\n            <td>{{data.shiftName}}</td>\n            <td>{{data.late_IN_Mint}}</td>\n            <td>{{data.early_OUT_Mint}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n   \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_checkin_checkin_module_ts-es2015.js.map
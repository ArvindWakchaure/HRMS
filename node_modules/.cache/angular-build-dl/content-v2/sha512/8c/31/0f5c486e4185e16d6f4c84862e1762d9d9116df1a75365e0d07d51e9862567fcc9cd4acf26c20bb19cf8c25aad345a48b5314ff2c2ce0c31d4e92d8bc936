(self["webpackChunkHRMS_Plus"] = self["webpackChunkHRMS_Plus"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material.module */ 63806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 66825);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/core-logic.service */ 14157);
/* harmony import */ var _Services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/database.service */ 69372);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);









let LoginPage = class LoginPage {
    constructor(db, device, alertController, toastController, router, CG) {
        this.db = db;
        this.device = device;
        this.alertController = alertController;
        this.toastController = toastController;
        this.router = router;
        this.CG = CG;
    }
    ngOnInit() {
    }
    GetDevice() {
        this.AppDetail = {
            model: this.device.model,
            uuid: this.device.uuid
        };
        console.log(this.AppDetail);
        // alert(this.AppDetail);
        // alert(JSON.stringify(this.AppDetail));
        localStorage.setItem('AppDetail', this.AppDetail);
        //api/Authentication/Login
        // alert(JSON.stringify(localStorage.getItem('AppDetail')));
        // checkLogin() {
        if (this.EmpID === '' || this.EmpID == undefined) {
            this.CG.presentAlert('Please Enter Employee ID');
            return false;
        }
        if (this.Password === '' || this.Password == undefined) {
            this.CG.presentAlert('Please Enter Password');
            return false;
        }
        let parameter = {
            "EmpID": this.EmpID,
            "Password": this.Password,
            "DomainName": this.db.PublicDomain,
            // "DeviceID": this.AppDetail.uuid+","+this.AppDetail.model
            "DeviceID": "7b0c60b664653b38,CPH2015"
        };
        console.log(parameter);
        // alert(JSON.stringify(parameter));
        localStorage.setItem('para', JSON.stringify(parameter));
        this.CG.presentLoading('Please Wait...');
        this.db.login(parameter).subscribe((data) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.CG.dismissLoading();
            this.LoginRes = data;
            console.log(this.LoginRes);
            localStorage.setItem('AppTokenKey', data[0].token);
            //  localStorage.setItem('AppTokenKey', '5899541F117F44FDAE0B9D6CF2D154EE-1002');
            console.log(localStorage.getItem('AppTokenKey'));
            if (this.LoginRes[0].status == "Approved") {
                const toast = yield this.toastController.create({
                    message: 'Login Successfully',
                    duration: 2000
                });
                toast.present();
                // this.checkIn();
                this.makeAttendanceCheckIN();
                this.router.navigate(["/tabs/tab1"]);
            }
            else if (this.LoginRes[0].status == "Pending") {
                const toast = yield this.toastController.create({
                    message: `${this.LoginRes[0].message}`,
                    duration: 3000
                });
                toast.present();
                // this.checkIn();
                this.router.navigate(["/tabs/tab1"]);
            }
            else {
                const toast = yield this.toastController.create({
                    message: 'Your settings have been saved.',
                    duration: 2000
                });
                toast.present();
            }
        }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.CG.Error(err);
            const toast = yield this.toastController.create({
                message: 'Invalid employee code or password.',
                duration: 2000
            });
            toast.present();
        }));
    }
    resetPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Reset Password',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'EmpID',
                        type: 'text',
                        placeholder: 'Enter Employee ID'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (name) => {
                            console.log('Confirm Ok', name);
                            this.resetPass(name);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    resetPass(name) {
        console.log(name.EmpID);
        if (!name.EmpID) {
            this.CG.presentAlert('Please enter employee Id');
            return false;
        }
        else {
            let para = {
                "empcode": name.EmpID
            };
            this.db.resetPassword(para).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                console.log(res);
                if (res.code == 200) {
                    const toast = yield this.toastController.create({
                        message: res.message,
                        duration: 2000
                    });
                    toast.present();
                }
                else {
                    const toast = yield this.toastController.create({
                        message: 'Invalid employee ID',
                        duration: 2000
                    });
                    toast.present();
                }
            }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const toast = yield this.toastController.create({
                    message: 'Invalid employee ID',
                    duration: 2000
                });
                toast.present();
            }));
        }
    }
    makeAttendanceCheckIN() {
        this.para = JSON.parse(localStorage.getItem('para'));
        this.db.ValidateCheckin(this.para).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Check In Response: ", res);
            if (res.responseCode == 2005) {
                this.showbutton = false;
                localStorage.setItem('showbutton', this.showbutton);
                this.db.changeStatus(this.showbutton);
            }
            else if (res.responseCode == 2003) {
                this.showbutton = true;
                localStorage.setItem('showbutton', this.showbutton);
                this.db.changeStatus(this.showbutton);
            }
            else if (res.responseCode == 2004) {
                this.showbutton = true;
                localStorage.setItem('showbutton', this.showbutton);
                this.db.changeStatus(this.showbutton);
            }
            else if (res == "You are not allowed to make attendance with mobile") {
            }
        }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(error);
        }));
    }
};
LoginPage.ctorParameters = () => [
    { type: _Services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_2__.CoreLogicService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Poppins-Regular\";\n}\n\n.studentimage {\n  -webkit-animation: kenburns-top 5s ease-out both;\n  animation: kenburns-top 5s ease-out both;\n  text-align: center;\n  margin-top: 30px;\n  height: 200px;\n}\n\n.studentimage img {\n  width: 70%;\n  margin-top: 50px;\n}\n\n@-webkit-keyframes kenburns-top {\n  0% {\n    transform: scale(1) translateY(0);\n    transform-origin: 50% 16%;\n  }\n  100% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: top;\n  }\n}\n\n@keyframes kenburns-top {\n  0% {\n    transform: scale(1) translateY(0);\n    transform-origin: 50% 16%;\n  }\n  100% {\n    transform: scale(1.25) translateY(-15px);\n    transform-origin: top;\n  }\n}\n\n.main .top {\n  height: 30%;\n  width: 100%;\n}\n\n.main .top img {\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: 200% 200%;\n  border-radius: 0px 0px 60px 60px;\n  opacity: 0.8;\n}\n\n.main .body {\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-top: -81px;\n}\n\n.main .body .s-code {\n  border: 1px solid lightgrey;\n  margin-bottom: 5%;\n  border-radius: 5px;\n}\n\n.main .body .s-phone {\n  border: 0.5px solid lightgrey;\n  margin-bottom: 5%;\n  border-radius: 5px;\n}\n\n.main .body .logo {\n  height: auto;\n  margin: auto;\n  width: 30%;\n  text-align: center;\n}\n\n.main .body .logo img {\n  border-radius: 100px;\n}\n\n.main .body .welcome {\n  text-align: center;\n  color: lightgray;\n}\n\n.main .btnSubmit {\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\n.main ion-button {\n  color: white;\n  height: 42px;\n  --border-radius: 5px !important;\n  font-weight: bold;\n  --box-shadow: none;\n}\n\n.text-danger {\n  color: red !important;\n}\n\n.pop-alert-confirmation {\n  text-align: justify;\n}\n\nmat-form-field {\n  width: 82%;\n}\n\n.logodiv {\n  position: absolute;\n  margin-top: -49px;\n  margin-left: 127px;\n}\n\n.credential {\n  margin-top: 40px;\n}\n\n@-webkit-keyframes rotate-scale-down {\n  0% {\n    transform: scale(1) rotateZ(0);\n  }\n  50% {\n    transform: scale(0.5) rotateZ(180deg);\n  }\n  100% {\n    transform: scale(1) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-scale-down {\n  0% {\n    transform: scale(1) rotateZ(0);\n  }\n  50% {\n    transform: scale(0.5) rotateZ(180deg);\n  }\n  100% {\n    transform: scale(1) rotateZ(360deg);\n  }\n}\n\n.welcome {\n  color: #d7d8da;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.dypatillogo {\n  margin-top: 16px;\n  text-align: center;\n}\n\n@-webkit-keyframes rotate-scale-up {\n  0% {\n    transform: scale(1) rotateZ(0);\n  }\n  50% {\n    transform: scale(2) rotateZ(180deg);\n  }\n  100% {\n    transform: scale(1) rotateZ(360deg);\n  }\n}\n\n@keyframes rotate-scale-up {\n  0% {\n    transform: scale(1) rotateZ(0);\n  }\n  50% {\n    transform: scale(2) rotateZ(180deg);\n  }\n  100% {\n    transform: scale(1) rotateZ(360deg);\n  }\n}\n\nion-item {\n  margin: 12px;\n}\n\nion-item ion-label {\n  color: gray;\n}\n\nion-input {\n  font-size: 18px;\n  --padding-bottom: 26px;\n  color: gray;\n}\n\nion-fab {\n  -webkit-animation: bounce-top 3s cubic-bezier(0.165, 0.84, 0.44, 1) both;\n  animation: bounce-top 3s cubic-bezier(0.165, 0.84, 0.44, 1) both;\n}\n\n@-webkit-keyframes bounce-top {\n  0% {\n    transform: translateY(-45px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 1;\n  }\n  24% {\n    opacity: 1;\n  }\n  40% {\n    transform: translateY(-24px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  65% {\n    transform: translateY(-12px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  82% {\n    transform: translateY(-6px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  93% {\n    transform: translateY(-4px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  25%, 55%, 75%, 87% {\n    transform: translateY(0);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateY(0);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n}\n\n@keyframes bounce-top {\n  0% {\n    transform: translateY(-45px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n    opacity: 1;\n  }\n  24% {\n    opacity: 1;\n  }\n  40% {\n    transform: translateY(-24px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  65% {\n    transform: translateY(-12px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  82% {\n    transform: translateY(-6px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  93% {\n    transform: translateY(-4px);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n  25%, 55%, 75%, 87% {\n    transform: translateY(0);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n  100% {\n    transform: translateY(0);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n    opacity: 1;\n  }\n}\n\n.logo {\n  text-align: center;\n}\n\n.isssss {\n  width: 70%;\n}\n\nion-icon {\n  color: white;\n  font-size: 25px;\n  margin-right: 8%;\n}\n\n.matdiv {\n  text-align: center;\n}\n\nion-card {\n  --background: #f5deb300;\n}\n\nion-card ion-item {\n  margin: 22px 30px 22px 22px;\n  --background: #ffffff00;\n  border: 1px solid white;\n  border-radius: 50px;\n  padding: 7px;\n}\n\nion-card ion-item ion-label {\n  color: white;\n}\n\n.rememberdiv ion-item {\n  --background: #ffffff00;\n  width: 67%;\n  /* margin: auto; */\n  margin-left: 6%;\n}\n\n.matdivphone {\n  margin-bottom: -12px;\n}\n\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #f44336;\n  margin-top: -14px;\n}\n\n.mat-form-field.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #f44336;\n  margin-top: 7px;\n}\n\n.resetpassword {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUE7SUFDQSxrQ0FBQTtJQUNBLFVBQUE7RUF2Qk47RUF5QkU7SUFDSSxVQUFBO0VBdkJOO0VBeUJFO0lBRUksNEJBQUE7SUFDQSwwQ0FBQTtJQUNBLGtDQUFBO0VBdkJOO0VBeUJFO0lBRUksNEJBQUE7SUFDQSwwQ0FBQTtJQUNBLGtDQUFBO0VBdkJOO0VBeUJFO0lBRUksMkJBQUE7SUFDQSwwQ0FBQTtJQUNBLGtDQUFBO0VBdkJOO0VBeUJFO0lBRUksMkJBQUE7SUFDQSwwQ0FBQTtJQUNBLGtDQUFBO0VBdkJOO0VBeUJFO0lBS0ksd0JBQUE7SUFDQSwyQ0FBQTtJQUNBLG1DQUFBO0VBMUJOO0VBNEJFO0lBRUksd0JBQUE7SUFDQSwyQ0FBQTtJQUNBLG1DQUFBO0lBQ0EsVUFBQTtFQTFCTjtBQUNGOztBQTZCQTtFQUNJLGtCQUFBO0FBM0JKOztBQThCQTtFQUNJLFVBQUE7QUEzQko7O0FBOEJBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTNCSjs7QUE2Q0E7RUFDSSxrQkFBQTtBQTFDSjs7QUE2Q0E7RUFFSSx1QkFBQTtBQTNDSjs7QUE0Q0k7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUExQ1I7O0FBMkNRO0VBQ0ksWUFBQTtBQXpDWjs7QUFzREk7RUFJSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF0RFI7O0FBNkRBO0VBQ0ksb0JBQUE7QUEzREo7O0FBOERBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBM0RKOztBQThEQTs7RUFFSSxvQkFBQTtFQUNBLGVBQUE7QUEzREo7O0FBOERBO0VBQ0ksWUFBQTtBQTNESiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtUmVndWxhcic7XG59XG5cbi5zdHVkZW50aW1hZ2Uge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBrZW5idXJucy10b3AgNXMgZWFzZS1vdXQgYm90aDtcbiAgICBhbmltYXRpb246IGtlbmJ1cm5zLXRvcCA1cyBlYXNlLW91dCBib3RoO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAvLyBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGtlbmJ1cm5zLXRvcCB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNiU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxNiVcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcFxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBrZW5idXJucy10b3Age1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTYlO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTYlXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3BcbiAgICB9XG59XG5cbi5tYWluIHtcbiAgICAudG9wIHtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMWU4OWVkIDAlLCM4MmQ4ZDUgOTMlKTtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAyMDAlO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA2MHB4IDYwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJvZHkge1xuICAgICAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgIC5zLWNvZGUge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnMtcGhvbmUge1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tdG9wOiAtODFweDtcbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLndlbGNvbWUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuU3VibWl0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLy8tLWJhY2tncm91bmQ6ICMwNDEyMzg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5wb3AtYWxlcnQtY29uZmlybWF0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDgyJTtcbn1cblxuLmxvZ29kaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tdG9wOiAtNDlweDtcbiAgICBtYXJnaW4tbGVmdDogMTI3cHg7XG59XG5cbi5jcmVkZW50aWFsIHtcbiAgICAvLyBtYXJnaW4tdG9wOiAtMjVweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOnJvdGF0ZS1zY2FsZS1kb3duIDJzIGN1YmljLWJlemllciguNzg1LC4xMzUsLjE1LC44NikgYm90aDthbmltYXRpb246cm90YXRlLXNjYWxlLWRvd24gMnMgY3ViaWMtYmV6aWVyKC43ODUsLjEzNSwuMTUsLjg2KSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlLXNjYWxlLWRvd24ge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKVxuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjUpIHJvdGF0ZVooMTgwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNSkgcm90YXRlWigxODBkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigzNjBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMzYwZGVnKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGUtc2NhbGUtZG93biB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDApXG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguNSkgcm90YXRlWigxODBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KSByb3RhdGVaKDE4MGRlZylcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDM2MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigzNjBkZWcpXG4gICAgfVxufVxuXG4ud2VsY29tZSB7XG4gICAgY29sb3I6ICNkN2Q4ZGE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZHlwYXRpbGxvZ28ge1xuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOnJvdGF0ZS1zY2FsZS11cCAxLjJzIGxpbmVhciBib3RoO2FuaW1hdGlvbjpyb3RhdGUtc2NhbGUtdXAgMS4ycyBsaW5lYXIgYm90aDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZS1zY2FsZS11cCB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDApXG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKSByb3RhdGVaKDE4MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMikgcm90YXRlWigxODBkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigzNjBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMzYwZGVnKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyByb3RhdGUtc2NhbGUtdXAge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlWigwKVxuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMikgcm90YXRlWigxODBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHJvdGF0ZVooMTgwZGVnKVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZVooMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGVaKDM2MGRlZylcbiAgICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgIC8vIGJveC1zaGFkb3c6IDFweCA4cHggOXB4IDFweCAjODA4MDgwM2Q7XG4gICAgLy8gbWFyZ2luOiAxNXB4O1xuICAgIC8vIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDM4O1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDI2cHg7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbmlvbi1mYWIge1xuICAgIC8vIG1hcmdpbi1sZWZ0OiA4MCU7XG4gICAgLy8gbWFyZ2luLXRvcDogMTElO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBib3VuY2UtdG9wIDNzIGN1YmljLWJlemllciguMTY1LCAuODQsIC40NCwgMS4wMDApIGJvdGg7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UtdG9wIDNzIGN1YmljLWJlemllciguMTY1LCAuODQsIC40NCwgMS4wMDApIGJvdGhcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZS10b3Age1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQ1cHgpO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gICAgMjQlIHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH1cbiAgICA0MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjRweCk7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pblxuICAgIH1cbiAgICA2NSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCk7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pblxuICAgIH1cbiAgICA4MiUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW5cbiAgICB9XG4gICAgOTMlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluXG4gICAgfVxuICAgIDI1JSxcbiAgICA1NSUsXG4gICAgNzUlLFxuICAgIDg3JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2UtdG9wIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00NXB4KTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgfVxuICAgIDI0JSB7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI0cHgpO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW5cbiAgICB9XG4gICAgNjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW5cbiAgICB9XG4gICAgODIlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluXG4gICAgfVxuICAgIDkzJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pblxuICAgIH1cbiAgICAyNSUsXG4gICAgNTUlLFxuICAgIDc1JSxcbiAgICA4NyUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dFxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICB9XG59XG5cbi5sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pc3Nzc3Mge1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogOCU7XG59XG5cbi8vIGlvbi1jb250ZW50e1xuLy8gICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKSByZXBlYXQgdG9wIGZpeGVkOyBcbi8vIH1cbi8vIC5pb25pdGVtIHtcbi8vIC8vIHdpZHRoOiAzOCU7XG4vLyAvLyAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyAvLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vIC8vICAgYmFja2dyb3VuZDogY29ybmZsb3dlcmJsdWU7XG4vLyB3aWR0aDogNjQlO1xuLy8gaW9uLWxhYmVse1xuLy8gICBmb250LXNpemU6IDE2cHg7XG4vLyB9XG4vLyB9XG4uYmFja2dyb3VuZC1pbWFnZSB7fVxuXG4ubWF0ZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgICAvLyBtYXJnaW4tdG9wOiA1NiU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVkZWIzMDA7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBtYXJnaW46IDIycHggMzBweCAyMnB4IDIycHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBpb24tY29udGVudHtcbi8vICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaWNvbi9iYWNrZ3JvdW5kaW1hZ2UucG5nXCIpIHJlcGVhdCBcbi8vIHRvcCBmaXhlZDsgXG4vLyAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gfVxuLnJlbWVtYmVyZGl2IHtcbiAgICBpb24taXRlbSB7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogI2ZmZmZmZjAwO1xuICAgICAgICAvLyB3aWR0aDogNDAlO1xuICAgICAgICAvLyBtYXJnaW46IGF1dG87XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjAwO1xuICAgICAgICB3aWR0aDogNjclO1xuICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2JTtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIC8vIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1hdGRpdnBob25lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTJweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6ICNmNDQzMzY7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4ucmVzZXRwYXNzd29yZCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <img src=\"../../../assets/dypatil.png\" alt=\"No-Image\" /> -->\n<ion-content class=\"background-image\">\n    <!-- <div class=\"top\"><img src=\"../../assets/image/collegeclass.jpg\"></div> -->\n    <!-- <div class=\"maindiv\"></div> -->\n    <!-- <div class=\"dypatillogo\"><img class=\"isssss\" src=\"../../assets/icon/dylogo.png\" alt=\"No-Image\" /></div> -->\n    <!-- <h2 class=\"welcome\">welcome</h2> -->\n    <!-- <img src=\"../../assets/image/Welcome.gif\"> -->\n    <!-- <div class=\"logo\"><img class=\"imagessssssss\" src=\"../../assets/image/collegeclassgreen.jpg\" alt=\"No-Image\" /></div> -->\n    <div class=\"studentimage\"><img class=\"gif\" src=\"../../assets/image/logo.png\"></div>\n    <div class=\"credential\">\n\n\n\n        <div class=\"matdiv\">\n            <mat-form-field floatLabel=\"auto\" appearance=\"outline\" class=\"loginform\">\n                <mat-label>Employee ID</mat-label>\n                <input [(ngModel)]=\"EmpID\" required matInput required>\n                <!-- <mat-icon  matSuffix>perm_identity</mat-icon> -->\n\n            </mat-form-field>\n        </div>\n        <div class=\"matdiv matdivphone\">\n            <mat-form-field floatLabel=\"auto\" appearance=\"outline\">\n                <mat-label>Password</mat-label>\n                <input [(ngModel)]=\"Password\" required matInput required>\n                <!-- <mat-icon matSuffix>settings_phone</mat-icon> -->\n\n            </mat-form-field>\n        </div>\n\n\n\n\n\n\n        <div class=\"rememberdiv\">\n            <ion-item class=\"ionitem ion-no-margin\" lines=\"none\">\n                <ion-label class=\"resetpassword\" (click)=\"resetPassword()\">Reset Password</ion-label>\n                <!-- <ion-checkbox slot=\"end\" [(ngModel)]=\"chb_Remember\"></ion-checkbox> -->\n            </ion-item>\n        </div>\n\n        <!-- <div class=\"reset-pass\">\n            <p>Please enter Employee Id</p>\n        </div> -->\n\n    </div>\n\n    <ion-fab vertical=\"end\" horizontal=\"center\" (click)=\"GetDevice()\">\n        <ion-fab-button class=\"headblue\">\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map
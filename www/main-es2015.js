(self["webpackChunkHRMS_Plus"] = self["webpackChunkHRMS_Plus"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 14157:
/*!************************************************!*\
  !*** ./src/app/Services/core-logic.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreLogicService": function() { return /* binding */ CoreLogicService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);




let CoreLogicService = class CoreLogicService {
    constructor(alertController, loadingController, router) {
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.router = router;
        this.isLoading = false;
        this.CurrentVestion = 6;
    }
    presentAlert(msg_Message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '',
                subHeader: '',
                message: msg_Message,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    Logout() {
        /*   ALL Existing Session / Cookies Name
          1. login_mobile --- (Login Page)
          2. login_studcode -- (Login Page)
          3. AppTokenKey,
          4. enroll_id,
          5. examduration
        */
        // localStorage.clear(); // Clear All Exitsting Session
        localStorage.removeItem('AppTokenKey');
        localStorage.removeItem('enroll_id');
        localStorage.removeItem('examduration');
        localStorage.removeItem('errorMessage');
        // localStorage.removeItem('checkedoutOn');
        // localStorage.removeItem('checkedinOn');
        this.router.navigate(['/login']);
    }
    presentAlertConfirm(Message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: Message,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Yes', blah);
                        }
                    }, {
                        text: 'Yes',
                        handler: (res) => {
                            console.log('Yes', res);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentLoading(msg_Message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            // const loading = await this.loadingController.create({
            //   cssClass: 'my-custom-class',
            //   message: msg_Message,
            //   duration: 10000
            // });
            // await loading.present();
            this.isLoading = true;
            return yield this.loadingController.create({
                duration: 10000,
                message: msg_Message,
            }).then(a => {
                a.present().then(() => {
                    console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    dismissLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            const loading = yield this.loadingController.dismiss().then(() => console.log('dismissed'));
            // await this.loadingController.dismiss();
        });
    }
    Error(err) {
        this.dismissLoading();
        if (err.status === 401) {
            localStorage.removeItem('AppTokenKey');
            localStorage.removeItem('enroll_id');
            localStorage.removeItem('examduration');
            this.router.navigate(['/login']);
        }
        // else{
        //   this.presentAlert('Please retry');
        //   console.log(JSON.stringify(err));
        // }
    }
};
CoreLogicService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CoreLogicService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CoreLogicService);



/***/ }),

/***/ 69372:
/*!**********************************************!*\
  !*** ./src/app/Services/database.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": function() { return /* binding */ DatabaseService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74945);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);





let DatabaseService = class DatabaseService {
    constructor(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.profileData = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.isCheckIN = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + localStorage.getItem('AppTokenKey')
            })
        };
        this.httpOptions1 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('API Token Key: ', localStorage.getItem('AppTokenKey'));
        this.WebAPI = 'https://api.hrmsplus.in/api/';
        // this.PublicDomain='hrms.bigapollospectra.com';
        this.PublicDomain = 'localhost';
    }
    sendMenues(menu) {
        console.log(menu);
        this.subject.next(menu);
    }
    getMenues() {
        return this.subject.asObservable();
    }
    sendProfile(profile) {
        console.log(profile);
        this.profileData.next(profile);
    }
    getProfile() {
        return this.profileData.asObservable();
    }
    changeStatus(status) {
        console.log(status);
        this.isCheckIN.next(status);
    }
    getChangeStatus() {
        return this.isCheckIN.asObservable();
    }
    // isAlreadyLogin(param: any) {
    //   const res = this.http.post(this.WebAPI + 'Authentication/isAlreadyLogin', param);
    //   return res;
    // }
    login(param) {
        const res = this.http.post(this.WebAPI + 'Authentication/Login', param, this.httpOptions1);
        return res;
    }
    //https://api.hrmsplus.in/api/Employee/Profile?EmployeeCode=1002&DomainName=localhost&Token=B95AD3699D7D49308EA7838EEB988D34-1002
    getProfileData(param) {
        const res = this.http.get(this.WebAPI + `Employee/Profile?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}`);
        return res;
    }
    checkIn(param) {
        const res = this.http.get(this.WebAPI + `Attendance/ValidateDevice?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}`);
        return res;
    }
    GetLocation(param) {
        const res = this.http.get(this.WebAPI + `Employee/GetLocation?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}`);
        return res;
    }
    ValidateCheckin(param) {
        const res = this.http.get(this.WebAPI + `Attendance/ValidateCheckin?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}`);
        return res;
    }
    CheckoutApi(param) {
        const res = this.http.get(this.WebAPI + `Attendance/Checkout?EmployeeCode=${param.EmpID}&DomainName=${this.PublicDomain}&Token=${localStorage.getItem('AppTokenKey')}&AttendanceID=${localStorage.getItem('AttendanceID')}`);
        return res;
    }
    createAttendance(param) {
        const res = this.http.post(this.WebAPI + 'Attendance/Create', param, this.httpOptions1);
        return res;
    }
    OTPVarification(handler) {
        const res1 = this.http.post(this.WebAPI + 'Authentication/CheckOTP', handler);
        return res1;
    }
    resetPassword(param) {
        const res = this.http.get(this.WebAPI + `Authentication/ResetPassword?empcode=${param.empcode}&DomainName=${this.PublicDomain}`);
        return res;
    }
    attendanceList(param) {
        const res = this.http.get(this.WebAPI + `Attendance/List?empcode=${param.empcode}&domainname=${this.PublicDomain}&startdate=${param.startdate}&enddate=${param.enddate}`);
        return res;
    }
    GetHeader() {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        // alert(localStorage.getItem('AppTokenKey'));
        this.headers = this.headers.append('Authorization', 'Basic ' + localStorage.getItem('AppTokenKey'));
        this.headers = this.headers.append('Accept', 'application/json');
        this.headers = this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // this.headers = this.headers.append('AppDomain ', 'ZWxlYXJuLnZpamF5c3R1ZHljaXJjbGUuY29t');
    }
    ///////////////////
    studentProfile(data) {
        return this.http.get(this.WebAPI + 'Student/Profile', this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    handleError(handleError) {
        throw new Error('Method not implemented.');
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107)).then(m => m.LoginPageModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notifications_notifications_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notifications/notifications.module */ 89182)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 84523)).then(m => m.ProfilePageModule)
    },
    {
        path: 'checkin',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_checkin_checkin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./checkin/checkin.module */ 76069)).then(m => m.CheckinPageModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reset-password_reset-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reset-password/reset-password.module */ 44371)).then(m => m.ResetPasswordPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _component_model_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/model/model.component */ 31344);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _Services_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/database.service */ 69372);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network-interface/ngx */ 64914);
/* harmony import */ var _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/core-logic.service */ 14157);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);














let AppComponent = class AppComponent {
    constructor(router, alertController, platform, CG, device, toastController, splashScreen, statusBar, networkInterface, geolocation, db, modalcontroller) {
        this.router = router;
        this.alertController = alertController;
        this.platform = platform;
        this.CG = CG;
        this.device = device;
        this.toastController = toastController;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.networkInterface = networkInterface;
        this.geolocation = geolocation;
        this.db = db;
        this.modalcontroller = modalcontroller;
        this.profiledata = [];
        this.menuList = [];
        this.initializeApp();
        setInterval(() => {
            this.getLocation();
        }, 1000);
        this.menuList = [{ 'icons': 'assets/image/home.png', 'menuName': 'Home', 'pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/profile.png', 'menuName': 'Profile', 'pageRoute': '/profile' }, { 'icons': 'assets/image/attendance.png', 'menuName': 'My Attendance', 'pageRoute': '/tabs/tab3' }, { 'icons': 'assets/image/checkin.png', 'menuName': 'Check In', 'pageRoute': '/checkin' }, { 'icons': 'assets/image/sal.png', 'menuName': 'Salary', 'pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/helpdesk.png', 'menuName': 'Helpdesk', 'pageRoute': '/tabs/tab1' }];
        this.devideToken = localStorage.getItem('AppTokenKey');
        this.db.getProfile().subscribe(res => {
            this.profiledata = [];
            this.profiledata.push(res);
            console.log(this.profiledata);
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.alertController.dismiss();
            const alert = yield this.alertController.create({
                header: 'Confirm!',
                message: 'Do you want to exit the app?',
                buttons: [
                    {
                        text: 'Cancel',
                        handler: () => {
                            console.log('Confirm Cancel');
                        },
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                            navigator['app'].exitApp();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    LogoutConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.ModelComponentmodal();
        });
    }
    getLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            console.log("geolocation: ", resp);
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            localStorage.setItem('Lat', this.latitude);
            localStorage.setItem('Long', this.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getPortNumber() {
        this.networkInterface.getWiFiIPAddress()
            .then(address => {
            // alert(`IP: ${address.ip}, Subnet: ${address.subnet}`)
            localStorage.setItem('IP', address.ip);
        })
            .catch(error => console.log(`Unable to get IP: ${error}`));
        this.networkInterface.getCarrierIPAddress()
            .then(address => {
            // localStorage.setItem('IP', address.ip);
            // alert(localStorage.getItem('IP'));
            localStorage.setItem('IP', address.ip);
            // alert("getCarrierIPAddress"+address.ip);
        })
            .catch(error => console.log(`Unable to get IP: ${error}`));
    }
    loginCheck() {
        if (localStorage.getItem('AppTokenKey') != null || localStorage.getItem('AppTokenKey') != undefined) {
            this.router.navigateByUrl('/tabs/tab1');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // this.statusBar.styleDefault();
            setTimeout(() => {
                this.splashScreen.hide();
            }, 2000);
            console.log("Platform ready");
            this.getPortNumber();
            this.loginCheck();
            let whiteList = ['com.bigapollospectra.hrms'];
            window.gpsmockchecker.check(whiteList, (result) => {
                console.log("IsMock: ", result);
                if (result.isMock) {
                    console.log("DANGER!! Mock is in use");
                    console.log("Apps that use gps mock: ");
                    console.log(result.mocks);
                }
                else {
                    console.log("All its ok");
                }
            }, (error) => console.log("Error in IsMock: ", error));
            // });
            this.platform.backButton.subscribeWithPriority(10, () => {
                if (this.router.url === '/tabs/tab1' || this.router.url === '/login') {
                    this.presentAlertConfirm();
                }
                else if (this.router.url === '/profile') {
                    this.router.navigateByUrl('/tabs/tab1');
                }
                else {
                    history.back();
                }
            });
            this.platform.backButton.subscribeWithPriority(5, () => {
                if (this.router.url === '/tabs/tab1' || this.router.url === '/login') {
                    this.presentAlertConfirm();
                }
                else {
                    history.back();
                }
            });
        });
    }
    successCallback(result) {
        console.log(result); // true - enabled, false - disabled
    }
    errorCallback(error) {
        console.log(error);
    }
    ModelComponentmodal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            {
                const modal = yield this.modalcontroller.create({
                    component: _component_model_model_component__WEBPACK_IMPORTED_MODULE_2__.ModelComponent,
                    cssClass: 'model',
                    animated: true,
                    showBackdrop: true,
                    swipeToClose: true,
                    backdropDismiss: true,
                });
                return yield modal.present();
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_8__.CoreLogicService },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_9__.Device },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar },
    { type: _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_7__.NetworkInterface },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__.Geolocation },
    { type: _Services_database_service__WEBPACK_IMPORTED_MODULE_5__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network-interface/ngx */ 64914);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 32091);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy },
            _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation,
            _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe,
            _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_6__.NetworkInterface,
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 31344:
/*!****************************************************!*\
  !*** ./src/app/component/model/model.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelComponent": function() { return /* binding */ ModelComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_model_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./model.component.html */ 86433);
/* harmony import */ var _model_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.component.scss */ 90833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/core-logic.service */ 14157);






let ModelComponent = class ModelComponent {
    constructor(modalcontroller, CG) {
        this.modalcontroller = modalcontroller;
        this.CG = CG;
    }
    Logout() {
        this.CG.Logout();
        this.dismiss();
    }
    dismissmodel() {
        this.dismiss();
    }
    ngOnInit() { }
    dismiss() {
        this.modalcontroller.dismiss();
    }
};
ModelComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_2__.CoreLogicService }
];
ModelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-model',
        template: _raw_loader_model_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_model_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModelComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Poppins-Regular\";\n}\n\n.Icon {\n  color: #041238;\n  font-size: 20px;\n}\n\n#appversion ion-label {\n  font-size: 12px;\n}\n\nion-label {\n  margin-left: 15px;\n  color: gray;\n}\n\n.ionIcon {\n  width: 18%;\n  height: auto;\n  margin-top: 0px;\n}\n\n.profile-image {\n  padding: 5%;\n  background: #007c9d;\n}\n\n.profile-image h2 {\n  text-align: center;\n  color: #fff;\n  margin: 0px;\n}\n\n.profile-image p {\n  text-align: center;\n  color: #fff;\n}\n\n.profile-image .ava {\n  color: white;\n}\n\n.profile-image .name {\n  margin: 3%;\n  color: white;\n}\n\n.profile-image .name .student-branch {\n  font-weight: bold;\n  font-size: 3vw;\n  color: white;\n}\n\n.profile-image .name .student-name {\n  font-weight: bold;\n}\n\n.ftr-body {\n  position: absolute;\n  bottom: 0;\n  z-index: 99;\n  color: #fff;\n  width: 100%;\n}\n\n.ftr-ul-menu {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  text-align: center;\n  margin: 0;\n}\n\n.ftr-ul-menu > li {\n  float: left;\n  padding: 10px 15px;\n  display: block;\n  width: 25%;\n}\n\n.ftr-ul-menu > li ion-icon {\n  display: -webkit-inline-box;\n  font-size: 29px;\n  text-align: center;\n}\n\n.profileinfo {\n  color: white;\n  margin-right: 9px;\n  text-transform: capitalize;\n  margin-top: 14px;\n  margin-left: 12px;\n}\n\n.profileinfo #name {\n  font-size: 17px;\n  color: white;\n  font-weight: bold;\n}\n\n.profileinfo #roll {\n  font-size: 13px;\n  text-align: end;\n  line-height: 2.2;\n}\n\n.ionTilte {\n  padding-left: 0px;\n}\n\n.appDetail {\n  font-size: 14px;\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  color: #ffffff8c;\n}\n\n.appDetail a {\n  text-decoration: none;\n}\n\n.CstmBackButton {\n  padding-left: 0px;\n}\n\nion-list.dark ion-item {\n  --background: transparent;\n}\n\nion-list.dark ion-item ion-label {\n  color: #111010;\n  font-size: 18px;\n}\n\nion-list.dark ion-item .Icon {\n  color: #111010;\n  font-size: 28px;\n}\n\n.appcomimage {\n  width: 10%;\n}\n\n.image-center {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUVHO0VBQ0MsZUFBQTtBQUNKOztBQUVFO0VBQ0csaUJBQUE7RUFFQSxXQUFBO0FBQUw7O0FBR0U7RUFDRyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBTDs7QUFFRTtFQUVHLFdBQUE7RUFFRCxtQkFBQTtBQURKOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUROOztBQUdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRE47O0FBSUs7RUFDRSxZQUFBO0FBRlA7O0FBSUs7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUZQOztBQUdPO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQURUOztBQUdPO0VBQ0UsaUJBQUE7QUFEVDs7QUFLRztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtBQUhKOztBQUtFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFESjs7QUFFSTtFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBT0U7RUFDRSxZQUFBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0YsaUJBQUE7QUFKSjs7QUFNTTtFQUNFLGVBQUE7RUFDRixZQUFBO0VBQ0EsaUJBQUE7QUFKTjs7QUFNTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKUjs7QUFPSTtFQUNBLGlCQUFBO0FBSko7O0FBU007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBTlI7O0FBT1E7RUFDRSxxQkFBQTtBQUxWOztBQVVJO0VBRUUsaUJBQUE7QUFSTjs7QUFrQk07RUFDRSx5QkFBQTtBQWZSOztBQWdCUTtFQUNFLGNBQUE7RUFDSixlQUFBO0FBZE47O0FBZ0JRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFkVjs7QUFtQkk7RUFDRSxVQUFBO0FBaEJOOztBQW9CSTtFQUNFLGNBQUE7QUFqQk4iLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1SZWd1bGFyJztcbn1cbi5JY29uIHtcbiAgICBjb2xvcjojMDQxMjM4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAgI2FwcHZlcnNpb257XG4gICBcbiAgIGlvbi1sYWJlbHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICB9XG4gICB9XG4gIGlvbi1sYWJlbHtcbiAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgLy8gIGZvbnQtc2l6ZTogMThweDtcbiAgICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgXG4gIC5pb25JY29ue1xuICAgICB3aWR0aDogMTglO1xuICAgICBoZWlnaHQ6IGF1dG87XG4gICAgIG1hcmdpbi10b3A6IDBweDtcbiAgfVxuICAucHJvZmlsZS1pbWFnZSB7XG4gICAgLy8gIGRpc3BsYXk6IGZsZXg7XG4gICAgIHBhZGRpbmc6IDUlO1xuICAgIC8vICBiYWNrZ3JvdW5kOiAgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2YxNzQzMiAxJSwjZWFhZDU5IDgwJSwjZThhMzRhIDk3JSk7O1xuICAgIGJhY2tncm91bmQ6IzAwN2M5ZDtcbiAgICAvLyAgaGVpZ2h0OiA5MHB4O1xuICAgIGgyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAvLyBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgIH1cbiAgICAgLmF2YSB7XG4gICAgICAgY29sb3I6IHdoaXRlO1xuICAgICB9XG4gICAgIC5uYW1lIHtcbiAgICAgICBtYXJnaW46IDMlO1xuICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAuc3R1ZGVudC1icmFuY2gge1xuICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICBmb250LXNpemU6IDN2dztcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICB9XG4gICAgICAgLnN0dWRlbnQtbmFtZSB7XG4gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICB9XG4gICAgIH1cbiAgIH1cbiAgIC5mdHItYm9keXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMwNDEyMzg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZ0ci11bC1tZW51e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmZ0ci11bC1tZW51ID5saXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBpb24taWNvbntcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xuICAgICAgICBmb250LXNpemU6IDI5cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgLy8gIGlvbi1yb3V0ZXItb3V0bGV0e1xuICAvLyAgICBtYXJnaW4tYm90dG9tOiA3MnB4O1xuICAvLyAgfVxuICBcbiAgLnByb2ZpbGVpbmZve1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIG1hcmdpbi1yaWdodDogOXB4O1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBcbiAgICAgICNuYW1le1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgICNyb2xse1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMjtcbiAgICAgIH1cbiAgICB9XG4gICAgLmlvblRpbHRle1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cbiAgICBpb24taXRlbSB7XG4gICAgICBcbiAgICB9XG4gICAgICAuYXBwRGV0YWlsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmOGM7XG4gICAgICAgIGF7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIC8vIGNvbG9yOiAjZmZmZmZmOGM7XG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5Dc3RtQmFja0J1dHRvblxuICAgIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWNvbnRlbnR7XG4gICAgICAvLyAtLWJhY2tncm91bmQ6ICNDNURERjk7XG4gICAgICAvLyAtLWJhY2tncm91bmQ6IHVybChcIi4uL2Fzc2V0cy9pY29uL2JhY2tncm91bmRpbWFnZS5wbmdcIikgcmVwZWF0XG4gICAgICAvLyB0b3AgZml4ZWQsICMwOTc3ZTZiODsgXG4gICAgfVxuICAgIGlvbi1saXN0LmRhcmt7XG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGlvbi1pdGVte1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgY29sb3I6IHJnYigxNywgMTYsIDE2KTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuSWNvbntcbiAgICAgICAgICBjb2xvcjogcmdiKDE3LCAxNiwgMTYpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmFwcGNvbWltYWdle1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gIFxuICAgIC8vbmV3IGNzc1xuICAgIC5pbWFnZS1jZW50ZXIge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfSJdfQ== */");

/***/ }),

/***/ 90833:
/*!******************************************************!*\
  !*** ./src/app/component/model/model.component.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Poppins-Regular\";\n}\n\n.icon {\n  font-size: 32px;\n  color: #007c9d;\n}\n\n.topicon {\n  text-align: center;\n}\n\n.divvs {\n  padding: 23px;\n  text-align: center;\n}\n\n.label {\n  color: #313770;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.btndiv {\n  text-align: center;\n  margin-top: 42px;\n}\n\n.imagesssss {\n  width: 52px;\n  height: 52px;\n}\n\n.imagediv {\n  text-align: center;\n  margin-top: 15px;\n}\n\nion-button {\n  width: 34%;\n  margin: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFFQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBRUEsZUFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUFJSiIsImZpbGUiOiJtb2RlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVJlZ3VsYXInO1xyXG4gIFxyXG4gIH1cclxuLmljb257XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAvLyBjb2xvcjojMDk3N0U2IDtcclxuICAgIGNvbG9yOiMwMDdjOWQ7XHJcblxyXG59XHJcbi50b3BpY29ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kaXZ2c3tcclxuICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxhYmVse1xyXG4gICAgY29sb3I6ICMzMTM3NzA7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmJ0bmRpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcbn1cclxuXHJcbi5pbWFnZXNzc3Nze1xyXG4gICAgd2lkdGg6IDUycHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbn1cclxuLmltYWdlZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDM0JTtcclxuICAgIG1hcmdpbjogN3B4O1xyXG59Il19 */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app> -->\n<ion-app>\n    <ion-menu side=\"start\" menuId=\"first\" contentId=\"menu\">\n\n        <div class=\"profile-image\" *ngIf=\"profiledata.lenght != 0\">\n            <div *ngFor=\"let profile of profiledata\">\n              <ion-avatar class=\"image-center\" *ngIf=\"!profile.profilePic\">\n                <img src=\"assets/image/profile.png\">\n            </ion-avatar>\n            <ion-avatar class=\"image-center\" *ngIf=\"profile.profilePic\">\n                <img src=\"{{profile.profilePic}}\">\n            </ion-avatar>\n\n                <h2> {{profile.empName}}</h2>\n                <!-- <p>Class:&nbsp;{{profile.courseName}}&nbsp;{{profile.sectionName}}&nbsp;({{profile.studentCode}})</p> -->\n            </div>\n        </div>\n        <!-- <div class=\"profile-image\"   *ngFor=\"let profile of profiledata\">\n      <div class=\"ava\">\n        <ion-avatar>\n          <img src='{{ImageResize(profile.proImg)}}' alt=\"No Image\" height=\"40px\" width=\"40px\">\n        </ion-avatar>\n      </div>\n      <div class=\"profileinfo\"  *ngFor=\"let profile of profiledata\">\n        <div id=\"name\">\n          {{profile.studentName}}\n        </div>\n        <div id=\"roll\">\n          Class:&nbsp;{{profile.courseName}}&nbsp;{{profile.sectionName}}&nbsp;({{profile.studentCode}})\n        </div>\n      </div>\n     \n    </div> -->\n\n        <ion-content>\n            <ion-menu-toggle auto-hide=\"true\">\n                <ion-list class=\"dark\">\n                    <ion-item lines=\"none\" *ngFor=\"let Menu of menuList\" routerLink=\"{{Menu.pageRoute}}\" class=\"ionItem\">\n                        <!-- <ion-icon class=\"Icon\" name=\"{{Menu.sideIcons}}\"></ion-icon> -->\n                        <img class=\"appcomimage\" src=\"{{Menu.icons}}\">\n                        <ion-label>{{Menu.menuName}}</ion-label>\n                        <ion-icon class=\"Icon\" name=\"chevron-forward-outline\"></ion-icon>\n                    </ion-item>\n\n                    <ion-item lines=\"none\" (click)=\"LogoutConfirm()\" class=\"ionItem\">\n                        <ion-icon class=\"Icon\" name=\"exit-outline\"></ion-icon>\n                        <ion-label>Logout</ion-label>\n                    </ion-item>\n                    <ion-item lines=\"none\" id=\"appversion\">\n                        <!-- <ion-label> <i>APP Version : 4.0</i></ion-label> -->\n                    </ion-item>\n                </ion-list>\n            </ion-menu-toggle>\n\n            <!-- <ion-item >\n        <ion-label slot=\"end\">\n          <h2 >  APP Version : 4.0</h2>\n          <h1>  powred By DotPlus Technologies Pvt Ltd</h1>\n        </ion-label>\n      </ion-item> -->\n            <div class=\"appDetail\">\n                <a href=\"https://dotplus.in\" target=\"_blank\"> Powered By <strong> DotPlus Technologies Pvt. Ltd</strong></a>\n\n            </div>\n\n        </ion-content>\n\n    </ion-menu>\n\n\n    <ion-router-outlet Id=\"menu\"></ion-router-outlet>\n\n\n\n\n</ion-app>");

/***/ }),

/***/ 86433:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/model/model.component.html ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content> \n  <div class=\"topicon\"><ion-icon class=\"icon\"  (click)=\"dismiss()\" name=\"chevron-down-outline\"></ion-icon>\n  </div>\n  <div class=\"imagediv\"> <img class=\"imagesssss\"  src=\"../../../assets/image/door.png\"></div>\n  <div class=\"divvs\"><ion-label class=\"label\">Do you want to Logout?</ion-label>\n  <div class=\"btndiv\">    \n      <ion-button class=\"headblue\" (click)=\"dismissmodel()\">No</ion-button>\n    <ion-button class=\"headblue\" (click)=\"Logout()\">Yes</ion-button>\n  </div>\n    \n</div>\n</ion-content>");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map
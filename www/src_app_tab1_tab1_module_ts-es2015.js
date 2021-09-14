(self["webpackChunkHRMS_Plus"] = self["webpackChunkHRMS_Plus"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": function() { return /* binding */ Tab1PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": function() { return /* binding */ Tab1PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": function() { return /* binding */ Tab1Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 99474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/core-logic.service */ 14157);
/* harmony import */ var _Services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/database.service */ 69372);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);










let Tab1Page = class Tab1Page {
    constructor(geolocation, device, toastController, db, modalcontroller, alertCtrl, platform, menuCtrl, router, CG) {
        this.geolocation = geolocation;
        this.device = device;
        this.toastController = toastController;
        this.db = db;
        this.modalcontroller = modalcontroller;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.CG = CG;
        this.profiledata = [];
        this.AppUploadAvilable = false;
        this.para = JSON.parse(localStorage.getItem('para'));
        this.token = localStorage.getItem('AppTokenKey');
        console.log(this.para, "&&&", this.token);
        this.platform.ready().then((source) => {
        });
    }
    modallll() {
        this.UserdetailComponentmodal();
    }
    UserdetailComponentmodal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            {
            }
        });
    }
    ProfileEvenet() {
        if (this.ProfileEvnt == 'Logout') {
            this.Logout();
        }
        else if (this.ProfileEvnt == 'Profile') {
            this.router.navigate(['/profile']);
        }
        else {
            alert(this.ProfileEvnt);
        }
    }
    confirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.alertCtrl.dismiss();
            const alert = yield this.alertCtrl.create({
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
                            this.router.navigate(['/login']);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    openNotifications() {
        this.router.navigateByUrl('/notifications');
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
        this.menuList = [{ 'icons': 'assets/image/profile.png', 'menuName': 'Profile', 'pageRoute': '/profile' }, { 'icons': 'assets/image/attendance.png', 'menuName': 'My Attendance', 'pageRoute': '/tabs/tab3' }, { 'icons': 'assets/image/checkin2.png', 'menuName': 'Check In', 'pageRoute': '/checkin' }, { 'icons': 'assets/image/sal.png', 'menuName': 'Salary', 'pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/helpdesk.png', 'menuName': 'Helpdesk', 'pageRoute': '/tabs/tab1' }];
        //this.menuList = [{ 'icons': 'assets/image/profile.png', 'menuName': 'Profile' ,'pageRoute': '/tabs/tab1'}, { 'icons': 'assets/image/attendance.png', 'menuName': 'My Attendance','pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/checkin.png', 'menuName': 'Check In','pageRoute': '/tabs/tab1'}, { 'icons': 'assets/image/sal.png', 'menuName': 'Salary','pageRoute': '/tabs/tab1' }, { 'icons': 'assets/image/helpdesk.png', 'menuName': 'Helpdesk','pageRoute': '/tabs/tab1'}];
        // this.GetDashboardMenu();
        // this.CG.presentLoading('Please Wait...');
        // this.db.profile().subscribe((data) => {
        //   console.log("Profile Data: ",data);
        //   this.profiledata = data as any;
        //   this.CG.dismissLoading();
        //   this.db.sendProfile(this.profiledata);
        //   this.db.getProfile().subscribe(data => {
        //     console.log("Profile::", data);
        //   })
        // },(err)=>{
        //   console.log("Weservice error: ",JSON.stringify(err));
        //   this.CG.Error(err);
        // })
    }
    ionViewDidEnter() {
        // this.profiledatass();
    }
    Logout() {
        localStorage.removeItem('AppTokenKey');
        localStorage.removeItem('enroll_id');
        localStorage.removeItem('examduration');
        this.router.navigate(['/login']);
    }
    ngOnInit() {
        console.log("NgOnInit Call");
        this.para = JSON.parse(localStorage.getItem('para'));
        this.token = localStorage.getItem('AppTokenKey');
        this.getProfile();
    }
    getProfile() {
        this.db.getProfileData(this.para).subscribe(res => {
            console.log(res);
            this.profiledata = res;
            this.empName = this.profiledata.empName;
            this.empCode = this.profiledata.empCode;
            this.degignation = this.profiledata.degignation;
            this.empName = this.profiledata.empName;
            this.profilePic = this.profiledata.profilePic;
            this.db.sendProfile(this.profiledata);
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_4__.Device },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _Services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _Services_core_logic_service__WEBPACK_IMPORTED_MODULE_2__.CoreLogicService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 99474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Poppins-Regular\";\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.content {\n  background-color: coral;\n  margin-top: 0px;\n  padding: 5px;\n}\n\n.content ion-img {\n  width: 50%;\n  height: auto;\n  margin-left: 23px;\n  border-radius: 50%;\n}\n\n.ionHeader {\n  font-size: 42px;\n  background-color: greenyellow;\n}\n\n.img-wrapper ion-avatar {\n  width: 100%;\n  height: auto;\n}\n\n.title {\n  font-size: 14px;\n  color: black;\n  font-weight: 500;\n  text-align: center;\n  text-transform: capitalize;\n  font-weight: 700;\n}\n\n.profile {\n  border-radius: 48%;\n  background-color: gray;\n}\n\n.assetImg {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n}\n\n.header {\n  background-color: grey;\n  width: 100%;\n  height: auto;\n  display: flex;\n  border-radius: 3px;\n}\n\nion-card {\n  border-radius: 5px;\n  height: auto;\n}\n\n.headerSpan p {\n  font-size: 20px;\n  color: gray;\n  margin-left: 20px;\n  margin-top: auto;\n}\n\nion-header {\n  background-color: greenyellow;\n}\n\n.imageParent {\n  display: flex;\n  width: 100%;\n  height: auto;\n}\n\n.imagechild img {\n  width: 100%;\n}\n\n.verticalIcon {\n  width: 10%;\n  height: auto;\n}\n\n.verticalIcon ion-icon {\n  font-size: 20px;\n}\n\nion-label p {\n  font-size: 15px;\n  font-weight: 600;\n  font-weight: 700;\n}\n\nion-item ion-label p {\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n}\n\nion-item ion-label ion-icon {\n  font-size: 20px;\n  color: gray;\n}\n\nion-item ion-button {\n  color: white;\n  font-size: 20px;\n}\n\nion-item ion-icon {\n  color: white;\n  font-size: 20px;\n}\n\nion-item ion-label p {\n  color: white;\n  font-size: 20px;\n}\n\n.img-wrapper {\n  text-align: center;\n}\n\n.card {\n  box-shadow: 8px 14px 19px #d3d3d3;\n  margin-left: 12px;\n  /* border-radius: 44px; */\n  border-color: white;\n}\n\n.profileinfo {\n  color: white;\n  margin-right: 9px;\n  text-transform: capitalize;\n  text-align: end;\n}\n\n.profileinfo #name {\n  font-size: 15px;\n  color: white;\n  font-weight: bold;\n}\n\n.profileinfo #roll {\n  font-size: 10px;\n  text-align: end;\n}\n\n.ionTilte {\n  padding-left: 1px;\n}\n\n/* Set the width to the full container and center the content */\n\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n\n/* Set the flex in order to size the text width to its content */\n\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n\n/* Set the placeholder color and opacity */\n\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n\n/*\n   * Set the font of the first letter of the placeholder\n   * Shadow parts work with pseudo-elements, too!\n   * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n   */\n\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n\n/* Set the text color */\n\nion-select::part(text) {\n  color: #545ca7;\n}\n\n/* Set the icon color and opacity */\n\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\n\nh6.Update {\n  text-align: center;\n  background-color: #37B817;\n  margin: 0;\n  padding: 10px 0px;\n  color: #fff;\n}\n\nion-grid {\n  --ion-grid-columns: 12;\n  --ion-grid-padding: 5px;\n  --ion-grid-column-padding: 0px;\n  --ion-grid-width-xs: 100%;\n  --ion-grid-width-sm: 540px;\n  --ion-grid-width-md: 720px;\n  --ion-grid-width-lg: 960px;\n  --ion-grid-width-xl: 1140px;\n}\n\nion-footer {\n  width: 100%;\n  height: 54px;\n}\n\n.designdiv {\n  width: 105%;\n  height: 165px;\n  /* transform-style: preserve-3d; */\n  /* transform: scale3d(1.5, 1.5, 1.5); */\n  background: -webkit-linear-gradient(left, #f17432 1%, #eaad59 80%, #e8a34a 97%);\n  transform: skewY(-8deg);\n  margin-top: -28px;\n}\n\n.divs {\n  margin-top: -74px;\n}\n\n.divcol {\n  width: 100%;\n  display: flex;\n  padding: 23px;\n}\n\n.card {\n  border-radius: 10px;\n}\n\n.divcard {\n  width: 100%;\n  display: flex;\n  padding: 15px;\n  background-color: coral;\n}\n\n.image {\n  width: 38px;\n  height: auto;\n}\n\n.lable {\n  font-size: 19px;\n  color: white;\n}\n\n/* ----------------------------------------------\n   * Generated by Animista on 2021-2-6 16:22:46\n   * Licensed under FreeBSD License.\n   * See http://animista.net/license for more info. \n   * w: http://animista.net, t: @cssanimista\n   * ---------------------------------------------- */\n\n.imageParent {\n  display: flex;\n  padding: 6px;\n}\n\n.imagechild {\n  width: 57px;\n  height: 57px;\n  /* background: white; */\n  text-align: center;\n  border: 3px solid white;\n}\n\n.title {\n  font-size: 12px;\n  margin-left: 6px;\n  margin-top: 18px;\n  color: gray;\n  text-transform: capitalize;\n}\n\n.heading {\n  margin-left: 20px;\n  font-size: 17px;\n  font-weight: bold;\n  padding-top: 16px;\n  text-transform: capitalize;\n}\n\nion-card {\n  box-shadow: 3px 6px 11px 0px #8080805c;\n  --background: #ffffff7d;\n  border-radius: 10px;\n}\n\n.icons {\n  margin-left: 143px;\n}\n\n.main {\n  width: 0;\n  height: 0;\n  border-top: 140px solid red;\n  border-right: 965px solid transparent;\n}\n\n.label {\n  width: 40%;\n  color: white;\n  font-size: 14px;\n  text-align: right;\n}\n\n.ionbutton {\n  width: 1%;\n}\n\n.lablees {\n  margin-left: 76px;\n}\n\n.iontitle {\n  margin-top: 10px;\n}\n\n.css {\n  width: 104%;\n  height: 42px;\n  /* transform: rotate3d(1, 1, 1, -7deg); */\n  margin-bottom: 18px;\n  margin-left: -9px;\n  margin-top: -74px;\n  transform: rotate(-5deg);\n}\n\n.user {\n  margin-top: -110px;\n  position: absolute;\n  margin-left: 35px;\n  display: flex;\n  font-size: 18px;\n  color: white;\n  font-weight: 700;\n}\n\n.information {\n  margin-left: 19px;\n  color: white;\n}\n\n.names {\n  font-size: 18px;\n}\n\n.classes {\n  font-size: 16px;\n}\n\n.corsses {\n  font-size: 14px;\n}\n\n.name {\n  padding: 2px;\n}\n\n.imageeee {\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n\n.ion-text-left {\n  width: 100%;\n}\n\n.subjectdiv {\n  /* border: 1px solid; */\n  /* border: 0.5px solid coral; */\n  background: #C5DDF9;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  margin-top: -14px;\n}\n\n.userlabel {\n  text-transform: capitalize;\n}\n\n.maindivcol {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  box-shadow: 3px 6px 11px 0px #8080805c;\n  --background: #ffffff7d;\n  border-radius: 10px;\n  margin: 10px;\n  text-align: center;\n  margin-bottom: 35px;\n  height: 120px;\n}\n\n.iconsss p {\n  position: relative;\n  top: -14px;\n  font-size: 16px !important;\n  color: #fff;\n  font-weight: 600;\n  padding: 15px 0px !important;\n  background: #00000014;\n  border-radius: 10px;\n}\n\n.iconsss img {\n  width: 50%;\n  position: relative;\n  top: -27px;\n}\n\n.dashHead {\n  position: fixed;\n  z-index: 22;\n  top: 65px;\n  text-align: center;\n  width: 100%;\n  color: #fff;\n}\n\n.cardicondiv .maindivcol .iconsss img {\n  width: 20% !important;\n}\n\n.bg {\n  background: #3880ff;\n  background-size: cover;\n  -webkit-background-size: cover;\n  width: 100%;\n  height: 110px;\n  overflow: hidden;\n  position: relative;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  margin-bottom: 30px;\n}\n\nion-card.cardicondiv.md.hydrated {\n  --background: #ffffff;\n}\n\n.cardicondiv p {\n  color: black !important;\n  font-size: 15px !important;\n}\n\nion-content {\n  --background: aliceblue;\n}\n\n.cardicondiv .maindivcol {\n  text-align: center;\n  padding: 13px 0px 0px 0px;\n}\n\n.cardicondiv .maindivcol .iconsss ion-icon {\n  font-size: 50px;\n}\n\n.cardicondiv .maindivcol .iconsss img {\n  width: 35%;\n}\n\n.cardicondiv .maindivcol p {\n  font-size: 19px;\n  font-weight: 500;\n  color: white;\n}\n\n@-webkit-keyframes slide {\n  0% {\n    transform: translate(0px, 100px);\n  }\n  100% {\n    transform: translate(0px, 0px);\n  }\n}\n\n@keyframes slide {\n  0% {\n    transform: translate(0px, 100px);\n  }\n  100% {\n    transform: translate(0px, 0px);\n  }\n}\n\n.imgcon {\n  -webkit-animation-name: slide;\n          animation-name: slide;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n.bg-dashboard {\n  background: #007c9d;\n  height: 50vh;\n}\n\n.bg-dashboard p {\n  text-align: center;\n  color: #fff;\n  margin-bottom: 70px;\n}\n\n.bg-dashboard h2 {\n  text-align: center;\n  color: #fff;\n  margin: 0px;\n}\n\n.bg-dash-white {\n  background: #fbf0f0;\n  height: 100vh;\n  margin-top: -25px;\n  border-radius: 30px 30px;\n}\n\n.image-center {\n  margin: 0 auto;\n}\n\n.imgcon-new {\n  height: 45px;\n  margin: 5px auto;\n  display: block;\n}\n\np {\n  text-align: center;\n  margin: 5px 0px;\n}\n\n.new-menu {\n  background: #ffffff;\n  margin: 5px;\n  border-radius: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  padding: 5px;\n}\n\n.menu-inner-div {\n  margin-top: -45px;\n  overflow-y: scroll;\n}\n\n.headicon1 {\n  font-size: 20px;\n}\n\n.empdata {\n  margin-top: 10px;\n}\n\n.empdata p {\n  margin-bottom: 0px;\n  text-align: left;\n  font-weight: 700;\n  margin-top: 0px;\n}\n\n.empdata ion-avatar {\n  width: 80px;\n  height: 80px;\n  border: 3px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,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IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1SZWd1bGFyJztcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgY29sb3I6ICM4YzhjOGM7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzE4NDFjZWJkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG59XG5cbi5pb25IZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogNDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLmltZy13cmFwcGVyIHtcbiAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vLyAuaW1nLXdyYXBwZXJ7XG4vLyAgYm9yZGVyLXJhZGl1czogMzAlOyBcbi8vIH1cbi5wcm9maWxlIHtcbiAgICBib3JkZXItcmFkaXVzOiA0OCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLmFzc2V0SW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4vLyBpbWd7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IGF1dG87XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vIH1cbi8vIGltZ3tcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGhlaWdodDogYXV0bztcbi8vICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gfVxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaGVhZGVyU3BhbiB7XG4gICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIH1cbn1cblxuaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG59XG5cbi5pbWFnZVBhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pbWFnZWNoaWxkIHtcbiAgICAvLyB3aWR0aDogOTAlO1xuICAgIC8vIGhlaWdodDogYXV0bztcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi52ZXJ0aWNhbEljb24ge1xuICAgIHdpZHRoOiAxMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn1cblxuaW9uLWxhYmVsIHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pbWctd3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gICAgYm94LXNoYWRvdzogOHB4IDE0cHggMTlweCAjZDNkM2QzO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDQ0cHg7ICovXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG5cbi5wcm9maWxlaW5mbyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1yaWdodDogOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICAjbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgI3JvbGwge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICB9XG59XG5cbi5pb25UaWx0ZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcHg7XG59XG5cblxuLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xuXG5pb24tc2VsZWN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4vKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xuXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xufVxuXG5cbi8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cblxuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xuICAgIGNvbG9yOiAjMjBhMDhhO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cblxuLypcbiAgICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXG4gICAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbiAgICovXG5cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5cbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgICBjb2xvcjogIzU0NWNhNztcbn1cblxuXG4vKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gICAgY29sb3I6ICM5NzFlNDk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuaDYuVXBkYXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM3QjgxNztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbmlvbi1ncmlkIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEyO1xuICAgIC0taW9uLWdyaWQtcGFkZGluZzogNXB4O1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgICAtLWlvbi1ncmlkLXdpZHRoLXhzOiAxMDAlO1xuICAgIC0taW9uLWdyaWQtd2lkdGgtc206IDU0MHB4O1xuICAgIC0taW9uLWdyaWQtd2lkdGgtbWQ6IDcyMHB4O1xuICAgIC0taW9uLWdyaWQtd2lkdGgtbGc6IDk2MHB4O1xuICAgIC0taW9uLWdyaWQtd2lkdGgteGw6IDExNDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAtNzJweDtcbn1cblxuaW9uLWZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NHB4O1xufVxuXG4uZGVzaWduZGl2IHtcbiAgICB3aWR0aDogMTA1JTtcbiAgICBoZWlnaHQ6IDE2NXB4O1xuICAgIC8qIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7ICovXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZTNkKDEuNSwgMS41LCAxLjUpOyAqL1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmMTc0MzIgMSUsICNlYWFkNTkgODAlLCAjZThhMzRhIDk3JSk7XG4gICAgdHJhbnNmb3JtOiBza2V3WSgtOGRlZyk7XG4gICAgbWFyZ2luLXRvcDogLTI4cHg7XG59XG5cbi5kaXZzIHtcbiAgICBtYXJnaW4tdG9wOiAtNzRweDtcbn1cblxuLmRpdmNvbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyM3B4O1xufVxuXG4uY2FyZCB7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xuICAgIC8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRpdmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcbn1cblxuLmltYWdlIHtcbiAgICB3aWR0aDogMzhweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLy8gbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubGFibGUge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5pb25ncmlkIHtcbiAgICAvLyAtd2Via2l0LWFuaW1hdGlvbjpzbGlkZS1md2QtdG9wIC42MHMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDthbmltYXRpb246c2xpZGUtZndkLXRvcCAuNjBzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGhcbiAgICAvLyAtd2Via2l0LWFuaW1hdGlvbjpzbGlkZS1md2QtY2VudGVyIC40NXMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDthbmltYXRpb246c2xpZGUtZndkLWNlbnRlciAuNDVzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGhcbn1cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIxLTItNiAxNjoyMjo0NlxuICAgKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gICAqIFNlZSBodHRwOi8vYW5pbWlzdGEubmV0L2xpY2Vuc2UgZm9yIG1vcmUgaW5mby4gXG4gICAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8vICBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtZndkLWNlbnRlcnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWig2MHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWig2MHB4KX19QGtleWZyYW1lcyBzbGlkZS1md2QtY2VudGVyezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMjYwcHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDU2MHB4KX19XG4vLyBALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtZndkLXRvcHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMTYwcHgpIHRyYW5zbGF0ZVkoLTEwMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigxNjBweCkgdHJhbnNsYXRlWSgtMTAwcHgpfX1Aa2V5ZnJhbWVzIHNsaWRlLWZ3ZC10b3B7NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKSB0cmFuc2xhdGVZKDApfTUwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDE2MHB4KSB0cmFuc2xhdGVZKC0xMDBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooNTAwcHgpIHRyYW5zbGF0ZVkoODAwcHgpfX1cbi5pb24tdGV4dC1sZWZ0IHt9XG5cbi5pbWFnZVBhcmVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvL2JhY2tncm91bmQ6ICAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZjE3NDMyIDElLCNlYWFkNTkgODAlLCNlOGEzNGEgOTclKTs7XG4gICAgcGFkZGluZzogNnB4O1xufVxuXG4uaW1hZ2VjaGlsZCB7XG4gICAgd2lkdGg6IDU3cHg7XG4gICAgaGVpZ2h0OiA1N3B4O1xuICAgIC8qIGJhY2tncm91bmQ6IHdoaXRlOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaGVhZGluZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogM3B4IDZweCAxMXB4IDBweCAjODA4MDgwNWM7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmN2Q7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyAtd2Via2l0LWFuaW1hdGlvbjpzbGlkZS1md2QtY2VudGVyIC40NXMgY3ViaWMtYmV6aWVyKC4yNSwuNDYsLjQ1LC45NCkgYm90aDthbmltYXRpb246c2xpZGUtZndkLWNlbnRlciAuNDVzIGN1YmljLWJlemllciguMjUsLjQ2LC40NSwuOTQpIGJvdGhcbn1cblxuLmljb25zIHtcbiAgICBtYXJnaW4tbGVmdDogMTQzcHg7XG59XG5cbi5pY29uIHtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDlweDtcbiAgICAvLyAgIG1hcmdpbi1sZWZ0OiA5cHg7XG59XG5cbi5tYWluIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMTQwcHggc29saWQgcmVkO1xuICAgIGJvcmRlci1yaWdodDogOTY1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5sYWJlbCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAzNHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uaW9uYnV0dG9uIHtcbiAgICB3aWR0aDogMSU7XG59XG5cbi5sYWJsZWVzIHtcbiAgICBtYXJnaW4tbGVmdDogNzZweDtcbn1cblxuLmlvbnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY3NzIHtcbiAgICB3aWR0aDogMTA0JTtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgLy8gaGVpZ2h0OiAxOTZweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZjE3NDMyIDElLCAjZWFhZDU5IDgwJSwgI2U4YTM0YSA5NyUpO1xuICAgIC8qIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMSwgMSwgLTdkZWcpOyAqL1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gICAgbWFyZ2luLXRvcDogLTc0cHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xufVxuXG4udXNlciB7XG4gICAgbWFyZ2luLXRvcDogLTExMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmluZm9ybWF0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogMTlweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYW1lcyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2xhc3NlcyB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY29yc3NlcyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubmFtZSB7XG4gICAgcGFkZGluZzogMnB4O1xufVxuXG4vLyAuZ3JpZCB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODAyNjtcbi8vICAgYm9yZGVyLXJhZGl1czogOXB4O1xuLy8gICBib3gtc2hhZG93OiAwcHggMXB4IDM4cHggIzgwODA4MDg3O1xuLy8gICBtYXJnaW4tdG9wOiAxMXB4O1xuLy8gfVxuLy8gLnNsaWRlIHtcbi8vICAgd2lkdGg6IDEzMXB4O1xuLy8gICBoZWlnaHQ6IGF1dG87XG4vLyAgIG1hcmdpbi1sZWZ0OiAyMXB4O1xuLy8gfVxuLmltYWdlZWVlIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuXG4uaW9uLXRleHQtbGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJqZWN0ZGl2IHtcbiAgICAvLyBtYXJnaW4tdG9wOiAtNjVweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZDsgKi9cbiAgICAvKiBib3JkZXI6IDAuNXB4IHNvbGlkIGNvcmFsOyAqL1xuICAgIC8vIGJveC1zaGFkb3c6IDJweCAzcHggMjFweCAjZmY3ZjUwOTk7XG4gICAgYmFja2dyb3VuZDogI0M1RERGOTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcbn1cblxuLnVzZXJsYWJlbCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi8vIGlvbi1jb250ZW50e1xuLy8gICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kMS5qcGdcIikgcmVwZWF0XG4vLyB0b3AgZml4ZWQsICMwOTc3ZTZiODsgXG4vLyAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAubWFpbm5ue1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTc3ZTZiODtcbi8vICAgfVxuLy8gfVxuLm1haW5kaXZjb2wge1xuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDNweCAxcHggLTJweCwgcmdiKDAgMCAwIC8gMTQlKSAwcHggMnB4IDJweCAwcHgsIHJnYigwIDAgMCAvIDEyJSkgMHB4IDFweCA1cHggMHB4O1xuICAgIGJveC1zaGFkb3c6IDNweCA2cHggMTFweCAwcHggIzgwODA4MDVjO1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjdkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICAgIGhlaWdodDogMTIwcHg7XG59XG5cbi5pY29uc3NzIHAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0xNHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweCFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDAxNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaWNvbnNzcyBpbWcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTI3cHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQ7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZGFzaEhlYWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyMjtcbiAgICB0b3A6IDY1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY2FyZGljb25kaXYgLm1haW5kaXZjb2wgLmljb25zc3MgaW1nIHtcbiAgICB3aWR0aDogMjAlIWltcG9ydGFudDtcbn1cblxuLmJnIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNDg1MGE0O1xuICAgIGJhY2tncm91bmQ6ICMzODgwZmY7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi8vIC5iZzphZnRlciB7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIHdpZHRoOiAyMDAlO1xuLy8gICBoZWlnaHQ6IDA7XG4vLyAgIHBhZGRpbmctdG9wOiAyMDAlO1xuLy8gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuLy8gICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgdG9wOiA2MCU7XG4vLyAgIGxlZnQ6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuLy8gICBib3JkZXItdG9wOiA1cHggc29saWQgd2hpdGUhaW1wb3J0YW50O1xuLy8gfVxuaW9uLWNhcmQuY2FyZGljb25kaXYubWQuaHlkcmF0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmNhcmRpY29uZGl2IHAge1xuICAgIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNXB4IWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogYWxpY2VibHVlO1xuICAgIC8vIC0tYmFja2dyb3VuZDogI0M1RERGOTtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29uL2JhY2tncm91bmRpbWFnZS5wbmdcIikgcmVwZWF0XG4gICAgLy8gdG9wIGZpeGVkLCAjMDk3N2U2Yjg7IFxuICAgIC8vIC13ZWJraXQtYW5pbWF0aW9uOmtlbmJ1cm5zLXRvcCAycyBsaW5lYXIgcmV2ZXJzZSBib3RoO2FuaW1hdGlvbjprZW5idXJucy10b3AgMnMgbGluZWFyIHJldmVyc2UgYm90aFxufVxuXG4vLyBALXdlYmtpdC1rZXlmcmFtZXMga2VuYnVybnMtdG9wezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxNiU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTYlfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7dHJhbnNmb3JtOnNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3A7dHJhbnNmb3JtLW9yaWdpbjp0b3B9fUBrZXlmcmFtZXMga2VuYnVybnMtdG9wezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSAxNiU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgMTYlfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4yNSkgdHJhbnNsYXRlWSgtMTVweCk7dHJhbnNmb3JtOnNjYWxlKDEuMjUpIHRyYW5zbGF0ZVkoLTE1cHgpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3A7dHJhbnNmb3JtLW9yaWdpbjp0b3B9fVxuLmNhcmRpY29uZGl2IHtcbiAgICAvLyBib3gtc2hhZG93OiAzcHggNnB4IDExcHggMHB4ICM4MDgwODA1YztcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kY2FyZC5qcGdcIikgcmVwZWF0LCMwOTc3ZTZiODtcbiAgICAubWFpbmRpdmNvbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTNweCAwcHggMHB4IDBweDtcbiAgICAgICAgLmljb25zc3Mge1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEwMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICB9XG59XG5cbkAtbW96LWtleWZyYW1lcyBzbGlkZSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDEwMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTtcbiAgICB9XG59XG5cbkAtby1rZXlmcmFtZXMgc2xpZGUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAxMDBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMTAwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICAgIH1cbn1cblxuLmltZ2NvbiB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG59XG5cbi8vLy8vLy8vL25ldyBjc3Ncbi5iZy1kYXNoYm9hcmQge1xuICAgIGJhY2tncm91bmQ6IzAwN2M5ZDtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMzEwcHg7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHotaW5kZXg6IDI7XG4gICAgLy8gdG9wOiAwcHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMHB4IDBweCAyMHB4IDIwcHg7XG4gICAgLy8gcG9zaXRpb246IHN0aWNreTtcbiAgICBwIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICB9XG4gICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG59XG5cbi5iZy1kYXNoLXdoaXRlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmJmMGYwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAzMHB4O1xufVxuXG4uaW1hZ2UtY2VudGVyIHtcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5pbWdjb24tbmV3IHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgbWFyZ2luOiA1cHggYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxucCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cblxuLm5ldy1tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ubWVudS1pbm5lci1kaXYge1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAvLyBoZWlnaHQ6IDQwMHB4O1xufVxuXG4vLyBhcnZpbmQgY3NzXG4uaGVhZGljb24xIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4uZW1wZGF0YSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG4gICAgXG59Il19 */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"\">\n    <ion-toolbar class=\"headblue\">\n        <ion-item class=\"headblue\" lines=\"none\">\n            <ion-buttons>\n                <ion-menu-button class=\"menubtn\" menu=\"first\"></ion-menu-button>\n            </ion-buttons>\n            <ion-title>Dashboard</ion-title>\n            <div class=\"profileheader\">\n                <ion-icon class=\"headicon1\" slot=\"end\"\n                    name=\"notifications-outline\" (click)=\"openNotifications()\"></ion-icon>\n            </div>\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<div class=\"bg-dashboard\">\n    <div class=\"empdata\">\n        <ion-grid >\n            <ion-row style=\"margin-top: 10px;\">\n            <ion-col size=\"5\">\n                <ion-avatar class=\"image-center\" *ngIf=\"!profilePic\">\n                    <img src=\"assets/image/profile.png\">\n                </ion-avatar>\n                <ion-avatar class=\"image-center\" *ngIf=\"profilePic\">\n                    <img src=\"{{profilePic}}\">\n                </ion-avatar>\n            </ion-col>\n            <ion-col size=\"7\">\n                <p>EMP CODE: {{ empCode }}</p>\n                <p style=\"color: yellow;\"> {{ empName | uppercase}}</p>\n                <p>{{ degignation }}</p>\n                \n            </ion-col>\n        </ion-row>\n        </ion-grid>\n\n        <!-- <ion-avatar class=\"image-center\" (click)=\"modallll()\">\n            <img src=\"profilePic\">\n        </ion-avatar> -->\n        \n        \n            <!-- Class:&nbsp;6 th&nbsp;A&nbsp;23456</p> -->\n        </div>\n    </div>\n    <div class=\"bg-dash-white\">\n        <div class=\"menu-inner-div\">\n            <ion-row>\n                <ion-col *ngFor=\"let Menu of menuList\" size=\"6\"\n                    routerLink=\"{{Menu.pageRoute}}\">\n                    <div class=\"new-menu\">\n                        <div>\n                            <img src=\"{{Menu.icons}}\" class=\"imgcon-new\">\n                        </div>\n                        <p>{{Menu.menuName}} </p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n    <!-- <div class=\"bg-dash-white\">\n        <div class=\"menu-inner-div\">\n            <ion-row>\n                <ion-col size=\"6\" routerLink=\"/profile\">\n                    <div class=\"new-menu\">\n                        <div>\n                            <img src=\"assets/image/profile.png\" class=\"imgcon-new\">\n                        </div>\n                        <p>Profile</p>\n                    </div>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <div class=\"new-menu\">\n                        <div>\n                            <img src=\"assets/image/attendance.png\" class=\"imgcon-new\">\n                        </div>\n                        <p>My Attendance</p>\n                    </div>\n                </ion-col>\n                <ion-col size=\"6\" (click)=\"CheckInButtonClick()\">\n                    <div class=\"new-menu\">\n                        <div>\n                            <img src=\"assets/image/checkin.png\" class=\"imgcon-new\">\n                        </div>\n                        <p>Check In</p>\n                    </div>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <div class=\"new-menu\">\n                        <div>\n                            <img src=\"assets/image/sal.png\" class=\"imgcon-new\">\n                        </div>\n                        <p>Salary</p>\n                    </div>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <div class=\"new-menu\">\n                        <div>\n                            <img src=\"assets/image/helpdesk.png\" class=\"imgcon-new\">\n                        </div>\n                        <p>Helpdesk</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div> -->\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es2015.js.map
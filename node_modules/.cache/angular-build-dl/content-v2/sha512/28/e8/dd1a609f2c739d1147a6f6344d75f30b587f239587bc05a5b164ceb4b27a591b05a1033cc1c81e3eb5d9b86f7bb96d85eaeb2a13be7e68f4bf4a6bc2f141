(self["webpackChunkHRMS_Plus"] = self["webpackChunkHRMS_Plus"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            // {
            //   path: 'tab2',
            //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
            // },
            {
                path: 'tab2',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_checkin_checkin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../checkin/checkin.module */ 76069)).then(m => m.CheckinPageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_material_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 53746)).then(m => m.Tab3PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _Services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/database.service */ 69372);







let TabsPage = class TabsPage {
    constructor(router, alertCtrl, db) {
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.showbutton = localStorage.getItem('showbutton');
        // this.db.getChangeStatus().subscribe(res => {
        //   console.log("STATUS: ",res);
        //   this.showbutton = res
        // })
    }
    checkIn() {
        this.router.navigate(["/tabs/tab2"]);
    }
    ionViewWillEnter() {
        setInterval(() => {
            this.showbutton = localStorage.getItem('showbutton');
            console.log(this.showbutton);
        }, 2000);
        // this.db.getChangeStatus().subscribe(res => {
        //   console.log("STATUS: ",res);
        //   this.showbutton = res
        // })
    }
};
TabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _Services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Poppins-Regular\";\n}\n\nion-tab-bar {\n  --background: #007c9d;\n}\n\nion-label {\n  color: #fff;\n  font-size: 11px;\n}\n\nion-icon {\n  color: #fff;\n  font-size: 30px;\n}\n\nion-tab-button[aria-selected=true] {\n  height: 100px;\n}\n\nion-fab-button {\n  margin: 18px -3px !important;\n  border-radius: 50px;\n  border: 4px solid white !important;\n}\n\n.check-out {\n  color: #de2d16;\n}\n\n.check-in {\n  color: #5ff30b;\n}\n\n.fa {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0FBRUo7O0FBQUM7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUdMOztBQUFDO0VBQ0csV0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQztFQUNHLGFBQUE7QUFHSjs7QUFBQztFQUNHLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtBQUdKOztBQUFDO0VBRUUsY0FBQTtBQUVIOztBQUFDO0VBRUUsY0FBQTtBQUVIOztBQUFDO0VBQ0csZUFBQTtBQUdKIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLVJlZ3VsYXInO1xufVxuaW9uLXRhYi1iYXIge1xuICAgIC0tYmFja2dyb3VuZDogIzAwN2M5ZDtcbiB9XG4gaW9uLWxhYmVsIHtcbiAgICAgY29sb3I6ICNmZmY7XG4gICAgIGZvbnQtc2l6ZTogMTFweDtcbiB9XG5cbiBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuIH1cblxuIGlvbi10YWItYnV0dG9uW2FyaWEtc2VsZWN0ZWQgPSB0cnVlXSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZWQgIWltcG9ydGFudDtcbiB9XG4gaW9uLWZhYi1idXR0b24ge1xuICAgIG1hcmdpbjogMThweCAtM3B4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50OyBcbiAgIC8vICAtLWJhY2tncm91bmQ6ICMyOTdjOWQ7XG4gfVxuIC5jaGVjay1vdXQge1xuICAgLy8gLS1iYWNrZ3JvdW5kOiAjZGUyZDE2O1xuICAgY29sb3I6ICNkZTJkMTY7XG4gfVxuIC5jaGVjay1pbiB7XG4gICAvLyAtLWJhY2tncm91bmQ6ICM1ZmYzMGI7XG4gICBjb2xvcjogIzVmZjMwYjtcbiB9XG4gLmZhIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gfSJdfQ== */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-fab color=\"danger\" vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n            <!-- [ngClass]=\"showbutton? 'check-out': 'check-in'\" -->\n        <ion-fab-button (click)=\"checkIn()\" *ngIf=\"showbutton == 'true'\"  >\n                <ion-icon name=\"finger-print-outline\" [ngClass]=\"{'check-in':showbutton === 'true'}\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"checkIn()\" *ngIf=\"showbutton == 'false'\" >\n            <ion-icon name=\"finger-print-outline\" [ngClass]=\"{'check-out':showbutton === 'false'}\"></ion-icon>\n    </ion-fab-button>\n      </ion-fab>\n</ion-content>\n<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n        <ion-tab-button tab=\"tab1\">\n                <ion-icon name=\"home-outline\"></ion-icon>\n            <!-- <span class=\"iconify\"  data-icon=\"mdi:home-account\"></span> -->\n            <ion-label>Home</ion-label>\n        </ion-tab-button>\n\n        <!-- <ion-tab-button tab=\"tab2\">\n                <span class=\"iconify\"  data-icon=\"mdi:passport-biometric\"></span>\n                <ion-label>Check In</ion-label>\n        </ion-tab-button> -->\n       \n\n        <ion-tab-button tab=\"tab3\">\n                <ion-icon name=\"receipt-outline\"></ion-icon>\n                <!-- <span class=\"iconify\"  data-icon=\"fluent:clipboard-bullet-list-rtl-16-regular\"></span> -->\n                <ion-label>My Attendance</ion-label>\n    </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map
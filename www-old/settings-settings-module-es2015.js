(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Settings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-icon name=\"notifications-outline\"></ion-icon>\n    <ion-label style=\"margin-left: 2%;\">Enable Notifications</ion-label>\n    <ion-toggle (ionChange)=\"settingsChanged()\" [(ngModel)]=\"resources.notification\" color=\"success\"></ion-toggle>\n  </ion-item>\n  <ion-item>\n    <ion-icon name=\"moon\"></ion-icon>\n    <ion-label style=\"margin-left: 2%;\">Dark Mode</ion-label>\n    <ion-toggle (ionChange)=\"settingsChanged()\" id=\"themeToggle\" [(ngModel)]=\"resources.darkMode\" color=\"success\"></ion-toggle>\n  </ion-item>\n  <ion-item (click)=\"changePassword()\">\n    <ion-icon name=\"lock\"></ion-icon>\n    <ion-label style=\"margin-left: 2%;\">Change Password</ion-label>\n  </ion-item>\n  <ion-item (click)=\"logout()\">\n    <ion-icon name=\"log-out\"></ion-icon>\n    <ion-label style=\"margin-left: 2%;\">Logout</ion-label>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/local-notifications.service.ts":
/*!************************************************!*\
  !*** ./src/app/local-notifications.service.ts ***!
  \************************************************/
/*! exports provided: LocalNotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsService", function() { return LocalNotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "./node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let LocalNotificationsService = class LocalNotificationsService {
    constructor(localNotifications, platform) {
        this.localNotifications = localNotifications;
        this.platform = platform;
    }
    makeNotifications(time = new Date(), text, id) {
        console.log(time);
        // console.log("makeNotifications")
        // //Schedule a single notification
        // this.localNotifications.schedule({
        //   id: 1,
        //   text: 'Fasting about to end',
        //   sound: this.platform.is("android") ? 'file://sound.mp3' : 'file://beep.caf',
        //   data: { secret: "" }
        // });
        // Schedule multiple notifications
        // this.localNotifications.schedule([{
        //    id: 1,
        //    text: 'Multi ILocalNotification 1',
        //    sound: this.platform.is("android") ? 'file://sound.mp3': 'file://beep.caf',
        //    data: { secret:"" }
        //   },{
        //    id: 2,
        //    title: 'Local ILocalNotification Example',
        //    text: 'Multi ILocalNotification 2',
        //    icon: 'http://example.com/icon.png'
        // }]);
        // Schedule delayed notification
        this.localNotifications.schedule({
            id: id,
            text: text,
            //new Date().getTime() + 3600) 
            trigger: { at: time },
            led: 'FF0000',
            foreground: true,
            sound: this.platform.is("android") ? 'file://sound.mp3' : 'file://beep.caf'
        });
    }
    requestNotifications() {
        this.localNotifications.hasPermission().then((isPermitted) => {
            console.log(isPermitted);
            if (!isPermitted)
                this.localNotifications.requestPermission().then((isGranted) => {
                    console.log(isGranted);
                });
        });
    }
};
LocalNotificationsService.ctorParameters = () => [
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
LocalNotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], LocalNotificationsService);



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/settings/settings.page.ts");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/settings/settings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/settings/settings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/resources.service */ "./src/app/shared/resources.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _password_password_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../password/password.page */ "./src/app/password/password.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _local_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../local-notifications.service */ "./src/app/local-notifications.service.ts");








let SettingsPage = class SettingsPage {
    constructor(resources, modal, router, storage, notif) {
        this.resources = resources;
        this.modal = modal;
        this.router = router;
        this.storage = storage;
        this.notif = notif;
        console.log("Settings constructor");
        // this.resources.getSettings().then((res: any) => {
        //   this.darkMode = res.data.dark
        //   this.notification = res.data.notifications    
        //   console.log(this.darkMode, this.notification)
        //   this.resources.checkDarkTheme(this.darkMode)
        // })
    }
    ngOnInit() {
        if (!this.resources.toggle)
            this.resources.checkDarkTheme();
    }
    ngOnDestroy() {
        // ...
        console.log(this.resources.darkMode);
    }
    logout() {
        this.resources.logout();
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: _password_password_page__WEBPACK_IMPORTED_MODULE_4__["PasswordPage"]
            });
            modal.present();
        });
    }
    settingsChanged() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.resources.darkMode);
            // let st = ""
            // await this.storage.getToken().then((token) => {
            //   st = token
            // })
            if (!this.resources.isLoggedIn.value) {
                console.log("sessionToken not found ");
                return;
            }
            if (this.resources.notification) {
                this.notif.requestNotifications();
            }
            let obj = {
                settings: {
                    notifications: this.resources.notification ? this.resources.notification : false,
                    dark: this.resources.darkMode ? this.resources.darkMode : false
                }
            };
            console.log(obj);
            this.resources.updateSettings(obj);
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _local_notifications_service__WEBPACK_IMPORTED_MODULE_7__["LocalNotificationsService"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
        _local_notifications_service__WEBPACK_IMPORTED_MODULE_7__["LocalNotificationsService"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map
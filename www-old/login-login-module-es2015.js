(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item>\n        <ion-label position=\"stacked\">Username <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input [(ngModel)] = \"loginUsername\" required type=\"text\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Password <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input [(ngModel)] = \"loginPassword\" required type=\"password\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class=\"ion-padding\">\n      <ion-button (click)=\"login()\" expand=\"block\" type=\"button\" class=\"ion-no-margin\">Login</ion-button>\n    </div>\n    <div class=\"ion-padding\">\n      <ion-button (click)=\"register()\" expand=\"block\" type=\"button\" class=\"ion-no-margin\">Register</ion-button>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_resources_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/resources.service */ "./src/app/shared/resources.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage.service */ "./src/app/storage.service.ts");







let LoginPage = class LoginPage {
    constructor(rest, navController, router, toastController, resources, storage, route) {
        this.rest = rest;
        this.navController = navController;
        this.router = router;
        this.toastController = toastController;
        this.resources = resources;
        this.storage = storage;
        this.route = route;
        this.loginUsername = "asd@aol.com";
        this.loginPassword = "test1235";
        // route.params.subscribe(val => {
        //   console.log(val, "txextxc")
        // });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("LATEST VERSION  1.0");
            let st = "";
            yield this.storage.getToken().then((token) => {
                st = token;
            });
            if (st != "") {
                this.rest.validateToken().then((val) => {
                    if (val.status == 200) {
                        this.router.navigate(['/tabs/fast']);
                    }
                });
            }
        });
    }
    printpath(parent, config) {
        for (let i = 0; i < config.length; i++) {
            const route = config[i];
            if (this.resources.IS_DEBUG_MODE)
                console.log(parent + '/' + route.path);
            if (route.children) {
                const currentPath = route.path ? parent + '/' + route.path : parent;
                this.printpath(currentPath, route.children);
            }
        }
    }
    register() {
        this.router.navigate(['/register']);
    }
    login() {
        if (!this.loginUsername) {
            this.presentToast("Please provide a valid username");
            return;
        }
        if (!this.loginPassword) {
            this.presentToast("Please provide a password");
            return;
        }
        if (!this.validateEmail(this.loginUsername)) {
            this.presentToast("Please provide a valid email id as a username");
            return;
        }
        // this.printpath('', this.router.config);
        this.resources.presentLoading().then(() => {
            this.rest.login(this.loginUsername, this.loginPassword).then((response) => {
                response.json().then((r) => {
                    if (this.resources.IS_DEBUG_MODE)
                        console.log(r);
                    console.log(r);
                    if (r && r.meta && r.meta.status) {
                        this.storage.setToken(r.data.sessionToken).then(o => {
                            console.log(o);
                            this.resources.getSettings(true);
                            this.resources.isLoggedIn.next(true);
                            this.navController.navigateForward('/tabs/fast').then(() => {
                                console.log("AFTER NAVIGATION");
                                setTimeout(() => {
                                    this.resources.loading.dismiss();
                                }, 2000);
                            }); // navigates without slide animation
                            // this.router.navigate(['/tabs'], { skipLocationChange: false });
                        });
                        // this.storage.asyncLocalStorage.setItem('sessionToken', r.data.sessionToken).then((out)=> {
                        //   console.log(out);
                        //   setTimeout(() => {
                        //     this.router.navigate(['/tabs/fast'])
                        //   }, 300);
                        // })
                        // this.navController.navigateRoot('tabs/fast'); // navigates without slide animation
                        // this.router.navigate(['/tabs/fast']); // navigates with slide animation, by default
                    }
                    else {
                        this.presentToast("Invalid Login Credentials");
                    }
                }, (e) => {
                    if (this.resources.IS_DEBUG_MODE)
                        console.log(e);
                    console.log(e);
                });
            }).catch((err) => {
                if (this.resources.IS_DEBUG_MODE)
                    console.log(err);
                console.log(err);
            });
        });
        // this.router.navigate(['tabs/fast'])
    }
    presentToast(toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                color: 'dark',
                duration: 2000,
                message: toastMessage,
                showCloseButton: true
            });
            yield toast.present();
        });
    }
    validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
};
LoginPage.ctorParameters = () => [
    { type: _rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _shared_resources_service__WEBPACK_IMPORTED_MODULE_5__["ResourcesService"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _shared_resources_service__WEBPACK_IMPORTED_MODULE_5__["ResourcesService"],
        _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map
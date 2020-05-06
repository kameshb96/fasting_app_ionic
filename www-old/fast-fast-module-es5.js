(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fast-fast-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fast/fast.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fast/fast.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFastFastPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Fast</ion-title>\n    <ion-icon (click) = \"openCustomFastModal()\" name = \"add\" style = \"zoom: 3.0; float: right;\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> \n  <ion-card (click)=\"openFastModal($event, fast.title)\" style=\"height:13.5%;\" [ngStyle]=\"{'background-color': this.resources.darkMode ? 'transparent': 'lightgray'}\" *ngFor = \"let fast of fasts\"> \n    <ion-card-header>\n      <ion-card-title style=\"font-size: 1rem;\">{{ fast.title }}</ion-card-title>\n      <ion-card-subtitle>{{ fast.description }}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n  \n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/fast/fast-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/fast/fast-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: FastPageRoutingModule */

  /***/
  function srcAppFastFastRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FastPageRoutingModule", function () {
      return FastPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _fast_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fast.page */
    "./src/app/fast/fast.page.ts");

    const routes = [{
      path: '',
      component: _fast_page__WEBPACK_IMPORTED_MODULE_3__["FastPage"]
    }];
    let FastPageRoutingModule = class FastPageRoutingModule {};
    FastPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FastPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/fast/fast.module.ts":
  /*!*************************************!*\
    !*** ./src/app/fast/fast.module.ts ***!
    \*************************************/

  /*! exports provided: FastPageModule */

  /***/
  function srcAppFastFastModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FastPageModule", function () {
      return FastPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _fast_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fast-routing.module */
    "./src/app/fast/fast-routing.module.ts");
    /* harmony import */


    var _fast_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fast.page */
    "./src/app/fast/fast.page.ts");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");
    /* harmony import */


    var _local_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../local-notifications.service */
    "./src/app/local-notifications.service.ts");

    let FastPageModule = class FastPageModule {};
    FastPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fast_routing_module__WEBPACK_IMPORTED_MODULE_5__["FastPageRoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
        // set defaults here
        radius: 100,
        outerStrokeWidth: 16,
        innerStrokeWidth: 8,
        outerStrokeColor: "#78C000",
        innerStrokeColor: "#C7E596",
        animationDuration: 300,
        animation: false,
        responsive: true,
        renderOnClick: false
      })],
      declarations: [_fast_page__WEBPACK_IMPORTED_MODULE_6__["FastPage"]],
      providers: [_local_notifications_service__WEBPACK_IMPORTED_MODULE_8__["LocalNotificationsService"]]
    })], FastPageModule);
    /***/
  },

  /***/
  "./src/app/fast/fast.page.scss":
  /*!*************************************!*\
    !*** ./src/app/fast/fast.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppFastFastPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc3QvZmFzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/fast/fast.page.ts":
  /*!***********************************!*\
    !*** ./src/app/fast/fast.page.ts ***!
    \***********************************/

  /*! exports provided: FastPage */

  /***/
  function srcAppFastFastPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FastPage", function () {
      return FastPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/resources.service */
    "./src/app/shared/resources.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _custom_fast_custom_fast_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../custom-fast/custom-fast.page */
    "./src/app/custom-fast/custom-fast.page.ts");
    /* harmony import */


    var _fast_modal_fast_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../fast-modal/fast-modal.page */
    "./src/app/fast-modal/fast-modal.page.ts");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _local_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../local-notifications.service */
    "./src/app/local-notifications.service.ts");

    let FastPage = class FastPage {
      constructor(resources, modal, popoverController, rest, router, toastController, navController, notif) {
        this.resources = resources;
        this.modal = modal;
        this.popoverController = popoverController;
        this.rest = rest;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.notif = notif;
        this.isPlay = false;
        this.percent = 100;
        console.log("Fast - Constructor");
        this.resources.isLoggedIn.subscribe(value => {
          console.log(value);

          if (!value) {
            this.reset();
          }
        });
      }

      ionViewWillEnter() {
        console.log('Fast - ionViewWillEnter');
        this.resources.isWsAvailable.next(true);
        this.rest.validateToken().then(res => {
          if (res.status == 403) {
            this.navController.navigateBack('/login');
          } else if (res.status != 200) {
            this.resources.presentToast("Something went wrong");
            this.navController.navigateBack('/login');
          } else {
            // this.fasts =  this.resources.getFasts()
            this.resources.getFasts().then(res => {
              this.fasts = res;
            });
          }
        });
      }

      reset() {
        console.log("In fast reset");
        this.fasts = [];
      }

      ngOnInit() {
        console.log('Fast - ngOnInit'); // this.fasts = this.resources.getFasts();

        if (this.resources.IS_DEBUG_MODE) console.log(this.fasts);
      }

      openCustomFastModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var modal;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.modal.create({
                  component: _custom_fast_custom_fast_page__WEBPACK_IMPORTED_MODULE_4__["CustomFastPage"]
                });

              case 2:
                modal = _context.sent;
                modal.present();

              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      ionViewDidEnter() {
        console.log("Fast - ionViewDidEnter");
      }

      openFastModal(event, title) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var selected, i, data, modal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (this.resources.IS_DEBUG_MODE) console.log(event);
                selected = null;
                i = 0;

              case 3:
                if (!(i < this.fasts.length)) {
                  _context2.next = 10;
                  break;
                }

                if (!(this.fasts[i].getTitle() === title)) {
                  _context2.next = 7;
                  break;
                }

                selected = this.fasts[i];
                return _context2.abrupt("break", 10);

              case 7:
                i++;
                _context2.next = 3;
                break;

              case 10:
                data = {
                  selectedFast: selected,
                  index: i,
                  fasts: this.fasts
                };
                _context2.next = 13;
                return this.modal.create({
                  component: _fast_modal_fast_modal_page__WEBPACK_IMPORTED_MODULE_5__["FastModalPage"],
                  componentProps: data
                });

              case 13:
                modal = _context2.sent;
                modal.onDidDismiss().then(res => {
                  if (this.resources.IS_DEBUG_MODE) console.log(res);
                  console.log(res);

                  if (res && res.data && res.data.isModalClosed) {
                    this.resources.getFasts().then(res => {
                      this.fasts = res;
                    });
                  }
                }, err => {
                  if (this.resources.IS_DEBUG_MODE) console.log(err);
                });
                modal.present();

              case 16:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
      }

      resetTime() {
        this.percent = 100;
        this.isPlay = false;
        clearInterval(this.interval);
        this.interval = null;
      }

      startTime() {
        this.isPlay = !this.isPlay;

        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        } else {
          this.interval = setInterval(() => {
            this.percent -= 1;
          }, 100);
        }
      }

    };

    FastPage.ctorParameters = () => [{
      type: _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
    }, {
      type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _local_notifications_service__WEBPACK_IMPORTED_MODULE_8__["LocalNotificationsService"]
    }];

    FastPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fast',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fast.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fast/fast.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fast.page.scss */
      "./src/app/fast/fast.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"], _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _local_notifications_service__WEBPACK_IMPORTED_MODULE_8__["LocalNotificationsService"]])], FastPage);
    /***/
  }
}]);
//# sourceMappingURL=fast-fast-module-es5.js.map
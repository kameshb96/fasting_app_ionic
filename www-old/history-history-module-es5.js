(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item (click)=\"openActionSheet($event, c.fastStartTime, c._id)\" style=\"background-color: lightgray; height:13.5%;\" *ngFor=\"let c of completedFasts\">\n      <!-- <ion-card-header>\n      <ion-card-title style=\"font-size: 1rem;\">{{ c.getDetails().fast.getTitle() }}</ion-card-title>\n      <ion-card-subtitle>{{ c.fastStartTime }}</ion-card-subtitle>\n    </ion-card-header> -->\n      <ion-label>\n        <h2>{{ c.getDetails().fast.getTitle() }}</h2>\n        <h3>{{ c.fastStartTime | dateFormat }}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/history/history-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/history/history-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HistoryPageRoutingModule */

  /***/
  function srcAppHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
      return HistoryPageRoutingModule;
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


    var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/history/history.page.ts");

    const routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }];
    let HistoryPageRoutingModule = class HistoryPageRoutingModule {};
    HistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/history/history.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/history/history.module.ts ***!
    \*******************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./history-routing.module */
    "./src/app/history/history-routing.module.ts");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/history/history.page.ts");
    /* harmony import */


    var _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../pipes/date-format.pipe */
    "./src/app/pipes/date-format.pipe.ts");

    let HistoryPageModule = class HistoryPageModule {};
    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"]],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"], _pipes_date_format_pipe__WEBPACK_IMPORTED_MODULE_7__["DateFormatPipe"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/history/history.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/history/history.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/history/history.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/history/history.page.ts ***!
    \*****************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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

    let HistoryPage = class HistoryPage {
      constructor(resources, actionSheetController) {
        this.resources = resources;
        this.actionSheetController = actionSheetController;
        this.shouldRefresh = false;
      }

      ngOnInit() {}

      refreshPage() {
        this.resources.getCompletedFasts(this.shouldRefresh).then(res => {
          this.shouldRefresh = false;
          this.completedFasts = res;

          for (let i = 0; i < this.completedFasts.length; i++) {
            this.completedFasts[i].formattedStartTime = this.timeUtil(this.completedFasts[i].fastStartTime);
          }
        });
      }

      ionViewWillEnter() {
        this.shouldRefresh = true;
        this.refreshPage(); // setTimeout(() => {
        //   let history = this.resources.getCompletedFasts();
        //   history.forEach(e => {
        //     this.completedFasts.push({
        //       title: e.getDetails().fast.getTitle();
        //     })
        //   })
        //   this.completedFasts = this.resources.getCompletedFasts();
        // }, 500);
      }

      deleteHistory(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.resources.deleteCompletedFast(id).then(() => {
                  this.shouldRefresh = true;
                  this.refreshPage();
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      } // Name of fast
      // Date dd/mm/yyyy hh:mm


      openActionSheet(event, date, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          var actionSheet;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.actionSheetController.create({
                  buttons: [{
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2() {
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return this.deleteHistory(id);

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }, _callee2, this);
                    }))
                  }, {
                    text: 'Cancel',
                    icon: 'close',
                    role: 'cancel',
                    handler: () => {
                      if (this.resources.IS_DEBUG_MODE) console.log('Cancel clicked');
                    }
                  }]
                });

              case 2:
                actionSheet = _context3.sent;
                _context3.next = 5;
                return actionSheet.present();

              case 5:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
      }

      timeUtil(startTime) {
        if (!(startTime instanceof Date)) startTime = new Date(startTime);
        let date = startTime.toLocaleDateString();
        let time = startTime.toLocaleTimeString();
        time = time.substring(0, time.length - 6) + " " + time.substr(time.length - 2, 2);
        return date + " " + time;
      }

    };

    HistoryPage.ctorParameters = () => [{
      type: _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
    }];

    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/history/history.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])], HistoryPage);
    /***/
  },

  /***/
  "./src/app/pipes/date-format.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/date-format.pipe.ts ***!
    \*******************************************/

  /*! exports provided: DateFormatPipe */

  /***/
  function srcAppPipesDateFormatPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateFormatPipe", function () {
      return DateFormatPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DateFormatPipe = class DateFormatPipe {
      transform(value, ...args) {
        if (!(value instanceof Date)) value = new Date(value);
        let date = value.toLocaleDateString();
        let time = value.toLocaleTimeString();
        time = time.substring(0, time.length - 6) + " " + time.substr(time.length - 2, 2);
        return date + " " + time;
      }

    };
    DateFormatPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'dateFormat'
    })], DateFormatPipe);
    /***/
  }
}]);
//# sourceMappingURL=history-history-module-es5.js.map
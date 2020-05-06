(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nutrition-nutrition-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNutritionNutritionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-slides (ionSlideDidChange)=\"didChange()\" pager=\"false\" #slides>\n    <ion-slide>\n      <ion-header>\n        <ion-toolbar>\n          <ion-icon (click)=\"previousDate()\" name=\"arrow-round-back\" style=\"zoom: 3.0; float: left;\"></ion-icon>\n          <ion-title>\n            {{ previousTitle }}\n          </ion-title>\n          <ion-icon (click)=\"nextDate()\" name=\"arrow-round-forward\" style=\"zoom: 3.0; float: right;\"></ion-icon>\n        </ion-toolbar>\n      </ion-header>\n      <ion-list *ngFor=\"let l of previousFilteredFoodLogs\">\n        <ion-item (click)=\"openActionSheet($event, l.date, l._id)\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>{{ l.food }}</h2>\n            <h3>{{ l.cal + \" calories\"}}</h3>\n            <h3>{{ l.qty + \" \" + l.unit}}</h3>\n            <h3>{{\"Time: \" + l.formattedTime }}</h3>\n            <p>{{\"Date: \" }} {{ l.date.getMonth() + 1}}/{{ l.date.getDate() +  \"/\" + l.date.getFullYear() }}</p>\n          </ion-label>  \n        </ion-item>\n      </ion-list>\n      <div style=\"position: fixed; bottom: 0; width: 100%;\">\n        <ion-fab-button (click)=\"openModal()\" style=\"margin: 0 auto;\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-header>\n        <ion-toolbar>\n          <ion-icon (click)=\"previousDate()\" name=\"arrow-round-back\" style=\"zoom: 3.0; float: left;\"></ion-icon>\n          <ion-title>\n            {{ title }}\n          </ion-title>\n          <ion-icon (click)=\"nextDate()\" name=\"arrow-round-forward\" style=\"zoom: 3.0; float: right;\"></ion-icon>\n        </ion-toolbar>\n      </ion-header>\n      <ion-list *ngFor=\"let l of filteredFoodLogs\">\n        <ion-item (click)=\"openActionSheet($event, l.date, l._id)\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>{{ l.food }}</h2>\n            <h3>{{ l.cal + \" calories\"}}</h3>\n            <h3>{{ l.qty + \" \" + l.unit}}</h3>\n            <h3>{{\"Time: \" + l.formattedTime }}</h3>\n            <p>{{\"Date: \" }} {{ l.date.getMonth() + 1}}/{{ l.date.getDate() +  \"/\" + l.date.getFullYear() }}</p>\n          </ion-label>  \n        </ion-item>\n      </ion-list>\n      <div style=\"position: fixed; bottom: 0; width: 100%;\">\n        <ion-fab-button (click)=\"openModal()\" style=\"margin: 0 auto;\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </div>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-header>\n        <ion-toolbar>\n          <ion-icon (click)=\"previousDate()\" name=\"arrow-round-back\" style=\"zoom: 3.0; float: left;\"></ion-icon>\n          <ion-title>\n            {{ nextTitle }}\n          </ion-title>\n          <ion-icon (click)=\"nextDate()\" name=\"arrow-round-forward\" style=\"zoom: 3.0; float: right;\"></ion-icon>\n        </ion-toolbar>\n      </ion-header>\n      <ion-list *ngFor=\"let l of nextFilteredFoodLogs\">\n        <ion-item (click)=\"openActionSheet($event, l.date, l._id)\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>{{ l.food }}</h2>\n            <h3>{{ l.cal + \" calories\"}}</h3>\n            <h3>{{ l.qty + \" \" + l.unit}}</h3>\n            <h3>{{\"Time: \" + l.formattedTime }}</h3>\n            <p>{{\"Date: \" }} {{ l.date.getMonth() + 1}}/{{ l.date.getDate() +  \"/\" + l.date.getFullYear() }}</p>\n          </ion-label>  \n        </ion-item>\n      </ion-list>\n      <div style=\"position: fixed; bottom: 0; width: 100%;\">\n        <ion-fab-button (click)=\"openModal()\" style=\"margin: 0 auto;\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/nutrition/nutrition-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: NutritionPageRoutingModule */

  /***/
  function srcAppNutritionNutritionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionPageRoutingModule", function () {
      return NutritionPageRoutingModule;
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


    var _nutrition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nutrition.page */
    "./src/app/nutrition/nutrition.page.ts");

    const routes = [{
      path: '',
      component: _nutrition_page__WEBPACK_IMPORTED_MODULE_3__["NutritionPage"]
    }];
    let NutritionPageRoutingModule = class NutritionPageRoutingModule {};
    NutritionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NutritionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/nutrition/nutrition.module.ts ***!
    \***********************************************/

  /*! exports provided: NutritionPageModule */

  /***/
  function srcAppNutritionNutritionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionPageModule", function () {
      return NutritionPageModule;
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


    var _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nutrition-routing.module */
    "./src/app/nutrition/nutrition-routing.module.ts");
    /* harmony import */


    var _nutrition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nutrition.page */
    "./src/app/nutrition/nutrition.page.ts");

    let NutritionPageModule = class NutritionPageModule {};
    NutritionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nutrition_routing_module__WEBPACK_IMPORTED_MODULE_5__["NutritionPageRoutingModule"]],
      declarations: [_nutrition_page__WEBPACK_IMPORTED_MODULE_6__["NutritionPage"]]
    })], NutritionPageModule);
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/nutrition/nutrition.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNutritionNutritionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.swiper-slide {\n  overflow-y: scroll;\n  display: block;\n}\n\nion-slides {\n  height: 100%;\n}\n\nion-slide > h2 {\n  margin-top: 2.8rem;\n}\n\nion-slide > img {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 36px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lc2hiL0Rlc2t0b3AvaW9uaWNfcHJvamVjdHMvZmFzdF9kaWV0L2Zhc3RpbmdfYXBwX2lvbmljL3NyYy9hcHAvbnV0cml0aW9uL251dHJpdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL251dHJpdGlvbi9udXRyaXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtBQ0NKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUU7RUFDSSxZQUFBO0FDR047O0FEREU7RUFDRSxrQkFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9udXRyaXRpb24vbnV0cml0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHsgIFxuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7ICBcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4OyAgXG4gIH0gIFxuICAuc3dpcGVyLXNsaWRlIHsgIFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBkaXNwbGF5OiBibG9jazsgIFxuICB9ICBcbiAgaW9uLXNsaWRlcyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgaW9uLXNsaWRlID4gaDIgeyAgXG4gICAgbWFyZ2luLXRvcDogMi44cmVtOyAgXG4gIH0gIFxuICBpb24tc2xpZGUgPiBpbWcgeyAgXG4gICAgbWF4LWhlaWdodDogNTAlOyAgXG4gICAgbWF4LXdpZHRoOiA2MCU7ICBcbiAgICBtYXJnaW46IDM2cHggMDsgIFxuICB9ICAiLCI6cm9vdCB7XG4gIC0taW9uLXNhZmUtYXJlYS10b3A6IDIwcHg7XG4gIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IDIycHg7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2xpZGUgPiBoMiB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbn1cblxuaW9uLXNsaWRlID4gaW1nIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAzNnB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/nutrition/nutrition.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/nutrition/nutrition.page.ts ***!
    \*********************************************/

  /*! exports provided: NutritionPage */

  /***/
  function srcAppNutritionNutritionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NutritionPage", function () {
      return NutritionPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _food_info_food_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../food-info/food-info.page */
    "./src/app/food-info/food-info.page.ts");
    /* harmony import */


    var _shared_resources_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/resources.service */
    "./src/app/shared/resources.service.ts");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../storage.service */
    "./src/app/storage.service.ts");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");

    let NutritionPage = class NutritionPage {
      // shouldRefreshLog: boolean = false;
      constructor(modalController, resources, storage, actionSheetController, restService) {
        this.modalController = modalController;
        this.resources = resources;
        this.storage = storage;
        this.actionSheetController = actionSheetController;
        this.restService = restService;
      }

      ngOnInit() {// this.slides.slideTo(1, 500);
      }

      checkDate(date1, date2) {
        if (!date1 || !date2) return false;
        return date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate() && date1.getFullYear() == date2.getFullYear();
      }

      timeUtil(hours, minutes) {
        return hours + ":" + (minutes < 10 ? "" + "0" + minutes : "" + minutes);
      }

      ionViewWillEnter() {
        if (this.resources.IS_DEBUG_MODE) console.log(this.resources.currentNutritionPageDate);

        if (this.resources.currentNutritionPageDate) {
          this.currentPageDate = new Date(this.resources.currentNutritionPageDate);
        } else {
          this.currentPageDate = new Date();
        }

        this.slides.slideTo(1, 0);
        console.log(this.foodLogs);
        this.didChange();
      }

      didChange() {
        this.slides.getActiveIndex().then(index => {
          if (this.resources.IS_DEBUG_MODE) console.log("Did change" + index);
          if (index == 1) this.setPageData(this.currentPageDate);else if (index == 0) this.setPageData(this.previousPageDate);else if (index == 2) this.setPageData(this.nextPageDate);
          this.slides.slideTo(1, 0);
        });
      }

      setPageData(d) {
        let date = new Date(d);
        this.resources.currentNutritionPageDate = new Date(date);
        this.previousPageDate = new Date(date);
        this.previousPageDate.setDate(this.previousPageDate.getDate() - 1);
        this.nextPageDate = new Date(date);
        this.nextPageDate.setDate(this.nextPageDate.getDate() + 1);
        this.currentPageDate = new Date(date);
        if (this.resources.IS_DEBUG_MODE) console.log(date);
        this.getFilteredLogs(date).then(res => {
          this.filteredFoodLogs = res;
          this.title = this.setTitle2(date);
          date.setDate(date.getDate() - 1);
          this.getFilteredLogs(date).then(res2 => {
            this.previousFilteredFoodLogs = res2;
            this.previousTitle = this.setTitle2(date);
            date.setDate(date.getDate() + 2);
            this.getFilteredLogs(date).then(res3 => {
              this.nextFilteredFoodLogs = res3;
              this.nextTitle = this.setTitle2(date);
            });
          });
        });
        if (this.resources.IS_DEBUG_MODE) console.log("Current: ", this.title, this.filteredFoodLogs);
        if (this.resources.IS_DEBUG_MODE) console.log("Prev: ", this.previousTitle, this.previousFilteredFoodLogs);
        if (this.resources.IS_DEBUG_MODE) console.log("Next: ", this.nextTitle, this.nextFilteredFoodLogs);
      } //current, page  current - page / (1000 * 60 * 60 * 24) = no. of day between 


      setTitle2(date) {
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        let cpd = new Date(date);
        cpd.setHours(0, 0, 0, 0);
        let diff = (currentDate.getTime() - cpd.getTime()) / (1000 * 3600 * 24);
        let t = '';
        if (diff == 0) t = "Today";else if (diff == 1) t = "Yesterday";else if (diff == -1) t = "Tomorrow";else t = cpd.toLocaleString('default', {
          weekday: 'long'
        }) + ', ' + cpd.toLocaleString('default', {
          month: 'long'
        }).substr(0, 3) + ' ' + cpd.getDate();
        return t;
      } // Obsolete


      setTitle() {
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        let cpd = new Date(this.currentPageDate);
        cpd.setHours(0, 0, 0, 0);
        let diff = (currentDate.getTime() - cpd.getTime()) / (1000 * 3600 * 24);
        if (diff == 0) this.title = "Today";else if (diff == 1) this.title = "Yesterday";else if (diff == -1) this.title = "Tomorrow"; // Returns value of sample format: Thursday, Feb 20
        else this.title = cpd.toLocaleString('default', {
            weekday: 'long'
          }) + ', ' + cpd.toLocaleString('default', {
            month: 'long'
          }).substr(0, 3) + ' ' + cpd.getDate();
      }

      nextDate() {
        this.slides.slideTo(2);
      }

      previousDate() {
        this.slides.slideTo(0);
      }

      getFilteredLogs(date) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var tmp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                tmp = [];
                console.log("SHOULD REFRESH=", this.resources.shouldRefreshLog);
                _context.next = 4;
                return this.resources.getFoodLogs(this.resources.shouldRefreshLog).then(val => {
                  this.resources.shouldRefreshLog = false;
                  this.foodLogs = val;
                  let n = this.foodLogs.length;

                  for (let i = 0; i < n; i++) {
                    this.foodLogs[i].date = this.foodLogs[i].date instanceof Date ? this.foodLogs[i].date : new Date(this.foodLogs[i].date);

                    if (this.checkDate(this.foodLogs[i].date, date)) {
                      tmp.push(this.foodLogs[i]);
                    }
                  }

                  n = tmp.length;

                  for (let i = 0; i < n; i++) {
                    if (this.resources.IS_DEBUG_MODE) console.log(tmp[i]);
                    let d1 = tmp[i].time instanceof Date ? tmp[i].date : new Date(tmp[i].date);
                    tmp[i].formattedTime = this.timeUtil(d1.getHours(), d1.getMinutes());
                  }
                });

              case 4:
                return _context.abrupt("return", tmp);

              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      filterLogsByDate() {
        this.resources.getFoodLogs().then(res => {
          this.foodLogs = res;
          this.filteredFoodLogs.sort((a, b) => a.time > b.time ? 1 : -1);
          if (this.resources.IS_DEBUG_MODE) console.log(this.filteredFoodLogs);
          let fl = this.filteredFoodLogs;
          fl.forEach(e => {
            if (this.resources.IS_DEBUG_MODE) console.log(e);

            if (e.time instanceof Date) {
              e.time = this.timeUtil(e.time.getHours(), e.time.getMinutes());
            }
          });
          this.filteredFoodLogs = fl;
        }); // this.filteredFoodLogs = this.foodLogs.filter( (log)=> this.checkDate(log));
      }

      refreshPage(refreshDate = new Date(), shouldSlide = true) {
        // this.foodLogs = this.resources.getFoodLogs();
        console.log("In refresh page");
        this.setPageData(refreshDate);
        if (shouldSlide) this.slides.slideTo(1, 0);
      }

      openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var modal;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (this.resources.IS_DEBUG_MODE) console.log("Inside openModal");
                _context2.next = 3;
                return this.modalController.create({
                  component: _food_info_food_info_page__WEBPACK_IMPORTED_MODULE_3__["FoodInfoPage"],
                  componentProps: {
                    currentPageDate: this.currentPageDate.toISOString()
                  }
                });

              case 3:
                modal = _context2.sent;
                modal.onDidDismiss().then(res => {
                  if (this.resources.IS_DEBUG_MODE) console.log(res);
                  console.log(res);

                  if (res && res.data) {
                    this.resources.shouldRefreshLog = true;
                    this.refreshPage(this.currentPageDate, false);
                  }
                }, err => {
                  if (this.resources.IS_DEBUG_MODE) console.log(err);
                });
                modal.present();

              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this);
        }));
      }

      deleteLog(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                this.resources.shouldRefreshLog = true;
                _context3.next = 3;
                return this.resources.deleteLog(id).then(() => {
                  this.refreshPage(this.currentPageDate, false);
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }, _callee3, this);
        }));
      }

      openActionSheet(event, date, _id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee5() {
          var actionSheet;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                console.log(_id);
                _context5.next = 3;
                return this.actionSheetController.create({
                  buttons: [{
                    text: 'Delete',
                    role: 'destructive',
                    icon: 'trash',
                    handler: () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee4() {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return this.deleteLog(_id);

                          case 2:
                          case "end":
                            return _context4.stop();
                        }
                      }, _callee4, this);
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

              case 3:
                actionSheet = _context5.sent;
                _context5.next = 6;
                return actionSheet.present();

              case 6:
              case "end":
                return _context5.stop();
            }
          }, _callee5, this);
        }));
      }

    };

    NutritionPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _shared_resources_service__WEBPACK_IMPORTED_MODULE_4__["ResourcesService"]
    }, {
      type: _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
    }, {
      type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], NutritionPage.prototype, "slides", void 0);
    NutritionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nutrition',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nutrition.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nutrition/nutrition.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nutrition.page.scss */
      "./src/app/nutrition/nutrition.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _shared_resources_service__WEBPACK_IMPORTED_MODULE_4__["ResourcesService"], _storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"]])], NutritionPage);
    /***/
  }
}]);
//# sourceMappingURL=nutrition-nutrition-module-es5.js.map
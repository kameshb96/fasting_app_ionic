(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timer-timer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/timer/timer.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timer/timer.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTimerTimerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Timer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"center-wrapper\">\n    <div class=\"center-circle-element\">\n      <circle-progress\n      [percent]=\"percent\"\n      [radius]=\"85\"\n      [showTitle] = \"true\"\n      [showSubtitle] = \"false\"\n      [showUnits] = \"false\"\n      [outerStrokeWidth]=\"16\"\n      [innerStrokeWidth]=\"2\"\n      [outerStrokeColor]=\"'#C7E596'\"\n      [backgroundStroke] =\"'#C7E596'\"\n      [innerStrokeColor]=\"'#C7E596'\"\n      [animation]=\"false\"\n      [animationDuration]=\"300\"\n      [showInnerStroke] = \"true\"\n      [showZeroOuterStroke] = \"false\"\n      [title] = \"titleText\"\n      ></circle-progress>\n    </div>\n    <ion-button (click)=\"startStage()\" class=\"center-btn-element\">{{ isPlay ? \"Stop Fast\" : \"Start Fast\" }} </ion-button>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/timer/timer-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/timer/timer-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: TimerPageRoutingModule */

  /***/
  function srcAppTimerTimerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerPageRoutingModule", function () {
      return TimerPageRoutingModule;
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


    var _timer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timer.page */
    "./src/app/timer/timer.page.ts");

    const routes = [{
      path: '',
      component: _timer_page__WEBPACK_IMPORTED_MODULE_3__["TimerPage"]
    }];
    let TimerPageRoutingModule = class TimerPageRoutingModule {};
    TimerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TimerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/timer/timer.module.ts":
  /*!***************************************!*\
    !*** ./src/app/timer/timer.module.ts ***!
    \***************************************/

  /*! exports provided: TimerPageModule */

  /***/
  function srcAppTimerTimerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerPageModule", function () {
      return TimerPageModule;
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


    var _timer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timer-routing.module */
    "./src/app/timer/timer-routing.module.ts");
    /* harmony import */


    var _timer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./timer.page */
    "./src/app/timer/timer.page.ts");
    /* harmony import */


    var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-circle-progress */
    "./node_modules/ng-circle-progress/fesm2015/ng-circle-progress.js");

    let TimerPageModule = class TimerPageModule {};
    TimerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _timer_routing_module__WEBPACK_IMPORTED_MODULE_5__["TimerPageRoutingModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
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
      declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_6__["TimerPage"]]
    })], TimerPageModule);
    /***/
  },

  /***/
  "./src/app/timer/timer.page.scss":
  /*!***************************************!*\
    !*** ./src/app/timer/timer.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTimerTimerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".center-wrapper {\n  padding-top: 20%;\n  text-align: center;\n}\n\n.center-circle-element {\n  width: 75%;\n  height: 75%;\n  margin: 0px auto;\n}\n\n.center-btn-element {\n  width: 20%;\n  margin: 0px auto;\n  font-size: 0.8em;\n}\n\n.pos1 {\n  position: relative;\n  top: 20%;\n  margin: 0px auto;\n}\n\n.pos2 {\n  position: absolute;\n  top: 88%;\n  z-index: 1000;\n  left: 13%;\n}\n\n.pos3 {\n  position: absolute;\n  top: 88%;\n  z-index: 1000;\n  left: 69%;\n}\n\n.pos4 {\n  position: absolute;\n  top: 95%;\n  z-index: 1000;\n  left: 32%;\n}\n\n@media screen and (min-height: 568px) and (max-height: 666px) {\n  .center-wrapper {\n    padding-top: 30%;\n    text-align: center;\n  }\n}\n\n@media screen and (min-height: 667px) and (max-height: 735px) {\n  .center-wrapper {\n    padding-top: 30%;\n    text-align: center;\n  }\n}\n\n@media screen and (min-height: 736px) and (max-height: 811px) {\n  .center-wrapper {\n    padding-top: 40%;\n    text-align: center;\n  }\n}\n\n@media screen and (min-height: 812px) and (max-height: 1023px) {\n  .center-wrapper {\n    padding-top: 50%;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rYW1lc2hiL0Rlc2t0b3AvaW9uaWNfcHJvamVjdHMvZmFzdF9kaWV0L2Zhc3RpbmdfYXBwX2lvbmljL3NyYy9hcHAvdGltZXIvdGltZXIucGFnZS5zY3NzIiwic3JjL2FwcC90aW1lci90aW1lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFFQSxRQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNBSjs7QURJQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtFQ0ROO0FBQ0Y7O0FES0E7RUFDSTtJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7RUNITjtBQUNGOztBRE9BO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLGtCQUFBO0VDTE47QUFDRjs7QURTQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtFQ1BOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90aW1lci90aW1lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIE90aGVyIHRoYW4gaVBob25lIG1vZGVsc1xuLmNlbnRlci13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDoyMCU7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jZW50ZXItY2lyY2xlLWVsZW1lbnQge1xuICAgIHdpZHRoOiA3NSU7IFxuICAgIGhlaWdodDogNzUlOyBcbiAgICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmNlbnRlci1idG4tZWxlbWVudCB7XG4gICAgd2lkdGg6IDIwJTsgXG4gICAgbWFyZ2luOiAwcHggYXV0bzsgXG4gICAgZm9udC1zaXplOiAwLjhlbVxufVxuXG4ucG9zMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8vIGxlZnQ6IDEwJTtcbiAgICB0b3A6IDIwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ucG9zMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODglO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbGVmdDogMTMlO1xufVxuXG4ucG9zMyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODglO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbGVmdDogNjklO1xufVxuXG4ucG9zNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOTUlO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbGVmdDogMzIlO1xufVxuXG4vLyBpUGhvbmUgNS9TRVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDU2OHB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2NnB4KSB7XG4gICAgLmNlbnRlci13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6MzAlOyBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLy8gaVBob25lIDYvNy84XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNjY3cHgpIGFuZCAobWF4LWhlaWdodDogNzM1cHgpIHtcbiAgICAuY2VudGVyLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDozMCU7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4vLyBpUGhvbmUgNi83LzggUGx1c1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDczNnB4KSBhbmQgKG1heC1oZWlnaHQ6IDgxMXB4KSB7XG4gICAgLmNlbnRlci13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6NDAlOyBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLy8gaVBob25lIFhcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA4MTJweCkgYW5kIChtYXgtaGVpZ2h0OiAxMDIzcHgpIHtcbiAgICAuY2VudGVyLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDo1MCU7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufSIsIi5jZW50ZXItd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAyMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlci1jaXJjbGUtZWxlbWVudCB7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNzUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4uY2VudGVyLWJ0bi1lbGVtZW50IHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLnBvczEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4ucG9zMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4OCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGxlZnQ6IDEzJTtcbn1cblxuLnBvczMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODglO1xuICB6LWluZGV4OiAxMDAwO1xuICBsZWZ0OiA2OSU7XG59XG5cbi5wb3M0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDk1JTtcbiAgei1pbmRleDogMTAwMDtcbiAgbGVmdDogMzIlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogNTY4cHgpIGFuZCAobWF4LWhlaWdodDogNjY2cHgpIHtcbiAgLmNlbnRlci13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMzAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDY2N3B4KSBhbmQgKG1heC1oZWlnaHQ6IDczNXB4KSB7XG4gIC5jZW50ZXItd3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDMwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiA3MzZweCkgYW5kIChtYXgtaGVpZ2h0OiA4MTFweCkge1xuICAuY2VudGVyLXdyYXBwZXIge1xuICAgIHBhZGRpbmctdG9wOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWhlaWdodDogODEycHgpIGFuZCAobWF4LWhlaWdodDogMTAyM3B4KSB7XG4gIC5jZW50ZXItd3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/timer/timer.page.ts":
  /*!*************************************!*\
    !*** ./src/app/timer/timer.page.ts ***!
    \*************************************/

  /*! exports provided: TimerPage */

  /***/
  function srcAppTimerTimerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerPage", function () {
      return TimerPage;
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


    var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../storage.service */
    "./src/app/storage.service.ts");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _local_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../local-notifications.service */
    "./src/app/local-notifications.service.ts");

    let TimerPage = class TimerPage {
      constructor(resources, toastController, storage, rest, router, navController, notif) {
        this.resources = resources;
        this.toastController = toastController;
        this.storage = storage;
        this.rest = rest;
        this.router = router;
        this.navController = navController;
        this.notif = notif;
        this.fastTime = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        this.eatTime = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        console.log("Timer - Constructor");
        if (this.resources.IS_DEBUG_MODE) console.log("constructor");
        this.didReOpen = false;
        console.log(this.resources.getChosenFast());
        this.resources.getTimerInfo().then(res => {
          if (res) {
            console.log(res);
            if (res.fastStartTime == "" || res.chosenFast == {}) return;
            console.log("UPDATING CHOSEN FAST");
            this.fastStartTime = new Date(res.fastStartTime);
            this.didReOpen = true;
            let d1 = new Date(res.fastStartTime);
            let d2 = new Date(); // this.storage.getChosenFast().then((chosenFast) => {

            let chosenFast = res.chosenFast;

            if (chosenFast) {
              if (this.resources.IS_DEBUG_MODE) console.log(chosenFast);
              let cf = chosenFast;
              this.resources.setChosenFast(new _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["Fast"](cf.title, cf.duration, cf.description, cf.IsPredefined)); //cf = new Fast(cf.getTitle(), cf.getDuration(), cf.getDescription(), cf.getIsPreDefined());

              let dur = new Date(cf.duration);
              let fastEndTime = new Date(d1);
              if (this.resources.IS_DEBUG_MODE) console.log(fastEndTime);
              fastEndTime.setHours(fastEndTime.getHours() + dur.getHours());
              fastEndTime.setMinutes(fastEndTime.getMinutes() + dur.getMinutes());
              let eatEndTime = new Date(d1);
              eatEndTime.setHours(eatEndTime.getHours() + 24);
              if (this.resources.IS_DEBUG_MODE) console.log(fastEndTime);
              if (this.resources.IS_DEBUG_MODE) console.log(eatEndTime);

              if (d2 < fastEndTime) {
                // Still in fasting time
                let diff = new Date(d2.getTime() - d1.getTime());
                let totalSecs = this.getTotalSeconds({
                  hours: dur.getHours(),
                  minutes: dur.getMinutes(),
                  seconds: 0
                });
                let elapsedSecs = Math.floor(diff.getTime() / 1000); //this.percent = ((totalSecs - elapsedSecs) / totalSecs) * 100;

                let remainingTime = this.getTimeData(totalSecs - elapsedSecs);
                this.status = this.fastTime;
                this.status.hours = remainingTime.hours;
                this.status.minutes = remainingTime.minutes;
                this.status.seconds = remainingTime.seconds;
                this.isPlay = false;
                this.initialSeconds = totalSecs;
                if (this.resources.IS_DEBUG_MODE) console.log("Here");
                this.setTitle();
                this.startStage();
                this.didReOpen = false;
              } else if (d2 > fastEndTime && d2 < eatEndTime) {
                let totalSecs = Math.floor((eatEndTime.getTime() - fastEndTime.getTime()) / 1000);
                let diff = d2.getTime() - fastEndTime.getTime();
                let elapsedSecs = Math.floor(diff / 1000); //86330

                let remainingTime = this.getTimeData(totalSecs - elapsedSecs);
                this.status = this.eatTime;
                this.status.hours = remainingTime.hours;
                this.status.minutes = remainingTime.minutes;
                this.status.seconds = remainingTime.seconds;
                this.isPlay = false;
                this.initialSeconds = totalSecs;
                if (this.resources.IS_DEBUG_MODE) console.log("Here");
                this.statusName = "eat";
                this.setTitle();
                this.startStage();
              } else {
                if (this.resources.IS_DEBUG_MODE) console.log("Here in else");
                this.resources.addCompletedFast(new _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["CompletedFast"](null, this.resources.getChosenFast(), this.fastStartTime.toISOString(), null, null));
                this.resetTimer(); // this.storage.deleteFastStartTime();
              }
            } // });

          }
        }, error => {
          console.log(error);
        }); // this.storage.getFastStartTime().then((res) => {
        //   if (res) {
        //     this.fastStartTime = new Date(JSON.parse(res));
        //     this.didReOpen = true;
        //     let d1 = new Date(JSON.parse(res));
        //     let d2 = new Date();
        //     this.storage.getChosenFast().then((chosenFast) => {
        //       if (chosenFast) {
        //         if (this.resources.IS_DEBUG_MODE) console.log(chosenFast);
        //         let cf = JSON.parse(chosenFast);
        //         this.resources.setChosenFast(new Fast(cf.title, cf.duration, cf.description, cf.IsPredefined));
        //         //cf = new Fast(cf.getTitle(), cf.getDuration(), cf.getDescription(), cf.getIsPreDefined());
        //         let dur = new Date(cf.duration);
        //         let fastEndTime = new Date(d1);
        //         if (this.resources.IS_DEBUG_MODE) console.log(fastEndTime);
        //         fastEndTime.setHours(fastEndTime.getHours() + dur.getHours());
        //         fastEndTime.setMinutes(fastEndTime.getMinutes() + dur.getMinutes());
        //         let eatEndTime = new Date(d1);
        //         eatEndTime.setHours(eatEndTime.getHours() + 24);
        //         if (this.resources.IS_DEBUG_MODE) console.log(fastEndTime);
        //         if (this.resources.IS_DEBUG_MODE) console.log(eatEndTime);
        //         if (d2 < fastEndTime) {
        //           // Still in fasting time
        //           let diff = new Date(d2.getTime() - d1.getTime());
        //           let totalSecs = this.getTotalSeconds({
        //             hours: dur.getHours(),
        //             minutes: dur.getMinutes(),
        //             seconds: 0
        //           });
        //           let elapsedSecs = Math.floor(diff.getTime() / 1000)
        //           //this.percent = ((totalSecs - elapsedSecs) / totalSecs) * 100;
        //           let remainingTime = this.getTimeData(totalSecs - elapsedSecs);
        //           this.status = this.fastTime;
        //           this.status.hours = remainingTime.hours;
        //           this.status.minutes = remainingTime.minutes;
        //           this.status.seconds = remainingTime.seconds;
        //           this.isPlay = false;
        //           this.initialSeconds = totalSecs;
        //           if (this.resources.IS_DEBUG_MODE) console.log("Here");
        //           this.setTitle();
        //           this.startStage();
        //           this.didReOpen = false;
        //         }
        //         else if(d2 > fastEndTime && d2 < eatEndTime) {
        //           let totalSecs = Math.floor((eatEndTime.getTime() - fastEndTime.getTime()) / 1000);
        //           let diff = d2.getTime() - fastEndTime.getTime();
        //           let elapsedSecs = Math.floor(diff / 1000); //86330
        //           let remainingTime = this.getTimeData(totalSecs - elapsedSecs);
        //           this.status = this.eatTime;
        //           this.status.hours = remainingTime.hours;
        //           this.status.minutes = remainingTime.minutes;
        //           this.status.seconds = remainingTime.seconds;
        //           this.isPlay = false;
        //           this.initialSeconds = totalSecs;
        //           if (this.resources.IS_DEBUG_MODE) console.log("Here");
        //           this.statusName = "eat";
        //           this.setTitle();
        //           this.startStage();
        //         }
        //         else {
        //           if (this.resources.IS_DEBUG_MODE) console.log("Here in else")
        //           this.resources.addCompletedFast(
        //             new CompletedFast(null, this.resources.getChosenFast(), 
        //             this.fastStartTime,
        //             null,
        //             null));
        //           this.resetTimer();
        //           this.storage.deleteFastStartTime();
        //         }
        //       }
        //     });
        //   }
        // })
      }

      ionViewWillEnter() {
        console.log("Timer - ionViewWillEnter");
        this.rest.validateToken().then(res => {
          console.log(res);

          if (res.status != 200) {
            this.navController.navigateBack("/login");
          }
        }, e => {
          console.error(e);
        });
        if (this.resources.IS_DEBUG_MODE) console.log(this.resources.getChosenFast());
        if (this.resources.IS_DEBUG_MODE) console.log(this.didReOpen, this.isPlay);

        if (!this.didReOpen && !this.isPlay && this.resources.getChosenFast()) {
          if (this.resources.IS_DEBUG_MODE) console.log(this.status);
          let chosen = this.resources.getChosenFast();
          let duration = new Date(chosen.getDuration());
          if (this.resources.IS_DEBUG_MODE) console.log(duration);
          if (this.resources.IS_DEBUG_MODE) console.log(new Date(duration));
          this.fastTime.hours = duration.getHours();
          this.fastTime.minutes = duration.getMinutes();
          this.fastTime.seconds = 0;
          this.setTitle();
          this.initialSeconds = this.getTotalSeconds(this.fastTime); //this.percent = this.getCurrentpercent();
        }

        if (this.resources.IS_DEBUG_MODE) console.log(window.screen);
      }

      ngOnInit() {
        console.log("Timer - ngOnInit");
        if (this.didReOpen) return;
        this.isPlay = false;
        this.percent = 100;
        this.status = this.fastTime;
        this.statusName = "fast";
        this.setTitle();
      }

      getTotalSeconds(obj) {
        return 3600 * obj.hours + 60 * obj.minutes + obj.seconds;
      }

      getTimeData(secs) {
        return {
          hours: Math.floor(secs / 3600),
          minutes: Math.floor(secs % 3600 / 60),
          seconds: secs % 60
        };
      }

      setTitle() {
        this.titleText = "" + (this.status.hours < 10 ? "0" + this.status.hours : this.status.hours) + ":" + (this.status.minutes < 10 ? "0" + this.status.minutes : this.status.minutes) + ":" + (this.status.seconds < 10 ? "0" + this.status.seconds : this.status.seconds);
      }

      resetTimer() {
        this.resources.setTimerInfo({}, "");
        this.didReOpen = false;
        this.percent = 100;
        this.fastTime.hours = this.fastTime.minutes = this.fastTime.seconds = 0;
        this.eatTime.hours = this.eatTime.minutes = this.eatTime.seconds = 0;
        this.status = this.fastTime;
        this.setTitle();
        this.isPlay = false;
        this.statusName = "fast";
        clearInterval(this.interval);
        this.interval = null;
        this.resources.setChosenFast(null);
      }

      stopTimer() {
        this.percent = 0;
        this.isPlay = false;
        clearInterval(this.interval);
        this.interval = null;
      }

      presentToast(toastMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var toast;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.toastController.create({
                  color: 'dark',
                  duration: 2000,
                  message: toastMessage,
                  showCloseButton: true
                });

              case 2:
                toast = _context.sent;
                _context.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      }

      startStage() {
        if (!this.didReOpen && !this.resources.getChosenFast()) {
          this.presentToast("Please Choose a Fast before starting");
          return;
        }

        this.percent = this.getCurrentpercent();
        if (this.resources.IS_DEBUG_MODE) console.log(this.percent);
        if (this.status.hours == 0 && this.status.minutes == 0 && this.status.seconds == 0) return;
        if (this.resources.IS_DEBUG_MODE) console.log(this.interval);

        if (this.interval) {
          this.isPlay = !this.isPlay;
          this.resetTimer(); // this.storage.deleteChosenFast();
          // this.storage.deleteFastStartTime();
        } else {
          if (!this.didReOpen) {
            if (this.statusName == "fast") {
              this.fastStartTime = new Date(); // this.storage.saveFastStartTime(this.fastStartTime);
              // this.storage.saveChosenFast(this.resources.getChosenFast());

              let cf = this.resources.getChosenFast();
              this.resources.setTimerInfo(cf, this.fastStartTime);
              console.log(cf);
              let time = {
                hours: cf.getDuration().getHours(),
                minutes: cf.getDuration().getMinutes(),
                seconds: 0
              };
              this.notif.makeNotifications(new Date(this.fastStartTime.getTime() + this.getTotalSeconds(time) * 1000), "Fasting Period Complete", 1);
              this.notif.makeNotifications(new Date(this.fastStartTime.getTime() + 86400 * 1000), "Fast Complete", 2);
            } else {
              this.eatStartTime = new Date();
            }
          }

          this.interval = setInterval(() => {
            if (this.status.seconds == 0) {
              this.status.seconds = 59;

              if (this.status.minutes == 0) {
                this.status.minutes = 59;
                this.status.hours -= 1;
              } else {
                this.status.minutes -= 1;
              }
            } else {
              this.status.seconds -= 1;
            }

            this.percent = this.getCurrentpercent();
            this.setTitle();

            if (this.status.hours == 0 && this.status.minutes == 0 && this.status.seconds == 0) {
              if (this.statusName === "fast") {
                this.startEat();
              } else {
                this.eatEndTime = new Date();
                this.stopTimer();
                let cf = new _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["CompletedFast"](null, this.resources.getChosenFast(), this.fastStartTime, this.eatStartTime, this.eatEndTime);
                this.resources.addCompletedFast(cf).then(() => {
                  // this.storage.deleteFastStartTime();
                  // this.storage.deleteChosenFast();
                  this.resetTimer();
                });
              }
            }
          }, 1000);
          this.isPlay = !this.isPlay;
        }
      }

      startEat() {
        this.isPlay = !this.isPlay;
        clearInterval(this.interval);
        this.interval = null;
        this.status = this.eatTime;
        this.statusName = "eat";
        let chosen = this.resources.getChosenFast();
        if (this.resources.IS_DEBUG_MODE) console.log(chosen);
        let duration = new Date(chosen.getDuration());
        this.getEatTime(duration.getHours(), duration.getMinutes());
        this.initialSeconds = this.getTotalSeconds(this.eatTime);
        this.percent = this.getCurrentpercent();
        this.setTitle();
        this.startStage();
      }

      getCurrentpercent() {
        let current = this.getTotalSeconds(this.status);
        let currentPercent = current / this.initialSeconds * 100;
        return currentPercent;
      }

      getEatTime(hours, minutes) {
        this.eatTime.hours = minutes > 0 ? 24 - hours - 1 : 24 - hours;
        this.eatTime.minutes = minutes > 0 ? 60 - minutes : minutes;
        this.eatTime.seconds = 0;
      }

    };

    TimerPage.ctorParameters = () => [{
      type: _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
    }, {
      type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
    }, {
      type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
    }, {
      type: _local_notifications_service__WEBPACK_IMPORTED_MODULE_7__["LocalNotificationsService"]
    }];

    TimerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/timer/timer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timer.page.scss */
      "./src/app/timer/timer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _local_notifications_service__WEBPACK_IMPORTED_MODULE_7__["LocalNotificationsService"]])], TimerPage);
    /***/
  }
}]);
//# sourceMappingURL=timer-timer-module-es5.js.map
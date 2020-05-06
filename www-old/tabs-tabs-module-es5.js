(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"timer\">\n      <ion-icon name=\"timer\"></ion-icon>\n      <ion-label>Timer</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"fast\">\n      <ion-icon name=\"alarm\"></ion-icon>\n      <ion-label>Fast</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"nutrition\">\n      <ion-icon name=\"nutrition\"></ion-icon>\n      <ion-label>Nutrition Log</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"history\">\n      <ion-icon name=\"analytics\"></ion-icon>\n      <ion-label>History</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"settings\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>Settings</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
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


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");

    const routes = [{
      path: '',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'fast',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | fast-fast-module */
          [__webpack_require__.e("default~fast-fast-module~timer-timer-module"), __webpack_require__.e("fast-fast-module")]).then(__webpack_require__.bind(null,
          /*! ../fast/fast.module */
          "./src/app/fast/fast.module.ts")).then(m => m.FastPageModule)
        }]
      }, {
        path: 'nutrition',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | nutrition-nutrition-module */
          "nutrition-nutrition-module").then(__webpack_require__.bind(null,
          /*! ../nutrition/nutrition.module */
          "./src/app/nutrition/nutrition.module.ts")).then(m => m.NutritionPageModule)
        }]
      }, {
        path: 'history',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | history-history-module */
          "history-history-module").then(__webpack_require__.bind(null,
          /*! ../history/history.module */
          "./src/app/history/history.module.ts")).then(m => m.HistoryPageModule)
        }]
      }, {
        path: 'settings',
        children: [{
          path: '',
          loadChildren: () => __webpack_require__.e(
          /*! import() | settings-settings-module */
          "settings-settings-module").then(__webpack_require__.bind(null,
          /*! ../settings/settings.module */
          "./src/app/settings/settings.module.ts")).then(m => m.SettingsPageModule)
        }]
      }, {
        path: 'timer',
        children: [{
          path: '',
          loadChildren: () => Promise.all(
          /*! import() | timer-timer-module */
          [__webpack_require__.e("default~fast-fast-module~timer-timer-module"), __webpack_require__.e("timer-timer-module")]).then(__webpack_require__.bind(null,
          /*! ../timer/timer.module */
          "./src/app/timer/timer.module.ts")).then(m => m.TimerPageModule)
        }]
      }, {
        path: '',
        redirectTo: '/tabs/fast',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: '/tabs/fast',
      pathMatch: 'full'
    }];
    let TabsPageRoutingModule = class TabsPageRoutingModule {};
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts"); // import { LocalNotificationsService } from '../local-notifications.service';


    let TabsPageModule = class TabsPageModule {};
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]] // providers: [LocalNotificationsService]

    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
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

    let TabsPage = class TabsPage {
      constructor(resources) {
        this.resources = resources;
      }

      ngOnInit() {
        this.resources.isLoggedIn.next(true);
      }

    };

    TabsPage.ctorParameters = () => [{
      type: _shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"]
    }];

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_resources_service__WEBPACK_IMPORTED_MODULE_2__["ResourcesService"]])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map
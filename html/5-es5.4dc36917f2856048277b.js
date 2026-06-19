function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5], {
  /***/
  "./src/app/Core/HomeModule/applicatorHome/applicatorHome-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/Core/HomeModule/applicatorHome/applicatorHome-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function _src_app_Core_HomeModule_applicatorHome_applicatorHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _applicatorHome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./applicatorHome.component */
    "./src/app/Core/HomeModule/applicatorHome/applicatorHome.component.ts");
    /* harmony import */


    var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");
    /* harmony import */


    var _shared_dashboards_applicator_dash_init_applicator_dash_init_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/dashboards/applicator-dash-init/applicator-dash-init.component */
    "./src/app/shared/dashboards/applicator-dash-init/applicator-dash-init.component.ts");
    /* harmony import */


    var _shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/components/yes-no-dialog/yes-no-dialog.component */
    "./src/app/shared/components/yes-no-dialog/yes-no-dialog.component.ts");
    /* harmony import */


    var _shared_components_imagePreview_imagePreview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/imagePreview/imagePreview.component */
    "./src/app/shared/components/imagePreview/imagePreview.component.ts");
    /* harmony import */


    var _shared_components_list_machinery_applicator_list_machinery_applicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/list-machinery-applicator/list-machinery-applicator.component */
    "./src/app/shared/components/list-machinery-applicator/list-machinery-applicator.component.ts");
    /* harmony import */


    var _shared_components_add_machinery_applicator_add_machinery_applicator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/add-machinery-applicator/add-machinery-applicator.component */
    "./src/app/shared/components/add-machinery-applicator/add-machinery-applicator.component.ts");
    /* harmony import */


    var _shared_components_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/work-order/work-order.component */
    "./src/app/shared/components/work-order/work-order.component.ts");
    /* harmony import */


    var _shared_components_extended_weather_extended_weather_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/components/extended-weather/extended-weather.component */
    "./src/app/shared/components/extended-weather/extended-weather.component.ts");
    /* harmony import */


    var _shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/components/help-index/help-index.component */
    "./src/app/shared/components/help-index/help-index.component.ts");
    /* harmony import */


    var _shared_components_applicator_password_applicator_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/components/applicator-password/applicator-password.component */
    "./src/app/shared/components/applicator-password/applicator-password.component.ts");
    /* harmony import */


    var _shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/components/user-panel/user-panel.component */
    "./src/app/shared/components/user-panel/user-panel.component.ts");
    /* harmony import */


    var _shared_components_versions_history_versions_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/components/versions-history/versions-history.component */
    "./src/app/shared/components/versions-history/versions-history.component.ts");
    /* harmony import */


    var _shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/components/messages/messages.component */
    "./src/app/shared/components/messages/messages.component.ts");
    /* harmony import */


    var _shared_components_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/components/drivers/drivers.component */
    "./src/app/shared/components/drivers/drivers.component.ts");
    /* harmony import */


    var _shared_components_add_driver_add_driver_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/components/add-driver/add-driver.component */
    "./src/app/shared/components/add-driver/add-driver.component.ts");
    /* harmony import */


    var _shared_components_driver_password_driver_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/components/driver-password/driver-password.component */
    "./src/app/shared/components/driver-password/driver-password.component.ts");
    /* harmony import */


    var _shared_components_modify_driver_modify_driver_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../shared/components/modify-driver/modify-driver.component */
    "./src/app/shared/components/modify-driver/modify-driver.component.ts");
    /* harmony import */


    var _shared_components_assign_driver_assign_driver_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/components/assign-driver/assign-driver.component */
    "./src/app/shared/components/assign-driver/assign-driver.component.ts");
    /* harmony import */


    var _shared_components_spray_detail_spray_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/components/spray-detail/spray-detail.component */
    "./src/app/shared/components/spray-detail/spray-detail.component.ts");

    var routes = [{
      path: '',
      component: _applicatorHome_component__WEBPACK_IMPORTED_MODULE_2__["ApplicatorHomeComponent"],
      children: [{
        path: 'a404',
        component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
      }, {
        path: 'applicatordashinit',
        component: _shared_dashboards_applicator_dash_init_applicator_dash_init_component__WEBPACK_IMPORTED_MODULE_4__["ApplicatorDashInitComponent"]
      }, {
        path: 'yesnodialog',
        component: _shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_5__["YesNoDialogComponent"]
      }, {
        path: 'imagepreview',
        component: _shared_components_imagePreview_imagePreview_component__WEBPACK_IMPORTED_MODULE_6__["ImagePreviewComponent"]
      }, {
        path: 'workOrder',
        component: _shared_components_work_order_work_order_component__WEBPACK_IMPORTED_MODULE_9__["WorkOrderComponent"]
      }, {
        path: 'workOrder/spraydetail',
        component: _shared_components_spray_detail_spray_detail_component__WEBPACK_IMPORTED_MODULE_21__["SprayDetailComponent"]
      }, {
        path: 'workOrder/assigndriver',
        component: _shared_components_assign_driver_assign_driver_component__WEBPACK_IMPORTED_MODULE_20__["AssignDriverComponent"]
      }, {
        path: 'listMachineryApplicator',
        component: _shared_components_list_machinery_applicator_list_machinery_applicator_component__WEBPACK_IMPORTED_MODULE_7__["ListMachineryApplicatorComponent"]
      }, {
        path: 'drivers',
        component: _shared_components_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_16__["DriversComponent"]
      }, {
        path: 'drivers/add',
        component: _shared_components_add_driver_add_driver_component__WEBPACK_IMPORTED_MODULE_17__["AddDriverComponent"]
      }, {
        path: 'drivers/modify',
        component: _shared_components_modify_driver_modify_driver_component__WEBPACK_IMPORTED_MODULE_19__["ModifyDriverComponent"]
      }, {
        path: 'drivers/password',
        component: _shared_components_driver_password_driver_password_component__WEBPACK_IMPORTED_MODULE_18__["DriverPasswordComponent"]
      }, {
        path: 'addMachinery',
        component: _shared_components_add_machinery_applicator_add_machinery_applicator_component__WEBPACK_IMPORTED_MODULE_8__["AddMachineryApplicatorComponent"]
      }, {
        path: 'extended-weather',
        component: _shared_components_extended_weather_extended_weather_component__WEBPACK_IMPORTED_MODULE_10__["ExtendedWeatherComponent"]
      }, {
        path: 'help-index',
        component: _shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_11__["HelpIndexComponent"]
      }, {
        path: 'change-password',
        component: _shared_components_applicator_password_applicator_password_component__WEBPACK_IMPORTED_MODULE_12__["ApplicatorPasswordComponent"]
      }, {
        path: 'userpanel',
        component: _shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_13__["UserPanelComponent"]
      }, {
        path: 'versions-history',
        component: _shared_components_versions_history_versions_history_component__WEBPACK_IMPORTED_MODULE_14__["VersionsHistoryComponent"]
      }, {
        path: 'messages',
        component: _shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"]
      }, {
        path: 'modifyContactComponent',
        component: _shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["ModifyContactComponent"]
      }]
    }];

    var HomeRoutingModule = /*#__PURE__*/_createClass(function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    });

    HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
    HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomeRoutingModule_Factory(t) {
        return new (t || HomeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Core/HomeModule/applicatorHome/applicatorHome.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/Core/HomeModule/applicatorHome/applicatorHome.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ApplicatorHomeComponent */

  /***/
  function _src_app_Core_HomeModule_applicatorHome_applicatorHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicatorHomeComponent", function () {
      return ApplicatorHomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/help-index/help-index.component */
    "./src/app/shared/components/help-index/help-index.component.ts");
    /* harmony import */


    var src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/change-password/change-password.component */
    "./src/app/shared/components/change-password/change-password.component.ts");
    /* harmony import */


    var _variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../variables/icon-urls */
    "./src/variables/icon-urls.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/globalVars/global-vars.service */
    "./src/app/services/globalVars/global-vars.service.ts");
    /* harmony import */


    var _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/socketIO/socketio.service */
    "./src/app/services/socketIO/socketio.service.ts");
    /* harmony import */


    var _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services/datauser/userdata.service */
    "./src/app/services/datauser/userdata.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/components/notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var _shared_components_applicator_menu_applicator_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/components/applicator-menu/applicator-menu.component */
    "./src/app/shared/components/applicator-menu/applicator-menu.component.ts");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    var _c0 = ["userMenuButton"];
    var _c1 = ["userMenuImage"];
    var _c2 = ["boxUserMenu"];

    function ApplicatorHomeComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ApplicatorHomeComponent_button_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_button_38_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return _r0.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ApplicatorHomeComponent_mat_icon_51_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_mat_icon_51_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r3.qNotifications);
      }
    }

    function ApplicatorHomeComponent_mat_icon_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_mat_icon_52_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ApplicatorHomeComponent_div_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ApplicatorHomeComponent_ng_template_56_img_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function ApplicatorHomeComponent_ng_template_56_img_0_Template_img_error_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r24.errorImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r23.avatarUrl, "", ctx_r23.applicatorData.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ApplicatorHomeComponent_ng_template_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ApplicatorHomeComponent_ng_template_56_img_0_Template, 1, 2, "img", 55);
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.errorImage);
      }
    }

    function ApplicatorHomeComponent_div_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ApplicatorHomeComponent_mat_icon_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 59);
      }
    }

    function ApplicatorHomeComponent_mat_icon_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 60);
      }
    }

    function ApplicatorHomeComponent_mat_icon_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 61);
      }
    }

    function ApplicatorHomeComponent_mat_icon_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-icon", 62);
      }
    }

    var ApplicatorHomeComponent = /*#__PURE__*/function () {
      function ApplicatorHomeComponent(matIconRegistry, domSanitizer, dialog, renderer, global, socketService, userDataService, translate, router, authService) {
        var _this = this;

        _classCallCheck(this, ApplicatorHomeComponent);

        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.dialog = dialog;
        this.renderer = renderer;
        this.global = global;
        this.socketService = socketService;
        this.userDataService = userDataService;
        this.translate = translate;
        this.router = router;
        this.authService = authService;
        this.flag = "flagAr";
        this.isMobile = false;
        this.opened = true;
        this.avatarUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imageUserUrl;
        this.sideBarOpen = true;
        this.userData = {
          email: "",
          firstName: "",
          idCity: {
            name: "",
            _id: ""
          },
          idCountry: {
            _id: "",
            eq_country: "es_AR",
            name: ""
          },
          idPlan: {
            description: "",
            _id: ""
          },
          idState: {
            _id: "",
            name: ""
          },
          idUser: "",
          image: "",
          lastName: "",
          level: 0,
          messageId: "",
          nameUser: "",
          score: 0,
          typeUser: ""
        };
        this.applicatorData = {
          idUser: "",
          idApplicator: "",
          image: "",
          nameApplicator: "",
          emailApplicator: ""
        };
        this.errorImage = false;
        this.qNotifications = 0;
        this.showFiller = false;
        this.notificationsDown = false;
        this.menuDown = false; // Cierra userMenu y notificaciones al hacer click en cualquier otro lado

        this.renderer.listen("window", "click", function (e) {
          var target = e.target; // userMenu

          if (target.id !== "userMenuButton" && target.id !== "userMenuImage" && target.id !== "boxUserMenu" && target.id !== "divUserMenu" && target.id !== "nameUserMenu" && target.id !== "emailUserMenu" && target.id !== "planUserMenu" && target.id !== "planLevelUserMenu" && target.id !== "avatarMenuImage" && target.id !== "avatarMenuErrorImage" && target.id !== "Capa_1" && target.id !== "noImage" && target.id !== "noImageIcon" && target.id !== "user-button" && target.id !== "user-button__avatar" && _this.menuDown) {
            _this.togglUserMenu();
          } // notificaciones


          if (target.id !== "Capa_1" && target.id !== "bellWithNotif" && target.id !== "bellWithoutNotif" && target.id !== "unreadnewPeriurbanSpray" && target.id !== "unreadAddContact" && target.id !== "generalNewPeriurbanSpray" && target.id !== "generalAddContact" && target.id !== "dateNewPeriurbanSpray" && target.id !== "dateAddContact" && target.id !== "tabsNotificaciones" && target.id !== "tabNotificaciones" && target.id !== "noLeidas" && target.id !== "iconLeidas" && target.id !== "remove_red_eye" && target.id !== "boxNotification" && _this.notificationsDown) {
            _this.toggleNotifi();
          }
        });
      }

      return _createClass(ApplicatorHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.versionClient = this.global.versionClient;
          this.socketService.setupSocketConnection();
          this.checkScreenSize();
          this.userDataService.getUserData().subscribe(function (userData) {
            _this2.userData = userData;
            _this2.applicatorData.nameApplicator = _this2.userData.nameUser;
            _this2.applicatorData.emailApplicator = _this2.userData.email;
            _this2.applicatorData.image = _this2.userData.image;
            var language = _this2.userData.idCountry && _this2.userData.idCountry.eq_country ? _this2.userData.idCountry.eq_country : 'es_AR';

            _this2.translate.use(language);

            var countryFlagMap = {
              es_AR: "flagAr",
              es_UY: "flagUy",
              es_PY: "flagPy",
              pt_BR: "flagBr"
            };

            if (_this2.userData.idCountry && countryFlagMap[_this2.userData.idCountry.eq_country]) {
              _this2.flag = countryFlagMap[_this2.userData.idCountry.eq_country];
            }
          });

          for (var icon in _variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsApplicator"]) {
            if (_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsApplicator"].hasOwnProperty(icon)) {
              this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsApplicator"][icon]));
            }
          } // this.applicatorsService.getApplicatorDataFromUser(this.userData.idUser).subscribe((applicator: any) => {
          //   this.authService.setApplicatorData(JSON.stringify(applicator.data[0]));
          //   this.applicatorData.idApplicator = this.userData._id;
          // });

        }
      }, {
        key: "helpIndex",
        value: function helpIndex() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          var dialogRef = this.dialog.open(src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_4__["HelpIndexComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function () {});
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.autoFocus = true;
          dialogConfig.data = {};
          var dialogRef = this.dialog.open(src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function () {});
        }
      }, {
        key: "errorImg",
        value: function errorImg() {
          this.errorImage = true;
        }
      }, {
        key: "loadNotifications",
        value: function loadNotifications(qNotifications) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
            return _regenerator().w(function (_context) {
              while (1) switch (_context.n) {
                case 0:
                  this.qNotifications = qNotifications;

                case 1:
                  return _context.a(2);
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "toggleNotifi",
        value: function toggleNotifi() {
          var box = document.getElementById('boxNotification');

          if (this.notificationsDown) {
            box.style.height = '0px';
            box.style.opacity = '0';
            box.style.zIndex = '-1000';
            this.notificationsDown = false;
          } else {
            box.style.height = '400px';
            box.style.opacity = '1';
            box.style.zIndex = '99999';
            this.notificationsDown = true;
          }
        }
      }, {
        key: "togglUserMenu",
        value: function togglUserMenu() {
          var box = document.getElementById('boxApplicatorMenu');

          if (this.menuDown) {
            box.style.height = '0px';
            box.style.opacity = '0';
            box.style.zIndex = '-1000';
            this.menuDown = false;
          } else {
            box.style.height = '400px';
            box.style.opacity = '1';
            box.style.zIndex = '99999';
            this.menuDown = true;
          }
        }
      }, {
        key: "switchLanguage",
        value: function switchLanguage(language) {
          this.translate.use(language);
        }
      }, {
        key: "onResize",
        value: function onResize() {
          this.checkScreenSize();
        }
      }, {
        key: "checkScreenSize",
        value: function checkScreenSize() {
          this.isMobile = window.innerWidth < 1024;
          this.opened = !this.isMobile;
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this3 = this;

          return this.authService.logout().subscribe(function (response) {
            if (response.success === true) {
              _this3.authService.deleteCookies();

              _this3.socketService.closeConn();

              _this3.router.navigate([""]);
            }
          }, function () {
            _this3.authService.deleteCookies();

            _this3.socketService.closeConn();

            _this3.router.navigate([""]);
          });
        }
      }]);
    }();

    ApplicatorHomeComponent.ɵfac = function ApplicatorHomeComponent_Factory(t) {
      return new (t || ApplicatorHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_9__["GlobalVarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_10__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_11__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]));
    };

    ApplicatorHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ApplicatorHomeComponent,
      selectors: [["app-applicatorhome"]],
      viewQuery: function ApplicatorHomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.userMenuButton = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.userMenuImage = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.boxUserMenu = _t.first);
        }
      },
      hostBindings: function ApplicatorHomeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ApplicatorHomeComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 100,
      vars: 48,
      consts: [["id", "menuDash", 1, "container-menu"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened", "disableClose", "openedChange"], ["drawer", ""], ["mat-icon-button", "", "class", "sidenav__close", 3, "click", 4, "ngIf"], [1, "sidenav__header"], [1, "sidenav__logo"], ["src", "../../../../assets/icon/logoBlanco.svg", "alt", "logo"], [1, "menu-list"], ["routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "dashboard"], ["svgIcon", "solicitud"], ["svgIcon", "chofer"], ["svgIcon", "maquina"], ["svgIcon", "partly_cloud"], ["svgIcon", "recomendacion"], [1, "white-text"], [1, "sidenav-header"], [1, "flex-header-sidenav"], ["mat-icon-button", "", "class", "menu-toggle", 3, "click", 4, "ngIf"], [1, "animation-title"], [1, "animation-title__static"], [3, "svgIcon"], [1, "animation-title__dynamic"], [2, "flex", "1 1 auto"], [1, "sidenav-header__buttons", "desktop-only"], ["routerLinkActive", "active", 2, "display", "flex", "justify-content", "center", 3, "routerLink"], ["svgIcon", "ayuda", 1, "btn-help"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click", 4, "ngIf"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "user-button", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", "margin", "0px 0px 0px 20px", 3, "click"], ["userMenuButton", ""], ["id", "noImage", 4, "ngIf", "ngIfElse"], ["Image", ""], ["id", "avatarMenuErrorImage", 4, "ngIf"], ["mat-button", "", 2, "width", "80px", "height", "40px", "padding", "0px", "margin", "20px"], ["svgIcon", "flagAr", "style", "width: 100%; height: 100%;", 4, "ngIf"], ["svgIcon", "flagBr", "style", "width: 100%; height: 100%;", 4, "ngIf"], ["svgIcon", "flagPy", "style", "width: 100%; height: 100%;", 4, "ngIf"], ["svgIcon", "flagUy", "style", "width: 100%; height: 100%;", 4, "ngIf"], [1, "mobile-only"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["moreMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["svgIcon", "ayuda"], ["mat-menu-item", ""], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "usuario"], [1, "container-bodys"], [3, "qNotifications"], ["mat-icon-button", "", 1, "sidenav__close", 3, "click"], ["mat-icon-button", "", 1, "menu-toggle", 3, "click"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click"], ["id", "noImage"], ["svgIcon", "usuario", "id", "noImageIcon"], ["id", "user-button__avatar", "width", "100", "height", "100", "style", "border-radius: 50px; width: 70px; height: 70px; padding: 0px;", 3, "src", "error", 4, "ngIf"], ["id", "user-button__avatar", "width", "100", "height", "100", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", 3, "src", "error"], ["id", "avatarMenuErrorImage"], ["svgIcon", "usuario", "id", "avatarMenuImage"], ["svgIcon", "flagAr", 2, "width", "100%", "height", "100%"], ["svgIcon", "flagBr", 2, "width", "100%", "height", "100%"], ["svgIcon", "flagPy", 2, "width", "100%", "height", "100%"], ["svgIcon", "flagUy", 2, "width", "100%", "height", "100%"]],
      template: function ApplicatorHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function ApplicatorHomeComponent_Template_mat_sidenav_openedChange_1_listener($event) {
            return ctx.opened = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ApplicatorHomeComponent_button_3_Template, 3, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-nav-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Orden de trabajo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Choferes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_a_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_a_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Clima");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_a_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mensajes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-toolbar", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ApplicatorHomeComponent_button_38_Template, 3, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, ApplicatorHomeComponent_mat_icon_51_Template, 1, 1, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ApplicatorHomeComponent_mat_icon_52_Template, 1, 0, "mat-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_button_click_53_listener() {
            return ctx.togglUserMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ApplicatorHomeComponent_div_55_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ApplicatorHomeComponent_ng_template_56_Template, 1, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ApplicatorHomeComponent_div_58_Template, 2, 0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, ApplicatorHomeComponent_mat_icon_60_Template, 1, 0, "mat-icon", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, ApplicatorHomeComponent_mat_icon_61_Template, 1, 0, "mat-icon", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, ApplicatorHomeComponent_mat_icon_62_Template, 1, 0, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ApplicatorHomeComponent_mat_icon_63_Template, 1, 0, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-menu", null, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](74, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_mat_icon_click_76_listener() {
            return ctx.toggleNotifi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_button_click_80_listener() {
            return ctx.togglUserMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "mat-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](89, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ApplicatorHomeComponent_Template_button_click_90_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](95, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "app-notifications", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("qNotifications", function ApplicatorHomeComponent_Template_app_notifications_qNotifications_98_listener($event) {
            return ctx.loadNotifications($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "app-applicator-menu");
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](57);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.isMobile ? "over" : "side")("opened", ctx.opened)("disableClose", !ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "applicatordashinit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "workOrder");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "drivers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "listMachineryApplicator");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 34, "FORMS.machinery"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "extended-weather");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Version: ", ctx.versionClient, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.opened);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx.global.activeIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 36, ctx.global.activeComponent));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "help-index");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qNotifications > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qNotifications == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.applicatorData.image == "0")("ngIfElse", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.idCountry && ctx.userData.idCountry.eq_country === "es_AR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.idCountry && ctx.userData.idCountry.eq_country === "pt_BR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.idCountry && ctx.userData.idCountry.eq_country === "es_PY");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.idCountry && ctx.userData.idCountry.eq_country === "es_UY");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "help-index");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](74, 38, "USER-MENU.help"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 40, "USER-MENU.notification"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 42, "USER-MENU.profile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("svgIcon", ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](89, 44, "USER-MENU.language"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](95, 46, "USER-MENU.logout"));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_21__["NotificationsComponent"], _shared_components_applicator_menu_applicator_menu_component__WEBPACK_IMPORTED_MODULE_22__["ApplicatorMenuComponent"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_23__["MatBadge"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
      styles: ["@charset \"UTF-8\";\n.icon-svg[_ngcontent-%COMP%] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.icon-svg[class*=icon-logo][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/logo01.svg);\n          mask-image: url(/src/assets/icon/logo01.svg);\n  color: #ffffff;\n}\n.icon-svg[class*=icon-dashboard][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/iconDashboard.svg);\n          mask-image: url(/src/assets/icon/iconDashboard.svg);\n  color: #ffffff;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 5px 5px;\n  border-radius: 15px;\n  background-color: #ffffff;\n}\n.border[_ngcontent-%COMP%] {\n  border: solid 1px #CCCCCC;\n}\n.mat-expanded.border[_ngcontent-%COMP%] {\n  border: solid 1px #00d963 !important;\n  \n}\n.mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0px 14px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 15px;\n  margin-bottom: 20px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type   [_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 5px 5px 10px rgba(34, 34, 36, 0.104);\n}\nmat-panel-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\nmat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00a99e;\n  stroke: 5px;\n  width: 15px;\n  height: 15px;\n  margin: 0px 5px 0px 0px;\n}\nmat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.flexTitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.flexTitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #00a99e;\n  font-weight: bold;\n}\n.contentInfo[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0px;\n  padding: 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  display: inline-block;\n  margin: 2px 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.campaign-act[_ngcontent-%COMP%] {\n  color: #00a99e;\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-style: solid;\n  border-top-width: 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em 1.5em;\n  \n}\n.imagenEstablecimiento[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-left: 0px;\n  height: 130px;\n  width: 130px;\n}\nmat-expansion-panel.history-campaign[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  border: 1px solid #ccc;\n}\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  mat-panel-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .imagenEstablecimiento[_ngcontent-%COMP%] {\n    width: 45px !important;\n    height: 105px;\n  }\n}\n.simple-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-bottom: 1em;\n  border: solid 1px #00d963;\n}\n.simple-card[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  margin: -8px 0px 0px 0px;\n}\n.simple-card[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  margin-right: 0.5em;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.no-data[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2em;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #101c2a;\n  display: flex;\n  justify-content: center;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 219, 99, 0.302);\n  border-radius: 0px;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 219, 99, 0.302) !important;\n}\n.mat-expansion-panel.mat-expansion-panel.border[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  width: calc(100% - 10px) !important;\n  \n  margin: 5px 6px !important;\n  \n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  \n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 1.5em;\n}\n.container-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\nul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 50%, #ccccccc7 100%) !important;\n  color: rgba(0, 0, 0, 0.87);\n  height: 100vh;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  padding-bottom: 2em;\n  background-color: #101c2a;\n  box-shadow: 5px 10px 10px 0px rgba(153, 153, 153, 0.63);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 3;\n}\n.sidenav__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.sidenav__logo[_ngcontent-%COMP%] {\n  text-align: center;\n  border-left: 5px solid #101c2a;\n}\n.sidenav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.sidenav__close[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  padding: 20px 0 2em 0;\n  border-left: 5px solid #101c2a;\n}\n.menu-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-list__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-list__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-list__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.menu-activities__item[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-activities__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-activities__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-activities__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-activities__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden !important;\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  z-index: 20000 !important;\n  background-color: #ffffff;\n  color: #101c2a;\n  box-shadow: 8px 10px 10px 0px rgba(153, 153, 153, 0.3);\n  box-sizing: border-box;\n}\n.flex-header-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: #00d963;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: #ffffff !important;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #101c2a !important;\n  width: 25px;\n  height: 25px;\n}\n\n.container-bodys[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  margin-top: 100px;\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n}\n\n.animation-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  margin-right: 20px;\n}\n.animation-title__static[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  fill: #00d963 !important;\n}\n.animation-title__dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 600;\n  font-family: \"Noto Sans\", sans-serif;\n  color: #00a99e;\n  animation: slide 3s steps(10) infinite;\n}\n@keyframes slide {\n  100% {\n    top: 0px;\n  }\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background: #ffffff;\n  border-left: 2px solid #00a99e;\n  animation: typing 2s steps(20) forwards;\n}\n@keyframes typing {\n  60%, 100% {\n    left: calc(100% + 30px);\n  }\n}\n\n  .mat-drawer-container {\n  position: relative !important;\n}\n  .mat-drawer-backdrop {\n  z-index: 2 !important;\n}\n  .mat-drawer.sidenav {\n  z-index: 3 !important;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.select-desktop-only[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n.mobile-only[_ngcontent-%COMP%], .select-mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 1024px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 0.5rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .mobile-only[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .select-mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n    width: 100%;\n    justify-content: space-between;\n    padding: 0rem 0.5rem 0.5rem 0.5rem;\n    margin-top: 0rem;\n  }\n\n  .mat-label-professional[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n  }\n\n  .sidenav-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0.5rem;\n    height: 110px;\n  }\n\n  .sidenav__close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  .sidenav__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .sidenav-header__buttons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .flex-header-sidenav[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    padding: 0rem !important;\n    justify-content: space-between;\n  }\n\n  .animation-title[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex-grow: 0;\n  }\n  .animation-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n  }\n\n  .animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    height: 50%;\n  }\n\n  .container-bodys[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n}\n@media (max-width: 767px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n\n@media (max-width: 480px) {\n  .container-bodys[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 28px !important;\n    height: 28px !important;\n  }\n  .menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApplicatorHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-applicatorhome',
          templateUrl: './applicatorHome.component.html',
          styleUrls: ['./applicatorHome.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: src_app_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_9__["GlobalVarsService"]
        }, {
          type: _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_10__["SocketioService"]
        }, {
          type: _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_11__["UserDataService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
        }];
      }, {
        userMenuButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userMenuButton', {
            "static": false
          }]
        }],
        userMenuImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['userMenuImage', {
            "static": false
          }]
        }],
        boxUserMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['boxUserMenu', {
            "static": false
          }]
        }],
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Core/HomeModule/applicatorHome/applicatorHome.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Core/HomeModule/applicatorHome/applicatorHome.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ApplicatorHomeModule */

  /***/
  function _src_app_Core_HomeModule_applicatorHome_applicatorHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicatorHomeModule", function () {
      return ApplicatorHomeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _applicatorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./applicatorHome-routing.module */
    "./src/app/Core/HomeModule/applicatorHome/applicatorHome-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _applicatorHome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./applicatorHome.component */
    "./src/app/Core/HomeModule/applicatorHome/applicatorHome.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/notifications/notifications.module */
    "./src/app/shared/components/notifications/notifications.module.ts");
    /* harmony import */


    var src_app_shared_components_applicator_menu_applicator_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/applicator-menu/applicator-menu.module */
    "./src/app/shared/components/applicator-menu/applicator-menu.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ApplicatorHomeModule = /*#__PURE__*/_createClass(function ApplicatorHomeModule() {
      _classCallCheck(this, ApplicatorHomeModule);
    });

    ApplicatorHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ApplicatorHomeModule
    });
    ApplicatorHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ApplicatorHomeModule_Factory(t) {
        return new (t || ApplicatorHomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _applicatorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"], src_app_shared_components_applicator_menu_applicator_menu_module__WEBPACK_IMPORTED_MODULE_8__["ApplicatorMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ApplicatorHomeModule, {
        declarations: [_applicatorHome_component__WEBPACK_IMPORTED_MODULE_4__["ApplicatorHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _applicatorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"], src_app_shared_components_applicator_menu_applicator_menu_module__WEBPACK_IMPORTED_MODULE_8__["ApplicatorMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicatorHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_applicatorHome_component__WEBPACK_IMPORTED_MODULE_4__["ApplicatorHomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _applicatorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"], src_app_shared_components_applicator_menu_applicator_menu_module__WEBPACK_IMPORTED_MODULE_8__["ApplicatorMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild()],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
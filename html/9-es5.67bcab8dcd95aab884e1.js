function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
  /***/
  "./src/app/Core/HomeModule/providerHome/providerHome-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Core/HomeModule/providerHome/providerHome-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function _src_app_Core_HomeModule_providerHome_providerHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _providerHome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./providerHome.component */
    "./src/app/Core/HomeModule/providerHome/providerHome.component.ts");
    /* harmony import */


    var _shared_dashboards_provider_dash_init_provider_dash_init_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/dashboards/provider-dash-init/provider-dash-init.component */
    "./src/app/shared/dashboards/provider-dash-init/provider-dash-init.component.ts");
    /* harmony import */


    var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_list_distribution_points_list_distribution_points_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/provider/list-distribution-points/list-distribution-points.component */
    "./src/app/shared/components/provider/list-distribution-points/list-distribution-points.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_add_distribution_point_add_distribution_point_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/provider/add-distribution-point/add-distribution-point.component */
    "./src/app/shared/components/provider/add-distribution-point/add-distribution-point.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_modify_distribution_point_modify_distribution_point_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/provider/modify-distribution-point/modify-distribution-point.component */
    "./src/app/shared/components/provider/modify-distribution-point/modify-distribution-point.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/provider/products/products.component */
    "./src/app/shared/components/provider/products/products.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/components/provider/sales-order/sales-order.component */
    "./src/app/shared/components/provider/sales-order/sales-order.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_product_offers_product_offers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/components/provider/product-offers/product-offers.component */
    "./src/app/shared/components/provider/product-offers/product-offers.component.ts");
    /* harmony import */


    var src_app_shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/components/user-panel/user-panel.component */
    "./src/app/shared/components/user-panel/user-panel.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_carriers_carriers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/components/provider/carriers/carriers.component */
    "./src/app/shared/components/provider/carriers/carriers.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_add_carrier_add_carrier_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/components/provider/add-carrier/add-carrier.component */
    "./src/app/shared/components/provider/add-carrier/add-carrier.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_modify_carrier_modify_carrier_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/components/provider/modify-carrier/modify-carrier.component */
    "./src/app/shared/components/provider/modify-carrier/modify-carrier.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/shared/components/provider/sales-order-detail/sales-order-detail.component */
    "./src/app/shared/components/provider/sales-order-detail/sales-order-detail.component.ts");
    /* harmony import */


    var src_app_shared_components_provider_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/shared/components/provider/add-product/add-product.component */
    "./src/app/shared/components/provider/add-product/add-product.component.ts");

    var routes = [{
      path: '',
      component: _providerHome_component__WEBPACK_IMPORTED_MODULE_2__["ProviderHomeComponent"],
      children: [{
        path: 'provdashinit',
        component: _shared_dashboards_provider_dash_init_provider_dash_init_component__WEBPACK_IMPORTED_MODULE_3__["ProviderDashInitComponent"]
      }, {
        path: 'distributionpoints',
        component: src_app_shared_components_provider_list_distribution_points_list_distribution_points_component__WEBPACK_IMPORTED_MODULE_5__["ListDistributionPointsComponent"]
      }, {
        path: 'addDistributionPoint',
        component: src_app_shared_components_provider_add_distribution_point_add_distribution_point_component__WEBPACK_IMPORTED_MODULE_6__["AddDistributionPointComponent"]
      }, {
        path: 'modifyDistributionPoint',
        component: src_app_shared_components_provider_modify_distribution_point_modify_distribution_point_component__WEBPACK_IMPORTED_MODULE_7__["ModifyDistributionPointComponent"]
      }, {
        path: 'products',
        component: src_app_shared_components_provider_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"]
      }, {
        path: 'productsoffers',
        component: src_app_shared_components_provider_product_offers_product_offers_component__WEBPACK_IMPORTED_MODULE_10__["ProductOffersComponent"]
      }, {
        path: 'salesorders',
        component: src_app_shared_components_provider_sales_order_sales_order_component__WEBPACK_IMPORTED_MODULE_9__["SalesOrderComponent"]
      }, {
        path: "salesorders/detail",
        component: src_app_shared_components_provider_sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_15__["SalesOrderDetailComponent"]
      }, {
        path: "carriers",
        component: src_app_shared_components_provider_carriers_carriers_component__WEBPACK_IMPORTED_MODULE_12__["CarriersComponent"]
      }, {
        path: "carriers/add",
        component: src_app_shared_components_provider_add_carrier_add_carrier_component__WEBPACK_IMPORTED_MODULE_13__["AddCarrierComponent"]
      }, {
        path: "carriers/modify",
        component: src_app_shared_components_provider_modify_carrier_modify_carrier_component__WEBPACK_IMPORTED_MODULE_14__["ModifyCarrierComponent"]
      }, {
        path: 'userpanel',
        component: src_app_shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_11__["UserPanelComponent"]
      }, {
        path: 'a404',
        component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
      }, {
        path: 'addProduct',
        component: src_app_shared_components_provider_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_16__["AddProductComponent"]
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
  "./src/app/Core/HomeModule/providerHome/providerHome.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Core/HomeModule/providerHome/providerHome.component.ts ***!
    \************************************************************************/

  /*! exports provided: ProviderHomeComponent */

  /***/
  function _src_app_Core_HomeModule_providerHome_providerHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProviderHomeComponent", function () {
      return ProviderHomeComponent;
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


    var _shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/help-index/help-index.component */
    "./src/app/shared/components/help-index/help-index.component.ts");
    /* harmony import */


    var _variables_icon_urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../variables/icon-urls */
    "./src/variables/icon-urls.ts");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/globalVars/global-vars.service */
    "./src/app/services/globalVars/global-vars.service.ts");
    /* harmony import */


    var _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services/datauser/userdata.service */
    "./src/app/services/datauser/userdata.service.ts");
    /* harmony import */


    var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/companies/companies.service */
    "./src/app/services/companies/companies.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/components/notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var _shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/components/user-menu/user-menu.component */
    "./src/app/shared/components/user-menu/user-menu.component.ts");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    var _c0 = ["userMenuButton"];
    var _c1 = ["userMenuImage"];
    var _c2 = ["boxUserMenu"];

    function ProviderHomeComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

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

    function ProviderHomeComponent_button_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_button_36_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

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

    function ProviderHomeComponent_mat_icon_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_mat_icon_49_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r3.qNotifications);
      }
    }

    function ProviderHomeComponent_mat_icon_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_mat_icon_50_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProviderHomeComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProviderHomeComponent_ng_template_54_img_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function ProviderHomeComponent_ng_template_54_img_0_Template_img_error_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r21.errorImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r20.avatarUrl, "", ctx_r20.userData.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ProviderHomeComponent_ng_template_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProviderHomeComponent_ng_template_54_img_0_Template, 1, 2, "img", 55);
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.errorImage);
      }
    }

    function ProviderHomeComponent_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProviderHomeComponent_mat_icon_70_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_mat_icon_70_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r23.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ProviderHomeComponent = /*#__PURE__*/function () {
      function ProviderHomeComponent( //private router: Router,
      matIconRegistry, domSanitizer, dialog, renderer, translate, global, userDataService, companiesService, breakpointObserver) {
        var _this = this;

        _classCallCheck(this, ProviderHomeComponent);

        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.dialog = dialog;
        this.renderer = renderer;
        this.translate = translate;
        this.global = global;
        this.userDataService = userDataService;
        this.companiesService = companiesService;
        this.breakpointObserver = breakpointObserver;
        this.avatarUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imageUserUrl;
        this.opened = true;
        this.isMobile = false;
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
        this.companyData = {
          name: "",
          idCompany: "",
          idCountry: "",
          logo: ""
        };
        this.flag = "es_AR";
        this.qNotifications = 0;
        this.notificationsDown = false;
        this.menuDown = false;
        this.errorImage = false;
        this.showFiller = false; // Cierra userMenu y notificaciones al hacer click en cualquier otro lado

        this.renderer.listen("window", "click", function (e) {
          var target = e.target; // userMenu

          if (target.id !== "userMenuButton" && target.id !== "userMenuImage" && target.id !== "user-button" && target.id !== "user-button__avatar" && target.id !== "boxUserMenu" && target.id !== "divUserMenu" && target.id !== "nameUserMenu" && target.id !== "emailUserMenu" && target.id !== "planUserMenu" && target.id !== "planLevelUserMenu" && target.id !== "avatarMenuImage" && target.id !== "avatarMenuErrorImage" && target.id !== "Capa_1" && target.id !== "noImage" && target.id !== "noImageIcon" && _this.menuDown) {
            _this.togglUserMenu();
          } // notificaciones


          if (target.id !== "Capa_1" && target.id !== "bellWithNotif" && target.id !== "bellWithoutNotif" && target.id !== "unreadnewPeriurbanSpray" && target.id !== "unreadAddContact" && target.id !== "generalNewPeriurbanSpray" && target.id !== "generalAddContact" && target.id !== "dateNewPeriurbanSpray" && target.id !== "dateAddContact" && target.id !== "tabsNotificaciones" && target.id !== "tabNotificaciones" && target.id !== "noLeidas" && target.id !== "iconLeidas" && target.id !== "remove_red_eye" && target.id !== "boxNotification" && _this.notificationsDown) {
            _this.toggleNotifi();
          }
        });
        this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["Breakpoints"].Tablet]).subscribe(function (result) {
          _this.isMobile = result.matches;
          _this.opened = !_this.isMobile;
        });
      }

      return _createClass(ProviderHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.versionClient = this.global.versionClient;
          this.$userDataSubscription = this.userDataService.getUserData().subscribe(function (data) {
            if (!data) {
              return;
            }

            _this2.userData = data;
            var language = _this2.userData.idCountry && _this2.userData.idCountry.eq_country ? _this2.userData.idCountry.eq_country : "es_AR";

            _this2.translate.use(language);

            var countryFlagMap = {
              es_AR: "flagAr",
              es_UY: "flagUy",
              es_PY: "flagPy",
              pt_BR: "flagBr"
            };

            if (_this2.userData.idCountry && countryFlagMap[_this2.userData.idCountry.eq_country]) {
              _this2.flag = countryFlagMap[_this2.userData.idCountry.eq_country];
            } // Use idCompany from user data if available, fallback to relatedUser search


            var companyQuery = _this2.userData['idCompany'] ? {
              idCompany: _this2.userData['idCompany']
            } : {
              relatedUser: _this2.userData.idUser
            };

            _this2.companiesService.get(companyQuery).subscribe(function (response) {
              if (response.success) {
                _this2.companiesService.setCompanyData(response.data[0]);

                _this2.companyData = response.data[0];
              }
            }, function (error) {
              console.error('[ProviderHome] Error fetching company:', error);
            });
          });

          for (var icon in _variables_icon_urls__WEBPACK_IMPORTED_MODULE_5__["iconsProvider"]) {
            if (_variables_icon_urls__WEBPACK_IMPORTED_MODULE_5__["iconsProvider"].hasOwnProperty(icon)) {
              this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(_variables_icon_urls__WEBPACK_IMPORTED_MODULE_5__["iconsProvider"][icon]));
            }
          }
        }
      }, {
        key: "switchLanguage",
        value: function switchLanguage(language) {
          this.translate.use(language);
        }
      }, {
        key: "helpIndex",
        value: function helpIndex() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          var dialogRef = this.dialog.open(_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_4__["HelpIndexComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function () {});
        }
      }, {
        key: "toggleNotifi",
        value: function toggleNotifi() {
          var box = document.getElementById("boxNotification");

          if (this.notificationsDown) {
            box.style.height = "0px";
            box.style.opacity = "0";
            box.style.zIndex = "-1000";
            this.notificationsDown = false;
          } else {
            box.style.height = "400px";
            box.style.opacity = "1";
            box.style.zIndex = "99999";
            this.notificationsDown = true;
          }
        }
      }, {
        key: "togglUserMenu",
        value: function togglUserMenu() {
          var box = document.getElementById("boxUserMenu");

          if (this.menuDown) {
            box.style.height = "0px";
            box.style.opacity = "0";
            box.style.zIndex = "-1000";
            this.menuDown = false;
          } else {
            box.style.height = "400px";
            box.style.opacity = "1";
            box.style.zIndex = "99999";
            this.menuDown = true;
          }
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
        key: "errorImg",
        value: function errorImg() {
          this.errorImage = true;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a;

          (_a = this.$userDataSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          this.companiesService.clearCompanyData();
        }
      }]);
    }();

    ProviderHomeComponent.ɵfac = function ProviderHomeComponent_Factory(t) {
      return new (t || ProviderHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_10__["GlobalVarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_11__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_12__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]));
    };

    ProviderHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProviderHomeComponent,
      selectors: [["app-providerHome"]],
      viewQuery: function ProviderHomeComponent_Query(rf, ctx) {
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
      decls: 85,
      vars: 30,
      consts: [["id", "menuDash", 1, "container-menu"], ["fixedInViewport", "true", "mode", "side", "disableClose", "true", 1, "sidenav", 3, "mode", "opened", "disableClose", "openedChange"], ["drawer", ""], ["mat-icon-button", "", "class", "sidenav__close", 3, "click", 4, "ngIf"], [1, "sidenav__header"], [1, "sidenav__logo"], ["src", "../../../../assets/icon/logoBlanco.svg", "alt", "logo"], [1, "menu-list"], ["routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "dashboard"], ["routerLinkActive", "active", "id", "distributionpoints", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "locationTruck", 2, "width", "35px !important", "height", "35px !important"], ["routerLinkActive", "active", "id", "fieldsSelector", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "products", 2, "width", "32px !important", "height", "32px !important"], ["routerLinkActive", "active", "id", "lotsSelector", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "transporte", 2, "width", "35px !important", "height", "35px !important"], ["svgIcon", "ordenCompra", 2, "width", "33px !important", "height", "33px !important"], [1, "white-text"], [2, "overflow-x", "hidden"], [1, "sidenav-header"], [1, "flex-header-sidenav"], ["mat-icon-button", "", "class", "menu-toggle", 3, "click", 4, "ngIf"], [1, "animation-title"], [1, "animation-title__static"], [3, "svgIcon"], [1, "animation-title__dynamic"], [2, "flex", "1 1 auto"], [1, "sidenav-header__buttons", "desktop-only"], ["routerLinkActive", "active", 2, "display", "flex", "justify-content", "center", 3, "routerLink"], ["svgIcon", "ayuda", 1, "btn-help"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click", 4, "ngIf"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "user-button", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0", "margin-left", "20px", 3, "click"], ["userMenuButton", ""], ["id", "noImage", 4, "ngIf", "ngIfElse"], ["Image", ""], ["id", "avatarMenuErrorImage", 4, "ngIf"], ["mat-button", "", 2, "width", "80px", "height", "40px", "padding", "0", "margin", "20px"], [2, "width", "100%", "height", "100%", 3, "svgIcon"], [1, "mobile-only"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["moreMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["svgIcon", "ayuda"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["svgIcon", "usuario"], [1, "container-bodys"], [3, "qNotifications"], ["mat-icon-button", "", 1, "sidenav__close", 3, "click"], ["mat-icon-button", "", 1, "menu-toggle", 3, "click"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click"], ["id", "noImage"], ["svgIcon", "usuario", "id", "noImageIcon"], ["id", "user-button__avatar", "width", "100", "height", "100", "style", "border-radius: 50px; width: 70px; height: 70px; padding: 0;", 3, "src", "error", 4, "ngIf"], ["id", "user-button__avatar", "width", "100", "height", "100", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0", 3, "src", "error"], ["id", "avatarMenuErrorImage"], ["svgIcon", "usuario", "id", "avatarMenuImage"]],
      template: function ProviderHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function ProviderHomeComponent_Template_mat_sidenav_openedChange_1_listener($event) {
            return ctx.opened = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProviderHomeComponent_button_3_Template, 3, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-nav-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Puntos de distribucion");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_Template_a_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Productos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_Template_a_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Transportes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_Template_a_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Ordenes de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " venta");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-sidenav-content", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-toolbar", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProviderHomeComponent_button_36_Template, 3, 0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "mat-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ProviderHomeComponent_mat_icon_49_Template, 1, 1, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ProviderHomeComponent_mat_icon_50_Template, 1, 0, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_Template_button_click_51_listener() {
            return ctx.togglUserMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ProviderHomeComponent_div_53_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ProviderHomeComponent_ng_template_54_Template, 1, 1, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, ProviderHomeComponent_div_56_Template, 2, 0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-menu", null, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Ayuda");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, ProviderHomeComponent_mat_icon_70_Template, 1, 0, "mat-icon", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Notificaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProviderHomeComponent_Template_button_click_73_listener() {
            return ctx.togglUserMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "mat-icon", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Perfil");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Idioma");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "app-notifications", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("qNotifications", function ProviderHomeComponent_Template_app_notifications_qNotifications_83_listener($event) {
            return ctx.loadNotifications($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "app-user-menu");
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](55);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.isMobile ? "over" : "side")("opened", ctx.opened)("disableClose", !ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "provdashinit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 26, "MENU.home"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "distributionpoints");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "products");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "carriers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "salesorders");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Version: ", ctx.versionClient, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.opened);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx.global.activeIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 28, ctx.global.activeComponent));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "help-index");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qNotifications > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qNotifications == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.image === "0")("ngIfElse", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("svgIcon", ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "help-index");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qNotifications == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("svgIcon", ctx.flag);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_20__["NotificationsComponent"], _shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_21__["UserMenuComponent"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadge"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["@charset \"UTF-8\";\n.icon-svg[_ngcontent-%COMP%] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.icon-svg[class*=icon-logo][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/logo01.svg);\n          mask-image: url(/src/assets/icon/logo01.svg);\n  color: #ffffff;\n}\n.icon-svg[class*=icon-dashboard][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/iconDashboard.svg);\n          mask-image: url(/src/assets/icon/iconDashboard.svg);\n  color: #ffffff;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 1.5em;\n}\n.container-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\nul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 50%, #ccccccc7 100%) !important;\n  color: rgba(0, 0, 0, 0.87);\n  height: 100vh;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  padding-bottom: 2em;\n  background-color: #101c2a;\n  box-shadow: 5px 10px 10px 0px rgba(153, 153, 153, 0.63);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 3;\n}\n.sidenav__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.sidenav__logo[_ngcontent-%COMP%] {\n  text-align: center;\n  border-left: 5px solid #101c2a;\n}\n.sidenav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.sidenav__close[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  padding: 20px 0 2em 0;\n  border-left: 5px solid #101c2a;\n}\n.menu-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-list__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-list__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-list__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.menu-activities__item[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-activities__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-activities__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-activities__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-activities__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden !important;\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  z-index: 20000 !important;\n  background-color: #ffffff;\n  color: #101c2a;\n  box-shadow: 8px 10px 10px 0px rgba(153, 153, 153, 0.3);\n  box-sizing: border-box;\n}\n.flex-header-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: #00d963;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: #ffffff !important;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #101c2a !important;\n  width: 25px;\n  height: 25px;\n}\n\n.container-bodys[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  margin-top: 100px;\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n}\n\n.animation-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  margin-right: 20px;\n}\n.animation-title__static[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  fill: #00d963 !important;\n}\n.animation-title__dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 600;\n  font-family: \"Noto Sans\", sans-serif;\n  color: #00a99e;\n  animation: slide 3s steps(10) infinite;\n}\n@keyframes slide {\n  100% {\n    top: 0px;\n  }\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background: #ffffff;\n  border-left: 2px solid #00a99e;\n  animation: typing 2s steps(20) forwards;\n}\n@keyframes typing {\n  60%, 100% {\n    left: calc(100% + 30px);\n  }\n}\n\n  .mat-drawer-container {\n  position: relative !important;\n}\n  .mat-drawer-backdrop {\n  z-index: 2 !important;\n}\n  .mat-drawer.sidenav {\n  z-index: 3 !important;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.select-desktop-only[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n.mobile-only[_ngcontent-%COMP%], .select-mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 1024px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 0.5rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .mobile-only[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .select-mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n    width: 100%;\n    justify-content: space-between;\n    padding: 0rem 0.5rem 0.5rem 0.5rem;\n    margin-top: 0rem;\n  }\n\n  .mat-label-professional[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n  }\n\n  .sidenav-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0.5rem;\n    height: 110px;\n  }\n\n  .sidenav__close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  .sidenav__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .sidenav-header__buttons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .flex-header-sidenav[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    padding: 0rem !important;\n    justify-content: space-between;\n  }\n\n  .animation-title[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex-grow: 0;\n  }\n  .animation-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n  }\n\n  .animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    height: 50%;\n  }\n\n  .container-bodys[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n}\n@media (max-width: 767px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n\n@media (max-width: 480px) {\n  .container-bodys[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 28px !important;\n    height: 28px !important;\n  }\n  .menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.flex-header-sidenav[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n.flex-header-sidenav[_ngcontent-%COMP%]   .flex-professional[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  flex-grow: 9;\n}\n.mat-label-professional[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin-bottom: -4px;\n  margin-top: -1em;\n  color: #CCCCCC;\n}\n.search-agrohub[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 0.5px solid #101c2a;\n  border-radius: 5px;\n  padding: 0em 0.5em;\n  margin: 0px;\n  box-sizing: border-box;\n  display: flex;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  color: #101c2a;\n  font-size: 0.8rem;\n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #101c2a;\n  opacity: 1;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #101c2a;\n  opacity: 1;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #101c2a;\n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #101c2a;\n}\n.search-agrohub[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 0.8rem;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  padding: 0em !important;\n}\n.sidenav-header[_ngcontent-%COMP%]   .flex-header-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 1rem;\n  width: 100%;\n}\n.sidenav-header[_ngcontent-%COMP%]   .flex-header-sidenav[_ngcontent-%COMP%]   .animation-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.sidenav-header[_ngcontent-%COMP%]   .flex-header-sidenav[_ngcontent-%COMP%]   .sidenav-header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProviderHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-providerHome',
          templateUrl: './providerHome.component.html',
          styleUrls: ['./providerHome.component.scss']
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
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_10__["GlobalVarsService"]
        }, {
          type: _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_11__["UserDataService"]
        }, {
          type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_12__["CompaniesService"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["BreakpointObserver"]
        }];
      }, {
        userMenuButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["userMenuButton", {
            "static": false
          }]
        }],
        userMenuImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["userMenuImage", {
            "static": false
          }]
        }],
        boxUserMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["boxUserMenu", {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/Core/HomeModule/providerHome/providerHome.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/Core/HomeModule/providerHome/providerHome.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ProviderHomeModule */

  /***/
  function _src_app_Core_HomeModule_providerHome_providerHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProviderHomeModule", function () {
      return ProviderHomeModule;
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


    var _providerHome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./providerHome-routing.module */
    "./src/app/Core/HomeModule/providerHome/providerHome-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _providerHome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./providerHome.component */
    "./src/app/Core/HomeModule/providerHome/providerHome.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/angular-material.module */
    "./src/app/angular-material.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/notifications/notifications.module */
    "./src/app/shared/components/notifications/notifications.module.ts");
    /* harmony import */


    var src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/components/user-menu/user-menu.module */
    "./src/app/shared/components/user-menu/user-menu.module.ts");

    var ProviderHomeModule = /*#__PURE__*/_createClass(function ProviderHomeModule() {
      _classCallCheck(this, ProviderHomeModule);
    });

    ProviderHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProviderHomeModule
    });
    ProviderHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProviderHomeModule_Factory(t) {
        return new (t || ProviderHomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _providerHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_9__["UserMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProviderHomeModule, {
        declarations: [_providerHome_component__WEBPACK_IMPORTED_MODULE_4__["ProviderHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _providerHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_9__["UserMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProviderHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_providerHome_component__WEBPACK_IMPORTED_MODULE_4__["ProviderHomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _providerHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(), src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_9__["UserMenuModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
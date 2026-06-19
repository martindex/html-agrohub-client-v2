function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8], {
  /***/
  "./src/app/Core/HomeModule/professionalHome/professionalHome-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/Core/HomeModule/professionalHome/professionalHome-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function _src_app_Core_HomeModule_professionalHome_professionalHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _professionalHome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./professionalHome.component */
    "./src/app/Core/HomeModule/professionalHome/professionalHome.component.ts");
    /* harmony import */


    var _shared_dashboards_professional_dash_init_professional_dash_init_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/dashboards/professional-dash-init/professional-dash-init.component */
    "./src/app/shared/dashboards/professional-dash-init/professional-dash-init.component.ts");
    /* harmony import */


    var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_list_farmers_share_list_farmers_share_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/professional/list-farmers-share/list-farmers-share.component */
    "./src/app/shared/components/professional/list-farmers-share/list-farmers-share.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_campaigns_farmer_campaigns_farmer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/components/professional/campaigns-farmer/campaigns-farmer.component */
    "./src/app/shared/components/professional/campaigns-farmer/campaigns-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_fields_farmer_fields_farmer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/components/professional/fields-farmer/fields-farmer.component */
    "./src/app/shared/components/professional/fields-farmer/fields-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_lots_farmer_lots_farmer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/professional/lots-farmer/lots-farmer.component */
    "./src/app/shared/components/professional/lots-farmer/lots-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_add_lot_add_lot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/components/add-lot/add-lot.component */
    "./src/app/shared/components/add-lot/add-lot.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_sprays_farmer_sprays_farmer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/components/professional/sprays-farmer/sprays-farmer.component */
    "./src/app/shared/components/professional/sprays-farmer/sprays-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_add_spray_farmer_add_spray_farmer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/components/professional/add-spray-farmer/add-spray-farmer.component */
    "./src/app/shared/components/professional/add-spray-farmer/add-spray-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_crop_process_crop_process_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/components/crop-process/crop-process.component */
    "./src/app/shared/components/crop-process/crop-process.component.ts");
    /* harmony import */


    var src_app_shared_components_modify_lot_modify_lot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/components/modify-lot/modify-lot.component */
    "./src/app/shared/components/modify-lot/modify-lot.component.ts");
    /* harmony import */


    var src_app_shared_components_modify_field_modify_field_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/shared/components/modify-field/modify-field.component */
    "./src/app/shared/components/modify-field/modify-field.component.ts");
    /* harmony import */


    var src_app_shared_components_add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/shared/components/add-campaign/add-campaign.component */
    "./src/app/shared/components/add-campaign/add-campaign.component.ts");
    /* harmony import */


    var src_app_shared_components_modify_campaign_modify_campaign_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/shared/components/modify-campaign/modify-campaign.component */
    "./src/app/shared/components/modify-campaign/modify-campaign.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_campaign_history_farmer_campaign_history_farmer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/app/shared/components/professional/campaign-history-farmer/campaign-history-farmer.component */
    "./src/app/shared/components/professional/campaign-history-farmer/campaign-history-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_field_history_farmer_field_history_farmer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! src/app/shared/components/professional/field-history-farmer/field-history-farmer.component */
    "./src/app/shared/components/professional/field-history-farmer/field-history-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! src/app/shared/components/user-panel/user-panel.component */
    "./src/app/shared/components/user-panel/user-panel.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/app/shared/components/professional/prescriptions/prescriptions.component */
    "./src/app/shared/components/professional/prescriptions/prescriptions.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_add_prescription_add_prescription_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/shared/components/professional/add-prescription/add-prescription.component */
    "./src/app/shared/components/professional/add-prescription/add-prescription.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_detail_spray_farmer_detail_spray_farmer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! src/app/shared/components/professional/detail-spray-farmer/detail-spray-farmer.component */
    "./src/app/shared/components/professional/detail-spray-farmer/detail-spray-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_modify_prescription_modify_prescription_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! src/app/shared/components/professional/modify-prescription/modify-prescription.component */
    "./src/app/shared/components/professional/modify-prescription/modify-prescription.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_direct_direct_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! src/app/shared/components/professional/direct/direct.component */
    "./src/app/shared/components/professional/direct/direct.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_direct_sale_products_direct_sale_products_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! src/app/shared/components/professional/direct-sale-products/direct-sale-products.component */
    "./src/app/shared/components/professional/direct-sale-products/direct-sale-products.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_direct_confirm_direct_confirm_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! src/app/shared/components/professional/direct-confirm/direct-confirm.component */
    "./src/app/shared/components/professional/direct-confirm/direct-confirm.component.ts");
    /* harmony import */


    var src_app_shared_components_professional_direct_dash_direct_dash_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! src/app/shared/components/professional/direct-dash/direct-dash.component */
    "./src/app/shared/components/professional/direct-dash/direct-dash.component.ts");
    /* harmony import */


    var src_app_shared_components_direct_locations_add_direct_location_add_direct_location_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! src/app/shared/components/direct-locations/add-direct-location/add-direct-location.component */
    "./src/app/shared/components/direct-locations/add-direct-location/add-direct-location.component.ts");

    var routes = [{
      path: '',
      component: _professionalHome_component__WEBPACK_IMPORTED_MODULE_2__["ProfessionalHomeComponent"],
      children: [{
        path: 'profdashinit',
        component: _shared_dashboards_professional_dash_init_professional_dash_init_component__WEBPACK_IMPORTED_MODULE_3__["ProfessionalDashInitComponent"]
      }, {
        path: 'listfarmers',
        component: src_app_shared_components_professional_list_farmers_share_list_farmers_share_component__WEBPACK_IMPORTED_MODULE_5__["ListFarmersShareComponent"]
      }, {
        path: 'campaignsfarmer',
        component: src_app_shared_components_professional_campaigns_farmer_campaigns_farmer_component__WEBPACK_IMPORTED_MODULE_6__["CampaignsFarmerComponent"]
      }, {
        path: 'campaignsfarmer/addcampaign',
        component: src_app_shared_components_add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_15__["AddCampaignComponent"]
      }, {
        path: 'campaignsfarmer/modifycampaign',
        component: src_app_shared_components_modify_campaign_modify_campaign_component__WEBPACK_IMPORTED_MODULE_16__["ModifyCampaignComponent"]
      }, {
        path: 'campaignhistory',
        component: src_app_shared_components_professional_campaign_history_farmer_campaign_history_farmer_component__WEBPACK_IMPORTED_MODULE_17__["CampaignHistoryFarmerComponent"]
      }, {
        path: 'fieldsfarmer',
        component: src_app_shared_components_professional_fields_farmer_fields_farmer_component__WEBPACK_IMPORTED_MODULE_7__["FieldsFarmerComponent"]
      }, {
        path: 'fieldsfarmer/modifyfield',
        component: src_app_shared_components_modify_field_modify_field_component__WEBPACK_IMPORTED_MODULE_14__["ModifyFieldComponent"]
      }, {
        path: 'fieldhistory',
        component: src_app_shared_components_professional_field_history_farmer_field_history_farmer_component__WEBPACK_IMPORTED_MODULE_18__["FieldHistoryFarmerComponent"]
      }, {
        path: 'lotsfarmer',
        component: src_app_shared_components_professional_lots_farmer_lots_farmer_component__WEBPACK_IMPORTED_MODULE_8__["LotsFarmerComponent"]
      }, {
        path: 'lotsfarmer/addlot',
        component: src_app_shared_components_add_lot_add_lot_component__WEBPACK_IMPORTED_MODULE_9__["AddLotComponent"]
      }, {
        path: 'lotsfarmer/modifylot',
        component: src_app_shared_components_modify_lot_modify_lot_component__WEBPACK_IMPORTED_MODULE_13__["ModifyLotComponent"]
      }, {
        path: 'prescriptions',
        component: src_app_shared_components_professional_prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_20__["PrescriptionsComponent"]
      }, {
        path: 'prescriptions/addprescription',
        component: src_app_shared_components_professional_add_prescription_add_prescription_component__WEBPACK_IMPORTED_MODULE_21__["AddPrescriptionComponent"]
      }, {
        path: 'prescriptions/modifyprescription',
        component: src_app_shared_components_professional_modify_prescription_modify_prescription_component__WEBPACK_IMPORTED_MODULE_23__["ModifyPrescriptionComponent"]
      }, {
        path: 'direct',
        component: src_app_shared_components_professional_direct_direct_component__WEBPACK_IMPORTED_MODULE_24__["DirectComponent"]
      }, {
        path: 'directdash',
        component: src_app_shared_components_professional_direct_dash_direct_dash_component__WEBPACK_IMPORTED_MODULE_27__["DirectDashComponent"]
      }, {
        path: 'addlocation',
        component: src_app_shared_components_direct_locations_add_direct_location_add_direct_location_component__WEBPACK_IMPORTED_MODULE_28__["AddDirectLocationComponent"]
      }, {
        path: 'direct/products',
        component: src_app_shared_components_professional_direct_sale_products_direct_sale_products_component__WEBPACK_IMPORTED_MODULE_25__["DirectSaleProductsComponent"]
      }, {
        path: 'direct/detail',
        component: src_app_shared_components_professional_direct_confirm_direct_confirm_component__WEBPACK_IMPORTED_MODULE_26__["DirectConfirmComponent"]
      }, {
        path: 'cropprocess',
        component: src_app_shared_components_crop_process_crop_process_component__WEBPACK_IMPORTED_MODULE_12__["CropProcessComponent"]
      }, {
        path: 'spraysfarmer',
        component: src_app_shared_components_professional_sprays_farmer_sprays_farmer_component__WEBPACK_IMPORTED_MODULE_10__["SpraysFarmerComponent"]
      }, {
        path: 'spraysfarmer/addsprayfarmer',
        component: src_app_shared_components_professional_add_spray_farmer_add_spray_farmer_component__WEBPACK_IMPORTED_MODULE_11__["AddSprayFarmerComponent"]
      }, {
        path: 'spraysfarmer/detailsprayfarmer',
        component: src_app_shared_components_professional_detail_spray_farmer_detail_spray_farmer_component__WEBPACK_IMPORTED_MODULE_22__["DetailSprayFarmerComponent"]
      }, {
        path: 'userpanel',
        component: src_app_shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_19__["UserPanelComponent"]
      }, {
        path: 'a404',
        component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
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
  "./src/app/Core/HomeModule/professionalHome/professionalHome.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Core/HomeModule/professionalHome/professionalHome.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ProfessionalHomeComponent */

  /***/
  function _src_app_Core_HomeModule_professionalHome_professionalHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessionalHomeComponent", function () {
      return ProfessionalHomeComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/help-index/help-index.component */
    "./src/app/shared/components/help-index/help-index.component.ts");
    /* harmony import */


    var _variables_icon_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../variables/icon-urls */
    "./src/variables/icon-urls.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../services/globalVars/global-vars.service */
    "./src/app/services/globalVars/global-vars.service.ts");
    /* harmony import */


    var src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/services/share/share.service */
    "./src/app/services/share/share.service.ts");
    /* harmony import */


    var _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../services/datauser/userdata.service */
    "./src/app/services/datauser/userdata.service.ts");
    /* harmony import */


    var src_app_services_campaigns_campaigns_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/app/services/campaigns/campaigns.service */
    "./src/app/services/campaigns/campaigns.service.ts");
    /* harmony import */


    var src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/app/services/cart/cart.service */
    "./src/app/services/cart/cart.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../services/socketIO/socketio.service */
    "./src/app/services/socketIO/socketio.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../../shared/components/user-menu/user-menu.component */
    "./src/app/shared/components/user-menu/user-menu.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    var _c0 = ["userMenuButton"];
    var _c1 = ["userMenuImage"];
    var _c2 = ["boxUserMenu"];

    function ProfessionalHomeComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

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

    var _c3 = function _c3() {
      return ["directdash"];
    };

    function ProfessionalHomeComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_div_43_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return ctx_r24.isMobile && _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_div_43_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return ctx_r26.isMobile && _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-icon", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "MENU.location"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "direct");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, "MENU.products"));
      }
    }

    function ProfessionalHomeComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_div_49_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return ctx_r27.isMobile && _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "spraysfarmer");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, "MENU.spray"));
      }
    }

    function ProfessionalHomeComponent_button_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_button_55_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

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

    function ProfessionalHomeComponent_mat_label_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HEADER.select-farmer"));
      }
    }

    function ProfessionalHomeComponent_mat_option_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var farmer_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", farmer_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", farmer_r31.userName, " ");
      }
    }

    function ProfessionalHomeComponent_mat_label_72_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HEADER.select-campaign"));
      }
    }

    function ProfessionalHomeComponent_mat_option_76_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var campaign_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", campaign_r32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", campaign_r32.campaignName, " ");
      }
    }

    function ProfessionalHomeComponent_mat_icon_81_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_mat_icon_81_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r33.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r9.qNotifications);
      }
    }

    function ProfessionalHomeComponent_mat_icon_82_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_mat_icon_82_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r35.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfessionalHomeComponent_div_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfessionalHomeComponent_ng_template_86_img_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function ProfessionalHomeComponent_ng_template_86_img_0_Template_img_error_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r38.errorImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r37.avatarUrl, "", ctx_r37.userData.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function ProfessionalHomeComponent_ng_template_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProfessionalHomeComponent_ng_template_86_img_0_Template, 1, 2, "img", 75);
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r14.errorImage);
      }
    }

    function ProfessionalHomeComponent_div_88_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProfessionalHomeComponent_mat_label_97_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HEADER.select-farmer"));
      }
    }

    function ProfessionalHomeComponent_mat_option_101_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var farmer_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", farmer_r40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", farmer_r40.userName, " ");
      }
    }

    function ProfessionalHomeComponent_mat_label_103_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HEADER.select-campaign"));
      }
    }

    function ProfessionalHomeComponent_mat_option_107_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var campaign_r41 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", campaign_r41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", campaign_r41.campaignName, " ");
      }
    }

    function ProfessionalHomeComponent_mat_icon_116_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_mat_icon_116_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r42.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ProfessionalHomeComponent = /*#__PURE__*/function () {
      function ProfessionalHomeComponent(router, matIconRegistry, domSanitizer, dialog, renderer, translate, global, shareService, userDataService, campaignsService, cartService, authService, socketService) {
        var _this = this;

        _classCallCheck(this, ProfessionalHomeComponent);

        this.router = router;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.dialog = dialog;
        this.renderer = renderer;
        this.translate = translate;
        this.global = global;
        this.shareService = shareService;
        this.userDataService = userDataService;
        this.campaignsService = campaignsService;
        this.cartService = cartService;
        this.authService = authService;
        this.socketService = socketService;
        this.isMobile = false;
        this.avatarUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imageUserUrl;
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
          typeUser: "",
          hasDirect: false
        };
        this.userCampaigns = []; //  private notification: any; //variable to subscribe events

        this.sideBarOpen = true;
        this.qNotifications = 0;
        this.notificationsDown = false;
        this.menuDown = false;
        this.errorImage = false;
        this.showFiller = false;
        this.showDirectFiller = false;
        this.flag = "es_AR";
        this.farmersDataLoading = false; // Cierra userMenu y notificaciones al hacer click en cualquier otro lado

        this.renderer.listen("window", "click", function (e) {
          var target = e.target; // userMenu

          if (target.id !== "userMenuButton" && target.id !== "userMenuImage" && target.id !== "user-button" && target.id !== "user-button__avatar" && target.id !== "boxUserMenu" && target.id !== "divUserMenu" && target.id !== "nameUserMenu" && target.id !== "emailUserMenu" && target.id !== "planUserMenu" && target.id !== "planLevelUserMenu" && target.id !== "avatarMenuImage" && target.id !== "avatarMenuErrorImage" && target.id !== "Capa_1" && target.id !== "noImage" && target.id !== "noImageIcon" && _this.menuDown) {
            _this.togglUserMenu();
          } // notificaciones


          if (target.id !== "Capa_1" && target.id !== "bellWithNotif" && target.id !== "bellWithoutNotif" && target.id !== "unreadnewPeriurbanSpray" && target.id !== "unreadAddContact" && target.id !== "generalNewPeriurbanSpray" && target.id !== "generalAddContact" && target.id !== "dateNewPeriurbanSpray" && target.id !== "dateAddContact" && target.id !== "tabsNotificaciones" && target.id !== "tabNotificaciones" && target.id !== "noLeidas" && target.id !== "iconLeidas" && target.id !== "remove_red_eye" && target.id !== "boxNotification" && _this.notificationsDown) {
            _this.toggleNotifi();
          }
        });
      }

      return _createClass(ProfessionalHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          setTimeout(function () {
            _this2.global.activeComponent = "MENU.home";
            _this2.global.activeIcon = "campana";
          }, 0);
          this.checkScreenSize();
          this.versionClient = this.global.versionClient;

          for (var icon in _variables_icon_urls__WEBPACK_IMPORTED_MODULE_7__["iconsProfessional"]) {
            if (_variables_icon_urls__WEBPACK_IMPORTED_MODULE_7__["iconsProfessional"].hasOwnProperty(icon)) {
              this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(_variables_icon_urls__WEBPACK_IMPORTED_MODULE_7__["iconsProfessional"][icon]));
            }
          }

          this.userDataService.getUserData().subscribe(function (data) {
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
            }
          });
          this.farmersSubscription = this.shareService.getFarmersData().subscribe(function (data) {
            _this2.farmersData = data; // Si no hay datos de farmers (ej: refresh de página), cargarlos desde el backend

            if ((!data || Array.isArray(data) && data.length === 0) && !_this2.farmersDataLoading) {
              _this2.farmersDataLoading = true;

              _this2.shareService.getUsers().subscribe(function (response) {
                if (response.success && response.data) {
                  _this2.shareService.setFarmersData(response.data);
                }
              }, function (error) {
                console.error('Error loading farmers data:', error);
              });
            }
          });
          this.activeFarmerSubscription = this.shareService.getActiveFarmer().subscribe(function (activeFarmer) {
            _this2.activeFarmer = activeFarmer;

            if (_this2.activeFarmer) {
              _this2.cartService.changeCart();

              var filter = {
                idUser: _this2.activeFarmer.idUser
              };

              _this2.campaignsService.getCurrentCampaign(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                if (error.status === 400) {
                  // Si el servidor devuelve un error 400
                  return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null); // Maneja el error y continua con un valor nulo
                }

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null); //devolver un valor nulo en caso de cualquier otro error.
              })).subscribe(function (campaignData) {
                if (campaignData && campaignData.success === true) {
                  _this2.global.emptyCampaign = false;
                  _this2.global.activeCampaign = campaignData.data.campaignName;

                  _this2.campaignsService.setCampaignData(campaignData.data);
                } else {
                  _this2.global.activeCampaign = "Sin Campaña Activa";

                  _this2.router.navigate(["profhome/campaignsfarmer"]);

                  _this2.campaignsService.clearCampaignData();

                  _this2.global.emptyCampaign = true;
                }
              });

              var filterCampaign = {
                idUser: _this2.activeFarmer.idUser,
                idCampaign: -1
              };

              _this2.campaignsService.getCampaign(filterCampaign).subscribe(function (campaignArray) {
                if (campaignArray.success === true) {
                  _this2.userCampaigns = campaignArray.data;
                }
              });
            }
          });
          this.activeCampaignSubscription = this.campaignsService.getCampaignData().subscribe(function (activeCampaign) {
            if (_this2.activeFarmer) {
              _this2.activeCampaign = activeCampaign;

              _this2.userCampaigns.forEach(function (campaign) {
                if (campaign._id === activeCampaign._id) {
                  campaign.active = true;
                } else if (campaign.active) {
                  campaign.active = false;
                }
              });
            }
          });
        } // Detecta resize de ventana

      }, {
        key: "onResize",
        value: function onResize() {
          this.checkScreenSize();
        }
      }, {
        key: "checkScreenSize",
        value: function checkScreenSize() {
          this.isMobile = window.innerWidth < 768; // breakpoint móvil
        }
      }, {
        key: "compareFarmers",
        value: function compareFarmers(f1, f2) {
          return f1 && f2 ? f1.idUser === f2.idUser : f1 === f2;
        }
      }, {
        key: "compareCampaigns",
        value: function compareCampaigns(c1, c2) {
          return c1 && c2 ? c1._id === c2._id : c1 === c2;
        }
      }, {
        key: "onFarmerSelect",
        value: function onFarmerSelect(farmerS) {
          var _this3 = this;

          this.shareService.setActiveFarmer(farmerS); // cuando se seleecciona un farmer se carga su campaña activa o se deja sin campaña activa

          var filter = {
            idUser: farmerS.idUser
          };
          this.campaignsService.getCurrentCampaign(filter).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error.status === 400) {
              // Si el servidor devuelve un error 400
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null); // Maneja el error y continua con un valor nulo
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null); //devolver un valor nulo en caso de cualquier otro error.
          })).subscribe(function (campaignData) {
            if (campaignData && campaignData.success === true) {
              _this3.global.emptyCampaign = false;
              _this3.global.activeCampaign = campaignData.data.campaignName;

              _this3.campaignsService.setCampaignData(campaignData.data);
            } else {
              _this3.global.activeCampaign = "Sin Campaña Activa";

              _this3.campaignsService.setCampaignData("");

              _this3.router.navigate(["profhome/campaignsfarmer"]);

              _this3.global.emptyCampaign = true;
            }
          });
        }
      }, {
        key: "onCampaignSelect",
        value: function onCampaignSelect(selectedCampaign) {
          var _this4 = this;

          var currentId;
          var newId = selectedCampaign._id;
          this.campaignsService.getCampaignData().subscribe(function (currentCampaign) {
            if (currentCampaign._id) {
              currentId = currentCampaign._id;
            } else {
              currentId = selectedCampaign._id;
            }
          });
          var body = {
            currentId: currentId,
            newId: newId
          };
          this.campaignsService.setActive(body).subscribe(function (activeCampaign) {
            if (activeCampaign.success === true) {
              // Actualiza el estado 'active' de las campañas
              _this4.userCampaigns.forEach(function (campaign) {
                if (campaign._id === selectedCampaign._id) {
                  campaign.active = true;
                } else if (campaign.active) {
                  campaign.active = false;
                }
              });

              _this4.global.emptyCampaign = false; // Actualiza la campaña activa en el servicio y en el estado global

              _this4.campaignsService.setCampaignData(activeCampaign.data);

              _this4.global.activeCampaign = activeCampaign.data.campaignName;
            }
          });
        }
      }, {
        key: "helpIndex",
        value: function helpIndex() {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          var dialogRef = this.dialog.open(_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_6__["HelpIndexComponent"], dialogConfig);
          dialogRef.afterClosed().subscribe(function () {});
        } // openNotificacions() {
        //   const notificationsDialog = new MatDialogConfig();
        //   notificationsDialog.disableClose = true;
        //   notificationsDialog.autoFocus = true;
        //   const dialogRef = this.dialog.open(NotificationsComponent, notificationsDialog)
        //   dialogRef.afterClosed().subscribe(result => {
        //     console.log(result)
        //   });
        // }

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
        key: "logout",
        value: function logout() {
          var _this5 = this;

          return this.authService.logout().subscribe(function () {
            _this5.socketService.closeConn();

            _this5.authService.logout();

            _this5.router.navigate([""]);
          }, function () {
            _this5.authService.logout();

            _this5.socketService.closeConn();

            _this5.router.navigate([""]);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.shareService.clearActiveFarmer();
          this.shareService.clearFarmersData();
          this.campaignsService.clearCampaignData();
          this.global.activeCampaign = "";

          if (this.farmersSubscription) {
            this.farmersSubscription.unsubscribe();
          }

          if (this.activeFarmerSubscription) {
            this.activeFarmerSubscription.unsubscribe();
          }

          if (this.activeCampaignSubscription) {
            this.activeCampaignSubscription.unsubscribe();
          }
        }
      }, {
        key: "toggleDirectMenu",
        value: function toggleDirectMenu(event) {
          event.preventDefault(); // evita navegación si tiene routerLink accidental

          event.stopPropagation(); // evita cierre por propagación

          this.showDirectFiller = !this.showDirectFiller;

          if (this.showDirectFiller) {
            this.showFiller = false;
          }
        }
      }, {
        key: "toggleActivitiesMenu",
        value: function toggleActivitiesMenu(event) {
          event.preventDefault();
          event.stopPropagation();
          this.showFiller = !this.showFiller;

          if (this.showFiller) {
            this.showDirectFiller = false;
          }
        }
      }]);
    }();

    ProfessionalHomeComponent.ɵfac = function ProfessionalHomeComponent_Factory(t) {
      return new (t || ProfessionalHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_12__["GlobalVarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_13__["ShareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_14__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_campaigns_campaigns_service__WEBPACK_IMPORTED_MODULE_15__["CampaignsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_16__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_18__["SocketioService"]));
    };

    ProfessionalHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfessionalHomeComponent,
      selectors: [["app-professionalHome"]],
      viewQuery: function ProfessionalHomeComponent_Query(rf, ctx) {
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
      hostBindings: function ProfessionalHomeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function ProfessionalHomeComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 140,
      vars: 97,
      consts: [["id", "menuDash", 1, "container-menu"], ["fixedInViewport", "true", "mode", "side", "disableClose", "true", 1, "sidenav", 3, "mode", "opened", "disableClose"], ["drawer", ""], ["mat-icon-button", "", "class", "sidenav__close", 3, "click", 4, "ngIf"], [1, "sidenav__header"], [1, "sidenav__logo"], ["src", "../../../../assets/icon/logoBlanco.svg", "alt", "logo"], [1, "menu-list"], ["routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "dashboard"], ["routerLinkActive", "active", "id", "campaignsSelector", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "productores"], ["routerLinkActive", "active", "id", "fieldsSelector", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "establecimiento"], ["svgIcon", "campana"], ["routerLinkActive", "active", "id", "lotsSelector", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "lote"], ["routerLinkActive", "active", 1, "menu-list__item", "actividades", 3, "routerLink", "click"], ["svgIcon", "prescripciones"], ["routerLinkActive", "active", 1, "menu-list__item", "actividades", 3, "click"], ["svgIcon", "direct"], ["id", "menu-activities", "style", "margin-left: 1rem;", 4, "ngIf"], ["svgIcon", "actividad"], [1, "white-text"], [2, "overflow-x", "hidden"], [1, "sidenav-header"], [1, "flex-header-sidenav", "flex-professional"], ["mat-icon-button", "", "class", "menu-toggle", 3, "click", 4, "ngIf"], [1, "animation-title", 2, "flex-grow", "0 !important", "width", "50%"], [1, "animation-title__static"], [3, "svgIcon"], [1, "animation-title__dynamic"], [1, "select-desktop-only"], [2, "width", "40%", "display", "flex", "flex-direction", "column"], ["class", "mat-label-professional", 4, "ngIf"], [1, "search-agrohub", 2, "width", "100%"], [3, "value", "compareWith", "placeholder", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "flex", "1 1 auto"], [1, "sidenav-header__buttons", "desktop-only"], ["routerLinkActive", "active", 2, "display", "flex", "justify-content", "center", 3, "routerLink"], ["svgIcon", "ayuda", 1, "btn-help"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click", 4, "ngIf"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "user-button", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", "margin", "0px 0px 0px 20px", 3, "click"], ["userMenuButton", ""], ["id", "noImage", 4, "ngIf", "ngIfElse"], ["Image", ""], ["id", "avatarMenuErrorImage", 4, "ngIf"], ["mat-button", "", 2, "width", "80px", "height", "40px", "padding", "0px", "margin", "20px"], [2, "width", "100%", "height", "100%", 3, "svgIcon"], [1, "mobile-only"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "select-mobile-only"], ["moreMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["svgIcon", "ayuda"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["svgIcon", "usuario"], [1, "container-bodys"], [3, "qNotifications"], ["mat-icon-button", "", 1, "sidenav__close", 3, "click"], ["id", "menu-activities", 2, "margin-left", "1rem"], ["routerLinkActive", "active", 1, "menu-activities__item", 3, "routerLink", "click"], ["svgIcon", "location"], ["svgIcon", "products"], ["svgIcon", "pulverizacion"], ["mat-icon-button", "", 1, "menu-toggle", 3, "click"], [1, "mat-label-professional"], [3, "value"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click"], ["id", "noImage"], ["svgIcon", "usuario", "id", "noImageIcon"], ["id", "user-button__avatar", "width", "100", "height", "100", "style", "border-radius: 50px; width: 70px; height: 70px; padding: 0px;", 3, "src", "error", 4, "ngIf"], ["id", "user-button__avatar", "width", "100", "height", "100", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", 3, "src", "error"], ["id", "avatarMenuErrorImage"], ["svgIcon", "usuario", "id", "avatarMenuImage"]],
      template: function ProfessionalHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProfessionalHomeComponent_button_3_Template, 3, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-nav-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_a_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "mat-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_a_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_a_click_38_listener($event) {
            return ctx.toggleDirectMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ProfessionalHomeComponent_div_43_Template, 11, 9, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_a_click_44_listener($event) {
            return ctx.toggleActivitiesMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "mat-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, ProfessionalHomeComponent_div_49_Template, 6, 4, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-sidenav-content", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-toolbar", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ProfessionalHomeComponent_button_55_Template, 3, 0, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, ProfessionalHomeComponent_mat_label_66_Template, 3, 3, "mat-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ProfessionalHomeComponent_Template_mat_select_valueChange_68_listener($event) {
            return ctx.activeFarmer = $event;
          })("selectionChange", function ProfessionalHomeComponent_Template_mat_select_selectionChange_68_listener($event) {
            return ctx.onFarmerSelect($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, ProfessionalHomeComponent_mat_option_70_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, ProfessionalHomeComponent_mat_label_72_Template, 3, 3, "mat-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ProfessionalHomeComponent_Template_mat_select_valueChange_74_listener($event) {
            return ctx.activeCampaign = $event;
          })("selectionChange", function ProfessionalHomeComponent_Template_mat_select_selectionChange_74_listener($event) {
            return ctx.onCampaignSelect($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, ProfessionalHomeComponent_mat_option_76_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "mat-icon", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, ProfessionalHomeComponent_mat_icon_81_Template, 1, 1, "mat-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, ProfessionalHomeComponent_mat_icon_82_Template, 1, 0, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "button", 44, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_button_click_83_listener() {
            return ctx.togglUserMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, ProfessionalHomeComponent_div_85_Template, 2, 0, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, ProfessionalHomeComponent_ng_template_86_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](88, ProfessionalHomeComponent_div_88_Template, 2, 0, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "mat-icon", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, ProfessionalHomeComponent_mat_label_97_Template, 3, 3, "mat-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mat-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ProfessionalHomeComponent_Template_mat_select_valueChange_99_listener($event) {
            return ctx.activeFarmer = $event;
          })("selectionChange", function ProfessionalHomeComponent_Template_mat_select_selectionChange_99_listener($event) {
            return ctx.onFarmerSelect($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, ProfessionalHomeComponent_mat_option_101_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, ProfessionalHomeComponent_mat_label_103_Template, 3, 3, "mat-label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-select", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function ProfessionalHomeComponent_Template_mat_select_valueChange_105_listener($event) {
            return ctx.activeCampaign = $event;
          })("selectionChange", function ProfessionalHomeComponent_Template_mat_select_selectionChange_105_listener($event) {
            return ctx.onCampaignSelect($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](106, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, ProfessionalHomeComponent_mat_option_107_Template, 2, 2, "mat-option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mat-menu", null, 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](114, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, ProfessionalHomeComponent_mat_icon_116_Template, 1, 0, "mat-icon", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](119, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_button_click_120_listener() {
            return ctx.togglUserMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "mat-icon", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](124, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "mat-icon", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](129, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfessionalHomeComponent_Template_button_click_130_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](135, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "app-notifications", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("qNotifications", function ProfessionalHomeComponent_Template_app_notifications_qNotifications_138_listener($event) {
            return ctx.loadNotifications($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "app-user-menu");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](87);

          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.isMobile ? "over" : "side")("opened", !ctx.isMobile)("disableClose", !ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "profdashinit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 61, "MENU.home"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "listfarmers");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 63, "MENU.farmers"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "fieldsfarmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 65, "MENU.fields"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "campaignsfarmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 67, "MENU.campaigns"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "lotsfarmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 69, "MENU.lots"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "prescriptions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 71, "MENU.prescriptions-two"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 73, "MENU.direct"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDirectFiller);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 75, "MENU.activities"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFiller);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Version: ", ctx.versionClient, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r0.opened);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx.global.activeIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 77, ctx.global.activeComponent));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeFarmer);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.activeFarmer ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 79, "HEADER.select-farmer"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.activeFarmer)("compareWith", ctx.compareFarmers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.farmersData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeCampaign);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.activeFarmer ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 81, "HEADER.select-campaign"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.activeCampaign)("compareWith", ctx.compareCampaigns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userCampaigns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "help-index");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qNotifications > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qNotifications == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.image == "0")("ngIfElse", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("svgIcon", ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeFarmer);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.activeFarmer ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 83, "HEADER.select-farmer"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.activeFarmer)("compareWith", ctx.compareFarmers);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.farmersData);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeCampaign);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.activeFarmer ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](106, 85, "HEADER.select-campaign"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.activeCampaign)("compareWith", ctx.compareCampaigns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userCampaigns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "help-index");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](114, 87, "USER-MENU.help"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.qNotifications == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](119, 89, "USER-MENU.notification"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](124, 91, "USER-MENU.profile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("svgIcon", ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](129, 93, "USER-MENU.language"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](135, 95, "USER-MENU.logout"));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbar"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_26__["UserMenuComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatLabel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatOption"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadge"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: ["@charset \"UTF-8\";\n.icon-svg[_ngcontent-%COMP%] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.icon-svg[class*=icon-logo][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/logo01.svg);\n          mask-image: url(/src/assets/icon/logo01.svg);\n  color: #ffffff;\n}\n.icon-svg[class*=icon-dashboard][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/iconDashboard.svg);\n          mask-image: url(/src/assets/icon/iconDashboard.svg);\n  color: #ffffff;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 1.5em;\n}\n.container-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\nul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 50%, #ccccccc7 100%) !important;\n  color: rgba(0, 0, 0, 0.87);\n  height: 100vh;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  padding-bottom: 2em;\n  background-color: #101c2a;\n  box-shadow: 5px 10px 10px 0px rgba(153, 153, 153, 0.63);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 3;\n}\n.sidenav__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.sidenav__logo[_ngcontent-%COMP%] {\n  text-align: center;\n  border-left: 5px solid #101c2a;\n}\n.sidenav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.sidenav__close[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  padding: 20px 0 2em 0;\n  border-left: 5px solid #101c2a;\n}\n.menu-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-list__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-list__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-list__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.menu-activities__item[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-activities__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-activities__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-activities__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-activities__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden !important;\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  z-index: 20000 !important;\n  background-color: #ffffff;\n  color: #101c2a;\n  box-shadow: 8px 10px 10px 0px rgba(153, 153, 153, 0.3);\n  box-sizing: border-box;\n}\n.flex-header-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: #00d963;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: #ffffff !important;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #101c2a !important;\n  width: 25px;\n  height: 25px;\n}\n\n.container-bodys[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  margin-top: 100px;\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n}\n\n.animation-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  margin-right: 20px;\n}\n.animation-title__static[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  fill: #00d963 !important;\n}\n.animation-title__dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 600;\n  font-family: \"Noto Sans\", sans-serif;\n  color: #00a99e;\n  animation: slide 3s steps(10) infinite;\n}\n@keyframes slide {\n  100% {\n    top: 0px;\n  }\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background: #ffffff;\n  border-left: 2px solid #00a99e;\n  animation: typing 2s steps(20) forwards;\n}\n@keyframes typing {\n  60%, 100% {\n    left: calc(100% + 30px);\n  }\n}\n\n  .mat-drawer-container {\n  position: relative !important;\n}\n  .mat-drawer-backdrop {\n  z-index: 2 !important;\n}\n  .mat-drawer.sidenav {\n  z-index: 3 !important;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.select-desktop-only[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n.mobile-only[_ngcontent-%COMP%], .select-mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 1024px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 0.5rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .mobile-only[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .select-mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n    width: 100%;\n    justify-content: space-between;\n    padding: 0rem 0.5rem 0.5rem 0.5rem;\n    margin-top: 0rem;\n  }\n\n  .mat-label-professional[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n  }\n\n  .sidenav-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0.5rem;\n    height: 110px;\n  }\n\n  .sidenav__close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  .sidenav__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .sidenav-header__buttons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .flex-header-sidenav[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    padding: 0rem !important;\n    justify-content: space-between;\n  }\n\n  .animation-title[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex-grow: 0;\n  }\n  .animation-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n  }\n\n  .animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    height: 50%;\n  }\n\n  .container-bodys[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n}\n@media (max-width: 767px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n\n@media (max-width: 480px) {\n  .container-bodys[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 28px !important;\n    height: 28px !important;\n  }\n  .menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.flex-header-sidenav[_ngcontent-%COMP%]   .flex-professional[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  flex-grow: 9;\n}\n.mat-label-professional[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin-bottom: -4px;\n  color: #CCCCCC;\n}\n.search-agrohub[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 0.5px solid #101c2a;\n  border-radius: 5px;\n  padding: 0em 0.5em;\n  margin: 0px;\n  box-sizing: border-box;\n  display: flex;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  color: #101c2a;\n  font-size: 0.8rem;\n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #101c2a;\n  opacity: 1;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #101c2a;\n  opacity: 1;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #101c2a;\n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #101c2a;\n}\n.search-agrohub[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 0.8rem;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  padding: 0em !important;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfessionalHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-professionalHome",
          templateUrl: "./professionalHome.component.html",
          styleUrls: ["./professionalHome.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
        }, {
          type: _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_12__["GlobalVarsService"]
        }, {
          type: src_app_services_share_share_service__WEBPACK_IMPORTED_MODULE_13__["ShareService"]
        }, {
          type: _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_14__["UserDataService"]
        }, {
          type: src_app_services_campaigns_campaigns_service__WEBPACK_IMPORTED_MODULE_15__["CampaignsService"]
        }, {
          type: src_app_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_16__["CartService"]
        }, {
          type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"]
        }, {
          type: _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_18__["SocketioService"]
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
  "./src/app/Core/HomeModule/professionalHome/professionalHome.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/Core/HomeModule/professionalHome/professionalHome.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProfessionalHomeModule */

  /***/
  function _src_app_Core_HomeModule_professionalHome_professionalHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfessionalHomeModule", function () {
      return ProfessionalHomeModule;
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


    var _professionalHome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./professionalHome-routing.module */
    "./src/app/Core/HomeModule/professionalHome/professionalHome-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _professionalHome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./professionalHome.component */
    "./src/app/Core/HomeModule/professionalHome/professionalHome.component.ts");
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


    var src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/user-menu/user-menu.module */
    "./src/app/shared/components/user-menu/user-menu.module.ts");

    var ProfessionalHomeModule = /*#__PURE__*/_createClass(function ProfessionalHomeModule() {
      _classCallCheck(this, ProfessionalHomeModule);
    });

    ProfessionalHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfessionalHomeModule
    });
    ProfessionalHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfessionalHomeModule_Factory(t) {
        return new (t || ProfessionalHomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _professionalHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_8__["UserMenuModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfessionalHomeModule, {
        declarations: [_professionalHome_component__WEBPACK_IMPORTED_MODULE_4__["ProfessionalHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _professionalHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_8__["UserMenuModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessionalHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_professionalHome_component__WEBPACK_IMPORTED_MODULE_4__["ProfessionalHomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _professionalHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_8__["UserMenuModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
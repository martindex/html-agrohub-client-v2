function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }

function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
  /***/
  "./src/app/Core/HomeModule/farmerHome/farmerHome-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Core/HomeModule/farmerHome/farmerHome-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: HomeRoutingModule */

  /***/
  function _src_app_Core_HomeModule_farmerHome_farmerHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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


    var _farmerHome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./farmerHome.component */
    "./src/app/Core/HomeModule/farmerHome/farmerHome.component.ts");
    /* harmony import */


    var _shared_components_suggest_list_suggest_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/components/suggest-list/suggest-list.component */
    "./src/app/shared/components/suggest-list/suggest-list.component.ts");
    /* harmony import */


    var _shared_components_add_field_add_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/add-field/add-field.component */
    "./src/app/shared/components/add-field/add-field.component.ts");
    /* harmony import */


    var _shared_dashboards_farmer_dash_init_farmer_dash_init_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/dashboards/farmer-dash-init/farmer-dash-init.component */
    "./src/app/shared/dashboards/farmer-dash-init/farmer-dash-init.component.ts");
    /* harmony import */


    var _shared_components_add_lot_add_lot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/add-lot/add-lot.component */
    "./src/app/shared/components/add-lot/add-lot.component.ts");
    /* harmony import */


    var _shared_components_fields_fields_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/components/fields/fields.component */
    "./src/app/shared/components/fields/fields.component.ts");
    /* harmony import */


    var _shared_components_lots_lots_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/lots/lots.component */
    "./src/app/shared/components/lots/lots.component.ts");
    /* harmony import */


    var _shared_components_add_planting_add_planting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/add-planting/add-planting.component */
    "./src/app/shared/components/add-planting/add-planting.component.ts");
    /* harmony import */


    var _shared_components_add_spray_add_spray_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/components/add-spray/add-spray.component */
    "./src/app/shared/components/add-spray/add-spray.component.ts");
    /* harmony import */


    var src_app_shared_components_spray_detail_spray_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/components/spray-detail/spray-detail.component */
    "./src/app/shared/components/spray-detail/spray-detail.component.ts");
    /* harmony import */


    var _shared_components_add_harvesting_add_harvesting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/components/add-harvesting/add-harvesting.component */
    "./src/app/shared/components/add-harvesting/add-harvesting.component.ts");
    /* harmony import */


    var _shared_components_add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/components/add-campaign/add-campaign.component */
    "./src/app/shared/components/add-campaign/add-campaign.component.ts");
    /* harmony import */


    var _shared_components_campaign_campaigns_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/components/campaign/campaigns.component */
    "./src/app/shared/components/campaign/campaigns.component.ts");
    /* harmony import */


    var _shared_components_add_activity_add_activity_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/components/add-activity/add-activity.component */
    "./src/app/shared/components/add-activity/add-activity.component.ts");
    /* harmony import */


    var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");
    /* harmony import */


    var _shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/components/user-panel/user-panel.component */
    "./src/app/shared/components/user-panel/user-panel.component.ts");
    /* harmony import */


    var _shared_components_crop_process_crop_process_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/components/crop-process/crop-process.component */
    "./src/app/shared/components/crop-process/crop-process.component.ts");
    /* harmony import */


    var _shared_components_modify_field_modify_field_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../shared/components/modify-field/modify-field.component */
    "./src/app/shared/components/modify-field/modify-field.component.ts");
    /* harmony import */


    var _shared_components_modify_lot_modify_lot_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/components/modify-lot/modify-lot.component */
    "./src/app/shared/components/modify-lot/modify-lot.component.ts");
    /* harmony import */


    var _shared_components_modify_campaign_modify_campaign_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/components/modify-campaign/modify-campaign.component */
    "./src/app/shared/components/modify-campaign/modify-campaign.component.ts");
    /* harmony import */


    var _shared_components_add_fertilization_add_fertilization_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/components/add-fertilization/add-fertilization.component */
    "./src/app/shared/components/add-fertilization/add-fertilization.component.ts");
    /* harmony import */


    var src_app_shared_components_imagePreview_imagePreview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! src/app/shared/components/imagePreview/imagePreview.component */
    "./src/app/shared/components/imagePreview/imagePreview.component.ts");
    /* harmony import */


    var src_app_shared_components_start_alert_start_alert_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! src/app/shared/components/start-alert/start-alert.component */
    "./src/app/shared/components/start-alert/start-alert.component.ts");
    /* harmony import */


    var src_app_shared_components_field_history_field_history_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! src/app/shared/components/field-history/field-history.component */
    "./src/app/shared/components/field-history/field-history.component.ts");
    /* harmony import */


    var src_app_shared_components_lot_history_lot_history_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! src/app/shared/components/lot-history/lot-history.component */
    "./src/app/shared/components/lot-history/lot-history.component.ts");
    /* harmony import */


    var src_app_shared_components_campaign_history_campaign_history_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! src/app/shared/components/campaign-history/campaign-history.component */
    "./src/app/shared/components/campaign-history/campaign-history.component.ts");
    /* harmony import */


    var src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! src/app/shared/components/help-index/help-index.component */
    "./src/app/shared/components/help-index/help-index.component.ts");
    /* harmony import */


    var src_app_shared_components_storage_log_storage_log_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! src/app/shared/components/storage-log/storage-log.component */
    "./src/app/shared/components/storage-log/storage-log.component.ts");
    /* harmony import */


    var src_app_shared_components_add_storage_add_storage_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! src/app/shared/components/add-storage/add-storage.component */
    "./src/app/shared/components/add-storage/add-storage.component.ts");
    /* harmony import */


    var src_app_shared_components_time_selection_spray_time_selection_spray_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! src/app/shared/components/time-selection-spray/time-selection-spray.component */
    "./src/app/shared/components/time-selection-spray/time-selection-spray.component.ts");
    /* harmony import */


    var src_app_shared_components_privacy_politics_privacy_politics_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! src/app/shared/components/privacy-politics/privacy-politics.component */
    "./src/app/shared/components/privacy-politics/privacy-politics.component.ts");
    /* harmony import */


    var src_app_shared_components_add_storage_movements_add_storage_movements_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! src/app/shared/components/add-storage-movements/add-storage-movements.component */
    "./src/app/shared/components/add-storage-movements/add-storage-movements.component.ts");
    /* harmony import */


    var src_app_shared_components_detail_movement_storage_detail_movement_storage_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! src/app/shared/components/detail-movement-storage/detail-movement-storage.component */
    "./src/app/shared/components/detail-movement-storage/detail-movement-storage.component.ts");
    /* harmony import */


    var src_app_shared_components_add_daily_task_add_daily_task_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! src/app/shared/components/add-daily-task/add-daily-task.component */
    "./src/app/shared/components/add-daily-task/add-daily-task.component.ts");
    /* harmony import */


    var src_app_shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! src/app/shared/components/yes-no-dialog/yes-no-dialog.component */
    "./src/app/shared/components/yes-no-dialog/yes-no-dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! src/app/shared/components/select-field/select-field.component */
    "./src/app/shared/components/select-field/select-field.component.ts");
    /* harmony import */


    var src_app_shared_components_planting_progress_dialog_planting_progress_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! src/app/shared/components/planting-progress-dialog/planting-progress-dialog.component */
    "./src/app/shared/components/planting-progress-dialog/planting-progress-dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_list_machinery_farmer_list_machinery_farmer_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! src/app/shared/components/list-machinery-farmer/list-machinery-farmer.component */
    "./src/app/shared/components/list-machinery-farmer/list-machinery-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_add_machinery_farmer_add_machinery_farmer_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! src/app/shared/components/add-machinery-farmer/add-machinery-farmer.component */
    "./src/app/shared/components/add-machinery-farmer/add-machinery-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_machinery_create_farmer_machinery_create_farmer_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! src/app/shared/components/machinery-create-farmer/machinery-create-farmer.component */
    "./src/app/shared/components/machinery-create-farmer/machinery-create-farmer.component.ts");
    /* harmony import */


    var src_app_shared_components_harvesting_progress_dialog_harvesting_progress_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! src/app/shared/components/harvesting-progress-dialog/harvesting-progress-dialog.component */
    "./src/app/shared/components/harvesting-progress-dialog/harvesting-progress-dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_spray_progress_dialog_spray_progress_dialog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! src/app/shared/components/spray-progress-dialog/spray-progress-dialog.component */
    "./src/app/shared/components/spray-progress-dialog/spray-progress-dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_fertilization_progress_dialog_fertilization_progress_dialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! src/app/shared/components/fertilization-progress-dialog/fertilization-progress-dialog.component */
    "./src/app/shared/components/fertilization-progress-dialog/fertilization-progress-dialog.component.ts");
    /* harmony import */


    var src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! src/app/shared/components/change-password/change-password.component */
    "./src/app/shared/components/change-password/change-password.component.ts");
    /* harmony import */


    var src_app_shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! src/app/shared/components/messages/messages.component */
    "./src/app/shared/components/messages/messages.component.ts");
    /* harmony import */


    var src_app_shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! src/app/shared/components/notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var src_app_shared_components_packaging_packaging_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! src/app/shared/components/packaging/packaging.component */
    "./src/app/shared/components/packaging/packaging.component.ts");
    /* harmony import */


    var src_app_shared_components_list_dispose_orders_list_dispose_orders_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! src/app/shared/components/list-dispose-orders/list-dispose-orders.component */
    "./src/app/shared/components/list-dispose-orders/list-dispose-orders.component.ts");
    /* harmony import */


    var src_app_shared_components_add_packaging_add_packaging_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! src/app/shared/components/add-packaging/add-packaging.component */
    "./src/app/shared/components/add-packaging/add-packaging.component.ts");
    /* harmony import */


    var src_app_shared_components_shared_data_shared_data_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! src/app/shared/components/shared-data/shared-data.component */
    "./src/app/shared/components/shared-data/shared-data.component.ts");
    /* harmony import */


    var src_app_shared_components_list_daily_tasks_list_daily_tasks_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! src/app/shared/components/list-daily-tasks/list-daily-tasks.component */
    "./src/app/shared/components/list-daily-tasks/list-daily-tasks.component.ts");
    /* harmony import */


    var src_app_shared_components_list_fertilizations_list_fertilizations_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! src/app/shared/components/list-fertilizations/list-fertilizations.component */
    "./src/app/shared/components/list-fertilizations/list-fertilizations.component.ts");
    /* harmony import */


    var src_app_shared_components_list_harvestings_list_harvestings_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! src/app/shared/components/list-harvestings/list-harvestings.component */
    "./src/app/shared/components/list-harvestings/list-harvestings.component.ts");
    /* harmony import */


    var src_app_shared_components_list_plantings_list_plantings_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! src/app/shared/components/list-plantings/list-plantings.component */
    "./src/app/shared/components/list-plantings/list-plantings.component.ts");
    /* harmony import */


    var src_app_shared_components_list_sprays_list_sprays_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! src/app/shared/components/list-sprays/list-sprays.component */
    "./src/app/shared/components/list-sprays/list-sprays.component.ts");
    /* harmony import */


    var src_app_shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! src/app/shared/components/user-menu/user-menu.component */
    "./src/app/shared/components/user-menu/user-menu.component.ts");
    /* harmony import */


    var src_app_shared_components_progress_activity_progress_activity_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! src/app/shared/components/progress-activity/progress-activity.component */
    "./src/app/shared/components/progress-activity/progress-activity.component.ts");
    /* harmony import */


    var src_app_shared_components_daily_task_image_preview_daily_task_image_preview_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! src/app/shared/components/daily-task-image-preview/daily-task-image-preview.component */
    "./src/app/shared/components/daily-task-image-preview/daily-task-image-preview.component.ts");
    /* harmony import */


    var src_app_shared_components_cancel_reason_cancel_reason_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! src/app/shared/components/cancel-reason/cancel-reason.component */
    "./src/app/shared/components/cancel-reason/cancel-reason.component.ts");
    /* harmony import */


    var src_app_shared_components_versions_history_versions_history_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! src/app/shared/components/versions-history/versions-history.component */
    "./src/app/shared/components/versions-history/versions-history.component.ts");
    /* harmony import */


    var src_app_shared_components_add_work_progress_add_work_progress_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! src/app/shared/components/add-work-progress/add-work-progress.component */
    "./src/app/shared/components/add-work-progress/add-work-progress.component.ts");
    /* harmony import */


    var src_app_shared_components_suggest_data_suggest_data_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! src/app/shared/components/suggest-data/suggest-data.component */
    "./src/app/shared/components/suggest-data/suggest-data.component.ts");
    /* harmony import */


    var src_app_shared_components_map_sprayings_location_map_sprayings_location_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! src/app/shared/components/map-sprayings-location/map-sprayings-location.component */
    "./src/app/shared/components/map-sprayings-location/map-sprayings-location.component.ts");
    /* harmony import */


    var src_app_shared_components_scoring_scoring_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! src/app/shared/components/scoring/scoring.component */
    "./src/app/shared/components/scoring/scoring.component.ts");
    /* harmony import */


    var src_app_shared_components_success_screen_success_screen_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! src/app/shared/components/success-screen/success-screen.component */
    "./src/app/shared/components/success-screen/success-screen.component.ts");
    /* harmony import */


    var src_app_shared_components_weather_optimal_intervals_weather_optimal_intervals_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! src/app/shared/components/weather-optimal-intervals/weather-optimal-intervals.component */
    "./src/app/shared/components/weather-optimal-intervals/weather-optimal-intervals.component.ts");
    /* harmony import */


    var src_app_shared_components_farmer_direct_list_direct_list_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! src/app/shared/components/farmer/direct-list/direct-list.component */
    "./src/app/shared/components/farmer/direct-list/direct-list.component.ts");
    /* harmony import */


    var src_app_shared_components_farmer_direct_detail_direct_detail_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! src/app/shared/components/farmer/direct-detail/direct-detail.component */
    "./src/app/shared/components/farmer/direct-detail/direct-detail.component.ts");

    var routes = [{
      path: '',
      component: _farmerHome_component__WEBPACK_IMPORTED_MODULE_2__["FarmerHomeComponent"],
      children: [{
        path: 'farmerdashinit',
        component: _shared_dashboards_farmer_dash_init_farmer_dash_init_component__WEBPACK_IMPORTED_MODULE_5__["FarmerDashInitComponent"]
      }, {
        path: 'direct',
        component: src_app_shared_components_farmer_direct_list_direct_list_component__WEBPACK_IMPORTED_MODULE_68__["DirectListComponent"]
      }, {
        path: 'direct/detail',
        component: src_app_shared_components_farmer_direct_detail_direct_detail_component__WEBPACK_IMPORTED_MODULE_69__["DirectDetailComponent"]
      }, {
        path: 'suggestlist',
        component: _shared_components_suggest_list_suggest_list_component__WEBPACK_IMPORTED_MODULE_3__["SuggestListComponent"]
      }, {
        path: 'fields',
        component: _shared_components_fields_fields_component__WEBPACK_IMPORTED_MODULE_7__["FieldsComponent"]
      }, {
        path: 'fields/addfield',
        component: _shared_components_add_field_add_field_component__WEBPACK_IMPORTED_MODULE_4__["AddFieldComponent"]
      }, {
        path: 'lots',
        component: _shared_components_lots_lots_component__WEBPACK_IMPORTED_MODULE_8__["LotsComponent"]
      }, {
        path: 'fields/addlot',
        component: _shared_components_add_lot_add_lot_component__WEBPACK_IMPORTED_MODULE_6__["AddLotComponent"]
      }, {
        path: 'lots/addlot',
        component: _shared_components_add_lot_add_lot_component__WEBPACK_IMPORTED_MODULE_6__["AddLotComponent"]
      }, {
        path: 'campaigns',
        component: _shared_components_campaign_campaigns_component__WEBPACK_IMPORTED_MODULE_14__["CampaignsComponent"]
      }, {
        path: 'campaigns/addcampaign',
        component: _shared_components_add_campaign_add_campaign_component__WEBPACK_IMPORTED_MODULE_13__["AddCampaignComponent"]
      }, {
        path: 'cropprocess',
        component: _shared_components_crop_process_crop_process_component__WEBPACK_IMPORTED_MODULE_18__["CropProcessComponent"]
      }, {
        path: 'listPlantings/addplanting',
        component: _shared_components_add_planting_add_planting_component__WEBPACK_IMPORTED_MODULE_9__["AddPlantingComponent"]
      }, {
        path: 'listFertilizations/addfertilization',
        component: _shared_components_add_fertilization_add_fertilization_component__WEBPACK_IMPORTED_MODULE_22__["AddFertilizationComponent"]
      }, {
        path: 'listSprays/addspray',
        component: _shared_components_add_spray_add_spray_component__WEBPACK_IMPORTED_MODULE_10__["AddSprayComponent"]
      }, {
        path: 'listSprays/spraydetail',
        component: src_app_shared_components_spray_detail_spray_detail_component__WEBPACK_IMPORTED_MODULE_11__["SprayDetailComponent"]
      }, {
        path: 'listHarvestings/addharvesting',
        component: _shared_components_add_harvesting_add_harvesting_component__WEBPACK_IMPORTED_MODULE_12__["AddHarvestingComponent"]
      }, {
        path: 'listDailyTasks',
        component: src_app_shared_components_list_daily_tasks_list_daily_tasks_component__WEBPACK_IMPORTED_MODULE_52__["ListDailyTasksComponent"]
      }, {
        path: 'listDailyTasks/adddailytask',
        component: src_app_shared_components_add_daily_task_add_daily_task_component__WEBPACK_IMPORTED_MODULE_35__["AddDailyTaskComponent"]
      }, {
        path: 'listPlantings',
        component: src_app_shared_components_list_plantings_list_plantings_component__WEBPACK_IMPORTED_MODULE_55__["ListPlantingsComponent"]
      }, {
        path: 'listFertilizations',
        component: src_app_shared_components_list_fertilizations_list_fertilizations_component__WEBPACK_IMPORTED_MODULE_53__["ListFertilizationsComponent"]
      }, {
        path: 'listSprays',
        component: src_app_shared_components_list_sprays_list_sprays_component__WEBPACK_IMPORTED_MODULE_56__["ListSpraysComponent"]
      }, {
        path: 'weatheroptimalinterval',
        component: src_app_shared_components_weather_optimal_intervals_weather_optimal_intervals_component__WEBPACK_IMPORTED_MODULE_67__["WeatherOptimalIntervalsComponent"]
      }, {
        path: 'listHarvestings',
        component: src_app_shared_components_list_harvestings_list_harvestings_component__WEBPACK_IMPORTED_MODULE_54__["ListHarvestingsComponent"]
      }, {
        path: 'addActivity',
        component: _shared_components_add_activity_add_activity_component__WEBPACK_IMPORTED_MODULE_15__["AddActivityComponent"]
      }, {
        path: 'userpanel',
        component: _shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_17__["UserPanelComponent"]
      }, {
        path: 'fields/modifyfield',
        component: _shared_components_modify_field_modify_field_component__WEBPACK_IMPORTED_MODULE_19__["ModifyFieldComponent"]
      }, {
        path: 'lots/modifylot',
        component: _shared_components_modify_lot_modify_lot_component__WEBPACK_IMPORTED_MODULE_20__["ModifyLotComponent"]
      }, {
        path: 'modifycampaign',
        component: _shared_components_modify_campaign_modify_campaign_component__WEBPACK_IMPORTED_MODULE_21__["ModifyCampaignComponent"]
      }, {
        path: 'startalert',
        component: src_app_shared_components_start_alert_start_alert_component__WEBPACK_IMPORTED_MODULE_24__["StartAlertComponent"]
      }, {
        path: 'imagepreview',
        component: src_app_shared_components_imagePreview_imagePreview_component__WEBPACK_IMPORTED_MODULE_23__["ImagePreviewComponent"]
      }, {
        path: 'field-history',
        component: src_app_shared_components_field_history_field_history_component__WEBPACK_IMPORTED_MODULE_25__["FieldHistoryComponent"]
      }, {
        path: 'lot-history',
        component: src_app_shared_components_lot_history_lot_history_component__WEBPACK_IMPORTED_MODULE_26__["LotHistoryComponent"]
      }, {
        path: 'campaign-history',
        component: src_app_shared_components_campaign_history_campaign_history_component__WEBPACK_IMPORTED_MODULE_27__["CampaignHistoryComponent"]
      }, {
        path: 'help-index',
        component: src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_28__["HelpIndexComponent"]
      }, {
        path: 'storage-log',
        component: src_app_shared_components_storage_log_storage_log_component__WEBPACK_IMPORTED_MODULE_29__["StorageLogComponent"]
      }, {
        path: 'storage-log/add-storage',
        component: src_app_shared_components_add_storage_add_storage_component__WEBPACK_IMPORTED_MODULE_30__["AddStorageComponent"]
      }, {
        path: 'time-selection-spray',
        component: src_app_shared_components_time_selection_spray_time_selection_spray_component__WEBPACK_IMPORTED_MODULE_31__["TimeSelectionSprayComponent"]
      }, {
        path: 'privacy-politics',
        component: src_app_shared_components_privacy_politics_privacy_politics_component__WEBPACK_IMPORTED_MODULE_32__["PrivacyPoliticsComponent"]
      }, {
        path: 'add-storage-movements',
        component: src_app_shared_components_add_storage_movements_add_storage_movements_component__WEBPACK_IMPORTED_MODULE_33__["AddStorageMovementsComponent"]
      }, {
        path: 'detail-movement-storage',
        component: src_app_shared_components_detail_movement_storage_detail_movement_storage_component__WEBPACK_IMPORTED_MODULE_34__["DetailMovementStorageComponent"]
      }, {
        path: 'yesnodialog',
        component: src_app_shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_36__["YesNoDialogComponent"]
      }, {
        path: 'selectfield',
        component: src_app_shared_components_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_37__["SelectFieldComponent"]
      }, {
        path: 'add-planting-progress',
        component: src_app_shared_components_planting_progress_dialog_planting_progress_dialog_component__WEBPACK_IMPORTED_MODULE_38__["PlantingProgressDialogComponent"]
      }, {
        path: 'add-harvesting-progress',
        component: src_app_shared_components_harvesting_progress_dialog_harvesting_progress_dialog_component__WEBPACK_IMPORTED_MODULE_42__["HarvestingProgressDialogComponent"]
      }, {
        path: 'add-spray-progress',
        component: src_app_shared_components_spray_progress_dialog_spray_progress_dialog_component__WEBPACK_IMPORTED_MODULE_43__["SprayProgressDialogComponent"]
      }, {
        path: 'add-fertilization-progress',
        component: src_app_shared_components_fertilization_progress_dialog_fertilization_progress_dialog_component__WEBPACK_IMPORTED_MODULE_44__["FertilizationProgressDialogComponent"]
      }, {
        path: 'listmachineryfarmer',
        component: src_app_shared_components_list_machinery_farmer_list_machinery_farmer_component__WEBPACK_IMPORTED_MODULE_39__["ListMachineryFarmerComponent"]
      }, {
        path: 'listmachineryfarmer/add-machinery-farmer',
        component: src_app_shared_components_add_machinery_farmer_add_machinery_farmer_component__WEBPACK_IMPORTED_MODULE_40__["AddMachineryFarmerComponent"]
      }, {
        path: 'machinery-create-farmer',
        component: src_app_shared_components_machinery_create_farmer_machinery_create_farmer_component__WEBPACK_IMPORTED_MODULE_41__["MachineryCreateFarmerComponent"]
      }, {
        path: 'messages',
        component: src_app_shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_46__["MessagesComponent"]
      }, {
        path: 'modifyContactComponent',
        component: src_app_shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_46__["ModifyContactComponent"]
      }, {
        path: 'change-password',
        component: src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_45__["ChangePasswordComponent"]
      }, {
        path: 'notifications',
        component: src_app_shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_47__["NotificationsComponent"]
      }, {
        path: 'list-packaging',
        component: src_app_shared_components_list_dispose_orders_list_dispose_orders_component__WEBPACK_IMPORTED_MODULE_49__["ListDisposeOrdersComponent"]
      }, {
        path: 'packaging',
        component: src_app_shared_components_packaging_packaging_component__WEBPACK_IMPORTED_MODULE_48__["PackagingComponent"]
      }, {
        path: 'add-packaging',
        component: src_app_shared_components_add_packaging_add_packaging_component__WEBPACK_IMPORTED_MODULE_50__["AddPackagingComponent"]
      }, {
        path: 'shared-data',
        component: src_app_shared_components_shared_data_shared_data_component__WEBPACK_IMPORTED_MODULE_51__["SharedDataComponent"]
      }, {
        path: 'user-menu',
        component: src_app_shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_57__["UserMenuComponent"]
      }, {
        path: 'progress-activity',
        component: src_app_shared_components_progress_activity_progress_activity_component__WEBPACK_IMPORTED_MODULE_58__["ProgressActivityComponent"]
      }, {
        path: 'dailytaskimagepreview',
        component: src_app_shared_components_daily_task_image_preview_daily_task_image_preview_component__WEBPACK_IMPORTED_MODULE_59__["DailyTaskImagePreviewComponent"]
      }, {
        path: 'cancel-reason',
        component: src_app_shared_components_cancel_reason_cancel_reason_component__WEBPACK_IMPORTED_MODULE_60__["CancelReasonComponent"]
      }, {
        path: 'versions-history',
        component: src_app_shared_components_versions_history_versions_history_component__WEBPACK_IMPORTED_MODULE_61__["VersionsHistoryComponent"]
      }, {
        path: 'addworkprogress',
        component: src_app_shared_components_add_work_progress_add_work_progress_component__WEBPACK_IMPORTED_MODULE_62__["AddWorkProgressComponent"]
      }, {
        path: 'suggestdata',
        component: src_app_shared_components_suggest_data_suggest_data_component__WEBPACK_IMPORTED_MODULE_63__["SuggestDataComponent"]
      }, {
        path: 'mapsprayingslocation',
        component: src_app_shared_components_map_sprayings_location_map_sprayings_location_component__WEBPACK_IMPORTED_MODULE_64__["MapSprayingsLocationComponent"]
      }, {
        path: 'scoring',
        component: src_app_shared_components_scoring_scoring_component__WEBPACK_IMPORTED_MODULE_65__["ScoringComponent"]
      }, {
        path: 'success-screen',
        component: src_app_shared_components_success_screen_success_screen_component__WEBPACK_IMPORTED_MODULE_66__["SuccessScreenComponent"]
      }, {
        path: 'hepl-index',
        component: src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_28__["HelpIndexComponent"]
      }, {
        path: 'a404',
        component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"]
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
  "./src/app/Core/HomeModule/farmerHome/farmerHome.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Core/HomeModule/farmerHome/farmerHome.component.ts ***!
    \********************************************************************/

  /*! exports provided: FarmerHomeComponent */

  /***/
  function _src_app_Core_HomeModule_farmerHome_farmerHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FarmerHomeComponent", function () {
      return FarmerHomeComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


    var _services_campaigns_campaigns_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../services/campaigns/campaigns.service */
    "./src/app/services/campaigns/campaigns.service.ts");
    /* harmony import */


    var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var src_app_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/app/services/socketIO/socketio.service */
    "./src/app/services/socketIO/socketio.service.ts");
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


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/components/notifications/notifications.component */
    "./src/app/shared/components/notifications/notifications.component.ts");
    /* harmony import */


    var _shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../../shared/components/user-menu/user-menu.component */
    "./src/app/shared/components/user-menu/user-menu.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    var _c0 = ["userMenuButton"];
    var _c1 = ["userMenuImage"];
    var _c2 = ["boxUserMenu"];

    function FarmerHomeComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

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

    function FarmerHomeComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_div_38_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return ctx_r18.isMobile && _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-icon", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_div_38_Template_a_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return ctx_r20.isMobile && _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mat-icon", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_div_38_Template_a_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return ctx_r21.isMobile && _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mat-icon", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_div_38_Template_a_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return ctx_r22.isMobile && _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "mat-icon", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_div_38_Template_a_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

          return ctx_r23.isMobile && _r0.close();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-icon", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "listPlantings");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 10, "MENU.plantings"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "listFertilizations");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, "MENU.fertilization"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "listSprays");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 14, "MENU.spray"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "listHarvestings");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 16, "MENU.harvest"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "listDailyTasks");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 18, "MENU.note"));
      }
    }

    function FarmerHomeComponent_button_59_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_button_59_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

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

    function FarmerHomeComponent_mat_label_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HEADER.select-campaign"));
      }
    }

    function FarmerHomeComponent_mat_option_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var campaign_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", campaign_r26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", campaign_r26.campaignName, " ");
      }
    }

    function FarmerHomeComponent_mat_icon_79_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_mat_icon_79_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r27.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r6.qNotifications);
      }
    }

    function FarmerHomeComponent_mat_icon_80_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_mat_icon_80_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r29.toggleNotifi();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FarmerHomeComponent_div_83_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FarmerHomeComponent_ng_template_84_img_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function FarmerHomeComponent_ng_template_84_img_0_Template_img_error_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r32.errorImg();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r31.avatarUrl, "", ctx_r31.userData.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
      }
    }

    function FarmerHomeComponent_ng_template_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FarmerHomeComponent_ng_template_84_img_0_Template, 1, 2, "img", 75);
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r11.errorImage);
      }
    }

    function FarmerHomeComponent_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function FarmerHomeComponent_mat_label_95_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-label", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "HEADER.select-campaign"));
      }
    }

    function FarmerHomeComponent_mat_option_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var campaign_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", campaign_r34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", campaign_r34.campaignName, " ");
      }
    }

    var FarmerHomeComponent = /*#__PURE__*/function () {
      function FarmerHomeComponent(router, matIconRegistry, domSanitizer, dialog, renderer, translate, global, userDataService, campaignsService, authService, socketService) {
        var _this = this;

        _classCallCheck(this, FarmerHomeComponent);

        this.router = router;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.dialog = dialog;
        this.renderer = renderer;
        this.translate = translate;
        this.global = global;
        this.userDataService = userDataService;
        this.campaignsService = campaignsService;
        this.authService = authService;
        this.socketService = socketService;
        this.isMobile = false;
        this.opened = true; // Added to track sidenav state

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
        this.flag = "es_AR";
        this.qNotifications = 0;
        this.notificationsDown = false;
        this.menuDown = false;
        this.errorImage = false;
        this.showFiller = false;
        this.showDirectFiller = false;
        this.userCampaigns = []; // Cierra userMenu y notificaciones al hacer click en cualquier otro lado

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

      return _createClass(FarmerHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.checkScreenSize();
          this.versionClient = this.global.versionClient;
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
          this.loadCampaigns();
          this.campaignUpdatesSubscription = this.campaignsService.getCampaignsUpdateListener().subscribe(function () {
            _this2.loadCampaigns();
          });
          this.activeCampaignSubscription = this.campaignsService.getCampaignData().subscribe(function (activeCampaign) {
            var _a;

            if (activeCampaign && activeCampaign._id !== ((_a = _this2.activeCampaign) === null || _a === void 0 ? void 0 : _a._id)) {
              _this2.activeCampaign = activeCampaign;
            }
          });

          for (var icon in _variables_icon_urls__WEBPACK_IMPORTED_MODULE_5__["iconsFarmer"]) {
            if (_variables_icon_urls__WEBPACK_IMPORTED_MODULE_5__["iconsFarmer"].hasOwnProperty(icon)) {
              this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(_variables_icon_urls__WEBPACK_IMPORTED_MODULE_5__["iconsFarmer"][icon]));
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
        key: "onCampaignSelect",
        value: function onCampaignSelect(selectedCampaign) {
          var _this3 = this;

          var currentId = "";
          this.campaignsService.getCampaignData().subscribe(function (currentCampaign) {
            if (currentCampaign && currentCampaign._id) {
              currentId = currentCampaign._id;
            } else {
              currentId = "";
            }
          });

          if (selectedCampaign && selectedCampaign._id !== currentId) {
            var newId = selectedCampaign._id;
            var body = {
              currentId: currentId,
              newId: newId
            };
            this.campaignsService.setActive(body).subscribe(function (activeCampaign) {
              if (activeCampaign.success === true) {
                // Actualiza el estado 'active' de las campañas solo si es diferente
                _this3.activeCampaign = activeCampaign.data;

                _this3.campaignsService.setCampaignData(activeCampaign.data);
              }
            });
          }
        }
      }, {
        key: "compareCampaigns",
        value: function compareCampaigns(c1, c2) {
          return c1 && c2 ? c1._id === c2._id : c1 === c2;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _a, _b;

          (_a = this.activeCampaignSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          (_b = this.campaignUpdatesSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
          this.campaignsService.clearCampaignData();
        } // Detecta resize de ventana

      }, {
        key: "onResize",
        value: function onResize() {
          this.checkScreenSize();
        }
      }, {
        key: "checkScreenSize",
        value: function checkScreenSize() {
          this.isMobile = window.innerWidth < 1024; // breakpoint móvil

          this.opened = !this.isMobile;
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
      }, {
        key: "logout",
        value: function logout() {
          var _this4 = this;

          return this.authService.logout().subscribe(function (response) {
            if (response.success === true) {
              _this4.authService.deleteCookies();

              _this4.socketService.closeConn();

              _this4.router.navigate([""]);
            }
          }, function () {
            _this4.authService.deleteCookies();

            _this4.socketService.closeConn();

            _this4.router.navigate([""]);
          });
        }
      }, {
        key: "loadCampaigns",
        value: function loadCampaigns() {
          var _this5 = this;

          var filter = {
            idCampaign: -1
          };
          this.campaignsService.getCampaign(filter).subscribe(function (campaignArray) {
            if (campaignArray.success === true) {
              _this5.userCampaigns = campaignArray.data;
              var activeCampaignFound = false;

              _this5.userCampaigns.forEach(function (campaign) {
                if (campaign.active === true) {
                  _this5.campaignsService.setCampaignData(campaign);

                  activeCampaignFound = true;
                  _this5.activeCampaign = campaign;
                }
              });

              if (!activeCampaignFound) {
                _this5.router.navigate(["farmerhome/campaigns"]);
              }
            }
          });
        }
      }]);
    }();

    FarmerHomeComponent.ɵfac = function FarmerHomeComponent_Factory(t) {
      return new (t || FarmerHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_10__["GlobalVarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_11__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_campaigns_campaigns_service__WEBPACK_IMPORTED_MODULE_12__["CampaignsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_14__["SocketioService"]));
    };

    FarmerHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FarmerHomeComponent,
      selectors: [["app-farmerhome"]],
      viewQuery: function FarmerHomeComponent_Query(rf, ctx) {
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
      hostBindings: function FarmerHomeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function FarmerHomeComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 132,
      vars: 86,
      consts: [["id", "menuDash", 1, "container-menu"], ["fixedInViewport", "true", "mode", "side", "disableClose", "true", 1, "sidenav", 3, "mode", "opened", "disableClose", "openedChange"], ["drawer", ""], ["mat-icon-button", "", "class", "sidenav__close", 3, "click", 4, "ngIf"], [1, "sidenav__header"], [1, "sidenav__logo"], ["src", "../../../../assets/icon/logoBlanco.svg", "alt", "logo"], [1, "menu-list"], ["routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "dashboard"], ["svgIcon", "direct"], ["svgIcon", "campana"], ["svgIcon", "establecimiento"], ["svgIcon", "lote"], ["routerLinkActive", "active", 1, "menu-list__item", "actividades", 3, "click"], ["svgIcon", "actividad"], ["id", "menu-activities", "style", "margin-left: 1rem;", 4, "ngIf"], ["svgIcon", "maquina"], ["svgIcon", "greenPoints"], ["svgIcon", "recomendacion"], [1, "white-text"], [2, "overflow-x", "hidden"], [1, "sidenav-header"], [1, "flex-header-sidenav"], ["mat-icon-button", "", "class", "menu-toggle", 3, "click", 4, "ngIf"], [1, "animation-title"], [1, "animation-title__static"], [3, "svgIcon"], [1, "animation-title__dynamic"], [1, "select-desktop-only"], [2, "width", "40%", "display", "flex", "flex-direction", "column"], ["class", "mat-label-professional", 4, "ngIf"], [1, "search-agrohub", 2, "width", "100%"], [3, "value", "compareWith", "placeholder", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "flex", "1 1 auto"], [1, "sidenav-header__buttons", "desktop-only"], ["routerLinkActive", "active", 2, "display", "flex", "justify-content", "center", 3, "routerLink"], ["svgIcon", "ayuda", 1, "btn-help"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click", 4, "ngIf"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "user-button", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", "margin", "0px 0px 0px 20px", 3, "click"], ["userMenuButton", ""], ["id", "noImage", 4, "ngIf", "ngIfElse"], ["Image", ""], ["id", "avatarMenuErrorImage", 4, "ngIf"], ["mat-button", "", 2, "width", "80px", "height", "40px", "padding", "0px", "margin", "20px"], [2, "width", "100%", "height", "100%", 3, "svgIcon"], [1, "mobile-only"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "select-mobile-only"], [2, "width", "80%", "display", "flex", "flex-direction", "column"], ["moreMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["svgIcon", "ayuda"], ["mat-menu-item", ""], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "usuario"], [1, "container-bodys"], [3, "qNotifications"], ["mat-icon-button", "", 1, "sidenav__close", 3, "click"], ["id", "menu-activities", 2, "margin-left", "1rem"], ["routerLinkActive", "active", 1, "menu-activities__item", 3, "routerLink", "click"], ["svgIcon", "siembra"], ["svgIcon", "fertilizacion"], ["svgIcon", "pulverizacion"], ["svgIcon", "cosecha"], ["svgIcon", "nota"], ["mat-icon-button", "", 1, "menu-toggle", 3, "click"], [1, "mat-label-professional"], [3, "value"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click"], ["id", "noImage"], ["svgIcon", "usuario", "id", "noImageIcon"], ["id", "user-button__avatar", "width", "100", "height", "100", "style", "border-radius: 50px; width: 70px; height: 70px; padding: 0px;", 3, "src", "error", 4, "ngIf"], ["id", "user-button__avatar", "width", "100", "height", "100", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", 3, "src", "error"], ["id", "avatarMenuErrorImage"], ["svgIcon", "usuario", "id", "avatarMenuImage"]],
      template: function FarmerHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function FarmerHomeComponent_Template_mat_sidenav_openedChange_1_listener($event) {
            return ctx.opened = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FarmerHomeComponent_button_3_Template, 3, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-nav-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "mat-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "mat-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "mat-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "mat-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_33_listener($event) {
            return ctx.toggleActivitiesMenu($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-icon", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, FarmerHomeComponent_div_38_Template, 26, 20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "mat-icon", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "mat-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_a_click_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            return ctx.isMobile && _r0.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-icon", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-sidenav-content", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-toolbar", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, FarmerHomeComponent_button_59_Template, 3, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, FarmerHomeComponent_mat_label_70_Template, 3, 3, "mat-label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function FarmerHomeComponent_Template_mat_select_valueChange_72_listener($event) {
            return ctx.activeCampaign = $event;
          })("selectionChange", function FarmerHomeComponent_Template_mat_select_selectionChange_72_listener($event) {
            return ctx.onCampaignSelect($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, FarmerHomeComponent_mat_option_74_Template, 2, 2, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "mat-icon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, FarmerHomeComponent_mat_icon_79_Template, 1, 1, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, FarmerHomeComponent_mat_icon_80_Template, 1, 0, "mat-icon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_button_click_81_listener() {
            return ctx.togglUserMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, FarmerHomeComponent_div_83_Template, 2, 0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, FarmerHomeComponent_ng_template_84_Template, 1, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, FarmerHomeComponent_div_86_Template, 2, 0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "mat-icon", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, FarmerHomeComponent_mat_label_95_Template, 3, 3, "mat-label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function FarmerHomeComponent_Template_mat_select_valueChange_97_listener($event) {
            return ctx.activeCampaign = $event;
          })("selectionChange", function FarmerHomeComponent_Template_mat_select_selectionChange_97_listener($event) {
            return ctx.onCampaignSelect($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](98, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, FarmerHomeComponent_mat_option_99_Template, 2, 2, "mat-option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-menu", null, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "mat-icon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](106, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mat-icon", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_mat_icon_click_108_listener() {
            return ctx.toggleNotifi();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](111, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_button_click_112_listener() {
            return ctx.togglUserMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "mat-icon", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](116, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "mat-icon", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](121, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FarmerHomeComponent_Template_button_click_122_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "exit_to_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](127, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "app-notifications", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("qNotifications", function FarmerHomeComponent_Template_app_notifications_qNotifications_130_listener($event) {
            return ctx.loadNotifications($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "app-user-menu");
        }

        if (rf & 2) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](85);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.isMobile ? "over" : "side")("opened", ctx.opened)("disableClose", !ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", "navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "farmerdashinit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 52, "MENU.home"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "direct");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 54, "MENU.direct"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "campaigns");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 56, "MENU.campaigns"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "fields");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 58, "MENU.fields"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "lots");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 60, "MENU.lots"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 62, "MENU.activities"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFiller);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "listmachineryfarmer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 64, "MENU.machinery"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "scoring");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 66, "MENU.greenpoints"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 68, "MENU.messages"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Version: ", ctx.versionClient, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.opened);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx.global.activeIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 70, ctx.global.activeComponent));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeCampaign);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.activeCampaign ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 72, "HEADER.select-campaign"));

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData.image == "0")("ngIfElse", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("svgIcon", ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeCampaign);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.activeCampaign ? "" : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](98, 74, "HEADER.select-campaign"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.activeCampaign)("compareWith", ctx.compareCampaigns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userCampaigns);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "help-index");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](106, 76, "USER-MENU.help"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](111, 78, "USER-MENU.notification"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](116, 80, "USER-MENU.profile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("svgIcon", ctx.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](121, 82, "USER-MENU.language"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](127, 84, "USER-MENU.logout"));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__["MatToolbar"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_22__["NotificationsComponent"], _shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_23__["UserMenuComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatLabel"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadge"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["@charset \"UTF-8\";\n.icon-svg[_ngcontent-%COMP%] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.icon-svg[class*=icon-logo][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/logo01.svg);\n          mask-image: url(/src/assets/icon/logo01.svg);\n  color: #ffffff;\n}\n.icon-svg[class*=icon-dashboard][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/iconDashboard.svg);\n          mask-image: url(/src/assets/icon/iconDashboard.svg);\n  color: #ffffff;\n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 1.5em;\n}\n.container-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\nul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 50%, #ccccccc7 100%) !important;\n  color: rgba(0, 0, 0, 0.87);\n  height: 100vh;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  padding-bottom: 2em;\n  background-color: #101c2a;\n  box-shadow: 5px 10px 10px 0px rgba(153, 153, 153, 0.63);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 3;\n}\n.sidenav__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.sidenav__logo[_ngcontent-%COMP%] {\n  text-align: center;\n  border-left: 5px solid #101c2a;\n}\n.sidenav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.sidenav__close[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  padding: 20px 0 2em 0;\n  border-left: 5px solid #101c2a;\n}\n.menu-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-list__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-list__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-list__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.menu-activities__item[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-activities__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-activities__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-activities__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-activities__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden !important;\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  z-index: 20000 !important;\n  background-color: #ffffff;\n  color: #101c2a;\n  box-shadow: 8px 10px 10px 0px rgba(153, 153, 153, 0.3);\n  box-sizing: border-box;\n}\n.flex-header-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: #00d963;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: #ffffff !important;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #101c2a !important;\n  width: 25px;\n  height: 25px;\n}\n\n.container-bodys[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  margin-top: 100px;\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n}\n\n.animation-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  margin-right: 20px;\n}\n.animation-title__static[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  fill: #00d963 !important;\n}\n.animation-title__dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 600;\n  font-family: \"Noto Sans\", sans-serif;\n  color: #00a99e;\n  animation: slide 3s steps(10) infinite;\n}\n@keyframes slide {\n  100% {\n    top: 0px;\n  }\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background: #ffffff;\n  border-left: 2px solid #00a99e;\n  animation: typing 2s steps(20) forwards;\n}\n@keyframes typing {\n  60%, 100% {\n    left: calc(100% + 30px);\n  }\n}\n\n  .mat-drawer-container {\n  position: relative !important;\n}\n  .mat-drawer-backdrop {\n  z-index: 2 !important;\n}\n  .mat-drawer.sidenav {\n  z-index: 3 !important;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.select-desktop-only[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n.mobile-only[_ngcontent-%COMP%], .select-mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 1024px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 0.5rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .mobile-only[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .select-mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n    width: 100%;\n    justify-content: space-between;\n    padding: 0rem 0.5rem 0.5rem 0.5rem;\n    margin-top: 0rem;\n  }\n\n  .mat-label-professional[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n  }\n\n  .sidenav-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0.5rem;\n    height: 110px;\n  }\n\n  .sidenav__close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  .sidenav__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .sidenav-header__buttons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .flex-header-sidenav[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    padding: 0rem !important;\n    justify-content: space-between;\n  }\n\n  .animation-title[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex-grow: 0;\n  }\n  .animation-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n  }\n\n  .animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    height: 50%;\n  }\n\n  .container-bodys[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n}\n@media (max-width: 767px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n\n@media (max-width: 480px) {\n  .container-bodys[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 28px !important;\n    height: 28px !important;\n  }\n  .menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.flex-header-sidenav[_ngcontent-%COMP%]   .flex-professional[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n  flex-grow: 9;\n}\n.mat-label-professional[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  margin-bottom: -4px;\n  color: #CCCCCC;\n}\n.search-agrohub[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 0.5px solid #101c2a;\n  border-radius: 5px;\n  padding: 0em 0.5em;\n  margin: 0px;\n  box-sizing: border-box;\n  display: flex;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background-color: transparent;\n  color: #101c2a;\n  font-size: 0.8rem;\n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #101c2a;\n  opacity: 1;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #101c2a;\n  opacity: 1;\n  \n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #101c2a;\n}\n.search-agrohub[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #101c2a;\n}\n.search-agrohub[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  height: -moz-fit-content;\n  height: fit-content;\n  font-size: 0.8rem;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  padding: 0em !important;\n}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FarmerHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "app-farmerhome",
          templateUrl: "./farmerHome.component.html",
          styleUrls: ["./farmerHome.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
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
          type: _services_campaigns_campaigns_service__WEBPACK_IMPORTED_MODULE_12__["CampaignsService"]
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
        }, {
          type: src_app_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_14__["SocketioService"]
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
  "./src/app/Core/HomeModule/farmerHome/farmerHome.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Core/HomeModule/farmerHome/farmerHome.module.ts ***!
    \*****************************************************************/

  /*! exports provided: FarmerHomeModule */

  /***/
  function _src_app_Core_HomeModule_farmerHome_farmerHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FarmerHomeModule", function () {
      return FarmerHomeModule;
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


    var _farmerHome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./farmerHome-routing.module */
    "./src/app/Core/HomeModule/farmerHome/farmerHome-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _farmerHome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./farmerHome.component */
    "./src/app/Core/HomeModule/farmerHome/farmerHome.component.ts");
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

    var FarmerHomeModule = /*#__PURE__*/_createClass(function FarmerHomeModule() {
      _classCallCheck(this, FarmerHomeModule);
    });

    FarmerHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FarmerHomeModule
    });
    FarmerHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FarmerHomeModule_Factory(t) {
        return new (t || FarmerHomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _farmerHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_9__["UserMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FarmerHomeModule, {
        declarations: [_farmerHome_component__WEBPACK_IMPORTED_MODULE_4__["FarmerHomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _farmerHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_9__["UserMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FarmerHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_farmerHome_component__WEBPACK_IMPORTED_MODULE_4__["FarmerHomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _farmerHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_8__["NotificationsModule"], src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_9__["UserMenuModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
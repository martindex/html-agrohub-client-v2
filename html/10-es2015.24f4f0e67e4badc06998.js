(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/app/Core/HomeModule/supervisorHome/supervisorHome-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Core/HomeModule/supervisorHome/supervisorHome-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _supervisorHome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supervisorHome.component */ "./src/app/Core/HomeModule/supervisorHome/supervisorHome.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/user-panel/user-panel.component */ "./src/app/shared/components/user-panel/user-panel.component.ts");
/* harmony import */ var _shared_dashboards_supervisor_dash_init_supervisor_dash_init_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dashboards/supervisor-dash-init/supervisor-dash-init.component */ "./src/app/shared/dashboards/supervisor-dash-init/supervisor-dash-init.component.ts");
/* harmony import */ var src_app_shared_components_request_activities_request_activities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/request-activities/request-activities.component */ "./src/app/shared/components/request-activities/request-activities.component.ts");
/* harmony import */ var src_app_shared_components_supervisors_supervisors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/supervisors/supervisors.component */ "./src/app/shared/components/supervisors/supervisors.component.ts");
/* harmony import */ var src_app_shared_components_add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/add-supervisor/add-supervisor.component */ "./src/app/shared/components/add-supervisor/add-supervisor.component.ts");
/* harmony import */ var src_app_shared_components_modify_supervisor_modify_supervisor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/modify-supervisor/modify-supervisor.component */ "./src/app/shared/components/modify-supervisor/modify-supervisor.component.ts");
/* harmony import */ var src_app_shared_components_supervisor_password_supervisor_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/supervisor-password/supervisor-password.component */ "./src/app/shared/components/supervisor-password/supervisor-password.component.ts");
/* harmony import */ var src_app_shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/components/yes-no-dialog/yes-no-dialog.component */ "./src/app/shared/components/yes-no-dialog/yes-no-dialog.component.ts");
/* harmony import */ var src_app_shared_components_assign_supervisor_assign_supervisor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/assign-supervisor/assign-supervisor.component */ "./src/app/shared/components/assign-supervisor/assign-supervisor.component.ts");
/* harmony import */ var src_app_shared_components_imagePreview_imagePreview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/components/imagePreview/imagePreview.component */ "./src/app/shared/components/imagePreview/imagePreview.component.ts");
/* harmony import */ var _shared_components_requests_requests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/requests/requests.component */ "./src/app/shared/components/requests/requests.component.ts");
/* harmony import */ var src_app_shared_components_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/components/select-field/select-field.component */ "./src/app/shared/components/select-field/select-field.component.ts");
/* harmony import */ var src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/components/help-index/help-index.component */ "./src/app/shared/components/help-index/help-index.component.ts");
/* harmony import */ var src_app_shared_components_list_farmers_list_farmers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/components/list-farmers/list-farmers.component */ "./src/app/shared/components/list-farmers/list-farmers.component.ts");
/* harmony import */ var src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/components/change-password/change-password.component */ "./src/app/shared/components/change-password/change-password.component.ts");
/* harmony import */ var src_app_shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/components/messages/messages.component */ "./src/app/shared/components/messages/messages.component.ts");
/* harmony import */ var src_app_shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/components/notifications/notifications.component */ "./src/app/shared/components/notifications/notifications.component.ts");
/* harmony import */ var src_app_shared_components_add_sensitive_areas_add_sensitive_areas_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/components/add-sensitive-areas/add-sensitive-areas.component */ "./src/app/shared/components/add-sensitive-areas/add-sensitive-areas.component.ts");
/* harmony import */ var src_app_shared_components_cancel_reason_cancel_reason_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/components/cancel-reason/cancel-reason.component */ "./src/app/shared/components/cancel-reason/cancel-reason.component.ts");
/* harmony import */ var src_app_shared_components_reference_image_reference_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/components/reference-image/reference-image.component */ "./src/app/shared/components/reference-image/reference-image.component.ts");
/* harmony import */ var src_app_shared_components_versions_history_versions_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/components/versions-history/versions-history.component */ "./src/app/shared/components/versions-history/versions-history.component.ts");



























const routes = [
    { path: '', component: _supervisorHome_component__WEBPACK_IMPORTED_MODULE_2__["SupervisorHomeComponent"],
        children: [
            {
                path: 'userpanel', component: _shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelComponent"],
            },
            {
                path: 'a404', component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            },
            {
                path: 'supervisordashinit', component: _shared_dashboards_supervisor_dash_init_supervisor_dash_init_component__WEBPACK_IMPORTED_MODULE_5__["SupervisorDashInitComponent"],
            },
            {
                path: 'requestactivities', component: src_app_shared_components_request_activities_request_activities_component__WEBPACK_IMPORTED_MODULE_6__["RequestActivitiesComponent"],
            },
            {
                path: 'supervisors', component: src_app_shared_components_supervisors_supervisors_component__WEBPACK_IMPORTED_MODULE_7__["SupervisorsComponent"],
            },
            {
                path: 'supervisors/addsupervisor', component: src_app_shared_components_add_supervisor_add_supervisor_component__WEBPACK_IMPORTED_MODULE_8__["AddSupervisorComponent"],
            },
            {
                path: 'supervisors/modifysupervisor', component: src_app_shared_components_modify_supervisor_modify_supervisor_component__WEBPACK_IMPORTED_MODULE_9__["ModifySupervisorComponent"],
            },
            {
                path: 'modifysupervisorpassword', component: src_app_shared_components_supervisor_password_supervisor_password_component__WEBPACK_IMPORTED_MODULE_10__["SupervisorPasswordComponent"],
            },
            {
                path: 'yesnodialog', component: src_app_shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_11__["YesNoDialogComponent"],
            },
            {
                path: 'assignsupervisor', component: src_app_shared_components_assign_supervisor_assign_supervisor_component__WEBPACK_IMPORTED_MODULE_12__["AssignSupervisorComponent"],
            },
            {
                path: 'imagepreview', component: src_app_shared_components_imagePreview_imagePreview_component__WEBPACK_IMPORTED_MODULE_13__["ImagePreviewComponent"],
            },
            {
                path: 'requests', component: _shared_components_requests_requests_component__WEBPACK_IMPORTED_MODULE_14__["RequestsComponent"],
            },
            {
                path: 'selectfield', component: src_app_shared_components_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_15__["SelectFieldComponent"],
            },
            {
                path: 'list-farmers', component: src_app_shared_components_list_farmers_list_farmers_component__WEBPACK_IMPORTED_MODULE_17__["ListFarmersComponent"],
            },
            {
                path: 'help-index', component: src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_16__["HelpIndexComponent"],
            },
            {
                path: 'change-password', component: src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"],
            },
            {
                path: 'messages', component: src_app_shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
            },
            {
                path: 'modifyContactComponent', component: src_app_shared_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["ModifyContactComponent"],
            },
            {
                path: 'notifications', component: src_app_shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_20__["NotificationsComponent"],
            },
            {
                path: 'add-sensitive-areas', component: src_app_shared_components_add_sensitive_areas_add_sensitive_areas_component__WEBPACK_IMPORTED_MODULE_21__["AddSensitiveAreasComponent"]
            },
            {
                path: 'cancel-reason', component: src_app_shared_components_cancel_reason_cancel_reason_component__WEBPACK_IMPORTED_MODULE_22__["CancelReasonComponent"]
            },
            {
                path: 'reference-image', component: src_app_shared_components_reference_image_reference_image_component__WEBPACK_IMPORTED_MODULE_23__["ReferenceImageComponent"]
            },
            {
                path: 'versions-history', component: src_app_shared_components_versions_history_versions_history_component__WEBPACK_IMPORTED_MODULE_24__["VersionsHistoryComponent"],
            }
        ],
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Core/HomeModule/supervisorHome/supervisorHome.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Core/HomeModule/supervisorHome/supervisorHome.component.ts ***!
  \****************************************************************************/
/*! exports provided: SupervisorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorHomeComponent", function() { return SupervisorHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/help-index/help-index.component */ "./src/app/shared/components/help-index/help-index.component.ts");
/* harmony import */ var src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/change-password/change-password.component */ "./src/app/shared/components/change-password/change-password.component.ts");
/* harmony import */ var src_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/variables/icon-urls */ "./src/variables/icon-urls.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/socketIO/socketio.service */ "./src/app/services/socketIO/socketio.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/datauser/userdata.service */ "./src/app/services/datauser/userdata.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/globalVars/global-vars.service */ "./src/app/services/globalVars/global-vars.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/notifications/notifications.component */ "./src/app/shared/components/notifications/notifications.component.ts");
/* harmony import */ var _shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/user-menu/user-menu.component */ "./src/app/shared/components/user-menu/user-menu.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");





























const _c0 = ["userMenuButton"];
const _c1 = ["userMenuImage"];
const _c2 = ["boxUserMenu"];
const _c3 = ["userMenuRef"];
function SupervisorHomeComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupervisorHomeComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.toggleSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupervisorHomeComponent_mat_icon_52_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_mat_icon_52_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.toggleNotifi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r3.qNotifications);
} }
function SupervisorHomeComponent_mat_icon_53_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_mat_icon_53_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.toggleNotifi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupervisorHomeComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SupervisorHomeComponent_ng_template_57_img_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function SupervisorHomeComponent_ng_template_57_img_0_Template_img_error_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.errorImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r20.avatarUrl, "", ctx_r20.userData.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function SupervisorHomeComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SupervisorHomeComponent_ng_template_57_img_0_Template, 1, 2, "img", 51);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.errorImage);
} }
function SupervisorHomeComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "sidenav-collapsed": a0 }; };
class SupervisorHomeComponent {
    constructor(socketService, authService, userDataService, matIconRegistry, domSanitizer, router, dialog, renderer, global, translate, breakpointObserver) {
        this.socketService = socketService;
        this.authService = authService;
        this.userDataService = userDataService;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.router = router;
        this.dialog = dialog;
        this.renderer = renderer;
        this.global = global;
        this.translate = translate;
        this.breakpointObserver = breakpointObserver;
        this.avatarUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].imageUserUrl;
        this.sideBarOpen = true;
        this.qNotifications = 0;
        this.notificationsDown = false;
        this.menuDown = false;
        this.errorImage = false;
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
        this.isResponsive = false;
        this.isSmallScreen = false;
        this.opened = true;
        // Cierra userMenu y notificaciones al hacer click en cualquier otro lado
        // Cierra userMenu y notificaciones al hacer click en cualquier otro lado
        this.renderer.listen("window", "click", (e) => {
            const target = e.target;
            // userMenu
            if (this.menuDown) {
                const boxUserMenu = document.getElementById('boxUserMenu');
                const clickedInsideMenu = boxUserMenu ? boxUserMenu.contains(target) : false;
                if (!clickedInsideMenu) {
                    this.toggleUserMenu();
                }
            }
            // notificaciones
            if (target.id !== "Capa_1" &&
                target.id !== "bellWithNotif" &&
                target.id !== "bellWithoutNotif" &&
                target.id !== "unreadnewPeriurbanSpray" &&
                target.id !== "unreadAddContact" &&
                target.id !== "generalNewPeriurbanSpray" &&
                target.id !== "generalAddContact" &&
                target.id !== "dateNewPeriurbanSpray" &&
                target.id !== "dateAddContact" &&
                target.id !== "tabsNotificaciones" &&
                target.id !== "tabNotificaciones" &&
                target.id !== "noLeidas" &&
                target.id !== "iconLeidas" &&
                target.id !== "remove_red_eye" &&
                target.id !== "boxNotification" &&
                this.notificationsDown) {
                this.toggleNotifi();
            }
        });
    }
    onResize() {
        this.isSmallScreen = window.innerWidth < 1024;
        this.opened = !this.isSmallScreen; // Ajusta automáticamente el estado del sidenav
    }
    ngOnInit() {
        this.versionClient = this.global.versionClient;
        this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["Breakpoints"].XSmall]).subscribe(result => {
            this.isResponsive = result.matches;
        });
        this.onResize();
        this.userDataService.getUserData().subscribe(userData => {
            this.userData = userData;
            const language = this.userData.idCountry && this.userData.idCountry.eq_country ? this.userData.idCountry.eq_country : 'es_AR';
            this.translate.use(language);
        });
        for (const icon in src_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsSupervisor"]) {
            if (src_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsSupervisor"].hasOwnProperty(icon)) {
                this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(src_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsSupervisor"][icon]));
            }
        }
        this.socketService.setupSocketConnection();
    }
    getUserInitials() {
        return this.userData.firstName.charAt(0) + this.userData.lastName.charAt(0);
    }
    logout() {
        return this.authService.logout().subscribe(() => {
            this.socketService.closeConn();
            this.authService.logout();
            this.router.navigate([""]);
        }, () => {
            this.authService.logout();
            this.socketService.closeConn();
            this.router.navigate([""]);
        });
    }
    helpIndex() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_4__["HelpIndexComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
        });
    }
    changePassword() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {};
        const dialogRef = this.dialog.open(src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
        });
    }
    toggleNotifi() {
        var box = document.getElementById('boxNotification');
        if (this.notificationsDown) {
            box.style.height = '0px';
            box.style.opacity = '0';
            box.style.zIndex = '-1000';
            this.notificationsDown = false;
        }
        else {
            box.style.height = '400px';
            box.style.opacity = '1';
            box.style.zIndex = '99999';
            this.notificationsDown = true;
        }
    }
    toggleUserMenu(event) {
        if (event) {
            event.stopPropagation();
        }
        // Try to get element via ViewChild first (scoped to component), then fallback to global ID
        let box = null;
        if (this.userMenuRef && this.userMenuRef.nativeElement) {
            box = this.userMenuRef.nativeElement.querySelector('#boxUserMenu');
        }
        if (!box) {
            box = document.getElementById('boxUserMenu');
        }
        if (!box) {
            console.warn('User Menu element (boxUserMenu) not found in DOM.');
            return;
        }
        if (this.menuDown) {
            this.renderer.setStyle(box, 'height', '0px');
            this.renderer.setStyle(box, 'opacity', '0');
            this.renderer.setStyle(box, 'zIndex', '-1000');
            this.menuDown = false;
        }
        else {
            this.renderer.setStyle(box, 'height', '400px');
            this.renderer.setStyle(box, 'opacity', '1');
            this.renderer.setStyle(box, 'zIndex', '99999');
            this.menuDown = true;
        }
    }
    loadNotifications(qNotifications) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.qNotifications = qNotifications;
        });
    }
    errorImg() {
        this.errorImage = true;
    }
    switchLanguage(language) {
        this.translate.use(language);
    }
    toggleSidenav() {
        this.opened = !this.opened;
    }
    closeSidenavOnMobile() {
        if (this.isSmallScreen) {
            this.opened = false;
        }
    }
}
SupervisorHomeComponent.ɵfac = function SupervisorHomeComponent_Factory(t) { return new (t || SupervisorHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_10__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_14__["GlobalVarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"])); };
SupervisorHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SupervisorHomeComponent, selectors: [["app-supervisorhome"]], viewQuery: function SupervisorHomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.userMenuButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.userMenuImage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.boxUserMenu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.userMenuRef = _t.first);
    } }, hostBindings: function SupervisorHomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function SupervisorHomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 92, vars: 54, consts: [[1, "sidenav-container"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened", "ngClass", "disableClose", "openedChange"], ["sidenav", ""], ["mat-icon-button", "", "class", "sidenav__close", 3, "click", 4, "ngIf"], [1, "sidenav__header"], [1, "sidenav__logo"], ["src", "../../../../assets/icon/logoBlanco.svg", "alt", "logo"], [1, "menu-container"], [1, "menu-list"], ["routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "dashboard"], ["svgIcon", "solicitud"], ["svgIcon", "supervisor"], ["svgIcon", "productor"], ["svgIcon", "recomendacion"], [1, "white-text"], [1, "sidenav-header"], [1, "flex-header-sidenav"], ["mat-icon-button", "", "class", "menu-toggle", 3, "click", 4, "ngIf"], [1, "animation-title"], [1, "animation-title__static"], [3, "svgIcon"], [1, "animation-title__dynamic"], [2, "flex", "1 1 auto"], [1, "sidenav-header__buttons", "desktop-only"], ["routerLinkActive", "active", 2, "display", "flex", "justify-content", "center", 3, "routerLink"], ["svgIcon", "ayuda", 1, "btn-help"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click", 4, "ngIf"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "user-button", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", "margin", "0px 0px 0px 20px", 3, "click"], ["userMenuButton", ""], ["id", "noImage", 4, "ngIf", "ngIfElse"], ["Image", ""], ["id", "avatarMenuErrorImage", 4, "ngIf"], [1, "mobile-only"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["moreMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["svgIcon", "ayuda"], ["mat-menu-item", "", 3, "click"], ["id", "bellWithoutNotif", "svgIcon", "notificacion"], ["svgIcon", "usuario"], [1, "container-bodys", "content"], [3, "qNotifications"], ["userMenuRef", ""], ["mat-icon-button", "", 1, "sidenav__close", 3, "click"], ["mat-icon-button", "", 1, "menu-toggle", 3, "click"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click"], ["id", "noImage"], ["svgIcon", "usuario", "id", "noImageIcon"], ["id", "user-button__avatar", "width", "100", "height", "100", "style", "border-radius: 50px; width: 70px; height: 70px; padding: 0px;", 3, "src", "error", 4, "ngIf"], ["id", "user-button__avatar", "width", "100", "height", "100", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", 3, "src", "error"], ["id", "avatarMenuErrorImage"], ["svgIcon", "usuario", "id", "avatarMenuImage"]], template: function SupervisorHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function SupervisorHomeComponent_Template_mat_sidenav_openedChange_1_listener($event) { return ctx.opened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SupervisorHomeComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-nav-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_a_click_9_listener() { return ctx.closeSidenavOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_a_click_14_listener() { return ctx.closeSidenavOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_a_click_19_listener() { return ctx.closeSidenavOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_a_click_24_listener() { return ctx.closeSidenavOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_a_click_29_listener() { return ctx.closeSidenavOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-toolbar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, SupervisorHomeComponent_button_39_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "mat-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SupervisorHomeComponent_mat_icon_52_Template, 1, 1, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, SupervisorHomeComponent_mat_icon_53_Template, 1, 0, "mat-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_button_click_54_listener($event) { return ctx.toggleUserMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, SupervisorHomeComponent_div_56_Template, 2, 0, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, SupervisorHomeComponent_ng_template_57_Template, 1, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, SupervisorHomeComponent_div_59_Template, 2, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-menu", null, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "mat-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_button_click_71_listener() { return ctx.toggleNotifi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "mat-icon", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_button_click_76_listener() { return ctx.toggleUserMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "mat-icon", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SupervisorHomeComponent_Template_button_click_81_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "app-notifications", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("qNotifications", function SupervisorHomeComponent_Template_app_notifications_qNotifications_89_listener($event) { return ctx.loadNotifications($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "app-user-menu", null, 44);
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.isSmallScreen ? "over" : "side")("opened", ctx.opened)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](52, _c4, ctx.isResponsive))("disableClose", !ctx.isSmallScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSmallScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "supervisordashinit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 32, "MENU-SUPERVISOR.home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 34, "MENU-SUPERVISOR.request"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "supervisors");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 36, "MENU-SUPERVISOR.supervisors"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "list-farmers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 38, "MENU-SUPERVISOR.productor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 40, "MENU-SUPERVISOR.messages"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Version: ", ctx.versionClient, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx.global.activeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 42, ctx.global.activeComponent));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "help-index");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 44, "USER-MENU.help"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 46, "USER-MENU.notification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 48, "USER-MENU.profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](86, 50, "USER-MENU.logout"));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__["NotificationsComponent"], _shared_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_24__["UserMenuComponent"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadge"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: ["@charset \"UTF-8\";\n.icon-svg[_ngcontent-%COMP%] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.icon-svg[class*=icon-logo][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/logo01.svg);\n          mask-image: url(/src/assets/icon/logo01.svg);\n  color: #ffffff;\n}\n.icon-svg[class*=icon-dashboard][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/iconDashboard.svg);\n          mask-image: url(/src/assets/icon/iconDashboard.svg);\n  color: #ffffff;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 5px 5px;\n  border-radius: 15px;\n  background-color: #ffffff;\n}\n.border[_ngcontent-%COMP%] {\n  border: solid 1px #CCCCCC;\n}\n.mat-expanded.border[_ngcontent-%COMP%] {\n  border: solid 1px #00d963 !important;\n  \n}\n.mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0px 14px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 15px;\n  margin-bottom: 20px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type   [_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 5px 5px 10px rgba(34, 34, 36, 0.104);\n}\nmat-panel-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\nmat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00a99e;\n  stroke: 5px;\n  width: 15px;\n  height: 15px;\n  margin: 0px 5px 0px 0px;\n}\nmat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.flexTitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.flexTitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #00a99e;\n  font-weight: bold;\n}\n.contentInfo[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0px;\n  padding: 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  display: inline-block;\n  margin: 2px 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.campaign-act[_ngcontent-%COMP%] {\n  color: #00a99e;\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-style: solid;\n  border-top-width: 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em 1.5em;\n  \n}\n.imagenEstablecimiento[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-left: 0px;\n  height: 130px;\n  width: 130px;\n}\nmat-expansion-panel.history-campaign[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  border: 1px solid #ccc;\n}\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  mat-panel-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .imagenEstablecimiento[_ngcontent-%COMP%] {\n    width: 45px !important;\n    height: 105px;\n  }\n}\n.simple-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-bottom: 1em;\n  border: solid 1px #00d963;\n}\n.simple-card[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  margin: -8px 0px 0px 0px;\n}\n.simple-card[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  margin-right: 0.5em;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.no-data[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2em;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #101c2a;\n  display: flex;\n  justify-content: center;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 219, 99, 0.302);\n  border-radius: 0px;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 219, 99, 0.302) !important;\n}\n.mat-expansion-panel.mat-expansion-panel.border[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  width: calc(100% - 10px) !important;\n  \n  margin: 5px 6px !important;\n  \n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  \n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 1.5em;\n}\n.container-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\nul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 50%, #ccccccc7 100%) !important;\n  color: rgba(0, 0, 0, 0.87);\n  height: 100vh;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  padding-bottom: 2em;\n  background-color: #101c2a;\n  box-shadow: 5px 10px 10px 0px rgba(153, 153, 153, 0.63);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 3;\n}\n.sidenav__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.sidenav__logo[_ngcontent-%COMP%] {\n  text-align: center;\n  border-left: 5px solid #101c2a;\n}\n.sidenav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.sidenav__close[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  padding: 20px 0 2em 0;\n  border-left: 5px solid #101c2a;\n}\n.menu-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-list__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-list__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-list__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.menu-activities__item[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-activities__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-activities__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-activities__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-activities__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden !important;\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  z-index: 20000 !important;\n  background-color: #ffffff;\n  color: #101c2a;\n  box-shadow: 8px 10px 10px 0px rgba(153, 153, 153, 0.3);\n  box-sizing: border-box;\n}\n.flex-header-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: #00d963;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: #ffffff !important;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #101c2a !important;\n  width: 25px;\n  height: 25px;\n}\n\n.container-bodys[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  margin-top: 100px;\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n}\n\n.animation-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  margin-right: 20px;\n}\n.animation-title__static[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  fill: #00d963 !important;\n}\n.animation-title__dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 600;\n  font-family: \"Noto Sans\", sans-serif;\n  color: #00a99e;\n  animation: slide 3s steps(10) infinite;\n}\n@keyframes slide {\n  100% {\n    top: 0px;\n  }\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background: #ffffff;\n  border-left: 2px solid #00a99e;\n  animation: typing 2s steps(20) forwards;\n}\n@keyframes typing {\n  60%, 100% {\n    left: calc(100% + 30px);\n  }\n}\n\n  .mat-drawer-container {\n  position: relative !important;\n}\n  .mat-drawer-backdrop {\n  z-index: 2 !important;\n}\n  .mat-drawer.sidenav {\n  z-index: 3 !important;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.select-desktop-only[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n.mobile-only[_ngcontent-%COMP%], .select-mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 1024px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 0.5rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .mobile-only[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .select-mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n    width: 100%;\n    justify-content: space-between;\n    padding: 0rem 0.5rem 0.5rem 0.5rem;\n    margin-top: 0rem;\n  }\n\n  .mat-label-professional[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n  }\n\n  .sidenav-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0.5rem;\n    height: 110px;\n  }\n\n  .sidenav__close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  .sidenav__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .sidenav-header__buttons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .flex-header-sidenav[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    padding: 0rem !important;\n    justify-content: space-between;\n  }\n\n  .animation-title[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex-grow: 0;\n  }\n  .animation-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n  }\n\n  .animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    height: 50%;\n  }\n\n  .container-bodys[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n}\n@media (max-width: 767px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n\n@media (max-width: 480px) {\n  .container-bodys[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 28px !important;\n    height: 28px !important;\n  }\n  .menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n#avatarMenuErrorImage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 50px;\n}\n.letters-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 80%;\n  font-weight: 300;\n  font-size: 2.5em;\n}\n\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n  background-color: transparent !important;\n}\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  \n  width: 240px;\n  transition: width 0.3s ease-in-out;\n}\n.sidenav.mat-drawer-opened[_ngcontent-%COMP%] {\n  width: 240px;\n}\n.sidenav.mat-drawer-closed[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.sidenav[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 80%;\n  \n}\n.sidenav[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  \n  overflow: hidden;\n  \n}\n.sidenav[_ngcontent-%COMP%]   .white-text[_ngcontent-%COMP%] {\n  margin-top: auto;\n  \n}\n.menu-button-agrohub[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-right: 1em;\n  margin-top: -0.5em;\n}\n.menu-button-agrohub[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #101c2a;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100% !important;\n  height: 100%;\n  margin-bottom: -0.7em;\n}\n.menu-button-agrohub[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  color: #00d963;\n  font-size: 0.8rem;\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 16px;\n  padding-bottom: 120px;\n}\nmat-sidenav-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100vw;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding-bottom: 250px !important;\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  mat-sidenav-content[_ngcontent-%COMP%] {\n    overflow-y: scroll !important;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n.mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SupervisorHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-supervisorhome',
                templateUrl: './supervisorHome.component.html',
                styleUrls: ['./supervisorHome.component.scss']
            }]
    }], function () { return [{ type: _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_8__["SocketioService"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_10__["UserDataService"] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_14__["GlobalVarsService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["BreakpointObserver"] }]; }, { userMenuButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['userMenuButton', { static: false }]
        }], userMenuImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['userMenuImage', { static: false }]
        }], boxUserMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['boxUserMenu', { static: false }]
        }], userMenuRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['userMenuRef', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/Core/HomeModule/supervisorHome/supervisorHome.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Core/HomeModule/supervisorHome/supervisorHome.module.ts ***!
  \*************************************************************************/
/*! exports provided: SupervisorHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupervisorHomeModule", function() { return SupervisorHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _supervisorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supervisorHome-routing.module */ "./src/app/Core/HomeModule/supervisorHome/supervisorHome-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _supervisorHome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supervisorHome.component */ "./src/app/Core/HomeModule/supervisorHome/supervisorHome.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/notifications/notifications.module */ "./src/app/shared/components/notifications/notifications.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_shared_components_supervisor_menu_supervisor_menu_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/supervisor-menu/supervisor-menu-module */ "./src/app/shared/components/supervisor-menu/supervisor-menu-module.ts");
/* harmony import */ var src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/user-menu/user-menu.module */ "./src/app/shared/components/user-menu/user-menu.module.ts");













class SupervisorHomeModule {
}
SupervisorHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SupervisorHomeModule });
SupervisorHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SupervisorHomeModule_Factory(t) { return new (t || SupervisorHomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _supervisorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
            src_app_shared_components_supervisor_menu_supervisor_menu_module__WEBPACK_IMPORTED_MODULE_9__["SupervisorMenuModule"],
            src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__["UserMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SupervisorHomeModule, { declarations: [_supervisorHome_component__WEBPACK_IMPORTED_MODULE_4__["SupervisorHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _supervisorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
        src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], src_app_shared_components_supervisor_menu_supervisor_menu_module__WEBPACK_IMPORTED_MODULE_9__["SupervisorMenuModule"],
        src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__["UserMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupervisorHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _supervisorHome_component__WEBPACK_IMPORTED_MODULE_4__["SupervisorHomeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _supervisorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                    src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
                    src_app_shared_components_supervisor_menu_supervisor_menu_module__WEBPACK_IMPORTED_MODULE_9__["SupervisorMenuModule"],
                    src_app_shared_components_user_menu_user_menu_module__WEBPACK_IMPORTED_MODULE_10__["UserMenuModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ })

}]);
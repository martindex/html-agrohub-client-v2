(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/Core/HomeModule/inspectorHome/inspectorHome-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Core/HomeModule/inspectorHome/inspectorHome-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inspectorHome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectorHome.component */ "./src/app/Core/HomeModule/inspectorHome/inspectorHome.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/user-panel/user-panel.component */ "./src/app/shared/components/user-panel/user-panel.component.ts");
/* harmony import */ var src_app_shared_components_request_activities_request_activities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/request-activities/request-activities.component */ "./src/app/shared/components/request-activities/request-activities.component.ts");
/* harmony import */ var src_app_shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/yes-no-dialog/yes-no-dialog.component */ "./src/app/shared/components/yes-no-dialog/yes-no-dialog.component.ts");
/* harmony import */ var src_app_shared_components_imagePreview_imagePreview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/imagePreview/imagePreview.component */ "./src/app/shared/components/imagePreview/imagePreview.component.ts");
/* harmony import */ var _shared_components_inspector_request_inspector_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/inspector-request/inspector-request.component */ "./src/app/shared/components/inspector-request/inspector-request.component.ts");
/* harmony import */ var src_app_shared_components_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/select-field/select-field.component */ "./src/app/shared/components/select-field/select-field.component.ts");
/* harmony import */ var src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/help-index/help-index.component */ "./src/app/shared/components/help-index/help-index.component.ts");
/* harmony import */ var src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/components/change-password/change-password.component */ "./src/app/shared/components/change-password/change-password.component.ts");
/* harmony import */ var src_app_shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/notifications/notifications.component */ "./src/app/shared/components/notifications/notifications.component.ts");
/* harmony import */ var src_app_shared_components_add_sensitive_areas_add_sensitive_areas_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/components/add-sensitive-areas/add-sensitive-areas.component */ "./src/app/shared/components/add-sensitive-areas/add-sensitive-areas.component.ts");
/* harmony import */ var src_app_shared_components_cancel_reason_cancel_reason_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/components/cancel-reason/cancel-reason.component */ "./src/app/shared/components/cancel-reason/cancel-reason.component.ts");
/* harmony import */ var src_app_shared_components_reference_image_reference_image_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/components/reference-image/reference-image.component */ "./src/app/shared/components/reference-image/reference-image.component.ts");
/* harmony import */ var src_app_shared_components_versions_history_versions_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/components/versions-history/versions-history.component */ "./src/app/shared/components/versions-history/versions-history.component.ts");



















const routes = [
    {
        path: '', component: _inspectorHome_component__WEBPACK_IMPORTED_MODULE_2__["InspectorHomeComponent"],
        children: [
            {
                path: 'userpanel', component: _shared_components_user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_4__["UserPanelComponent"],
            },
            {
                path: 'a404', component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            },
            {
                path: '', redirectTo: 'requests', pathMatch: 'full'
            },
            {
                path: 'requestactivities', component: src_app_shared_components_request_activities_request_activities_component__WEBPACK_IMPORTED_MODULE_5__["RequestActivitiesComponent"],
            },
            {
                path: 'yesnodialog', component: src_app_shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_6__["YesNoDialogComponent"],
            },
            {
                path: 'imagepreview', component: src_app_shared_components_imagePreview_imagePreview_component__WEBPACK_IMPORTED_MODULE_7__["ImagePreviewComponent"],
            },
            {
                path: 'requests', component: _shared_components_inspector_request_inspector_request_component__WEBPACK_IMPORTED_MODULE_8__["InspectorRequestComponent"],
            },
            {
                path: 'selectfield', component: src_app_shared_components_select_field_select_field_component__WEBPACK_IMPORTED_MODULE_9__["SelectFieldComponent"],
            },
            {
                path: 'help-index', component: src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_10__["HelpIndexComponent"],
            },
            {
                path: 'change-password', component: src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_11__["ChangePasswordComponent"],
            },
            {
                path: 'notifications', component: src_app_shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"],
            },
            {
                path: 'add-sensitive-areas', component: src_app_shared_components_add_sensitive_areas_add_sensitive_areas_component__WEBPACK_IMPORTED_MODULE_13__["AddSensitiveAreasComponent"]
            },
            {
                path: 'cancel-reason', component: src_app_shared_components_cancel_reason_cancel_reason_component__WEBPACK_IMPORTED_MODULE_14__["CancelReasonComponent"]
            },
            {
                path: 'reference-image', component: src_app_shared_components_reference_image_reference_image_component__WEBPACK_IMPORTED_MODULE_15__["ReferenceImageComponent"]
            },
            {
                path: 'versions-history', component: src_app_shared_components_versions_history_versions_history_component__WEBPACK_IMPORTED_MODULE_16__["VersionsHistoryComponent"],
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

/***/ "./src/app/Core/HomeModule/inspectorHome/inspectorHome.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Core/HomeModule/inspectorHome/inspectorHome.component.ts ***!
  \**************************************************************************/
/*! exports provided: InspectorHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorHomeComponent", function() { return InspectorHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_components_help_index_help_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/help-index/help-index.component */ "./src/app/shared/components/help-index/help-index.component.ts");
/* harmony import */ var src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/change-password/change-password.component */ "./src/app/shared/components/change-password/change-password.component.ts");
/* harmony import */ var src_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/variables/icon-urls */ "./src/variables/icon-urls.ts");
/* harmony import */ var _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/socketIO/socketio.service */ "./src/app/services/socketIO/socketio.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/datauser/userdata.service */ "./src/app/services/datauser/userdata.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/globalVars/global-vars.service */ "./src/app/services/globalVars/global-vars.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/components/notifications/notifications.component */ "./src/app/shared/components/notifications/notifications.component.ts");
/* harmony import */ var _shared_components_inspector_menu_inspector_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../shared/components/inspector-menu/inspector-menu.component */ "./src/app/shared/components/inspector-menu/inspector-menu.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");




























const _c0 = ["userMenuButton"];
const _c1 = ["userMenuImage"];
const _c2 = ["boxUserMenu"];
function InspectorHomeComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r0.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InspectorHomeComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.toggleSidenav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InspectorHomeComponent_mat_icon_32_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_mat_icon_32_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.toggleNotifi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matBadge", ctx_r3.qNotifications);
} }
function InspectorHomeComponent_mat_icon_33_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_mat_icon_33_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.toggleNotifi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InspectorHomeComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function InspectorHomeComponent_ng_template_37_img_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function InspectorHomeComponent_ng_template_37_img_0_Template_img_error_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.errorImg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("src", "", ctx_r19.avatarUrl, "", ctx_r19.userData.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function InspectorHomeComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, InspectorHomeComponent_ng_template_37_img_0_Template, 1, 2, "img", 46);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r8.errorImage);
} }
function InspectorHomeComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { "sidenav-collapsed": a0 }; };
class InspectorHomeComponent {
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
        this.renderer.listen("window", "click", (e) => {
            const target = e.target;
            // userMenu
            if (target.id !== "userMenuButton" && target.id !== "userMenuImage" && target.id !== "boxUserMenu"
                && target.id !== "divUserMenu" && target.id !== "nameUserMenu" && target.id !== "emailUserMenu"
                && target.id !== "planUserMenu" && target.id !== "planLevelUserMenu"
                && target.id !== "avatarMenuErrorImage" && target.id !== "Capa_1"
                && target.id !== "noImage" && target.id !== "noImageIcon" && target.id !== "avatarUsuario"
                && this.menuDown) {
                this.toggleUserMenu();
            }
            // notificaciones
            if (target.id !== "Capa_1" && target.id !== "bellWithNotif" && target.id !== "bellWithoutNotif"
                && target.id !== "unreadnewPeriurbanSpray" && target.id !== "unreadAddContact"
                && target.id !== "generalNewPeriurbanSpray" && target.id !== "generalAddContact"
                && target.id !== "dateNewPeriurbanSpray" && target.id !== "dateAddContact"
                && target.id !== "tabsNotificaciones" && target.id !== "tabNotificaciones"
                && target.id !== "noLeidas" && target.id !== "iconLeidas" && target.id !== "remove_red_eye"
                && target.id !== "boxNotification" && this.notificationsDown) {
                this.toggleNotifi();
            }
        });
    }
    onResize() {
        this.isSmallScreen = window.innerWidth <= 1024;
        this.opened = !this.isSmallScreen; // Ajusta automáticamente el estado del sidenav
    }
    ngOnInit() {
        this.translate.setDefaultLang('es_AR');
        this.translate.use('es_AR');
        this.versionClient = this.global.versionClient;
        this.breakpointObserver.observe(['(max-width: 1024px)']).subscribe(result => {
            this.isResponsive = result.matches;
        });
        this.onResize();
        this.userDataService.getUserData().subscribe(userData => {
            this.userData = userData;
            const language = this.userData.idCountry && this.userData.idCountry.eq_country ? this.userData.idCountry.eq_country : 'es_AR';
            this.translate.use(language);
        });
        for (const icon in src_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsInspector"]) {
            if (src_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsInspector"].hasOwnProperty(icon)) {
                this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(src_variables_icon_urls__WEBPACK_IMPORTED_MODULE_6__["iconsInspector"][icon]));
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
    toggleUserMenu() {
        var box = document.getElementById('boxUserMenu');
        if (this.menuDown) {
            box.style.height = '0px';
            box.style.opacity = '0';
            box.style.zIndex = '-1000';
            this.menuDown = false;
        }
        else {
            box.style.height = '400px';
            box.style.opacity = '1';
            box.style.zIndex = '99999';
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
InspectorHomeComponent.ɵfac = function InspectorHomeComponent_Factory(t) { return new (t || InspectorHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_7__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_9__["UserDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_13__["GlobalVarsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["BreakpointObserver"])); };
InspectorHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InspectorHomeComponent, selectors: [["app-inspectorhome"]], viewQuery: function InspectorHomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.userMenuButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.userMenuImage = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.boxUserMenu = _t.first);
    } }, hostBindings: function InspectorHomeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function InspectorHomeComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 71, vars: 38, consts: [[1, "sidenav-container"], ["fixedInViewport", "true", 1, "sidenav", 3, "mode", "opened", "ngClass", "disableClose", "openedChange"], ["sidenav", ""], ["mat-icon-button", "", "class", "sidenav__close", 3, "click", 4, "ngIf"], [1, "sidenav__header"], [1, "sidenav__logo"], ["src", "../../../../assets/icon/logoBlanco.svg", "alt", "logo"], [1, "menu-container"], [1, "menu-list"], ["routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink", "click"], ["svgIcon", "solicitud"], [1, "white-text"], [1, "sidenav-header"], [1, "flex-header-sidenav"], ["mat-icon-button", "", "class", "menu-toggle", 3, "click", 4, "ngIf"], [1, "animation-title"], [1, "animation-title__static"], [3, "svgIcon"], [1, "animation-title__dynamic"], [2, "flex", "1 1 auto"], [1, "sidenav-header__buttons", "desktop-only"], ["routerLinkActive", "active", 2, "display", "flex", "justify-content", "center", 3, "routerLink"], ["svgIcon", "ayuda", 1, "btn-help"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click", 4, "ngIf"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click", 4, "ngIf"], ["mat-button", "", "id", "user-button", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", "margin", "0px 0px 0px 20px", 3, "click"], ["userMenuButton", ""], ["id", "noImage", 4, "ngIf", "ngIfElse"], ["Image", ""], ["id", "avatarMenuErrorImage", 4, "ngIf"], [1, "mobile-only"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["moreMenu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], ["svgIcon", "ayuda"], ["mat-menu-item", "", 3, "click"], ["id", "bellWithoutNotif", "svgIcon", "notificacion"], ["svgIcon", "usuario"], [1, "container-bodys", "content"], [3, "qNotifications"], ["mat-icon-button", "", 1, "sidenav__close", 3, "click"], ["mat-icon-button", "", 1, "menu-toggle", 3, "click"], ["id", "bellWithNotif", "svgIcon", "notificacion", 3, "matBadge", "click"], ["id", "bellWithoutNotif", "svgIcon", "notificacion", 3, "click"], ["id", "noImage"], ["svgIcon", "usuario", "id", "noImageIcon"], ["id", "user-button__avatar", "id", "userMenuImage", "width", "100", "height", "100", "style", "border-radius: 50px; width: 70px; height: 70px; padding: 0px;", 3, "src", "error", 4, "ngIf"], ["id", "user-button__avatar", "id", "userMenuImage", "width", "100", "height", "100", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", 3, "src", "error"], ["id", "avatarMenuErrorImage"], ["svgIcon", "usuario", "id", "avatarMenuImage"]], template: function InspectorHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function InspectorHomeComponent_Template_mat_sidenav_openedChange_1_listener($event) { return ctx.opened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, InspectorHomeComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-nav-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_Template_a_click_9_listener() { return ctx.closeSidenavOnMobile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-toolbar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, InspectorHomeComponent_button_19_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "mat-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, InspectorHomeComponent_mat_icon_32_Template, 1, 1, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, InspectorHomeComponent_mat_icon_33_Template, 1, 0, "mat-icon", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_Template_button_click_34_listener() { return ctx.toggleUserMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, InspectorHomeComponent_div_36_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, InspectorHomeComponent_ng_template_37_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, InspectorHomeComponent_div_39_Template, 2, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-menu", null, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_Template_button_click_51_listener() { return ctx.toggleNotifi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "mat-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_Template_button_click_56_listener() { return ctx.toggleUserMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InspectorHomeComponent_Template_button_click_61_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "app-notifications", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("qNotifications", function InspectorHomeComponent_Template_app_notifications_qNotifications_69_listener($event) { return ctx.loadNotifications($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "app-inspector-menu");
    } if (rf & 2) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.isSmallScreen ? "over" : "side")("opened", ctx.opened)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c3, ctx.isResponsive))("disableClose", !ctx.isSmallScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSmallScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 24, "MENU-SUPERVISOR.request"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Version: ", ctx.versionClient, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("svgIcon", ctx.global.activeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 26, ctx.global.activeComponent));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 28, "USER-MENU.help"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](55, 30, "USER-MENU.notification"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 32, "USER-MENU.profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](66, 34, "USER-MENU.logout"));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_16__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _shared_components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_23__["NotificationsComponent"], _shared_components_inspector_menu_inspector_menu_component__WEBPACK_IMPORTED_MODULE_24__["InspectorMenuComponent"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_25__["MatBadge"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], styles: ["@charset \"UTF-8\";\n.icon-svg[_ngcontent-%COMP%] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.icon-svg[class*=icon-logo][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/logo01.svg);\n          mask-image: url(/src/assets/icon/logo01.svg);\n  color: #ffffff;\n}\n.icon-svg[class*=icon-dashboard][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/iconDashboard.svg);\n          mask-image: url(/src/assets/icon/iconDashboard.svg);\n  color: #ffffff;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 5px 5px;\n  border-radius: 15px;\n  background-color: #ffffff;\n}\n.border[_ngcontent-%COMP%] {\n  border: solid 1px #CCCCCC;\n}\n.mat-expanded.border[_ngcontent-%COMP%] {\n  border: solid 1px #00d963 !important;\n  \n}\n.mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0px 14px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 15px;\n  margin-bottom: 20px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type   [_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 5px 5px 10px rgba(34, 34, 36, 0.104);\n}\nmat-panel-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\nmat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00a99e;\n  stroke: 5px;\n  width: 15px;\n  height: 15px;\n  margin: 0px 5px 0px 0px;\n}\nmat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.flexTitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.flexTitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #00a99e;\n  font-weight: bold;\n}\n.contentInfo[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0px;\n  padding: 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  display: inline-block;\n  margin: 2px 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.campaign-act[_ngcontent-%COMP%] {\n  color: #00a99e;\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-style: solid;\n  border-top-width: 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em 1.5em;\n  \n}\n.imagenEstablecimiento[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-left: 0px;\n  height: 130px;\n  width: 130px;\n}\nmat-expansion-panel.history-campaign[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  border: 1px solid #ccc;\n}\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  mat-panel-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .imagenEstablecimiento[_ngcontent-%COMP%] {\n    width: 45px !important;\n    height: 105px;\n  }\n}\n.simple-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-bottom: 1em;\n  border: solid 1px #00d963;\n}\n.simple-card[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  margin: -8px 0px 0px 0px;\n}\n.simple-card[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  margin-right: 0.5em;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.no-data[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2em;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #101c2a;\n  display: flex;\n  justify-content: center;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 219, 99, 0.302);\n  border-radius: 0px;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 219, 99, 0.302) !important;\n}\n.mat-expansion-panel.mat-expansion-panel.border[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  width: calc(100% - 10px) !important;\n  \n  margin: 5px 6px !important;\n  \n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  \n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 1.5em;\n}\n.container-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\nul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 50%, #ccccccc7 100%) !important;\n  color: rgba(0, 0, 0, 0.87);\n  height: 100vh;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  padding-bottom: 2em;\n  background-color: #101c2a;\n  box-shadow: 5px 10px 10px 0px rgba(153, 153, 153, 0.63);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 3;\n}\n.sidenav__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.sidenav__logo[_ngcontent-%COMP%] {\n  text-align: center;\n  border-left: 5px solid #101c2a;\n}\n.sidenav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.sidenav__close[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  padding: 20px 0 2em 0;\n  border-left: 5px solid #101c2a;\n}\n.menu-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-list__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-list__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-list__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.menu-activities__item[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-activities__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-activities__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-activities__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-activities__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden !important;\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  z-index: 20000 !important;\n  background-color: #ffffff;\n  color: #101c2a;\n  box-shadow: 8px 10px 10px 0px rgba(153, 153, 153, 0.3);\n  box-sizing: border-box;\n}\n.flex-header-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: #00d963;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: #ffffff !important;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #101c2a !important;\n  width: 25px;\n  height: 25px;\n}\n\n.container-bodys[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  margin-top: 100px;\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n}\n\n.animation-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  margin-right: 20px;\n}\n.animation-title__static[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  fill: #00d963 !important;\n}\n.animation-title__dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 600;\n  font-family: \"Noto Sans\", sans-serif;\n  color: #00a99e;\n  animation: slide 3s steps(10) infinite;\n}\n@keyframes slide {\n  100% {\n    top: 0px;\n  }\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background: #ffffff;\n  border-left: 2px solid #00a99e;\n  animation: typing 2s steps(20) forwards;\n}\n@keyframes typing {\n  60%, 100% {\n    left: calc(100% + 30px);\n  }\n}\n\n  .mat-drawer-container {\n  position: relative !important;\n}\n  .mat-drawer-backdrop {\n  z-index: 2 !important;\n}\n  .mat-drawer.sidenav {\n  z-index: 3 !important;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.select-desktop-only[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n.mobile-only[_ngcontent-%COMP%], .select-mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 1024px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 0.5rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .mobile-only[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .select-mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n    width: 100%;\n    justify-content: space-between;\n    padding: 0rem 0.5rem 0.5rem 0.5rem;\n    margin-top: 0rem;\n  }\n\n  .mat-label-professional[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n  }\n\n  .sidenav-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0.5rem;\n    height: 110px;\n  }\n\n  .sidenav__close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  .sidenav__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .sidenav-header__buttons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .flex-header-sidenav[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    padding: 0rem !important;\n    justify-content: space-between;\n  }\n\n  .animation-title[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex-grow: 0;\n  }\n  .animation-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n  }\n\n  .animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    height: 50%;\n  }\n\n  .container-bodys[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n}\n@media (max-width: 767px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n\n@media (max-width: 480px) {\n  .container-bodys[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 28px !important;\n    height: 28px !important;\n  }\n  .menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n#avatarMenuErrorImage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 50px;\n}\n.letters-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 80%;\n  height: 80%;\n  font-weight: 300;\n  font-size: 2.5em;\n}\n\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n  background-color: transparent !important;\n}\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  \n  width: 240px;\n  transition: width 0.3s ease-in-out;\n}\n.sidenav.mat-drawer-opened[_ngcontent-%COMP%] {\n  width: 240px;\n}\n.sidenav.mat-drawer-closed[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.sidenav[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 80%;\n  \n}\n.sidenav[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  \n  overflow: hidden;\n  \n}\n.sidenav[_ngcontent-%COMP%]   .white-text[_ngcontent-%COMP%] {\n  margin-top: auto;\n  \n}\n.menu-button-agrohub[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-right: 1em;\n  margin-top: -0.5em;\n}\n.menu-button-agrohub[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #101c2a;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100% !important;\n  height: 100%;\n  margin-bottom: -0.7em;\n}\n.menu-button-agrohub[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  color: #00d963;\n  font-size: 0.8rem;\n  text-transform: capitalize;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 16px;\n  padding-bottom: 120px;\n}\nmat-sidenav-content[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: auto;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 100vw;\n  }\n\n  .sidenav__close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  .sidenav__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .sidenav-header[_ngcontent-%COMP%] {\n    flex-direction: row !important;\n    height: 80px !important;\n    padding: 0 16px !important;\n    align-items: center !important;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 0.5rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    \n    min-width: 40px;\n    \n  }\n  .mobile-only[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n    color: #101c2a !important;\n    \n    fill: #101c2a !important;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    padding-bottom: 250px !important;\n    overflow: visible !important;\n    height: auto !important;\n  }\n\n  mat-sidenav-content[_ngcontent-%COMP%] {\n    overflow-y: scroll !important;\n    -webkit-overflow-scrolling: touch;\n  }\n\n  .sidenav-header__buttons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .flex-header-sidenav[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    padding: 0rem !important;\n    justify-content: flex-start;\n  }\n\n  .animation-title[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex-grow: 1;\n  }\n  .animation-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InspectorHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-inspectorhome',
                templateUrl: './inspectorHome.component.html',
                styleUrls: ['./inspectorHome.component.scss']
            }]
    }], function () { return [{ type: _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_7__["SocketioService"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_9__["UserDataService"] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_13__["GlobalVarsService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateService"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["BreakpointObserver"] }]; }, { userMenuButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['userMenuButton', { static: false }]
        }], userMenuImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['userMenuImage', { static: false }]
        }], boxUserMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['boxUserMenu', { static: false }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/Core/HomeModule/inspectorHome/inspectorHome.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Core/HomeModule/inspectorHome/inspectorHome.module.ts ***!
  \***********************************************************************/
/*! exports provided: InspectorHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorHomeModule", function() { return InspectorHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _inspectorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectorHome-routing.module */ "./src/app/Core/HomeModule/inspectorHome/inspectorHome-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _inspectorHome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspectorHome.component */ "./src/app/Core/HomeModule/inspectorHome/inspectorHome.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/notifications/notifications.module */ "./src/app/shared/components/notifications/notifications.module.ts");
/* harmony import */ var src_app_shared_components_inspector_menu_inspector_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/inspector-menu/inspector-menu-module */ "./src/app/shared/components/inspector-menu/inspector-menu-module.ts");










class InspectorHomeModule {
}
InspectorHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InspectorHomeModule });
InspectorHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InspectorHomeModule_Factory(t) { return new (t || InspectorHomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _inspectorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"],
            src_app_shared_components_inspector_menu_inspector_menu_module__WEBPACK_IMPORTED_MODULE_8__["InspectorMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InspectorHomeModule, { declarations: [_inspectorHome_component__WEBPACK_IMPORTED_MODULE_4__["InspectorHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _inspectorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
        src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"],
        src_app_shared_components_inspector_menu_inspector_menu_module__WEBPACK_IMPORTED_MODULE_8__["InspectorMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InspectorHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _inspectorHome_component__WEBPACK_IMPORTED_MODULE_4__["InspectorHomeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _inspectorHome_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                    src_app_shared_components_notifications_notifications_module__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"],
                    src_app_shared_components_inspector_menu_inspector_menu_module__WEBPACK_IMPORTED_MODULE_8__["InspectorMenuModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/inspector-menu/inspector-menu-module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/inspector-menu/inspector-menu-module.ts ***!
  \***************************************************************************/
/*! exports provided: InspectorMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorMenuModule", function() { return InspectorMenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _inspector_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inspector-menu.component */ "./src/app/shared/components/inspector-menu/inspector-menu.component.ts");







class InspectorMenuModule {
}
InspectorMenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InspectorMenuModule });
InspectorMenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InspectorMenuModule_Factory(t) { return new (t || InspectorMenuModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InspectorMenuModule, { declarations: [_inspector_menu_component__WEBPACK_IMPORTED_MODULE_5__["InspectorMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"]], exports: [_inspector_menu_component__WEBPACK_IMPORTED_MODULE_5__["InspectorMenuComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InspectorMenuModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                ],
                declarations: [_inspector_menu_component__WEBPACK_IMPORTED_MODULE_5__["InspectorMenuComponent"]],
                exports: [_inspector_menu_component__WEBPACK_IMPORTED_MODULE_5__["InspectorMenuComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/inspector-menu/inspector-menu.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/inspector-menu/inspector-menu.component.ts ***!
  \******************************************************************************/
/*! exports provided: InspectorMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InspectorMenuComponent", function() { return InspectorMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/change-password/change-password.component */ "./src/app/shared/components/change-password/change-password.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/socketIO/socketio.service */ "./src/app/services/socketIO/socketio.service.ts");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/datauser/userdata.service */ "./src/app/services/datauser/userdata.service.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












class InspectorMenuComponent {
    constructor(socketService, authService, router, dialog, userDataService) {
        this.socketService = socketService;
        this.authService = authService;
        this.router = router;
        this.dialog = dialog;
        this.userDataService = userDataService;
        this.avatarUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].imageUserUrl;
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
                eq_country: "",
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
    }
    ngOnInit() {
        this.userDataService.getUserData().subscribe(userData => {
            this.userData = userData;
        });
    }
    logout() {
        return this.authService.logout().subscribe((response) => {
            if (response.success === true) {
                this.authService.deleteCookies();
                this.socketService.closeConn();
                this.router.navigate([""]);
            }
        }, () => {
            this.authService.deleteCookies();
            this.socketService.closeConn();
            this.router.navigate([""]);
        });
    }
    changePassword() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.autoFocus = true;
        dialogConfig.data = {};
        const dialogRef = this.dialog.open(src_app_shared_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(() => { });
    }
    userPanel() {
        this.router.navigate(["inspectorhome/userpanel"]);
    }
    errorImg() {
        this.errorImage = true;
    }
}
InspectorMenuComponent.ɵfac = function InspectorMenuComponent_Factory(t) { return new (t || InspectorMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"])); };
InspectorMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InspectorMenuComponent, selectors: [["app-inspector-menu"]], decls: 24, vars: 5, consts: [["id", "boxUserMenu", 1, "menu-box", 2, "overflow", "auto"], ["id", "divUserMenu", 1, "flexHeader"], [1, "nivel", "nombre"], ["id", "nameUserMenu"], ["id", "emailUserMenu", 1, "nivel", "email"], ["id", "planUserMenu", 1, "nivel", "plan"], ["id", "planLevelUserMenu"], [1, "menuOpciones"], ["mat-menu-item", "", "settings", "", "routerLinkActive", "active", 3, "click"], ["svgIcon", "configuracion"], ["svgIcon", "password"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "salir"]], template: function InspectorMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InspectorMenuComponent_Template_button_click_12_listener() { return ctx.userPanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InspectorMenuComponent_Template_button_click_16_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Cambiar contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InspectorMenuComponent_Template_button_click_20_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cerrar Sesion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.userData.firstName, " ", ctx.userData.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.userData.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "plan", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userData.idPlan == null ? null : ctx.userData.idPlan.description);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["@charset \"UTF-8\";\n.icon-svg[_ngcontent-%COMP%] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.icon-svg[class*=icon-logo][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/logo01.svg);\n          mask-image: url(/src/assets/icon/logo01.svg);\n  color: #ffffff;\n}\n.icon-svg[class*=icon-dashboard][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/iconDashboard.svg);\n          mask-image: url(/src/assets/icon/iconDashboard.svg);\n  color: #ffffff;\n}\n.menu-box[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #ffffff;\n  border-radius: 15px;\n  border: 0.8px solid #CCCCCC;\n  margin-bottom: 16px;\n  position: relative;\n  box-shadow: 5px 5px 10px rgba(34, 34, 36, 0.104);\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 5px 5px;\n  border-radius: 15px;\n  background-color: #ffffff;\n}\n.border[_ngcontent-%COMP%] {\n  border: solid 1px #CCCCCC;\n}\n.mat-expanded.border[_ngcontent-%COMP%] {\n  border: solid 1px #00d963 !important;\n  \n}\n.mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0px 14px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 15px;\n  margin-bottom: 20px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type   [_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 5px 5px 10px rgba(34, 34, 36, 0.104);\n}\nmat-panel-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\nmat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00a99e;\n  stroke: 5px;\n  width: 15px;\n  height: 15px;\n  margin: 0px 5px 0px 0px;\n}\nmat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.flexTitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.flexTitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #00a99e;\n  font-weight: bold;\n}\n.contentInfo[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0px;\n  padding: 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  display: inline-block;\n  margin: 2px 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.campaign-act[_ngcontent-%COMP%] {\n  color: #00a99e;\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-style: solid;\n  border-top-width: 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em 1.5em;\n  \n}\n.imagenEstablecimiento[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-left: 0px;\n  height: 130px;\n  width: 130px;\n}\nmat-expansion-panel.history-campaign[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  border: 1px solid #ccc;\n}\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  mat-panel-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .imagenEstablecimiento[_ngcontent-%COMP%] {\n    width: 45px !important;\n    height: 105px;\n  }\n}\n.simple-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-bottom: 1em;\n  border: solid 1px #00d963;\n}\n.simple-card[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  margin: -8px 0px 0px 0px;\n}\n.simple-card[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  margin-right: 0.5em;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.no-data[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2em;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #101c2a;\n  display: flex;\n  justify-content: center;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 219, 99, 0.302);\n  border-radius: 0px;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 219, 99, 0.302) !important;\n}\n.mat-expansion-panel.mat-expansion-panel.border[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  width: calc(100% - 10px) !important;\n  \n  margin: 5px 6px !important;\n  \n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  \n}\n*[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n}\n#boxUserMenu[_ngcontent-%COMP%]   .mat-tab-header-pagination-controls-enabled[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  display: none !important;\n}\n#boxUserMenu[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.flexHeader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-start;\n  width: 100%;\n  border-bottom: 1px solid #CCCCCC;\n  margin-bottom: 1.5em;\n}\n.nombre[_ngcontent-%COMP%] {\n  color: #101c2a;\n  font-size: 1.1rem;\n}\n.email[_ngcontent-%COMP%] {\n  color: #CCCCCC;\n  font-size: 0.8rem;\n  margin-bottom: 1em;\n}\n.plan[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #101c2a;\n  padding-bottom: 1em;\n}\n.plan[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #00d963;\n}\n.menuOpciones[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start !important;\n}\n.menuOpciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin: 0em;\n  padding: 0.5em;\n  align-items: center;\n}\n.menuOpciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #101c2a;\n  transition: all 0.5s;\n}\n.menuOpciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.2em;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #ffffff;\n  transition: all 0.5s;\n}\n.menuOpciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.menuOpciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963;\n}\n.menuOpciones[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #00d963 !important;\n}\n.menu-box[_ngcontent-%COMP%] {\n  border: 1px solid #f4f4f9;\n  z-index: -1000;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n  opacity: 0;\n  position: absolute;\n  top: 95px;\n  right: 100px;\n  padding: 1em 1.5em;\n}\n.menu-box[_ngcontent-%COMP%]   .avatarUsuario[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50px;\n  border: 3px solid #f4f4f9;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InspectorMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inspector-menu',
                templateUrl: './inspector-menu.component.html',
                styleUrls: ['./inspector-menu.component.scss']
            }]
    }], function () { return [{ type: src_app_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_4__["SocketioService"] }, { type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }, { type: src_app_services_datauser_userdata_service__WEBPACK_IMPORTED_MODULE_7__["UserDataService"] }]; }, null); })();


/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/Core/HomeModule/adminHome/admin-home-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/Core/HomeModule/adminHome/admin-home-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-home.component */ "./src/app/Core/HomeModule/adminHome/admin-home.component.ts");
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");
/* harmony import */ var _shared_dashboards_dash_admin_dash_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dashboards/dash-admin/dash-admin.component */ "./src/app/shared/dashboards/dash-admin/dash-admin.component.ts");
/* harmony import */ var src_app_shared_components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/users/users.component */ "./src/app/shared/components/users/users.component.ts");
/* harmony import */ var src_app_shared_components_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/admin-panel/admin-panel.component */ "./src/app/shared/components/admin-panel/admin-panel.component.ts");
/* harmony import */ var src_app_shared_components_user_password_user_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/user-password/user-password.component */ "./src/app/shared/components/user-password/user-password.component.ts");
/* harmony import */ var src_app_shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/yes-no-dialog/yes-no-dialog.component */ "./src/app/shared/components/yes-no-dialog/yes-no-dialog.component.ts");
/* harmony import */ var src_app_shared_components_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/plans/plans.component */ "./src/app/shared/components/plans/plans.component.ts");
/* harmony import */ var src_app_shared_components_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/add-plan/add-plan.component */ "./src/app/shared/components/add-plan/add-plan.component.ts");
/* harmony import */ var src_app_shared_components_help_links_administrator_help_links_administrator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/components/help-links-administrator/help-links-administrator.component */ "./src/app/shared/components/help-links-administrator/help-links-administrator.component.ts");
/* harmony import */ var src_app_shared_components_add_help_link_add_help_link_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/add-help-link/add-help-link.component */ "./src/app/shared/components/add-help-link/add-help-link.component.ts");
/* harmony import */ var src_app_shared_components_policy_policy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/components/policy/policy.component */ "./src/app/shared/components/policy/policy.component.ts");
/* harmony import */ var src_app_shared_components_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/components/add-policy/add-policy.component */ "./src/app/shared/components/add-policy/add-policy.component.ts");
/* harmony import */ var src_app_shared_components_select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/components/select-plan/select-plan.component */ "./src/app/shared/components/select-plan/select-plan.component.ts");
/* harmony import */ var src_app_shared_components_service_manager_panel_service_manager_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/components/service-manager-panel/service-manager-panel.component */ "./src/app/shared/components/service-manager-panel/service-manager-panel.component.ts");
/* harmony import */ var src_app_shared_components_admin_list_phytosanitaries_list_phytosanitaries_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/components/admin/list-phytosanitaries/list-phytosanitaries.component */ "./src/app/shared/components/admin/list-phytosanitaries/list-phytosanitaries.component.ts");
/* harmony import */ var src_app_shared_components_admin_add_phytosanitary_add_phytosanitary_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/components/admin/add-phytosanitary/add-phytosanitary.component */ "./src/app/shared/components/admin/add-phytosanitary/add-phytosanitary.component.ts");
/* harmony import */ var src_app_shared_components_list_fertilizers_list_fertilizers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/components/list-fertilizers/list-fertilizers.component */ "./src/app/shared/components/list-fertilizers/list-fertilizers.component.ts");
/* harmony import */ var src_app_shared_components_add_fertilizer_add_fertilizer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/components/add-fertilizer/add-fertilizer.component */ "./src/app/shared/components/add-fertilizer/add-fertilizer.component.ts");
/* harmony import */ var src_app_shared_components_list_cities_list_cities_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/components/list-cities/list-cities.component */ "./src/app/shared/components/list-cities/list-cities.component.ts");
/* harmony import */ var src_app_shared_components_list_active_ingredients_list_active_ingredients_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/components/list-active-ingredients/list-active-ingredients.component */ "./src/app/shared/components/list-active-ingredients/list-active-ingredients.component.ts");
/* harmony import */ var src_app_shared_components_add_version_add_version_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/components/add-version/add-version.component */ "./src/app/shared/components/add-version/add-version.component.ts");
/* harmony import */ var src_app_shared_components_list_versions_list_versions_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/components/list-versions/list-versions.component */ "./src/app/shared/components/list-versions/list-versions.component.ts");
/* harmony import */ var src_app_shared_components_add_contact_system_notification_add_contact_system_notification_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/shared/components/add-contact-system-notification/add-contact-system-notification.component */ "./src/app/shared/components/add-contact-system-notification/add-contact-system-notification.component.ts");
/* harmony import */ var src_app_shared_components_contact_list_system_notifications_contact_list_system_notifications_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/shared/components/contact-list-system-notifications/contact-list-system-notifications.component */ "./src/app/shared/components/contact-list-system-notifications/contact-list-system-notifications.component.ts");
/* harmony import */ var src_app_shared_components_add_active_ingredient_add_active_ingredient_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/shared/components/add-active-ingredient/add-active-ingredient.component */ "./src/app/shared/components/add-active-ingredient/add-active-ingredient.component.ts");
/* harmony import */ var src_app_shared_components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/shared/components/add-user/add-user.component */ "./src/app/shared/components/add-user/add-user.component.ts");
/* harmony import */ var src_app_shared_components_admin_list_sprays_admin_list_sprays_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/shared/components/admin-list-sprays/admin-list-sprays.component */ "./src/app/shared/components/admin-list-sprays/admin-list-sprays.component.ts");
/* harmony import */ var src_app_shared_components_spray_progress_dialog_spray_progress_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/shared/components/spray-progress-dialog/spray-progress-dialog.component */ "./src/app/shared/components/spray-progress-dialog/spray-progress-dialog.component.ts");
/* harmony import */ var src_app_shared_components_list_sensitive_areas_list_sensitive_areas_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/shared/components/list-sensitive-areas/list-sensitive-areas.component */ "./src/app/shared/components/list-sensitive-areas/list-sensitive-areas.component.ts");
/* harmony import */ var src_app_shared_components_add_sensitive_areas_add_sensitive_areas_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/shared/components/add-sensitive-areas/add-sensitive-areas.component */ "./src/app/shared/components/add-sensitive-areas/add-sensitive-areas.component.ts");
/* harmony import */ var src_app_shared_components_applicators_applicators_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/shared/components/applicators/applicators.component */ "./src/app/shared/components/applicators/applicators.component.ts");
/* harmony import */ var src_app_shared_components_add_applicator_add_applicator_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/shared/components/add-applicator/add-applicator.component */ "./src/app/shared/components/add-applicator/add-applicator.component.ts");
/* harmony import */ var src_app_shared_components_modify_applicator_modify_applicator_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/shared/components/modify-applicator/modify-applicator.component */ "./src/app/shared/components/modify-applicator/modify-applicator.component.ts");
/* harmony import */ var src_app_shared_components_add_machinery_applicator_add_machinery_applicator_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/shared/components/add-machinery-applicator/add-machinery-applicator.component */ "./src/app/shared/components/add-machinery-applicator/add-machinery-applicator.component.ts");
/* harmony import */ var src_app_shared_components_list_machinery_applicator_list_machinery_applicator_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/shared/components/list-machinery-applicator/list-machinery-applicator.component */ "./src/app/shared/components/list-machinery-applicator/list-machinery-applicator.component.ts");
/* harmony import */ var src_app_shared_components_sensitive_areas_types_sensitive_areas_types_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/shared/components/sensitive-areas-types/sensitive-areas-types.component */ "./src/app/shared/components/sensitive-areas-types/sensitive-areas-types.component.ts");
/* harmony import */ var src_app_shared_components_list_companies_list_companies_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! src/app/shared/components/list-companies/list-companies.component */ "./src/app/shared/components/list-companies/list-companies.component.ts");
/* harmony import */ var src_app_shared_components_admin_commissions_commissions_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/app/shared/components/admin/commissions/commissions.component */ "./src/app/shared/components/admin/commissions/commissions.component.ts");
/* harmony import */ var src_app_shared_components_admin_add_commission_policy_add_commission_policy_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/app/shared/components/admin/add-commission-policy/add-commission-policy.component */ "./src/app/shared/components/admin/add-commission-policy/add-commission-policy.component.ts");












































const routes = [
    { path: '', component: _admin_home_component__WEBPACK_IMPORTED_MODULE_2__["AdminHomeComponent"],
        children: [
            {
                path: 'admindash', component: _shared_dashboards_dash_admin_dash_admin_component__WEBPACK_IMPORTED_MODULE_4__["DashAdminComponent"],
            },
            {
                path: 'adminpanel', component: src_app_shared_components_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_6__["AdminPanelComponent"],
            },
            {
                path: 'users', component: src_app_shared_components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
            },
            {
                path: 'userpassword', component: src_app_shared_components_user_password_user_password_component__WEBPACK_IMPORTED_MODULE_7__["UserPasswordComponent"],
            },
            {
                path: 'adminlistsprays', component: src_app_shared_components_admin_list_sprays_admin_list_sprays_component__WEBPACK_IMPORTED_MODULE_29__["AdminListSpraysComponent"],
            },
            {
                path: 'finishspray', component: src_app_shared_components_spray_progress_dialog_spray_progress_dialog_component__WEBPACK_IMPORTED_MODULE_30__["SprayProgressDialogComponent"],
            },
            {
                path: 'yesnodialog', component: src_app_shared_components_yes_no_dialog_yes_no_dialog_component__WEBPACK_IMPORTED_MODULE_8__["YesNoDialogComponent"],
            },
            {
                path: 'direct/commissions', component: src_app_shared_components_admin_commissions_commissions_component__WEBPACK_IMPORTED_MODULE_40__["CommissionsComponent"],
            },
            {
                path: 'direct/commissions/add-policy', component: src_app_shared_components_admin_add_commission_policy_add_commission_policy_component__WEBPACK_IMPORTED_MODULE_41__["AddCommissionPolicyComponent"],
            },
            {
                path: 'addplan', component: src_app_shared_components_add_plan_add_plan_component__WEBPACK_IMPORTED_MODULE_10__["AddPlanComponent"],
            },
            {
                path: 'plans', component: src_app_shared_components_plans_plans_component__WEBPACK_IMPORTED_MODULE_9__["PlansComponent"],
            },
            {
                path: 'a404', component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            },
            {
                path: 'help-links-administrator', component: src_app_shared_components_help_links_administrator_help_links_administrator_component__WEBPACK_IMPORTED_MODULE_11__["HelpLinksAdministratorComponent"],
            },
            {
                path: 'add-help-link', component: src_app_shared_components_add_help_link_add_help_link_component__WEBPACK_IMPORTED_MODULE_12__["AddHelpLinkComponent"],
            },
            {
                path: 'policy', component: src_app_shared_components_policy_policy_component__WEBPACK_IMPORTED_MODULE_13__["PolicyComponent"],
            },
            {
                path: 'add-policy', component: src_app_shared_components_add_policy_add_policy_component__WEBPACK_IMPORTED_MODULE_14__["AddPolicyComponent"],
            },
            {
                path: 'select-plan', component: src_app_shared_components_select_plan_select_plan_component__WEBPACK_IMPORTED_MODULE_15__["SelectPlanComponent"],
            },
            {
                path: 'add-user', component: src_app_shared_components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_28__["AddUserComponent"],
            },
            {
                path: 'cities', component: src_app_shared_components_list_cities_list_cities_component__WEBPACK_IMPORTED_MODULE_21__["ListCitiesComponent"],
            },
            {
                path: 'phytosanitaries', component: src_app_shared_components_admin_list_phytosanitaries_list_phytosanitaries_component__WEBPACK_IMPORTED_MODULE_17__["ListPhytosanitariesComponent"],
            },
            {
                path: 'fertilizers', component: src_app_shared_components_list_fertilizers_list_fertilizers_component__WEBPACK_IMPORTED_MODULE_19__["ListFertilizersComponent"],
            },
            {
                path: 'companies', component: src_app_shared_components_list_companies_list_companies_component__WEBPACK_IMPORTED_MODULE_39__["ListCompaniesComponent"],
            },
            {
                path: 'activeingredients', component: src_app_shared_components_list_active_ingredients_list_active_ingredients_component__WEBPACK_IMPORTED_MODULE_22__["ListActiveIngredientsComponent"],
            },
            {
                path: 'sensitiveareas', component: src_app_shared_components_list_sensitive_areas_list_sensitive_areas_component__WEBPACK_IMPORTED_MODULE_31__["ListSensitiveAreasComponent"],
            },
            {
                path: 'addsensitivearea', component: src_app_shared_components_add_sensitive_areas_add_sensitive_areas_component__WEBPACK_IMPORTED_MODULE_32__["AddSensitiveAreasComponent"],
            },
            {
                path: 'sensitiveareastypes', component: src_app_shared_components_sensitive_areas_types_sensitive_areas_types_component__WEBPACK_IMPORTED_MODULE_38__["SensitiveAreasTypesComponent"],
            },
            {
                path: 'servicemanager', component: src_app_shared_components_service_manager_panel_service_manager_panel_component__WEBPACK_IMPORTED_MODULE_16__["ServiceManagerPanelComponent"],
            },
            {
                path: 'addphytosanitary', component: src_app_shared_components_admin_add_phytosanitary_add_phytosanitary_component__WEBPACK_IMPORTED_MODULE_18__["AddPhytosanitaryComponent"],
            },
            {
                path: 'addfertilizer', component: src_app_shared_components_add_fertilizer_add_fertilizer_component__WEBPACK_IMPORTED_MODULE_20__["AddFertilizerComponent"],
            },
            {
                path: 'addactiveing', component: src_app_shared_components_add_active_ingredient_add_active_ingredient_component__WEBPACK_IMPORTED_MODULE_27__["AddActiveIngredientComponent"],
            },
            {
                path: 'contlistsystnotif', component: src_app_shared_components_contact_list_system_notifications_contact_list_system_notifications_component__WEBPACK_IMPORTED_MODULE_26__["ContactListSystemNotificationsComponent"],
            },
            {
                path: 'addcontsystnotif', component: src_app_shared_components_add_contact_system_notification_add_contact_system_notification_component__WEBPACK_IMPORTED_MODULE_25__["AddContactSystemNotificationComponent"],
            },
            {
                path: 'listversions', component: src_app_shared_components_list_versions_list_versions_component__WEBPACK_IMPORTED_MODULE_24__["ListVersionsComponent"],
            },
            {
                path: 'addversion', component: src_app_shared_components_add_version_add_version_component__WEBPACK_IMPORTED_MODULE_23__["AddVersionComponent"],
            },
            {
                path: 'applicators', component: src_app_shared_components_applicators_applicators_component__WEBPACK_IMPORTED_MODULE_33__["ApplicatorsComponent"],
            },
            {
                path: 'applicators/addapplicator', component: src_app_shared_components_add_applicator_add_applicator_component__WEBPACK_IMPORTED_MODULE_34__["AddApplicatorComponent"],
            },
            {
                path: 'applicators/modifyapplicator', component: src_app_shared_components_modify_applicator_modify_applicator_component__WEBPACK_IMPORTED_MODULE_35__["ModifyApplicatorComponent"],
            },
            {
                path: 'addmachineryapplicator', component: src_app_shared_components_add_machinery_applicator_add_machinery_applicator_component__WEBPACK_IMPORTED_MODULE_36__["AddMachineryApplicatorComponent"],
            },
            {
                path: 'listmachineryapplicator', component: src_app_shared_components_list_machinery_applicator_list_machinery_applicator_component__WEBPACK_IMPORTED_MODULE_37__["ListMachineryApplicatorComponent"],
            },
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

/***/ "./src/app/Core/HomeModule/adminHome/admin-home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Core/HomeModule/adminHome/admin-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _variables_icon_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../variables/icon-urls */ "./src/variables/icon-urls.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/socketIO/socketio.service */ "./src/app/services/socketIO/socketio.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_dataadmin_admindata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/dataadmin/admindata.service */ "./src/app/services/dataadmin/admindata.service.ts");
/* harmony import */ var _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/globalVars/global-vars.service */ "./src/app/services/globalVars/global-vars.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");


















function AdminHomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Empresas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "cities");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "MENU-ADMIN.cities"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "applicators");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "MENU-ADMIN.applicators"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "companies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "sensitiveareas");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "MENU-ADMIN.sensitive-areas"));
} }
function AdminHomeComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "phytosanitaries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "MENU-ADMIN.phytosanitary"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "fertilizers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "MENU-ADMIN.fertilizers"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "activeingredients");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, "MENU-ADMIN.active-ingredients"));
} }
function AdminHomeComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "direct/commissions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "MENU-ADMIN.commissions"));
} }
class AdminHomeComponent {
    constructor(router, matIconRegistry, domSanitizer, translate, socketService, authService, adminDataService, global) {
        this.router = router;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.translate = translate;
        this.socketService = socketService;
        this.authService = authService;
        this.adminDataService = adminDataService;
        this.global = global;
        this.versionClient = "";
        this.userName = [];
        this.avatarUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imageUserUrl;
        this.sideBarOpen = true;
        this.admindata = [];
        this.id = "";
        this.showFillerUsers = false;
        this.showFillerSystemTables = false;
        this.showFillerProducts = false;
        this.showFillerDirect = false;
    }
    ngOnInit() {
        this.versionClient = this.global.versionClient;
        this.switchLanguage('es_AR');
        this.adminDataService.getAdminData().subscribe(adminData => {
            if (adminData) {
                this.id = adminData.idAdmin;
                this.userName = adminData.nameAdmin;
            }
        });
        this.socketService.setupSocketConnection();
        if (this.notification) {
            this.notification.unsubscribe();
        }
        for (const icon in _variables_icon_urls__WEBPACK_IMPORTED_MODULE_2__["iconsAdmin"]) {
            if (_variables_icon_urls__WEBPACK_IMPORTED_MODULE_2__["iconsAdmin"].hasOwnProperty(icon)) {
                this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl(_variables_icon_urls__WEBPACK_IMPORTED_MODULE_2__["iconsAdmin"][icon]));
            }
        }
        this.notification = this.socketService.getNewMessage().subscribe(() => {
            // console.log(message);
        });
    }
    switchLanguage(language) {
        this.translate.use(language);
    }
    logout() {
        return this.authService.logoutAdmin(this.id).subscribe((data) => {
            this.message = data;
            this.socketService.closeConn();
            this.notification.unsubscribe();
            this.authService.logout();
            this.router.navigate(['/auth/adminlogin']);
        }, () => {
            this.authService.logout();
            this.socketService.closeConn();
            this.notification.unsubscribe();
            this.router.navigate(['/auth/adminlogin']);
        });
    }
}
AdminHomeComponent.ɵfac = function AdminHomeComponent_Factory(t) { return new (t || AdminHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_7__["SocketioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataadmin_admindata_service__WEBPACK_IMPORTED_MODULE_9__["AdminDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_10__["GlobalVarsService"])); };
AdminHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHomeComponent, selectors: [["app-adminhome"]], decls: 96, vars: 58, consts: [["id", "menuDash", 1, "container-menu"], ["fixedInViewport", "true", "mode", "side", "opened", "true", "disableClose", "true", 1, "sidenav"], ["drawer", ""], [1, "sidenav__logo"], ["src", "../../../../assets/icon/logoBlanco.svg", "alt", "logo"], [1, "menu-list"], ["routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink"], ["svgIcon", "dashboard"], ["svgIcon", "usuarios"], ["routerLinkActive", "active", 1, "menu-list__item", 3, "click"], ["svgIcon", "listado"], ["id", "menu-users", "style", "margin-left: 1rem;", 4, "ngIf"], ["svgIcon", "pulverizacion"], ["svgIcon", "direct"], ["svgIcon", "membresia"], ["id", "almacenamiento", "routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink"], ["id", "systemNotification", "routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink"], ["id", "Mensajes", "routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink"], ["svgIcon", "ayuda"], ["id", "Versiones", "routerLinkActive", "active", 1, "menu-list__item", 3, "routerLink"], ["svgIcon", "circulos"], [1, "white-text"], [1, "sidenav-header"], [1, "flex-header-sidenav"], [1, "animation-title"], [1, "animation-title__static"], [3, "svgIcon"], [1, "animation-title__dynamic"], [2, "flex", "1 1 auto"], [1, "sidenav-header__buttons"], ["svgIcon", "notificacion"], ["mat-button", "", "id", "user-button", 2, "border-radius", "50px", "width", "70px", "height", "70px", "padding", "0px", "margin", "0px 20px", 3, "matMenuTriggerFor"], ["svgIcon", "usuario"], ["menu", "matMenu"], ["mat-menu-item", "", "settings", "", "routerLinkActive", "active", 3, "routerLink"], ["svgIcon", "configuracion"], ["mat-menu-item", "", 3, "click"], ["svgIcon", "salir"], [1, "container-bodys"], ["id", "menu-users", 2, "margin-left", "1rem"], ["routerLinkActive", "active", 1, "menu-activities__item", 3, "routerLink"], ["svgIcon", "world"], ["svgIcon", "aplicador"], ["svgIcon", "fertilizacion"]], template: function AdminHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_Template_a_click_16_listener() { return ctx.showFillerSystemTables = !ctx.showFillerSystemTables; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdminHomeComponent_div_21_Template, 20, 13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_Template_a_click_22_listener() { return ctx.showFillerProducts = !ctx.showFillerProducts; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdminHomeComponent_div_27_Template, 16, 12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_Template_a_click_28_listener() { return ctx.showFillerDirect = !ctx.showFillerDirect; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AdminHomeComponent_div_33_Template, 6, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "mat-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-toolbar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "mat-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "mat-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-menu", null, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "mat-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_Template_button_click_89_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "app-user-menu");
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "admindash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 30, "MENU-ADMIN.home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 32, "MENU-ADMIN.users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 34, "MENU-ADMIN.system-tables"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFillerSystemTables);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 36, "MENU-ADMIN.products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFillerProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 38, "MENU-ADMIN.direct"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFillerDirect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "plans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 40, "MENU-ADMIN.plans"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 42, "MENU-ADMIN.politics"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "servicemanager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 44, "MENU-ADMIN.services-manager"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "contlistsystnotif");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 46, "MENU-ADMIN.system-notifications"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "help-links-administrator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 48, "MENU-ADMIN.help-links"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "listversions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 50, "MENU-ADMIN.versions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Version: ", ctx.versionClient, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx.global.activeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 52, ctx.global.activeComponent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/adminhome/adminpanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 54, "MENU-ADMIN.settings"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 56, "MENU-ADMIN.logout"), " ");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatNavList"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["@charset \"UTF-8\";\n.icon-svg[_ngcontent-%COMP%] {\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  -webkit-mask-position: 50% 50%;\n          mask-position: 50% 50%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n  background: currentColor;\n  width: 1em;\n  height: 1em;\n}\n.icon-svg[class*=icon-logo][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/logo01.svg);\n          mask-image: url(/src/assets/icon/logo01.svg);\n  color: #ffffff;\n}\n.icon-svg[class*=icon-dashboard][_ngcontent-%COMP%] {\n  -webkit-mask-image: url(/src/assets/icon/iconDashboard.svg);\n          mask-image: url(/src/assets/icon/iconDashboard.svg);\n  color: #ffffff;\n}\nmat-expansion-panel[_ngcontent-%COMP%] {\n  padding: 5px 5px;\n  border-radius: 15px;\n  background-color: #ffffff;\n}\n.border[_ngcontent-%COMP%] {\n  border: solid 1px #CCCCCC;\n}\n.mat-expanded.border[_ngcontent-%COMP%] {\n  border: solid 1px #00d963 !important;\n  \n}\n.mat-expansion-panel-body[_ngcontent-%COMP%] {\n  padding: 0px 14px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 15px;\n  margin-bottom: 20px;\n}\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:last-of-type   [_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 5px 5px 10px rgba(34, 34, 36, 0.104);\n}\nmat-panel-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\nmat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00a99e;\n  stroke: 5px;\n  width: 15px;\n  height: 15px;\n  margin: 0px 5px 0px 0px;\n}\nmat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.flexTitle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.flexTitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #00a99e;\n  font-weight: bold;\n}\n.contentInfo[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-bottom: 0px;\n  padding: 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  display: inline-block;\n  margin: 2px 0px;\n}\n.contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.campaign-act[_ngcontent-%COMP%] {\n  color: #00a99e;\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-style: solid;\n  border-top-width: 1px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 1em 1.5em;\n  \n}\n.imagenEstablecimiento[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  margin-left: 0px;\n  height: 130px;\n  width: 130px;\n}\nmat-expansion-panel.history-campaign[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  border: 1px solid #ccc;\n}\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  mat-panel-title[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n  }\n  mat-panel-title[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .contentInfo[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .imagenEstablecimiento[_ngcontent-%COMP%] {\n    width: 45px !important;\n    height: 105px;\n  }\n}\n.simple-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-bottom: 1em;\n  border: solid 1px #00d963;\n}\n.simple-card[_ngcontent-%COMP%]   .flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  color: #101c2a;\n  text-transform: uppercase;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Noto Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #101c2a;\n  text-transform: none;\n  margin: -8px 0px 0px 0px;\n}\n.simple-card[_ngcontent-%COMP%]   .avatar-initials[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #ccc;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n  margin-right: 0.5em;\n}\n.simple-card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.no-data[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 2em;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #101c2a;\n  display: flex;\n  justify-content: center;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 219, 99, 0.302);\n  border-radius: 0px;\n}\n.active-campaign[_ngcontent-%COMP%]   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 219, 99, 0.302) !important;\n}\n.mat-expansion-panel.mat-expansion-panel.border[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  width: calc(100% - 10px) !important;\n  \n  margin: 5px 6px !important;\n  \n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  \n}\n\n.white-text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-left: 1.5em;\n}\n.container-menu[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n}\nul[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff 50%, #ccccccc7 100%) !important;\n  color: rgba(0, 0, 0, 0.87);\n  height: 100vh;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  padding-bottom: 2em;\n  background-color: #101c2a;\n  box-shadow: 5px 10px 10px 0px rgba(153, 153, 153, 0.63);\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  z-index: 3;\n}\n.sidenav__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n}\n.sidenav__logo[_ngcontent-%COMP%] {\n  text-align: center;\n  border-left: 5px solid #101c2a;\n}\n.sidenav__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.sidenav__close[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  padding: 20px 0 2em 0;\n  border-left: 5px solid #101c2a;\n}\n.menu-list__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-list__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-list__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-list__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-list__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n.menu-activities__item[_ngcontent-%COMP%] {\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  margin: 1.5em 0;\n  border-left: 5px solid #101c2a;\n  cursor: pointer;\n  position: relative;\n}\n.menu-activities__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  padding-right: 0.5em;\n  width: 28px !important;\n  height: 28px !important;\n  fill: #ffffff !important;\n}\n.menu-activities__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 14px;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover {\n  color: #00d963;\n}\n.menu-activities__item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background-color: #00d963;\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 0.2s, opacity 0.2s;\n}\n.menu-activities__item[_ngcontent-%COMP%]:hover::before {\n  opacity: 0.65;\n  transform: scaleY(0.8) scaleX(1.2);\n}\n.menu-activities__item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #00d963 !important;\n}\n.menu-activities__item.active[_ngcontent-%COMP%]::before {\n  opacity: 1;\n  transform: scaleY(1);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-x: hidden !important;\n}\n.sidenav-header[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 100%;\n  position: absolute;\n  z-index: 20000 !important;\n  background-color: #ffffff;\n  color: #101c2a;\n  box-shadow: 8px 10px 10px 0px rgba(153, 153, 153, 0.3);\n  box-sizing: border-box;\n}\n.flex-header-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  background: #00d963;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   button#user-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: #ffffff !important;\n}\n.sidenav-header__buttons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  fill: #101c2a !important;\n  width: 25px;\n  height: 25px;\n}\n\n.container-bodys[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  margin-top: 100px;\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n}\n\n.animation-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  margin-right: 20px;\n}\n.animation-title__static[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  fill: #00d963 !important;\n}\n.animation-title__dynamic[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 1.1rem;\n  font-weight: 600;\n  font-family: \"Noto Sans\", sans-serif;\n  color: #00a99e;\n  animation: slide 3s steps(10) infinite;\n}\n@keyframes slide {\n  100% {\n    top: 0px;\n  }\n}\n.animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  background: #ffffff;\n  border-left: 2px solid #00a99e;\n  animation: typing 2s steps(20) forwards;\n}\n@keyframes typing {\n  60%, 100% {\n    left: calc(100% + 30px);\n  }\n}\n\n  .mat-drawer-container {\n  position: relative !important;\n}\n  .mat-drawer-backdrop {\n  z-index: 2 !important;\n}\n  .mat-drawer.sidenav {\n  z-index: 3 !important;\n}\n.menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.select-desktop-only[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n}\n.mobile-only[_ngcontent-%COMP%], .select-mobile-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media (max-width: 1024px) {\n  .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 0.5rem;\n  }\n  .menu-toggle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .mobile-only[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 32px;\n    width: 32px;\n    height: 32px;\n  }\n\n  .select-mobile-only[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n    width: 100%;\n    justify-content: space-between;\n    padding: 0rem 0.5rem 0.5rem 0.5rem;\n    margin-top: 0rem;\n  }\n\n  .mat-label-professional[_ngcontent-%COMP%] {\n    margin-top: -0.5rem;\n  }\n\n  .sidenav-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0.5rem;\n    height: 110px;\n  }\n\n  .sidenav__close[_ngcontent-%COMP%] {\n    display: inline-flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding: 1rem 1rem 0rem 1rem;\n  }\n  .sidenav__close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .sidenav-header__buttons[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .mobile-only[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .desktop-only[_ngcontent-%COMP%], .select-desktop-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .flex-header-sidenav[_ngcontent-%COMP%] {\n    flex-wrap: nowrap !important;\n    padding: 0rem !important;\n    justify-content: space-between;\n  }\n\n  .animation-title[_ngcontent-%COMP%] {\n    width: auto !important;\n    flex-grow: 0;\n  }\n  .animation-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    max-width: -moz-fit-content !important;\n    max-width: fit-content !important;\n  }\n\n  .animation-title__dynamic[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    height: 50%;\n  }\n\n  .container-bodys[_ngcontent-%COMP%] {\n    padding: 30px 15px;\n  }\n}\n@media (max-width: 767px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n\n@media (max-width: 480px) {\n  .container-bodys[_ngcontent-%COMP%] {\n    overflow: scroll !important;\n  }\n}\n\n@media only screen and (min-width: 1366px) and (min-height: 768px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n\n  .menu-list__item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    width: 28px !important;\n    height: 28px !important;\n  }\n  .menu-list__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adminhome',
                templateUrl: './admin-home.component.html',
                styleUrls: ['./admin-home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _services_socketIO_socketio_service__WEBPACK_IMPORTED_MODULE_7__["SocketioService"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _services_dataadmin_admindata_service__WEBPACK_IMPORTED_MODULE_9__["AdminDataService"] }, { type: _services_globalVars_global_vars_service__WEBPACK_IMPORTED_MODULE_10__["GlobalVarsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Core/HomeModule/adminHome/admin-home.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/Core/HomeModule/adminHome/admin-home.module.ts ***!
  \****************************************************************/
/*! exports provided: AdminHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeModule", function() { return AdminHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _admin_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-home-routing.module */ "./src/app/Core/HomeModule/adminHome/admin-home-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-home.component */ "./src/app/Core/HomeModule/adminHome/admin-home.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









class AdminHomeModule {
}
AdminHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminHomeModule });
AdminHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminHomeModule_Factory(t) { return new (t || AdminHomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admin_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminHomeModule, { declarations: [_admin_home_component__WEBPACK_IMPORTED_MODULE_4__["AdminHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admin_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _admin_home_component__WEBPACK_IMPORTED_MODULE_4__["AdminHomeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admin_home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ })

}]);
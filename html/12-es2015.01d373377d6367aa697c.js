(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./src/app/Core/changePasswordModule/changePasswordModule-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Core/changePasswordModule/changePasswordModule-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ChangePasswordModuleRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModuleRoutingModule", function() { return ChangePasswordModuleRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _changePasswordModule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changePasswordModule.component */ "./src/app/Core/changePasswordModule/changePasswordModule.component.ts");





const routes = [
    {
        path: "",
        component: _changePasswordModule_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordModuleComponent"],
        children: [],
    },
];
class ChangePasswordModuleRoutingModule {
}
ChangePasswordModuleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChangePasswordModuleRoutingModule });
ChangePasswordModuleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChangePasswordModuleRoutingModule_Factory(t) { return new (t || ChangePasswordModuleRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangePasswordModuleRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordModuleRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/Core/changePasswordModule/changePasswordModule.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Core/changePasswordModule/changePasswordModule.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChangePasswordModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModuleComponent", function() { return ChangePasswordModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "./node_modules/bcryptjs/dist/bcrypt.js");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users/users.service */ "./src/app/services/users/users.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













class ChangePasswordModuleComponent {
    constructor(router, snackBar, formBuilder, usersService) {
        this.router = router;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.passwordFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.passwordRepeatedFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.password = "";
        this.passwordRepeated = "";
    }
    ngOnInit() {
        this.generalForm = this.formBuilder.group({
            passwordFC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            passwordRepeatedFC: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    changePassword() {
        if (this.generalForm.invalid) {
            this.snackBar.open('Complete los datos requeridos', 'AgroHub', {
                duration: 3000,
            });
            return;
        }
        ;
        if (this.password != this.passwordRepeated) {
            this.snackBar.open('Las contraseñas no coinciden', 'AgroHub', {
                duration: 3000,
            });
            return;
        }
        ;
        let hashPass = bcryptjs__WEBPACK_IMPORTED_MODULE_2__["hashSync"](this.password, 8);
        let idHash = window.location.pathname.slice(16);
        let data = {
            password: hashPass,
            idUser: idHash
        };
        this.usersService.modifyPasswordForgotten(data).subscribe(() => {
            this.snackBar.open('Contraseña actualizada', 'AgroHub', {
                duration: 3000,
            });
            setTimeout(() => {
                this.router.navigate(['auth/login']);
            }, 5000);
        }, () => {
            this.snackBar.open('Error cambiando la Contraseña', 'AgroHub', {
                duration: 3000,
            });
        });
        //this.router.navigate(['auth/login']);
    }
}
ChangePasswordModuleComponent.ɵfac = function ChangePasswordModuleComponent_Factory(t) { return new (t || ChangePasswordModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"])); };
ChangePasswordModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordModuleComponent, selectors: [["app-changePasswordModule"]], decls: 41, vars: 9, consts: [["id", "contentFondo"], [1, "fondo"], [1, "auth-header"], ["src", "../../../../assets/icon/logo01.svg", "alt", "logo"], ["id", "formChangePass", 3, "formGroup"], [1, "bg-img"], [1, "burbujas"], [1, "burbuja"], [1, "contentPrincipal"], [1, "bienvenidos"], [1, "contentIngresar"], [1, "title"], [1, "panel"], [1, "contentTexto"], [1, "textbox"], ["matInput", "", "type", "password", "required", "", "formControlName", "passwordFC", "name", "password", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "password", "required", "", "formControlName", "passwordRepeatedFC", "name", "passwordRepeated", 3, "ngModel", "ngModelChange"], [1, "flex-1"], ["mat-stroked-button", "", 1, "button", "button-mat", "btn--7", 3, "click"], [1, "psuedo-text"]], template: function ChangePasswordModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ingrese su ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "nueva Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordModuleComponent_Template_input_ngModelChange_31_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordModuleComponent_Template_input_ngModelChange_36_listener($event) { return ctx.passwordRepeated = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordModuleComponent_Template_button_click_38_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cambiar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.generalForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 5, "password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 7, "repeat-password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.passwordRepeated);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".fondo[_ngcontent-%COMP%] {\n  background-color: #101c2a;\n}\n\n.bg-img[_ngcontent-%COMP%] {\n  background: url('fondo01.8478b4212b8cdf0906a0.png') no-repeat center center fixed;\n  background-size: cover;\n  -moz-background-size: cover;\n  -webkit-background-size: cover;\n  -o-background-size: cover;\n  overflow: hidden !important;\n  \n  \n  background-color: #ffffff;\n  position: relative !important;\n  height: 100vh;\n  overflow: hidden;\n  margin: 0px;\n  z-index: 1;\n}\n\n#background_css3[_ngcontent-%COMP%] {\n  width: 60% !important;\n  margin: 0px;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  background-color: transparent;\n}\n\n.auth-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 22%;\n  margin-top: 30px;\n}\n\n\n\n.burbuja[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  position: absolute;\n  bottom: -30vh;\n  animation: burbujas 3s linear infinite;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(1) {\n  width: 80px;\n  height: 80px;\n  left: 15%;\n  animation-duration: 3s;\n  animation-delay: 1s;\n  background: #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(2) {\n  width: 100px;\n  height: 100px;\n  left: 5%;\n  animation-duration: 3s;\n  animation-delay: 3s;\n  background: transparent;\n  border: 5px dotted #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(3) {\n  width: 105px;\n  height: 105px;\n  left: 20%;\n  animation-duration: 3s;\n  animation-delay: 5s;\n  background: #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(4) {\n  width: 50px;\n  height: 50px;\n  left: 25%;\n  animation-duration: 6s;\n  animation-delay: 1s;\n  background: transparent;\n  border: 5px dotted #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(5) {\n  width: 70px;\n  height: 70px;\n  left: 18%;\n  animation-duration: 3s;\n  animation-delay: 3s;\n  background: #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(6) {\n  width: 100px;\n  height: 100px;\n  left: 30%;\n  animation-duration: 4s;\n  animation-delay: 5s;\n  background: transparent;\n  border: 5px dotted #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(7) {\n  width: 50px;\n  height: 50px;\n  left: 45%;\n  animation-duration: 4s;\n  animation-delay: 1s;\n  background: #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(8) {\n  width: 65px;\n  height: 65px;\n  left: 35%;\n  animation-duration: 5s;\n  animation-delay: 3s;\n  background: transparent;\n  border: 5px dotted #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(9) {\n  width: 50px;\n  height: 50px;\n  left: 32%;\n  animation-duration: 3s;\n  animation-delay: 5s;\n  background: #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(10) {\n  width: 80px;\n  height: 80px;\n  left: 40%;\n  animation-duration: 3s;\n  animation-delay: 1s;\n  background: transparent;\n  border: 5px dotted #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(11) {\n  width: 105px;\n  height: 105px;\n  left: 1%;\n  animation-duration: 5s;\n  animation-delay: 3s;\n  background: #ffffff;\n  opacity: 0.3;\n}\n\n.burbuja[_ngcontent-%COMP%]:nth-child(12) {\n  width: 70px;\n  height: 70px;\n  left: 50%;\n  animation-duration: 5s;\n  animation-delay: 5s;\n  background: transparent;\n  border: 5px dotted #ffffff;\n  opacity: 0.3;\n}\n\n@keyframes burbujas {\n  0% {\n    bottom: 0;\n    opacity: 0;\n    transform: translateY(0%) rotate(0deg);\n  }\n  \n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    bottom: 50vh;\n    opacity: 0;\n    transform: translateY(-30%) rotate(300deg);\n  }\n}\n\n.contentPrincipal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  align-content: center;\n  width: 100%;\n  position: absolute !important;\n  z-index: 1000;\n  top: 25%;\n}\n\n.bienvenidos[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0px 100px 80px 0px;\n  padding: 0px 100px 0px 0px;\n  width: auto;\n}\n\n.bienvenidos[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 43px;\n  text-transform: capitalize;\n  font-weight: 200;\n  margin: 0px;\n  position: absolute;\n}\n\n.bienvenidos[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 43px;\n  font-weight: 800;\n  margin: 45px 0px 0px 0px;\n  padding: 0px 36px;\n  position: absolute;\n}\n\n.contentIngresar[_ngcontent-%COMP%] {\n  display: block;\n  padding-right: 0vw;\n  margin: 10px 0px 0px 200px;\n}\n\n.contentIngresar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #101c2a;\n  font-size: 30px;\n}\n\n.contentIngresar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  color: #00d963;\n  display: inline-block;\n}\n\n.contentIngresar[_ngcontent-%COMP%]   .contentTexto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n.psuedo-text[_ngcontent-%COMP%] {\n  color: #101c2a;\n  position: relative;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  display: inline;\n  height: auto;\n  font-size: 1rem;\n  font-weight: 500;\n  transition: 0.25s ease-in;\n  transition-delay: 0.1s;\n}\n\n.flex-1[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n  margin: 3em auto 0em auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  padding: 0.1rem 0rem;\n  background: #00d963;\n  text-align: center;\n  display: inline-block;\n  font-size: 1rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n}\n\n.button-mat[_ngcontent-%COMP%] {\n  color: #101c2a;\n  border: 0px transparent;\n  border-radius: 0rem;\n  transition: 0.3s ease-in-out;\n  transition-delay: 0.35s;\n  overflow: hidden;\n}\n\n.button-mat[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  background: #101c2a;\n  position: absolute;\n  width: 200%;\n  height: 300%;\n  border-radius: 80%;\n  transition: 0.36s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.button-mat[_ngcontent-%COMP%]:hover   .psuedo-text[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\n\n.button-mat[_ngcontent-%COMP%]:hover {\n  color: transparent;\n}\n\n.btn--7[_ngcontent-%COMP%]:before {\n  transform: translate(-110%, -110%) translateZ(0);\n}\n\n.btn--7[_ngcontent-%COMP%]:hover:before {\n  transform: translate(-45%, -34%) translateZ(0);\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-changePasswordModule',
                templateUrl: './changePasswordModule.component.html',
                styleUrls: ['./changePasswordModule.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Core/changePasswordModule/changePasswordModule.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Core/changePasswordModule/changePasswordModule.module.ts ***!
  \**************************************************************************/
/*! exports provided: ChangePasswordModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordModuleModule", function() { return ChangePasswordModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _changePasswordModule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changePasswordModule-routing.module */ "./src/app/Core/changePasswordModule/changePasswordModule-routing.module.ts");
/* harmony import */ var _changePasswordModule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changePasswordModule.component */ "./src/app/Core/changePasswordModule/changePasswordModule.component.ts");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class ChangePasswordModuleModule {
}
ChangePasswordModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChangePasswordModuleModule });
ChangePasswordModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChangePasswordModuleModule_Factory(t) { return new (t || ChangePasswordModuleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _changePasswordModule_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordModuleRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangePasswordModuleModule, { declarations: [_changePasswordModule_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordModuleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        _changePasswordModule_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordModuleRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_changePasswordModule_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordModuleComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
                    _changePasswordModule_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordModuleRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ })

}]);
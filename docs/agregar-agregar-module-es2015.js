(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-agregar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"dark\" defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{lista.titulo}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            <ion-label position=\"floating\">Añadir item a la lista</ion-label>\n            <ion-input type=\"text\" (keyup.enter)=\"agregarElemento()\" [(ngModel)]=\"nombreItem\"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list>\n        <ion-list-header *ngIf=\"lista.items.length > 0 && !lista.terminada \">\n            <ion-label>Tareas pendientes</ion-label>\n\n        </ion-list-header>\n        <ion-list-header *ngIf=\"lista.terminada\">\n            <ion-label>Sin tareas pendientes</ion-label>\n\n        </ion-list-header>\n    </ion-list>\n\n\n    <ion-item-sliding *ngFor=\"let item of lista.items; let i = index\" class=\"animated fadeInDown\">\n        <ion-item>\n\n            <ion-checkbox slot=\"start\" [(ngModel)]=\"item.completado\" (ionChange)=\"cambioCheck(item)\">\n            </ion-checkbox>\n\n            <ion-label>{{item.desc}}</ion-label>\n\n        </ion-item>\n        <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"borrar(i)\" color=\"danger\">\n                <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\n            </ion-item-option>\n        </ion-item-options>\n    </ion-item-sliding>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/models/lista-item.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/lista-item.model.ts ***!
  \********************************************/
/*! exports provided: ListaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaItem", function() { return ListaItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ListaItem {
    constructor(desc) {
        this.desc = desc;
        this.completado = false;
    }
}


/***/ }),

/***/ "./src/app/models/lista.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/lista.model.ts ***!
  \***************************************/
/*! exports provided: Lista */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lista", function() { return Lista; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Lista {
    constructor(titulo) {
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();
    }
}


/***/ }),

/***/ "./src/app/pages/agregar/agregar-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/agregar/agregar-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AgregarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPageRoutingModule", function() { return AgregarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar.page */ "./src/app/pages/agregar/agregar.page.ts");




const routes = [
    {
        path: '',
        component: _agregar_page__WEBPACK_IMPORTED_MODULE_3__["AgregarPage"]
    }
];
let AgregarPageRoutingModule = class AgregarPageRoutingModule {
};
AgregarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgregarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/agregar/agregar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.module.ts ***!
  \*************************************************/
/*! exports provided: AgregarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPageModule", function() { return AgregarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _agregar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agregar-routing.module */ "./src/app/pages/agregar/agregar-routing.module.ts");
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agregar.page */ "./src/app/pages/agregar/agregar.page.ts");







let AgregarPageModule = class AgregarPageModule {
};
AgregarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agregar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarPageRoutingModule"]
        ],
        declarations: [_agregar_page__WEBPACK_IMPORTED_MODULE_6__["AgregarPage"]]
    })
], AgregarPageModule);



/***/ }),

/***/ "./src/app/pages/agregar/agregar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item-option {\n  background-color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWdyZWdhci9DOlxcVXNlcnNcXEFsZWphbmRyb1xcRGVza3RvcFxcQ3Vyc29zIEZyb250XFxBbmd1bGFyXFxBbmd1bGFyICBiw6FzaWNvIEZlcm5hbmRvIEhlcnJlcmFcXDAwMDAwMDAwIE1pcyBFamVyY2ljaW9zXFwwNS1teUFwcC9zcmNcXGFwcFxccGFnZXNcXGFncmVnYXJcXGFncmVnYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZ3JlZ2FyL2FncmVnYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVnYXIvYWdyZWdhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbS1vcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufSIsImlvbi1pdGVtLW9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/agregar/agregar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.ts ***!
  \***********************************************/
/*! exports provided: AgregarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPage", function() { return AgregarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_deseos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/deseos.service */ "./src/app/services/deseos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_lista_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/lista-item.model */ "./src/app/models/lista-item.model.ts");





let AgregarPage = class AgregarPage {
    constructor(deseosService, route) {
        this.deseosService = deseosService;
        this.route = route;
        this.nombreItem = '';
        const listaId = this.route.snapshot.paramMap.get("listaId");
        this.lista = this.deseosService.obtenerLista(listaId);
    }
    ngOnInit() { }
    agregarElemento() {
        if (this.nombreItem.length === 0) {
            return;
        }
        else {
            const elementoLista = new _models_lista_item_model__WEBPACK_IMPORTED_MODULE_4__["ListaItem"](this.nombreItem);
            this.lista.items.push(elementoLista);
            this.nombreItem = '';
            this.deseosService.guardarStorage();
        }
    }
    cambioCheck(item) {
        const pendientes = this.lista.items.filter(itemData => {
            return !itemData.completado;
        }).length;
        if (pendientes === 0) {
            this.lista.terminadaEn = new Date();
            this.lista.terminada = true;
        }
        else {
            this.lista.terminadaEn = null;
            this.lista.terminada = false;
        }
        this.deseosService.guardarStorage();
        console.log(this.deseosService.listas);
    }
    borrar(index) {
        this.lista.items.splice(index, 1);
        this.deseosService.guardarStorage();
    }
};
AgregarPage.ctorParameters = () => [
    { type: _services_deseos_service__WEBPACK_IMPORTED_MODULE_2__["DeseosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AgregarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-agregar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agregar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agregar.page.scss */ "./src/app/pages/agregar/agregar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_deseos_service__WEBPACK_IMPORTED_MODULE_2__["DeseosService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], AgregarPage);



/***/ }),

/***/ "./src/app/services/deseos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/deseos.service.ts ***!
  \********************************************/
/*! exports provided: DeseosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeseosService", function() { return DeseosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_lista_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/lista.model */ "./src/app/models/lista.model.ts");



let DeseosService = class DeseosService {
    constructor() {
        this.listas = [];
        this.cargarStorage();
    }
    crearLista(titulo) {
        const nuevaLista = new _models_lista_model__WEBPACK_IMPORTED_MODULE_2__["Lista"](titulo);
        this.listas.push(nuevaLista);
        this.guardarStorage();
        return nuevaLista.id;
    }
    obtenerLista(id) {
        id = Number(id);
        return this.listas.find(listaData => listaData.id === id);
    }
    borrarLista(lista) {
        this.listas = this.listas.filter(listaData => {
            return listaData.id !== lista.id;
        });
        this.guardarStorage();
    }
    guardarStorage() {
        localStorage.setItem("data", JSON.stringify(this.listas));
    }
    cargarStorage() {
        if (localStorage.getItem("data")) {
            this.listas = JSON.parse(localStorage.getItem("data"));
        }
        else {
            this.listas = [];
        }
    }
};
DeseosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DeseosService);



/***/ })

}]);
//# sourceMappingURL=agregar-agregar-module-es2015.js.map
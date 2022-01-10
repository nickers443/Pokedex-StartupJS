/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main/routes.js":
/*!************************!*\
  !*** ./main/routes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((components={})=>[{path:'/',exact:true,component:components.PHome},{path:'/about',exact:true,component:components.PAbout},{path:'/addpokemon/',exact:true,component:components.PAddPokemon},{path:'/info/:pokemonId',exact:true,component:components.PInfoPokemon}]);

/***/ }),

/***/ "./model/BasePokemonModel.js":
/*!***********************************!*\
  !*** ./model/BasePokemonModel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasePokemonModel)
/* harmony export */ });
/* harmony import */ var startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/orm */ "./node_modules/startupjs/orm.js");
class BasePokemonModel extends startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.BaseModel{async edit(fields){await this.setEach(fields);}}

/***/ }),

/***/ "./model/BasePokemonsModel.js":
/*!************************************!*\
  !*** ./model/BasePokemonsModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasePokemonsModel)
/* harmony export */ });
/* harmony import */ var startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/orm */ "./node_modules/startupjs/orm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
class BasePokemonsModel extends startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.BaseModel{async addNew(fields){const id=await this.add(fields);return id;}async addByName(name){const apiUrl=`https://pokeapi.co/api/v2/pokemon/${name}`;const res=await axios__WEBPACK_IMPORTED_MODULE_1___default().get(apiUrl);const pokemon=res.data;delete pokemon.id;const id=await this.addNew(pokemon);return id;}}

/***/ }),

/***/ "./model/index.js":
/*!************************!*\
  !*** ./model/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var startupjs_i18n_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/i18n/model */ "./node_modules/startupjs/i18n/model.js");
/* harmony import */ var _BasePokemonModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasePokemonModel */ "./model/BasePokemonModel.js");
/* harmony import */ var _BasePokemonsModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasePokemonsModel */ "./model/BasePokemonsModel.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(racer){(0,startupjs_i18n_model__WEBPACK_IMPORTED_MODULE_0__["default"])(racer);racer.orm('pokemons.*',_BasePokemonModel__WEBPACK_IMPORTED_MODULE_1__["default"]);racer.orm('pokemons',_BasePokemonsModel__WEBPACK_IMPORTED_MODULE_2__["default"]);}

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server/index.js */ "./server/index.js");
(0,_server_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./server/api/index.js":
/*!*****************************!*\
  !*** ./server/api/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _testThing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testThing */ "./server/api/testThing.js");
const router=express__WEBPACK_IMPORTED_MODULE_0___default().Router();router.get('/test-thing',_testThing__WEBPACK_IMPORTED_MODULE_1__["default"]);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./server/api/testThing.js":
/*!*********************************!*\
  !*** ./server/api/testThing.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async(req,res)=>{const{model}=req;const $testThing=model.at('testThings.first');await $testThing.subscribe();res.json({name:'Test API',testThing:$testThing.get()});});

/***/ }),

/***/ "./server/createMongoIndexes.js":
/*!**************************************!*\
  !*** ./server/createMongoIndexes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMongoIndexes)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nconf */ "nconf");
/* harmony import */ var nconf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nconf__WEBPACK_IMPORTED_MODULE_1__);
const indexes=[{collection:'pokemons',indexes:[{order:1}],options:false}];const DB_NAME=nconf__WEBPACK_IMPORTED_MODULE_1___default().get('MONGO_URL').split('/').pop().split('?').shift();async function createMongoIndexes(){const client=await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(nconf__WEBPACK_IMPORTED_MODULE_1___default().get('MONGO_URL'));const db=client.db(DB_NAME);console.log(db.database);for(const item of indexes){for(const index of item.indexes){await db.collection(item.collection).dropIndexes();const res=await db.collection(item.collection).createIndex(index,item.options);}}console.log('Info:',`Creating mongo indexes ${indexes.indexes}`);client.close();}

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var startupjs_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/init */ "./node_modules/startupjs/init.js");
/* harmony import */ var startupjs_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! startupjs/server */ "./node_modules/startupjs/server.js");
/* harmony import */ var startupjs_app_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! startupjs/app/server */ "./node_modules/startupjs/app/server.js");
/* harmony import */ var startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! startupjs/i18n/server */ "./node_modules/startupjs/i18n/server.js");
/* harmony import */ var _startupjs_ui_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @startupjs/ui/server */ "./node_modules/@startupjs/ui/server/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model */ "./model/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./server/api/index.js");
/* harmony import */ var _main_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main/routes */ "./main/routes.js");
/* harmony import */ var _createMongoIndexes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createMongoIndexes */ "./server/createMongoIndexes.js");
(0,startupjs_init__WEBPACK_IMPORTED_MODULE_0__["default"])({orm: _model__WEBPACK_IMPORTED_MODULE_5__["default"]});(0,startupjs_server__WEBPACK_IMPORTED_MODULE_1__["default"])({secure:false,getHead,appRoutes:[...(0,_main_routes__WEBPACK_IMPORTED_MODULE_6__["default"])(),...(0,startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_3__.getI18nRoutes)()]},(ee,options)=>{(0,startupjs_app_server__WEBPACK_IMPORTED_MODULE_2__.initApp)(ee);(0,_startupjs_ui_server__WEBPACK_IMPORTED_MODULE_4__.initUi)(ee,options);(0,startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_3__.initI18n)(ee);ee.on('routes',expressApp=>{expressApp.use('/api',_api__WEBPACK_IMPORTED_MODULE_7__["default"]);});ee.on('backend',async backend=>{await (0,_createMongoIndexes__WEBPACK_IMPORTED_MODULE_8__["default"])();});});function getHead(appName){return`
    ${(0,_startupjs_ui_server__WEBPACK_IMPORTED_MODULE_4__.getUiHead)()}
    <title>Pokedex</title>
    <!-- Put vendor JS and CSS here -->
  `;}function run(){}

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "@startupjs/server":
/*!************************************!*\
  !*** external "@startupjs/server" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@startupjs/server");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "nconf":
/*!************************!*\
  !*** external "nconf" ***!
  \************************/
/***/ ((module) => {

module.exports = require("nconf");

/***/ }),

/***/ "pluralize":
/*!****************************!*\
  !*** external "pluralize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("pluralize");

/***/ }),

/***/ "racer":
/*!************************!*\
  !*** external "racer" ***!
  \************************/
/***/ ((module) => {

module.exports = require("racer");

/***/ }),

/***/ "racer/lib/Model/Query":
/*!****************************************!*\
  !*** external "racer/lib/Model/Query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("racer/lib/Model/Query");

/***/ }),

/***/ "racer/lib/Model/RemoteDoc":
/*!********************************************!*\
  !*** external "racer/lib/Model/RemoteDoc" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("racer/lib/Model/RemoteDoc");

/***/ }),

/***/ "resolve":
/*!**************************!*\
  !*** external "resolve" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("resolve");

/***/ }),

/***/ "rich-text":
/*!****************************!*\
  !*** external "rich-text" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("rich-text");

/***/ }),

/***/ "sharedb":
/*!**************************!*\
  !*** external "sharedb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sharedb");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./node_modules/@startupjs/app/server/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@startupjs/app/server/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initApp": () => (/* reexport safe */ _initApp__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _initApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initApp */ "./node_modules/@startupjs/app/server/initApp.js");


/***/ }),

/***/ "./node_modules/@startupjs/app/server/initApp.js":
/*!*******************************************************!*\
  !*** ./node_modules/@startupjs/app/server/initApp.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initApp)
/* harmony export */ });
async function initApp(ee,criticalVersion){if(criticalVersion){ee.on('backend',async backend=>{const model=backend.createModel();const $version=model.at('service.version');await $version.subscribe();const version=$version.get();if(!version){await model.addAsync('service',{id:'version',criticalVersion});}else{await $version.setDiffDeep('criticalVersion',criticalVersion);}console.log('Critical version:',JSON.stringify(criticalVersion,null,2));model.close();});}ee.on('routes',expressApp=>{expressApp.get('/api/serverSession',function(req,res){const restoreUrl=req.session.restoreUrl;if(restoreUrl){delete req.session.restoreUrl;req.model.set('_session.restoreUrl',restoreUrl);}return res.json(req.model.get('_session'));});expressApp.post('/api/restore-url',function(req,res){const{restoreUrl}=req.body;req.session.restoreUrl=restoreUrl;res.sendStatus(200);});});}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/client/app/routes.js":
/*!***********************************************************!*\
  !*** ./node_modules/@startupjs/i18n/client/app/routes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(components={}){return[{path:'/i18n',exact:true,component:components.PI18n,filters:[i18nPageAccess]}];}function i18nPageAccess(model,next,redirect){return model.scope('i18nTranslations').i18nPageAccess(model,next,redirect);}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/isomorphic/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/i18n/isomorphic/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodePath": () => (/* binding */ encodePath),
/* harmony export */   "decodePath": () => (/* binding */ decodePath)
/* harmony export */ });
const encodePath=str=>str.replace(/\./g,'%2E');const decodePath=str=>str.replace(/%2E/g,'.');

/***/ }),

/***/ "./node_modules/@startupjs/i18n/model/BaseTranslationModel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@startupjs/i18n/model/BaseTranslationModel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseTranslationModel)
/* harmony export */ });
/* harmony import */ var startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/orm */ "./node_modules/startupjs/orm.js");
const DRAFT_POSTFIX='--draft';class BaseTranslationModel extends startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.BaseModel{async createNew(){const collection=this.getCollection();const draftId=this.getDraftId();await Promise.all([this.create(),this.root.add(collection,{id:draftId})]);}getDraftId(){return this.getId()+DRAFT_POSTFIX;}}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/model/getTranslationsModel.js":
/*!********************************************************************!*\
  !*** ./node_modules/@startupjs/i18n/model/getTranslationsModel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTranslationsModel)
/* harmony export */ });
/* harmony import */ var startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! startupjs/orm */ "./node_modules/startupjs/orm.js");
function getTranslationsModel(i18nPageAccess){return class BaseTranslationsModel extends startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.BaseModel{async addNew(lang){if(typeof lang!=='string'){throw new Error('[@startupjs/i18n] BaseTranslationsModel addNew: '+'lang must be a string');}await this.scope(lang).createNew();return lang;}i18nPageAccess(model,next,redirect){i18nPageAccess(model,next,redirect);}};}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/model/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@startupjs/i18n/model/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getTranslationsModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslationsModel */ "./node_modules/@startupjs/i18n/model/getTranslationsModel.js");
/* harmony import */ var _BaseTranslationModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseTranslationModel */ "./node_modules/@startupjs/i18n/model/BaseTranslationModel.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(racer,i18nPageAccess){if(typeof i18nPageAccess!=='function'){i18nPageAccess=(model,next)=>next();}racer.orm('i18nTranslations',(0,_getTranslationsModel__WEBPACK_IMPORTED_MODULE_0__["default"])(i18nPageAccess));racer.orm('i18nTranslations.*',_BaseTranslationModel__WEBPACK_IMPORTED_MODULE_1__["default"]);}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/server/api/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/i18n/server/api/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resolve */ "resolve");
/* harmony import */ var _isomorphic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../isomorphic */ "./node_modules/@startupjs/i18n/isomorphic/index.js");
const router=express__WEBPACK_IMPORTED_MODULE_0__.Router();router.post('/get-translations',(req,res)=>{let translations;try{translations=JSON.parse(fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync(getTranslationPath(),{encoding:'utf8'}));}catch{console.error('[@startupjs/i18n]: translations.json not found');}res.json(translations?encodeObjectKeys(translations):{});});router.post('/change-language',(req,res)=>{const{lang}=req.body;let status;if(lang){req.session.lang=lang;status=200;}else{status=400;}res.status(status).end();});function getTranslationPath(){let translationsPath;try{translationsPath=resolve__WEBPACK_IMPORTED_MODULE_2__.sync('@startupjs/babel-plugin-i18n-extract/translations.json');}catch{throw new Error('[@startupjs/i18n]: @startupjs/babel-plugin-i18n-extract not found');}return translationsPath;}function encodeObjectKeys(obj){const newObj={};for(const key in obj){const value=obj[key];newObj[(0,_isomorphic__WEBPACK_IMPORTED_MODULE_3__.encodePath)(key)]=typeof value==='object'?encodeObjectKeys(value):value;}return newObj;}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);

/***/ }),

/***/ "./node_modules/@startupjs/i18n/server/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@startupjs/i18n/server/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initI18n": () => (/* binding */ initI18n),
/* harmony export */   "getI18nRoutes": () => (/* reexport safe */ _client_app_routes__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./node_modules/@startupjs/i18n/server/routes.js");
/* harmony import */ var _client_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../client/app/routes */ "./node_modules/@startupjs/i18n/client/app/routes.js");
function initI18n(ee,config){if(!ee){throw new Error('[@startupjs/i18n] initI18n: ee is required');}ee.on('routes',_routes__WEBPACK_IMPORTED_MODULE_0__["default"]);ee.on('middleware',expressApp=>{expressApp.use((req,res,next)=>{const lang=req.session.lang;if(lang)req.model.set('_session.lang',lang);next();});});}

/***/ }),

/***/ "./node_modules/@startupjs/i18n/server/routes.js":
/*!*******************************************************!*\
  !*** ./node_modules/@startupjs/i18n/server/routes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ i18nRoutesServer)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/@startupjs/i18n/server/api/index.js");
function i18nRoutesServer(expressApp){expressApp.use('/api/i18n',_api__WEBPACK_IMPORTED_MODULE_0__["default"]);}

/***/ }),

/***/ "./node_modules/@startupjs/init/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@startupjs/init/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./node_modules/@startupjs/init/lib/index.server.js");


/***/ }),

/***/ "./node_modules/@startupjs/init/lib/index.server.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/index.server.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _server__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./node_modules/@startupjs/init/lib/server/index.js");


/***/ }),

/***/ "./node_modules/@startupjs/init/lib/server/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/server/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sharedb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sharedb */ "sharedb");
/* harmony import */ var _util_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/common */ "./node_modules/@startupjs/init/lib/util/common.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (options=>{(0,_util_common__WEBPACK_IMPORTED_MODULE_1__["default"])(sharedb__WEBPACK_IMPORTED_MODULE_0__,options);});

/***/ }),

/***/ "./node_modules/@startupjs/init/lib/util/batch.server.js":
/*!***************************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/util/batch.server.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn=>fn());

/***/ }),

/***/ "./node_modules/@startupjs/init/lib/util/common.js":
/*!*********************************************************!*\
  !*** ./node_modules/@startupjs/init/lib/util/common.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rich-text */ "rich-text");
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! racer */ "racer");
/* harmony import */ var racer_lib_Model_RemoteDoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! racer/lib/Model/RemoteDoc */ "racer/lib/Model/RemoteDoc");
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./batch */ "./node_modules/@startupjs/init/lib/util/batch.server.js");
/* harmony import */ var _startupjs_orm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @startupjs/orm */ "./node_modules/@startupjs/orm/lib/index.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((ShareDB,{orm}={})=>{ShareDB.types.register(rich_text__WEBPACK_IMPORTED_MODULE_0__.type);const oldRemoteDocOnOp=racer_lib_Model_RemoteDoc__WEBPACK_IMPORTED_MODULE_2__.prototype._onOp;racer_lib_Model_RemoteDoc__WEBPACK_IMPORTED_MODULE_2__.prototype._onOp=function(){if(this.shareDoc.type===rich_text__WEBPACK_IMPORTED_MODULE_0__.type)return;return oldRemoteDocOnOp.apply(this,arguments);};racer__WEBPACK_IMPORTED_MODULE_1__.Model.prototype.batch=_batch__WEBPACK_IMPORTED_MODULE_3__["default"];if(orm){racer__WEBPACK_IMPORTED_MODULE_1__.use(_startupjs_orm__WEBPACK_IMPORTED_MODULE_4__["default"]);racer__WEBPACK_IMPORTED_MODULE_1__.use(orm);}});

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/associations/belongsTo.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/associations/belongsTo.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ belongsTo)
/* harmony export */ });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "pluralize");
function belongsTo(AssociatedOrmEntity,options={}){return function(OrmEntity){const key=pluralize__WEBPACK_IMPORTED_MODULE_0__.singular(AssociatedOrmEntity.collection)+'Id';OrmEntity.addAssociation(Object.assign({type:'belongsTo',orm:AssociatedOrmEntity,key},options));AssociatedOrmEntity.addAssociation(Object.assign({type:'oppositeBelongsTo',orm:OrmEntity,key,opposite:true},options));return OrmEntity;};}

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/associations/hasMany.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/associations/hasMany.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasMany)
/* harmony export */ });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "pluralize");
function hasMany(AssociatedOrmEntity,options={}){return function(OrmEntity){const key=pluralize__WEBPACK_IMPORTED_MODULE_0__.singular(AssociatedOrmEntity.collection)+'Ids';OrmEntity.addAssociation(Object.assign({type:'hasMany',orm:AssociatedOrmEntity,key},options));AssociatedOrmEntity.addAssociation(Object.assign({type:'oppositeHasMany',orm:OrmEntity,key,opposite:true},options));return OrmEntity;};}

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/associations/hasOne.js":
/*!****************************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/associations/hasOne.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hasOne)
/* harmony export */ });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "pluralize");
function hasOne(AssociatedOrmEntity,options={}){return function(OrmEntity){const key=pluralize__WEBPACK_IMPORTED_MODULE_0__.singular(AssociatedOrmEntity.collection)+'Id';OrmEntity.addAssociation(Object.assign({type:'hasOne',orm:AssociatedOrmEntity,key},options));AssociatedOrmEntity.addAssociation(Object.assign({type:'oppositeHasOne',orm:OrmEntity,key,opposite:true},options));return OrmEntity;};}

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/associations/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/associations/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "belongsTo": () => (/* reexport safe */ _belongsTo__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "hasOne": () => (/* reexport safe */ _hasOne__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "hasMany": () => (/* reexport safe */ _hasMany__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _belongsTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belongsTo */ "./node_modules/@startupjs/orm/lib/associations/belongsTo.js");
/* harmony import */ var _hasOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hasOne */ "./node_modules/@startupjs/orm/lib/associations/hasOne.js");
/* harmony import */ var _hasMany__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hasMany */ "./node_modules/@startupjs/orm/lib/associations/hasMany.js");


/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ChildModel": () => (/* binding */ ChildModel),
/* harmony export */   "BaseModel": () => (/* binding */ BaseModel),
/* harmony export */   "belongsTo": () => (/* reexport safe */ _associations__WEBPACK_IMPORTED_MODULE_2__.belongsTo),
/* harmony export */   "hasMany": () => (/* reexport safe */ _associations__WEBPACK_IMPORTED_MODULE_2__.hasMany),
/* harmony export */   "hasOne": () => (/* reexport safe */ _associations__WEBPACK_IMPORTED_MODULE_2__.hasOne)
/* harmony export */ });
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! racer */ "racer");
/* harmony import */ var _promisifyRacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promisifyRacer */ "./node_modules/@startupjs/orm/lib/promisifyRacer.js");
/* harmony import */ var _associations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./associations */ "./node_modules/@startupjs/orm/lib/associations/index.js");
const Model=racer__WEBPACK_IMPORTED_MODULE_0__.Model;global.STARTUP_JS_ORM={};/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(racer){if(racer.orm)return;racer._orm=global.STARTUP_JS_ORM;racer.orm=function(pattern,OrmEntity,alias){var name=alias||pattern;if(global.STARTUP_JS_ORM[name])throw alreadyDefinedError(pattern,alias);if(!OrmEntity.collection){var match=pattern.match(/^[^.]+/);if(match)OrmEntity.collection=match[0];}global.STARTUP_JS_ORM[name]={pattern:pattern,regexp:patternToRegExp(pattern),OrmEntity:OrmEntity};};Model.prototype.at=function(subpath,alias){var path=this.path(subpath);return this.scope(path,alias);};Model.prototype._scope=function(path){var ChildModel=Model.ChildModel;var model=new ChildModel(this);model._at=path;return model;};Model.prototype.scope=function(path,alias){if(alias){if(global.STARTUP_JS_ORM[alias]){return this.__createScopedModel(path,global.STARTUP_JS_ORM[alias].OrmEntity);}else{throw new Error('Non-existent alias of the OrmEntity specified: '+alias+'\n\n'+'Most likely you have specified the path incorrectly in '+'".scope()" or ".at()"\n\n'+'The path must be passed as a single string separated by dots, '+'for example:\n\n'+'CORRECT:\n'+"$root.at('users.' + userId)\n\n"+'INCORRECT:\n'+"$root.at('users', userId)");}}var segments=this._dereference(this.__splitPath(path),true);var fullPath=segments.join('.');for(var name in global.STARTUP_JS_ORM){var regexp=global.STARTUP_JS_ORM[name].regexp;if(regexp.test(fullPath)){return this.__createScopedModel(path,global.STARTUP_JS_ORM[name].OrmEntity);}}return this._scope(path);};Model.prototype.__createScopedModel=function(path,OrmEntity){var model;if(OrmEntity.factory||OrmEntity.prototype.factory){model=OrmEntity(this._scope(path),this);if(!model)model=this._scope(path);}else{model=new OrmEntity(this);}model._at=path;return model;};Model.prototype.__splitPath=function(path){return path&&path.split('.')||[];};(0,_promisifyRacer__WEBPACK_IMPORTED_MODULE_1__["default"])();}function patternToRegExp(pattern){pattern=pattern.replace(/\$/g,'\\$').replace(/\./g,'\\.').replace(/\*/g,'([^\\.]*)');return new RegExp('^'+pattern+'$');}function alreadyDefinedError(pattern,alias){var msg;if(alias){msg="ORM entity with the alias '"+alias+"' is already defined. "+'Aliases must be unique. If you did already define the same ORM entity with '+"that alias name, just don't specify the alias at all -- path pattern is sufficient.";}else{msg="ORM entity matching the same path pattern '"+pattern+"' is already defined.";}return new Error(msg);}const ChildModel=Model.ChildModel;function BaseModel(){Model.ChildModel.apply(this,arguments);}BaseModel.prototype=Object.create(Model.ChildModel.prototype);BaseModel.prototype.constructor=BaseModel;BaseModel.prototype.getId=function(){var actualField=this.dereferenceSelf();return actualField.leaf();};BaseModel.prototype.getCollection=function(){let collection=this.constructor.collection;if(!collection){const model=this.root;const actualField=this.dereferenceSelf();collection=model._splitPath(actualField.path())[0];}return collection;};BaseModel.prototype.dereferenceSelf=function(){var model=this.root;var segments=model._splitPath(this.path());return model.scope(model._dereference(segments,true).join('.'));};BaseModel.associations=[];BaseModel.addAssociation=function(association){this.associations=this.associations.concat(association);};BaseModel.prototype.getAssociations=function(){return this.constructor.associations;};

/***/ }),

/***/ "./node_modules/@startupjs/orm/lib/promisifyRacer.js":
/*!***********************************************************!*\
  !*** ./node_modules/@startupjs/orm/lib/promisifyRacer.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var racer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! racer */ "racer");
/* harmony import */ var racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! racer/lib/Model/Query */ "racer/lib/Model/Query");
const Model=racer__WEBPACK_IMPORTED_MODULE_0__.Model;const FIX_VALUE_CB={set:{minArgs:2},setNull:{minArgs:2},setEach:{minArgs:2},push:{minArgs:2},unshift:{minArgs:2},insert:{minArgs:3},remove:{minArgs:2,onlyValidate:true},move:{minArgs:3,onlyValidate:true},stringInsert:{minArgs:3,onlyValidate:true},stringRemove:{minArgs:3,onlyValidate:true},subtypeSubmit:{minArgs:3,onlyValidate:true},setDiff:{minArgs:2},setDiffDeep:{minArgs:2},setArrayDiff:{minArgs:2},setArrayDiffDeep:{minArgs:2}};const MUTATORS=['set','setNull','setEach','create','createNull','add','del','increment','push','unshift','insert','pop','shift','remove','move','stringInsert','stringRemove','subtypeSubmit','setDiff','setDiffDeep','setArrayDiff','setArrayDiffDeep'];const SUBSCRIPTIONS=['subscribe','fetch'];const ASYNC_METHODS=MUTATORS.concat(SUBSCRIPTIONS);/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {for(const method in FIX_VALUE_CB){const{minArgs,onlyValidate}=FIX_VALUE_CB[method];Model.prototype[method]=fixValueCbApi(Model.prototype[method],method,minArgs,onlyValidate);}for(const method of ASYNC_METHODS){Model.prototype[method]=optionalPromisify(Model.prototype[method]);Model.prototype[method+'Async']=deprecationWarning(Model.prototype[method],method);}for(const method of SUBSCRIPTIONS){racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1__.prototype[method]=optionalPromisify(racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1__.prototype[method]);racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1__.prototype[method+'Async']=deprecationWarning(racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1__.prototype[method],method);}}function optionalPromisify(originalFn){return function optionalPromisifier(...args){if(typeof args[args.length-1]==='function'){return originalFn.apply(this,args);}else{return new Promise((resolve,reject)=>{let syncResult;let isSyncCallback=true;args.push(function promisifyCallback(err,value){if(err)return reject(err);if(value)return resolve(value);if(isSyncCallback){process.nextTick(()=>resolve(syncResult));}else{return resolve(syncResult);}});syncResult=originalFn.apply(this,args);isSyncCallback=undefined;}).catch(err=>{console.error(err);if(this instanceof racer_lib_Model_Query__WEBPACK_IMPORTED_MODULE_1__){this.model.root.emit('error',err);}else{this.root.emit('error',err);}});}};}function fixValueCbApi(originalFn,methodName,minArgs,onlyValidate){return function(...args){if(typeof arguments[arguments.length-1]==='function'){if(arguments.length<minArgs){throw new Error('Not enough arguments for '+methodName);}else if(!onlyValidate&&arguments.length===minArgs){args.unshift('');}}return originalFn.apply(this,args);};}function deprecationWarning(originalFn,methodName){return function(){console.warn('model.'+methodName+'Async() is DEPRECATED and going to be '+'REMOVED soon!\n Please use '+methodName+'(), '+'it supports promises now and you can \'await\' it directly.');return originalFn.apply(this,arguments);};}

/***/ }),

/***/ "./node_modules/@startupjs/ui/server/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@startupjs/ui/server/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUiHead": () => (/* binding */ getUiHead),
/* harmony export */   "initUi": () => (/* binding */ initUi)
/* harmony export */ });
function getUiHead(){return'';}function initUi(ee,options){}

/***/ }),

/***/ "./node_modules/startupjs/app/server.js":
/*!**********************************************!*\
  !*** ./node_modules/startupjs/app/server.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initApp": () => (/* reexport safe */ _startupjs_app_server__WEBPACK_IMPORTED_MODULE_0__.initApp)
/* harmony export */ });
/* harmony import */ var _startupjs_app_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/app/server */ "./node_modules/@startupjs/app/server/index.js");


/***/ }),

/***/ "./node_modules/startupjs/i18n/model.js":
/*!**********************************************!*\
  !*** ./node_modules/startupjs/i18n/model.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _startupjs_i18n_model__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _startupjs_i18n_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/i18n/model */ "./node_modules/@startupjs/i18n/model/index.js");


/***/ }),

/***/ "./node_modules/startupjs/i18n/server.js":
/*!***********************************************!*\
  !*** ./node_modules/startupjs/i18n/server.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getI18nRoutes": () => (/* reexport safe */ _startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_0__.getI18nRoutes),
/* harmony export */   "initI18n": () => (/* reexport safe */ _startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_0__.initI18n)
/* harmony export */ });
/* harmony import */ var _startupjs_i18n_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/i18n/server */ "./node_modules/@startupjs/i18n/server/index.js");


/***/ }),

/***/ "./node_modules/startupjs/init.js":
/*!****************************************!*\
  !*** ./node_modules/startupjs/init.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _startupjs_init__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _startupjs_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/init */ "./node_modules/@startupjs/init/index.js");


/***/ }),

/***/ "./node_modules/startupjs/orm.js":
/*!***************************************!*\
  !*** ./node_modules/startupjs/orm.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "BaseModel": () => (/* reexport safe */ _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.BaseModel),
/* harmony export */   "ChildModel": () => (/* reexport safe */ _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.ChildModel),
/* harmony export */   "belongsTo": () => (/* reexport safe */ _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.belongsTo),
/* harmony export */   "hasMany": () => (/* reexport safe */ _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.hasMany),
/* harmony export */   "hasOne": () => (/* reexport safe */ _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__.hasOne)
/* harmony export */ });
/* harmony import */ var _startupjs_orm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/orm */ "./node_modules/@startupjs/orm/lib/index.js");


/***/ }),

/***/ "./node_modules/startupjs/server.js":
/*!******************************************!*\
  !*** ./node_modules/startupjs/server.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default export from named module */ _startupjs_server__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _startupjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @startupjs/server */ "@startupjs/server");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	__webpack_require__("@babel/polyfill");
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=server.dev.cjs.map
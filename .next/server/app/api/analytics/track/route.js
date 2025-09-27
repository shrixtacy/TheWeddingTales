"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/analytics/track/route";
exports.ids = ["app/api/analytics/track/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalytics%2Ftrack%2Froute&page=%2Fapi%2Fanalytics%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2Ftrack%2Froute.ts&appDir=D%3A%5CThe%20Wedding%20Tales%5Cwork%5CTheWeddingTales%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CThe%20Wedding%20Tales%5Cwork%5CTheWeddingTales&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalytics%2Ftrack%2Froute&page=%2Fapi%2Fanalytics%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2Ftrack%2Froute.ts&appDir=D%3A%5CThe%20Wedding%20Tales%5Cwork%5CTheWeddingTales%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CThe%20Wedding%20Tales%5Cwork%5CTheWeddingTales&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_The_Wedding_Tales_work_TheWeddingTales_app_api_analytics_track_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/analytics/track/route.ts */ \"(rsc)/./app/api/analytics/track/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/analytics/track/route\",\n        pathname: \"/api/analytics/track\",\n        filename: \"route\",\n        bundlePath: \"app/api/analytics/track/route\"\n    },\n    resolvedPagePath: \"D:\\\\The Wedding Tales\\\\work\\\\TheWeddingTales\\\\app\\\\api\\\\analytics\\\\track\\\\route.ts\",\n    nextConfigOutput,\n    userland: D_The_Wedding_Tales_work_TheWeddingTales_app_api_analytics_track_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/analytics/track/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhbmFseXRpY3MlMkZ0cmFjayUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYW5hbHl0aWNzJTJGdHJhY2slMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhbmFseXRpY3MlMkZ0cmFjayUyRnJvdXRlLnRzJmFwcERpcj1EJTNBJTVDVGhlJTIwV2VkZGluZyUyMFRhbGVzJTVDd29yayU1Q1RoZVdlZGRpbmdUYWxlcyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RCUzQSU1Q1RoZSUyMFdlZGRpbmclMjBUYWxlcyU1Q3dvcmslNUNUaGVXZWRkaW5nVGFsZXMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlLXdlZGRpbmctdGFsZS8/Zjc0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxUaGUgV2VkZGluZyBUYWxlc1xcXFx3b3JrXFxcXFRoZVdlZGRpbmdUYWxlc1xcXFxhcHBcXFxcYXBpXFxcXGFuYWx5dGljc1xcXFx0cmFja1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYW5hbHl0aWNzL3RyYWNrL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYW5hbHl0aWNzL3RyYWNrXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hbmFseXRpY3MvdHJhY2svcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxUaGUgV2VkZGluZyBUYWxlc1xcXFx3b3JrXFxcXFRoZVdlZGRpbmdUYWxlc1xcXFxhcHBcXFxcYXBpXFxcXGFuYWx5dGljc1xcXFx0cmFja1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYW5hbHl0aWNzL3RyYWNrL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalytics%2Ftrack%2Froute&page=%2Fapi%2Fanalytics%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2Ftrack%2Froute.ts&appDir=D%3A%5CThe%20Wedding%20Tales%5Cwork%5CTheWeddingTales%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CThe%20Wedding%20Tales%5Cwork%5CTheWeddingTales&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/analytics/track/route.ts":
/*!******************************************!*\
  !*** ./app/api/analytics/track/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase */ \"(rsc)/./src/lib/supabase.ts\");\n\n\nasync function POST(request) {\n    try {\n        const { page, user_agent } = await request.json();\n        // Get client IP\n        const forwarded = request.headers.get(\"x-forwarded-for\");\n        const ip = forwarded ? forwarded.split(\",\")[0] : request.ip || \"unknown\";\n        const { error } = await _lib_supabase__WEBPACK_IMPORTED_MODULE_1__.supabase.from(\"website_visits\").insert([\n            {\n                page,\n                timestamp: new Date().toISOString(),\n                user_agent: user_agent || request.headers.get(\"user-agent\") || \"unknown\",\n                ip_address: ip\n            }\n        ]);\n        if (error) {\n            console.error(\"Error tracking visit:\", error);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Failed to track visit\"\n            }, {\n                status: 500\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Error in track route:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FuYWx5dGljcy90cmFjay9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUQ7QUFDZDtBQUVsQyxlQUFlRSxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRSxHQUFHLE1BQU1GLFFBQVFHLElBQUk7UUFFL0MsZ0JBQWdCO1FBQ2hCLE1BQU1DLFlBQVlKLFFBQVFLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQ3RDLE1BQU1DLEtBQUtILFlBQVlBLFVBQVVJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHUixRQUFRTyxFQUFFLElBQUk7UUFFL0QsTUFBTSxFQUFFRSxLQUFLLEVBQUUsR0FBRyxNQUFNWCxtREFBUUEsQ0FDN0JZLElBQUksQ0FBQyxrQkFDTEMsTUFBTSxDQUFDO1lBQ047Z0JBQ0VWO2dCQUNBVyxXQUFXLElBQUlDLE9BQU9DLFdBQVc7Z0JBQ2pDWixZQUFZQSxjQUFjRixRQUFRSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUI7Z0JBQy9EUyxZQUFZUjtZQUNkO1NBQ0Q7UUFFSCxJQUFJRSxPQUFPO1lBQ1RPLFFBQVFQLEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3ZDLE9BQU9aLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVNLE9BQU87WUFBd0IsR0FBRztnQkFBRVEsUUFBUTtZQUFJO1FBQzdFO1FBRUEsT0FBT3BCLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRWUsU0FBUztRQUFLO0lBQzNDLEVBQUUsT0FBT1QsT0FBTztRQUNkTyxRQUFRUCxLQUFLLENBQUMseUJBQXlCQTtRQUN2QyxPQUFPWixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVNLE9BQU87UUFBd0IsR0FBRztZQUFFUSxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZS13ZWRkaW5nLXRhbGUvLi9hcHAvYXBpL2FuYWx5dGljcy90cmFjay9yb3V0ZS50cz9jOTYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcclxuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICdAL2xpYi9zdXBhYmFzZSdcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgcGFnZSwgdXNlcl9hZ2VudCB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKClcclxuICAgIFxyXG4gICAgLy8gR2V0IGNsaWVudCBJUFxyXG4gICAgY29uc3QgZm9yd2FyZGVkID0gcmVxdWVzdC5oZWFkZXJzLmdldCgneC1mb3J3YXJkZWQtZm9yJylcclxuICAgIGNvbnN0IGlwID0gZm9yd2FyZGVkID8gZm9yd2FyZGVkLnNwbGl0KCcsJylbMF0gOiByZXF1ZXN0LmlwIHx8ICd1bmtub3duJ1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXHJcbiAgICAgIC5mcm9tKCd3ZWJzaXRlX3Zpc2l0cycpXHJcbiAgICAgIC5pbnNlcnQoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgIHVzZXJfYWdlbnQ6IHVzZXJfYWdlbnQgfHwgcmVxdWVzdC5oZWFkZXJzLmdldCgndXNlci1hZ2VudCcpIHx8ICd1bmtub3duJyxcclxuICAgICAgICAgIGlwX2FkZHJlc3M6IGlwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0pXHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHRyYWNraW5nIHZpc2l0OicsIGVycm9yKVxyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byB0cmFjayB2aXNpdCcgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gdHJhY2sgcm91dGU6JywgZXJyb3IpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSwgeyBzdGF0dXM6IDUwMCB9KVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwic3VwYWJhc2UiLCJQT1NUIiwicmVxdWVzdCIsInBhZ2UiLCJ1c2VyX2FnZW50IiwianNvbiIsImZvcndhcmRlZCIsImhlYWRlcnMiLCJnZXQiLCJpcCIsInNwbGl0IiwiZXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwidGltZXN0YW1wIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiaXBfYWRkcmVzcyIsImNvbnNvbGUiLCJzdGF0dXMiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/analytics/track/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/supabase.ts":
/*!*****************************!*\
  !*** ./src/lib/supabase.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase),\n/* harmony export */   supabaseAdmin: () => (/* binding */ supabaseAdmin)\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_createClient_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __barrel_optimize__?names=createClient!=!@supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://skwmmkszwaiqqjrcnigj.supabase.co\" || 0;\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5NTQyNTQsImV4cCI6MjA3NDUzMDI1NH0.6az22SMRF2kbWxNprVkRQwvX9K6wEHWc6I7zjZqG_EM\" || 0;\nconst supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrd21ta3N6d2FpcXFqcmNuaWdqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODk1NDI1NCwiZXhwIjoyMDc0NTMwMjU0fQ.c2gT2wB4ZxXjVP7fdMfyctmtJfkitpv-zhmq99zTC0E\";\nconst supabase = (0,_barrel_optimize_names_createClient_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey, {\n    auth: {\n        persistSession: false,\n        autoRefreshToken: false,\n        detectSessionInUrl: false\n    },\n    global: {\n        headers: {\n            \"X-Client-Info\": \"supabase-js-web\"\n        }\n    },\n    db: {\n        schema: \"public\"\n    }\n});\n// For server-side operations that need elevated permissions\nconst supabaseAdmin = (0,_barrel_optimize_names_createClient_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseServiceKey, {\n    auth: {\n        persistSession: false,\n        autoRefreshToken: false,\n        detectSessionInUrl: false\n    },\n    global: {\n        headers: {\n            \"X-Client-Info\": \"supabase-js-server\"\n        }\n    },\n    db: {\n        schema: \"public\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3N1cGFiYXNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUVwRCxNQUFNQyxjQUFjQywwQ0FBb0MsSUFBSTtBQUM1RCxNQUFNRyxrQkFBa0JILGtOQUF5QyxJQUFJO0FBQ3JFLE1BQU1LLHFCQUFxQkwsUUFBUUMsR0FBRyxDQUFDSyx5QkFBeUIsSUFBSTtBQUU3RCxNQUFNQyxXQUFXVCxzR0FBWUEsQ0FBQ0MsYUFBYUksaUJBQWlCO0lBQ2pFSyxNQUFNO1FBQ0pDLGdCQUFnQjtRQUNoQkMsa0JBQWtCO1FBQ2xCQyxvQkFBb0I7SUFDdEI7SUFDQUMsUUFBUTtRQUNOQyxTQUFTO1lBQ1AsaUJBQWlCO1FBQ25CO0lBQ0Y7SUFDQUMsSUFBSTtRQUNGQyxRQUFRO0lBQ1Y7QUFJRixHQUFFO0FBRUYsNERBQTREO0FBQ3JELE1BQU1DLGdCQUFnQmxCLHNHQUFZQSxDQUFDQyxhQUFhTSxvQkFBb0I7SUFDekVHLE1BQU07UUFDSkMsZ0JBQWdCO1FBQ2hCQyxrQkFBa0I7UUFDbEJDLG9CQUFvQjtJQUN0QjtJQUNBQyxRQUFRO1FBQ05DLFNBQVM7WUFDUCxpQkFBaUI7UUFDbkI7SUFDRjtJQUNBQyxJQUFJO1FBQ0ZDLFFBQVE7SUFDVjtBQUlGLEdBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtd2VkZGluZy10YWxlLy4vc3JjL2xpYi9zdXBhYmFzZS50cz8wNmUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgJ2h0dHBzOi8vc2t3bW1rc3p3YWlxcWpyY25pZ2ouc3VwYWJhc2UuY28nXG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSB8fCAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW5OcmQyMXRhM042ZDJGcGNYRnFjbU51YVdkcUlpd2ljbTlzWlNJNkltRnViMjRpTENKcFlYUWlPakUzTlRnNU5UUXlOVFFzSW1WNGNDSTZNakEzTkRVek1ESTFOSDAuNmF6MjJTTVJGMmtiV3hOcHJWa1JRd3ZYOUs2d0VIV2M2STd6alpxR19FTSdcbmNvbnN0IHN1cGFiYXNlU2VydmljZUtleSA9IHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFUlZJQ0VfUk9MRV9LRVkgfHwgJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwYzNNaU9pSnpkWEJoWW1GelpTSXNJbkpsWmlJNkluTnJkMjF0YTNONmQyRnBjWEZxY21OdWFXZHFJaXdpY205c1pTSTZJbk5sY25acFkyVmZjbTlzWlNJc0ltbGhkQ0k2TVRjMU9EazFOREkxTkN3aVpYaHdJam95TURjME5UTXdNalUwZlEuYzJnVDJ3QjRaeFhqVlA3ZmRNZnljdG10SmZraXRwdi16aG1xOTl6VEMwRSdcblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUFub25LZXksIHtcbiAgYXV0aDoge1xuICAgIHBlcnNpc3RTZXNzaW9uOiBmYWxzZSwgLy8gRG9uJ3QgcGVyc2lzdCBhdXRoIHNlc3Npb25zIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcbiAgICBhdXRvUmVmcmVzaFRva2VuOiBmYWxzZSwgLy8gRGlzYWJsZSBhdXRvIHJlZnJlc2hcbiAgICBkZXRlY3RTZXNzaW9uSW5Vcmw6IGZhbHNlLCAvLyBEb24ndCBkZXRlY3Qgc2Vzc2lvbiBpbiBVUkxcbiAgfSxcbiAgZ2xvYmFsOiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1gtQ2xpZW50LUluZm8nOiAnc3VwYWJhc2UtanMtd2ViJyxcbiAgICB9LFxuICB9LFxuICBkYjoge1xuICAgIHNjaGVtYTogJ3B1YmxpYycsXG4gIH0sXG4gIC8vIHJlYWx0aW1lOiB7XG4gIC8vICAgZW5hYmxlZDogZmFsc2UsIC8vIERpc2FibGUgcmVhbHRpbWUgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxuICAvLyB9LFxufSlcblxuLy8gRm9yIHNlcnZlci1zaWRlIG9wZXJhdGlvbnMgdGhhdCBuZWVkIGVsZXZhdGVkIHBlcm1pc3Npb25zXG5leHBvcnQgY29uc3Qgc3VwYWJhc2VBZG1pbiA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VTZXJ2aWNlS2V5LCB7XG4gIGF1dGg6IHtcbiAgICBwZXJzaXN0U2Vzc2lvbjogZmFsc2UsXG4gICAgYXV0b1JlZnJlc2hUb2tlbjogZmFsc2UsXG4gICAgZGV0ZWN0U2Vzc2lvbkluVXJsOiBmYWxzZSxcbiAgfSxcbiAgZ2xvYmFsOiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ1gtQ2xpZW50LUluZm8nOiAnc3VwYWJhc2UtanMtc2VydmVyJyxcbiAgICB9LFxuICB9LFxuICBkYjoge1xuICAgIHNjaGVtYTogJ3B1YmxpYycsXG4gIH0sXG4gIC8vIHJlYWx0aW1lOiB7XG4gIC8vICAgZW5hYmxlZDogZmFsc2UsXG4gIC8vIH0sXG59KVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2VTZXJ2aWNlS2V5IiwiU1VQQUJBU0VfU0VSVklDRV9ST0xFX0tFWSIsInN1cGFiYXNlIiwiYXV0aCIsInBlcnNpc3RTZXNzaW9uIiwiYXV0b1JlZnJlc2hUb2tlbiIsImRldGVjdFNlc3Npb25JblVybCIsImdsb2JhbCIsImhlYWRlcnMiLCJkYiIsInNjaGVtYSIsInN1cGFiYXNlQWRtaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/supabase.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fanalytics%2Ftrack%2Froute&page=%2Fapi%2Fanalytics%2Ftrack%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fanalytics%2Ftrack%2Froute.ts&appDir=D%3A%5CThe%20Wedding%20Tales%5Cwork%5CTheWeddingTales%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CThe%20Wedding%20Tales%5Cwork%5CTheWeddingTales&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
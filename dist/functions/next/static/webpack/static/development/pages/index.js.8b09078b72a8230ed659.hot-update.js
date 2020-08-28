webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/AgencyModern/Features/features.style.js":
/*!************************************************************!*\
  !*** ./containers/AgencyModern/Features/features.style.js ***!
  \************************************************************/
/*! exports provided: ContentWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrapper\", function() { return ContentWrapper; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ \"../../node_modules/@styled-system/theme-get/dist/index.esm.js\");\n\n\nvar SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"featuresstyle__SectionWrapper\",\n  componentId: \"sc-1yu6o41-0\"\n})([\"padding:100px 0 120px;overflow:hidden;@media only screen and (max-width:1440px){padding:100px 0 30px;}@media only screen and (max-width:1024px){padding:20px 0 0;}@media only screen and (max-width:768px){padding:0;}@media only screen and (max-width:480px){padding:0px 0 25px;}\"]);\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"featuresstyle__ContentWrapper\",\n  componentId: \"sc-1yu6o41-1\"\n})([\"display:flex;align-items:center;@media only screen and (max-width:1024px){flex-wrap:wrap;margin-top:30px;}@media only screen and (max-width:768px){margin-top:0px;}.image{@media only screen and (min-width:768px) and (max-width:1024px){display:flex;justify-content:center;align-items:center;width:100%;}img{min-width:620px;object-fit:contain;width:100%;@media only screen and (min-width:1024px) and (max-width:1366px){}@media only screen and (max-width:1024px){min-width:360px;}}}.content{padding-left:10px;min-height:670px;width:calc(100% - 620px);@media only screen and (max-width:1024px){width:100%;min-height:auto;margin-bottom:70px;}@media only screen and (max-width:768px){margin-bottom:50px;padding-left:0px;}@media only screen and (max-width:480px){margin-bottom:0px;margin-top:30px;}h2{font-size:48px;line-height:1.5;font-weight:600;letter-spacing:0.5px;max-width:760px;@media only screen and (max-width:1440px){margin-bottom:15px;font-size:36px;}@media only screen and (min-width:768px) and (max-width:1024px){margin-bottom:15px;font-size:28px;max-width:100%;text-align:center;}@media only screen and (max-width:768px){max-width:100%;text-align:left;text-align:center;}@media only screen and (max-width:480px){font-size:24px;}}p{font-size:20px;line-height:32px;max-width:480px;@media only screen and (min-width:768px) and (max-width:1024px){max-width:100%;text-align:center;}@media only screen and (max-width:768px){margin:0 auto;max-width:100%;text-align:center;line-height:32px;max-width:550px;font-size:18px;}@media only screen and (max-width:480px){text-align:left;}}.accordion__item{background-color:#f6f8fb;border:0;padding:30px 45px;border-radius:10px;margin-top:30px;@media only screen and (max-width:1440px){padding:25px 35px;}@media only screen and (max-width:480px){padding:25px 25px;}&.is__open{background-color:#fff;box-shadow:0px 9px 30px rgba(69,88,157,0.08);}h4{font-family:DM Sans;font-size:24px;line-height:30px;margin-bottom:0;font-weight:400;@media only screen and (min-width:768px) and (max-width:1024px){font-size:18px;line-height:24px;}}p{margin:16px 0 0 0;font-size:16px;line-height:2.1;@media only screen and (min-width:768px) and (max-width:1024px){font-size:16px;margin:12px 0 4px 0;text-align:left;}@media only screen (max-width:480px){text-align:left !important;}}}}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionWrapper);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0FnZW5jeU1vZGVybi9GZWF0dXJlcy9mZWF0dXJlcy5zdHlsZS5qcz9iZGQ3Il0sIm5hbWVzIjpbIlNlY3Rpb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ29udGVudFdyYXBwZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyUkFBcEI7QUFpQk8sSUFBTUMsY0FBYyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHV3RUFBcEI7QUF3SVFGLDZFQUFmIiwiZmlsZSI6Ii4vY29udGFpbmVycy9BZ2VuY3lNb2Rlcm4vRmVhdHVyZXMvZmVhdHVyZXMuc3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcblxuY29uc3QgU2VjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMDBweCAwIDEyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAgIHBhZGRpbmc6IDEwMHB4IDAgMzBweDtcbiAgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBwYWRkaW5nOiAwcHggMCAyNXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgLmltYWdlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBtaW4td2lkdGg6IDYyMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgbWluLXdpZHRoOiAzNjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtaW4taGVpZ2h0OiA2NzBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNjIwcHgpO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgbWF4LXdpZHRoOiA3NjBweDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5hY2NvcmRpb25fX2l0ZW0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmYjtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIHBhZGRpbmc6IDMwcHggNDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgICAgICAgcGFkZGluZzogMjVweCAzNXB4O1xuICAgICAgfVxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDI1cHg7XG4gICAgICB9XG4gICAgICAmLmlzX19vcGVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDlweCAzMHB4IHJnYmEoNjksIDg4LCAxNTcsIDAuMDgpO1xuICAgICAgfVxuXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBETSBTYW5zO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDAgMCAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjE7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDAgNHB4IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25XcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/AgencyModern/Features/features.style.js\n");

/***/ })

})
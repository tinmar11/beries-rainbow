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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./pages/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.goerli\n], [\n    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)(), \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"BeRies App\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: false,\n    connectors,\n    provider\n});\nfunction MyApp({ Component: Component , pageProps: pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1.0\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\Solo\\\\beries-rainbow\\\\pages\\\\_app.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\Solo\\\\beries-rainbow\\\\pages\\\\_app.js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n                client: wagmiClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n                    modalSize: \"compact\",\n                    initialChain: wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.goerli,\n                    chains: chains,\n                    theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.lightTheme)({\n                        accentColor: \"#0000ff\",\n                        accentColorForeground: \"white\",\n                        borderRadius: \"medium\",\n                        fontStack: \"system\",\n                        overlayBlur: \"small\"\n                    }),\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\Solo\\\\beries-rainbow\\\\pages\\\\_app.js\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\Solo\\\\beries-rainbow\\\\pages\\\\_app.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\johra\\\\Desktop\\\\Solo\\\\beries-rainbow\\\\pages\\\\_app.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUI7QUFDc0I7QUFPWDtBQUMwQztBQUNoQjtBQUNGO0FBQzVCO0FBRTVCLE1BQU0sRUFBRVcsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR1Asc0RBQWUsQ0FDMUM7SUFBQ0QsK0NBQVk7Q0FBQyxFQUNkO0lBQ0UsdURBQXVEO0lBQ3ZESyxzRUFBYyxFQUFFO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNLEVBQUVLLFVBQVUsR0FBRSxHQUFHZCx5RUFBaUIsQ0FBQztJQUN2Q2UsT0FBTyxFQUFFLFlBQVk7SUFDckJKLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTUssV0FBVyxHQUFHVixtREFBWSxDQUFDO0lBQy9CVyxXQUFXLEVBQUUsS0FBSztJQUNsQkgsVUFBVTtJQUNWRixRQUFRO0NBQ1QsQ0FBQztBQUVhLFNBQVNNLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEVBQUVBLFNBQVMsR0FBRUMsU0FBUyxFQUFFQSxTQUFTLEdBQUUsRUFBRTtJQUM1RSxxQkFDRTs7MEJBQ0ksOERBQUNWLGtEQUFJOzBCQUNMLDRFQUFDVyxNQUFJO29CQUNEQyxJQUFJLEVBQUMsVUFBVTtvQkFDZkMsT0FBTyxFQUFDLHVDQUF1Qzs7Ozs7d0JBQ3pDOzs7OztvQkFDSDswQkFDWCw4REFBQ2hCLDhDQUFXO2dCQUFDaUIsTUFBTSxFQUFFUixXQUFXOzBCQUM5Qiw0RUFBQ2Ysc0VBQWtCO29CQUNqQndCLFNBQVMsRUFBQyxTQUFTO29CQUNuQkMsWUFBWSxFQUFFdEIsK0NBQVk7b0JBQzFCTyxNQUFNLEVBQUVBLE1BQU07b0JBQ2RnQixLQUFLLEVBQUV6QixrRUFBVSxDQUFDO3dCQUNoQjBCLFdBQVcsRUFBRSxTQUFTO3dCQUN0QkMscUJBQXFCLEVBQUUsT0FBTzt3QkFDOUJDLFlBQVksRUFBRSxRQUFRO3dCQUN0QkMsU0FBUyxFQUFFLFFBQVE7d0JBQ25CQyxXQUFXLEVBQUUsT0FBTztxQkFDckIsQ0FBQzs7d0JBRUQsR0FBRztzQ0FFSiw4REFBQ2IsU0FBUzs0QkFBRSxHQUFHQyxTQUFTOzs7OztnQ0FBSTs7Ozs7O3dCQUNUOzs7OztvQkFDVDs7b0JBQ1gsQ0FBRTtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iZXJpZXMvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldERlZmF1bHRXYWxsZXRzLFxyXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcclxuICBsaWdodFRoZW1lLFxyXG4gIFRoZW1lLFxyXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XHJcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9hbGNoZW15XCI7XHJcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9wdWJsaWNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXHJcbiAgW2NoYWluLmdvZXJsaV0sXHJcbiAgW1xyXG4gICAgLy8gYWxjaGVteVByb3ZpZGVyKHsgYXBpS2V5OiBwcm9jZXNzLmVudi5BTENIRU1ZX0lEIH0pLFxyXG4gICAgcHVibGljUHJvdmlkZXIoKSxcclxuICBdXHJcbik7XHJcblxyXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcclxuICBhcHBOYW1lOiBcIkJlUmllcyBBcHBcIixcclxuICBjaGFpbnMsXHJcbn0pO1xyXG5cclxuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xyXG4gIGF1dG9Db25uZWN0OiBmYWxzZSxcclxuICBjb25uZWN0b3JzLFxyXG4gIHByb3ZpZGVyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50OiBDb21wb25lbnQsIHBhZ2VQcm9wczogcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiXHJcbiAgICAgICAgICA+PC9tZXRhPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cclxuICAgICAgPFJhaW5ib3dLaXRQcm92aWRlclxyXG4gICAgICAgIG1vZGFsU2l6ZT1cImNvbXBhY3RcIlxyXG4gICAgICAgIGluaXRpYWxDaGFpbj17Y2hhaW4uZ29lcmxpfVxyXG4gICAgICAgIGNoYWlucz17Y2hhaW5zfVxyXG4gICAgICAgIHRoZW1lPXtsaWdodFRoZW1lKHtcclxuICAgICAgICAgIGFjY2VudENvbG9yOiAnIzAwMDBmZicsXHJcbiAgICAgICAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6IFwid2hpdGVcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCJtZWRpdW1cIixcclxuICAgICAgICAgIGZvbnRTdGFjazogXCJzeXN0ZW1cIixcclxuICAgICAgICAgIG92ZXJsYXlCbHVyOiBcInNtYWxsXCIsXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAge31cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxyXG4gICAgPC9XYWdtaUNvbmZpZz5cclxuICAgIDwvPik7XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwibGlnaHRUaGVtZSIsIlRoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImFsY2hlbXlQcm92aWRlciIsInB1YmxpY1Byb3ZpZGVyIiwiSGVhZCIsImNoYWlucyIsInByb3ZpZGVyIiwiZ29lcmxpIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJjbGllbnQiLCJtb2RhbFNpemUiLCJpbml0aWFsQ2hhaW4iLCJ0aGVtZSIsImFjY2VudENvbG9yIiwiYWNjZW50Q29sb3JGb3JlZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiZm9udFN0YWNrIiwib3ZlcmxheUJsdXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
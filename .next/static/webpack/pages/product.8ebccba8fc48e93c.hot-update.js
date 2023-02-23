"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product",{

/***/ "./handles/products/product.handle.ts":
/*!********************************************!*\
  !*** ./handles/products/product.handle.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductHandle; }\n/* harmony export */ });\n/* harmony import */ var _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constant/listProduct */ \"./constant/listProduct.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * ProductHandle: Function để xử lý logic chung cho việc create,update,delete,filter của Product\n * @returns \n */ function ProductHandle() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Data sản phẩm gốc dùng để filter product\n    const [lstProductDataDB, setLstProductDataDB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n    // Data hiển thị ra UI\n    const [lstProductDataUI, setLstProductDataUI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lstProductDataDB);\n    // Danh sách checkbox xóa nhiều\n    const [listCheckedDeleteProduct, setListCheckedDeleteProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // Xử lý filter product khi chọn dropdown\n    const handleFilterListProduct = (flagActive)=>{\n        if (flagActive == 2) {\n            setLstProductDataUI(lstProductDataDB);\n        } else {\n            const listProductFilter = lstProductDataDB.filter((item)=>item.FlagActive == flagActive);\n            setLstProductDataUI(listProductFilter);\n        }\n    };\n    // xử lý thay đổi trạng thái filter product dropdown\n    const handleChangeFilterProduct = (e)=>{\n        const valueStatusProduct = e.target.value;\n        if (valueStatusProduct == \"\") return;\n        if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ALL) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ON_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.OFF_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        }\n    };\n    // xử lý xóa sản phẩm\n    const handleEditDeleteProduct = (e, productCode)=>{\n        const valueStatusAction = e.target.value;\n        if (valueStatusAction == \"\") {\n            return;\n        }\n        if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.EDIT) {\n            // Tiến hành edit\n            router.push(\"/product/\".concat(productCode, \"/edit\"));\n        } else if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.DELETE) {\n            // Tiến hành xóa\n            handleDeleteProductSingle(productCode);\n        }\n    };\n    // clear data storage\n    const handleClearStorage = ()=>{\n        localStorage.clear();\n        setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        setLstProductDataUI(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n    };\n    // xử lý xóa product single\n    const handleDeleteProductSingle = (productCode)=>{\n        const listProductFilter = lstProductDataUI.filter((item)=>item.ProductCode != productCode);\n        // gán danh sách product gốc\n        localStorage.setItem(\"DataDB\", JSON.stringify(listProductFilter));\n        setLstProductDataDB(listProductFilter);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(listProductFilter));\n        setLstProductDataUI(listProductFilter);\n    };\n    //Xử lý gán sản phẩm để xóa nhiều \n    const handleCheckDeleteMany = (productCode)=>{\n        let data = {\n            ...listCheckedDeleteProduct\n        };\n        if (listCheckedDeleteProduct[productCode]) {\n            delete listCheckedDeleteProduct[productCode];\n            data = {\n                ...listCheckedDeleteProduct\n            };\n        } else {\n            data = {\n                ...listCheckedDeleteProduct,\n                [productCode]: productCode\n            };\n        }\n        setListCheckedDeleteProduct(data);\n    };\n    // Tiến hành xóa nhiều sản phẩm\n    const handleDeleteProductMulti = ()=>{\n        let productCodeDeletes = Object.keys(listCheckedDeleteProduct);\n        if (!productCodeDeletes.length) {\n            alert(\"Bạn chưa chọn c\\xe1c sản phẩm để x\\xf3a nhiều\");\n            return;\n        }\n        // Biến tạm danh sách sản phẩm\n        let dataTempProduct;\n        for (const productCode of productCodeDeletes){\n            // nếu xóa lần thứ 2 thì xóa bằng dataTempProduct\n            if (dataTempProduct) {\n                dataTempProduct = dataTempProduct.filter((item)=>item.ProductCode != productCode);\n            } else {\n                // nếu xóa lần đầu tiên thì xóa bằng lstProductDataDB\n                dataTempProduct = lstProductDataDB.filter((item)=>item.ProductCode != productCode);\n            }\n        }\n        // gán danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify(dataTempProduct));\n        setLstProductDataDB(dataTempProduct);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(dataTempProduct));\n        setLstProductDataUI(dataTempProduct);\n    };\n    // Tiến hành tạo product\n    const handleCreateProduct = (data)=>{\n        console.log(\"handleCreateProduct data======\", data);\n        lstProductDataDB.forEach((x)=>{\n            if (data.productCode == x.productCode) {\n                alert(\"Đã t\\xf4̀n tại mã sản ph\\xe2̉m, vui lòng thử mã sản ph\\xe2̉m khác\");\n                return;\n            }\n        });\n    // // dựa vào id trên trình duyệt lấy ra thông tin product\n    // const productInfo = lstProductDataDB.find((item:any)=>item.ProductCode == id);\n    // // Danh sách các field của form\n    // const fields = [ 'ProductName', 'Price', 'UPDc', 'FlagActive'];\n    // // Tiến hành set value vào form khi edit\n    // fields.forEach(field => setValue(field, productInfo[field]));\n    };\n    // Tiến hành update product\n    const handleUpdateProduct = (productCode, data)=>{\n        console.log(\"handleUpdateProduct productCode======\", productCode);\n        console.log(\"handleUpdateProduct data======\", data);\n    };\n    return {\n        lstProductDataUI,\n        lstProductDataDB,\n        handleChangeFilterProduct,\n        handleEditDeleteProduct,\n        handleClearStorage,\n        handleCheckDeleteMany,\n        handleDeleteProductMulti,\n        setLstProductDataDB,\n        setLstProductDataUI,\n        setListCheckedDeleteProduct,\n        handleCreateProduct,\n        handleUpdateProduct\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlDeEI7UUFDckR1QixRQUFRQyxHQUFHLENBQUMsa0NBQWtDVjtJQUVoRDtJQUVBLE9BQU87UUFDTGpDO1FBQ0FGO1FBQ0FZO1FBQ0FRO1FBQ0FPO1FBQ0FPO1FBQ0FFO1FBQ0FuQztRQUNBRTtRQUNBRTtRQUNBc0M7UUFDQUs7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaGFuZGxlcy9wcm9kdWN0cy9wcm9kdWN0LmhhbmRsZS50cz83NmQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxzdFByb2R1Y3RzLCBzdGF0dXNBY3Rpb24sIHN0YXR1c1Byb2R1Y3QgfSBmcm9tIFwiQC9jb25zdGFudC9saXN0UHJvZHVjdFwiXG5pbXBvcnQgeyBQcm9kdWN0UmVzIH0gZnJvbSBcIkAvdHlwZXMvcGFnZS9wcm9kdWN0LnR5cGVcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbi8qKlxuICogUHJvZHVjdEhhbmRsZTogRnVuY3Rpb24gxJHhu4MgeOG7rSBsw70gbG9naWMgY2h1bmcgY2hvIHZp4buHYyBjcmVhdGUsdXBkYXRlLGRlbGV0ZSxmaWx0ZXIgY+G7p2EgUHJvZHVjdFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RIYW5kbGUoKTogUHJvZHVjdFJlcyB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIC8vIERhdGEgc+G6o24gcGjhuqltIGfhu5FjIGTDuW5nIMSR4buDIGZpbHRlciBwcm9kdWN0XG4gIGNvbnN0IFtsc3RQcm9kdWN0RGF0YURCLCBzZXRMc3RQcm9kdWN0RGF0YURCXSA9IHVzZVN0YXRlPGFueT4obHN0UHJvZHVjdHMpXG4gIC8vIERhdGEgaGnhu4NuIHRo4buLIHJhIFVJXG4gIGNvbnN0IFtsc3RQcm9kdWN0RGF0YVVJLCBzZXRMc3RQcm9kdWN0RGF0YVVJXSA9IHVzZVN0YXRlKGxzdFByb2R1Y3REYXRhREIpXG4gIC8vIERhbmggc8OhY2ggY2hlY2tib3ggeMOzYSBuaGnhu4F1XG4gIGNvbnN0IFtsaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsIHNldExpc3RDaGVja2VkRGVsZXRlUHJvZHVjdF0gPSB1c2VTdGF0ZTxhbnk+KHt9KVxuXG4gIC8vIFjhu60gbMO9IGZpbHRlciBwcm9kdWN0IGtoaSBjaOG7jW4gZHJvcGRvd25cbiAgY29uc3QgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QgPSAoZmxhZ0FjdGl2ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGZsYWdBY3RpdmUgPT0gMikge1xuICAgICAgc2V0THN0UHJvZHVjdERhdGFVSShsc3RQcm9kdWN0RGF0YURCKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGlzdFByb2R1Y3RGaWx0ZXIgPSBsc3RQcm9kdWN0RGF0YURCLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLkZsYWdBY3RpdmUgPT0gZmxhZ0FjdGl2ZSlcbiAgICAgIHNldExzdFByb2R1Y3REYXRhVUkobGlzdFByb2R1Y3RGaWx0ZXIpXG4gICAgfVxuXG4gIH1cblxuICAvLyB44butIGzDvSB0aGF5IMSR4buVaSB0cuG6oW5nIHRow6FpIGZpbHRlciBwcm9kdWN0IGRyb3Bkb3duXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUZpbHRlclByb2R1Y3QgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgdmFsdWVTdGF0dXNQcm9kdWN0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBcIlwiKSByZXR1cm47XG4gICAgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0LkFMTCkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0Lk9OX1NBTEUpIHtcbiAgICAgIGhhbmRsZUZpbHRlckxpc3RQcm9kdWN0KHZhbHVlU3RhdHVzUHJvZHVjdCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZVN0YXR1c1Byb2R1Y3QgPT0gc3RhdHVzUHJvZHVjdC5PRkZfU0FMRSkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9XG4gIH1cblxuICAvLyB44butIGzDvSB4w7NhIHPhuqNuIHBo4bqpbVxuICBjb25zdCBoYW5kbGVFZGl0RGVsZXRlUHJvZHVjdCA9IChlOiBhbnksIHByb2R1Y3RDb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB2YWx1ZVN0YXR1c0FjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBzdGF0dXNBY3Rpb24uRURJVCkge1xuICAgICAgLy8gVGnhur9uIGjDoG5oIGVkaXRcbiAgICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3RDb2RlfS9lZGl0YClcblxuICAgIH0gZWxzZSBpZiAodmFsdWVTdGF0dXNBY3Rpb24gPT0gc3RhdHVzQWN0aW9uLkRFTEVURSkge1xuICAgICAgLy8gVGnhur9uIGjDoG5oIHjDs2FcbiAgICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RTaW5nbGUocHJvZHVjdENvZGUpXG4gICAgfVxuICB9XG5cbiAgLy8gY2xlYXIgZGF0YSBzdG9yYWdlXG4gIGNvbnN0IGhhbmRsZUNsZWFyU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxzdFByb2R1Y3RzKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGxzdFByb2R1Y3RzKTtcbiAgfVxuXG4gIC8vIHjhu60gbMO9IHjDs2EgcHJvZHVjdCBzaW5nbGVcbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZSA9IChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbGlzdFByb2R1Y3RGaWx0ZXIgPSBsc3RQcm9kdWN0RGF0YVVJLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLlByb2R1Y3RDb2RlICE9IHByb2R1Y3RDb2RlKVxuICAgIC8vIGfDoW4gZGFuaCBzw6FjaCBwcm9kdWN0IGfhu5FjXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFEQicsIEpTT04uc3RyaW5naWZ5KGxpc3RQcm9kdWN0RmlsdGVyKSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFEQihsaXN0UHJvZHVjdEZpbHRlcik7XG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgVUlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YVVJJywgSlNPTi5zdHJpbmdpZnkobGlzdFByb2R1Y3RGaWx0ZXIpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGxpc3RQcm9kdWN0RmlsdGVyKTtcbiAgfVxuXG4gIC8vWOG7rSBsw70gZ8OhbiBz4bqjbiBwaOG6qW0gxJHhu4MgeMOzYSBuaGnhu4F1IFxuICBjb25zdCBoYW5kbGVDaGVja0RlbGV0ZU1hbnkgPSAocHJvZHVjdENvZGU6IHN0cmluZykgPT4ge1xuICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAuLi5saXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgfVxuXG4gICAgaWYgKGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdFtwcm9kdWN0Q29kZV0pIHtcbiAgICAgIGRlbGV0ZSBsaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3RbcHJvZHVjdENvZGVdO1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgLi4ubGlzdENoZWNrZWREZWxldGVQcm9kdWN0LFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICAuLi5saXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgICAgIFtwcm9kdWN0Q29kZV06IHByb2R1Y3RDb2RlXG4gICAgICB9XG4gICAgfVxuICAgIHNldExpc3RDaGVja2VkRGVsZXRlUHJvZHVjdChkYXRhKTtcblxuICB9XG5cbiAgLy8gVGnhur9uIGjDoG5oIHjDs2Egbmhp4buBdSBz4bqjbiBwaOG6qW1cbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvZHVjdE11bHRpID0gKCkgPT4ge1xuICAgIGxldCBwcm9kdWN0Q29kZURlbGV0ZXMgPSBPYmplY3Qua2V5cyhsaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QpO1xuICAgIGlmICghcHJvZHVjdENvZGVEZWxldGVzLmxlbmd0aCkge1xuICAgICAgYWxlcnQoJ0LhuqFuIGNoxrBhIGNo4buNbiBjw6FjIHPhuqNuIHBo4bqpbSDEkeG7gyB4w7NhIG5oaeG7gXUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQmnhur9uIHThuqFtIGRhbmggc8OhY2ggc+G6o24gcGjhuqltXG4gICAgbGV0IGRhdGFUZW1wUHJvZHVjdFxuICAgIGZvciAoY29uc3QgcHJvZHVjdENvZGUgb2YgcHJvZHVjdENvZGVEZWxldGVzKSB7XG4gICAgICAvLyBu4bq/dSB4w7NhIGzhuqduIHRo4bupIDIgdGjDrCB4w7NhIGLhurFuZyBkYXRhVGVtcFByb2R1Y3RcbiAgICAgIGlmIChkYXRhVGVtcFByb2R1Y3QpIHtcbiAgICAgICAgZGF0YVRlbXBQcm9kdWN0ID0gZGF0YVRlbXBQcm9kdWN0LmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLlByb2R1Y3RDb2RlICE9IHByb2R1Y3RDb2RlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbuG6v3UgeMOzYSBs4bqnbiDEkeG6p3UgdGnDqm4gdGjDrCB4w7NhIGLhurFuZyBsc3RQcm9kdWN0RGF0YURCXG4gICAgICAgIGRhdGFUZW1wUHJvZHVjdCA9IGxzdFByb2R1Y3REYXRhREIuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgREJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkoZGF0YVRlbXBQcm9kdWN0KSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFEQihkYXRhVGVtcFByb2R1Y3QpO1xuICAgIC8vIGfDoW4gZGFuaCBzw6FjaCBwcm9kdWN0IFVJXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFVSScsIEpTT04uc3RyaW5naWZ5KGRhdGFUZW1wUHJvZHVjdCkpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkoZGF0YVRlbXBQcm9kdWN0KTtcbiAgfVxuXG4gIC8vIFRp4bq/biBow6BuaCB04bqhbyBwcm9kdWN0XG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVByb2R1Y3QgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUNyZWF0ZVByb2R1Y3QgZGF0YT09PT09PScsIGRhdGEpO1xuICAgIGxzdFByb2R1Y3REYXRhREIuZm9yRWFjaCgoeCA6YW55KSAgPT4ge1xuICAgICAgaWYoZGF0YS5wcm9kdWN0Q29kZSA9PSB4LnByb2R1Y3RDb2RlKXtcbiAgICAgICAgYWxlcnQoJ8SQYcyDIHTDtMyAbiB0YcyjaSBtYcyDIHNhzIluIHBow6LMiW0sIHZ1aSBsb8yAbmcgdGjGsMyJIG1hzIMgc2HMiW4gcGjDosyJbSBraGHMgWMnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9KTtcbiAgICAgIC8vIC8vIGThu7FhIHbDoG8gaWQgdHLDqm4gdHLDrG5oIGR1eeG7h3QgbOG6pXkgcmEgdGjDtG5nIHRpbiBwcm9kdWN0XG4gICAgICAvLyBjb25zdCBwcm9kdWN0SW5mbyA9IGxzdFByb2R1Y3REYXRhREIuZmluZCgoaXRlbTphbnkpPT5pdGVtLlByb2R1Y3RDb2RlID09IGlkKTtcbiAgICAgIC8vIC8vIERhbmggc8OhY2ggY8OhYyBmaWVsZCBj4bunYSBmb3JtXG4gICAgICAvLyBjb25zdCBmaWVsZHMgPSBbICdQcm9kdWN0TmFtZScsICdQcmljZScsICdVUERjJywgJ0ZsYWdBY3RpdmUnXTtcbiAgICAgIC8vIC8vIFRp4bq/biBow6BuaCBzZXQgdmFsdWUgdsOgbyBmb3JtIGtoaSBlZGl0XG4gICAgICAvLyBmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBzZXRWYWx1ZShmaWVsZCwgcHJvZHVjdEluZm9bZmllbGRdKSk7XG4gICAgXG4gIH1cblxuICAvLyBUaeG6v24gaMOgbmggdXBkYXRlIHByb2R1Y3RcbiAgY29uc3QgaGFuZGxlVXBkYXRlUHJvZHVjdCA9IChwcm9kdWN0Q29kZTogYW55LCBkYXRhOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlVXBkYXRlUHJvZHVjdCBwcm9kdWN0Q29kZT09PT09PScsIHByb2R1Y3RDb2RlKTtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlVXBkYXRlUHJvZHVjdCBkYXRhPT09PT09JywgZGF0YSk7XG5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbHN0UHJvZHVjdERhdGFVSSxcbiAgICBsc3RQcm9kdWN0RGF0YURCLFxuICAgIGhhbmRsZUNoYW5nZUZpbHRlclByb2R1Y3QsXG4gICAgaGFuZGxlRWRpdERlbGV0ZVByb2R1Y3QsXG4gICAgaGFuZGxlQ2xlYXJTdG9yYWdlLFxuICAgIGhhbmRsZUNoZWNrRGVsZXRlTWFueSxcbiAgICBoYW5kbGVEZWxldGVQcm9kdWN0TXVsdGksXG4gICAgc2V0THN0UHJvZHVjdERhdGFEQixcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJLFxuICAgIHNldExpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICBoYW5kbGVDcmVhdGVQcm9kdWN0LFxuICAgIGhhbmRsZVVwZGF0ZVByb2R1Y3RcbiAgfVxufSJdLCJuYW1lcyI6WyJsc3RQcm9kdWN0cyIsInN0YXR1c0FjdGlvbiIsInN0YXR1c1Byb2R1Y3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlByb2R1Y3RIYW5kbGUiLCJyb3V0ZXIiLCJsc3RQcm9kdWN0RGF0YURCIiwic2V0THN0UHJvZHVjdERhdGFEQiIsImxzdFByb2R1Y3REYXRhVUkiLCJzZXRMc3RQcm9kdWN0RGF0YVVJIiwibGlzdENoZWNrZWREZWxldGVQcm9kdWN0Iiwic2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0IiwiaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QiLCJmbGFnQWN0aXZlIiwibGlzdFByb2R1Y3RGaWx0ZXIiLCJmaWx0ZXIiLCJpdGVtIiwiRmxhZ0FjdGl2ZSIsImhhbmRsZUNoYW5nZUZpbHRlclByb2R1Y3QiLCJlIiwidmFsdWVTdGF0dXNQcm9kdWN0IiwidGFyZ2V0IiwidmFsdWUiLCJBTEwiLCJPTl9TQUxFIiwiT0ZGX1NBTEUiLCJoYW5kbGVFZGl0RGVsZXRlUHJvZHVjdCIsInByb2R1Y3RDb2RlIiwidmFsdWVTdGF0dXNBY3Rpb24iLCJFRElUIiwicHVzaCIsIkRFTEVURSIsImhhbmRsZURlbGV0ZVByb2R1Y3RTaW5nbGUiLCJoYW5kbGVDbGVhclN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsIlByb2R1Y3RDb2RlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDaGVja0RlbGV0ZU1hbnkiLCJkYXRhIiwiaGFuZGxlRGVsZXRlUHJvZHVjdE11bHRpIiwicHJvZHVjdENvZGVEZWxldGVzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImFsZXJ0IiwiZGF0YVRlbXBQcm9kdWN0IiwiaGFuZGxlQ3JlYXRlUHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwieCIsImhhbmRsZVVwZGF0ZVByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./handles/products/product.handle.ts\n"));

/***/ })

});
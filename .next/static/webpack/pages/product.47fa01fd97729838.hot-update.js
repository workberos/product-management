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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductHandle; }\n/* harmony export */ });\n/* harmony import */ var _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constant/listProduct */ \"./constant/listProduct.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * ProductHandle: Function để xử lý logic chung cho việc create,update,delete,filter của Product\n * @returns \n */ function ProductHandle() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Data sản phẩm gốc dùng để filter product\n    const [lstProductDataDB, setLstProductDataDB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n    // Data hiển thị ra UI\n    const [lstProductDataUI, setLstProductDataUI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lstProductDataDB);\n    // Danh sách checkbox xóa nhiều\n    const [listCheckedDeleteProduct, setListCheckedDeleteProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // Xử lý filter product khi chọn dropdown\n    const handleFilterListProduct = (flagActive)=>{\n        if (flagActive == 2) {\n            setLstProductDataUI(lstProductDataDB);\n        } else {\n            const listProductFilter = lstProductDataDB.filter((item)=>item.FlagActive == flagActive);\n            setLstProductDataUI(listProductFilter);\n        }\n    };\n    // xử lý thay đổi trạng thái filter product dropdown\n    const handleChangeFilterProduct = (e)=>{\n        const valueStatusProduct = e.target.value;\n        if (valueStatusProduct == \"\") return;\n        if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ALL) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ON_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.OFF_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        }\n    };\n    // xử lý xóa sản phẩm\n    const handleEditDeleteProduct = (e, productCode)=>{\n        const valueStatusAction = e.target.value;\n        if (valueStatusAction == \"\") {\n            return;\n        }\n        if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.EDIT) {\n            // Tiến hành edit\n            router.push(\"/product/\".concat(productCode, \"/edit\"));\n        } else if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.DELETE) {\n            // Tiến hành xóa\n            handleDeleteProductSingle(productCode);\n        }\n    };\n    // clear data storage\n    const handleClearStorage = ()=>{\n        localStorage.clear();\n        setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        setLstProductDataUI(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n    };\n    // xử lý xóa product single\n    const handleDeleteProductSingle = (productCode)=>{\n        const listProductFilter = lstProductDataUI.filter((item)=>item.ProductCode != productCode);\n        // gán danh sách product gốc\n        localStorage.setItem(\"DataDB\", JSON.stringify(listProductFilter));\n        setLstProductDataDB(listProductFilter);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(listProductFilter));\n        setLstProductDataUI(listProductFilter);\n    };\n    //Xử lý gán sản phẩm để xóa nhiều \n    const handleCheckDeleteMany = (productCode)=>{\n        let data = {\n            ...listCheckedDeleteProduct\n        };\n        if (listCheckedDeleteProduct[productCode]) {\n            delete listCheckedDeleteProduct[productCode];\n            data = {\n                ...listCheckedDeleteProduct\n            };\n        } else {\n            data = {\n                ...listCheckedDeleteProduct,\n                [productCode]: productCode\n            };\n        }\n        setListCheckedDeleteProduct(data);\n    };\n    // Tiến hành xóa nhiều sản phẩm\n    const handleDeleteProductMulti = ()=>{\n        let productCodeDeletes = Object.keys(listCheckedDeleteProduct);\n        if (!productCodeDeletes.length) {\n            alert(\"Bạn chưa chọn c\\xe1c sản phẩm để x\\xf3a nhiều\");\n            return;\n        }\n        // Biến tạm danh sách sản phẩm\n        let dataTempProduct;\n        for (const productCode of productCodeDeletes){\n            // nếu xóa lần thứ 2 thì xóa bằng dataTempProduct\n            if (dataTempProduct) {\n                dataTempProduct = dataTempProduct.filter((item)=>item.ProductCode != productCode);\n            } else {\n                // nếu xóa lần đầu tiên thì xóa bằng lstProductDataDB\n                dataTempProduct = lstProductDataDB.filter((item)=>item.ProductCode != productCode);\n            }\n        }\n        // gán danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify(dataTempProduct));\n        setLstProductDataDB(dataTempProduct);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(dataTempProduct));\n        setLstProductDataUI(dataTempProduct);\n    };\n    // Tiến hành tạo product\n    const handleCreateProduct = (data)=>{\n        console.log(\"handleCreateProduct data======\", data);\n        console.log(lstProductDataDB);\n        for (const Product of lstProductDataDB){\n            //Thông báo nếu mã sản phẩm đã tồn tại\n            if (data.ProductCode.trim() == Product.ProductCode) {\n                alert(\"Mã sản ph\\xe2̉m đã t\\xf4̀n tại, vui lòng nh\\xe2̣p lại!!\");\n                return;\n            }\n        }\n        localStorage.setItem(\"DataDB\", JSON.stringify([\n            ...lstProductDataDB,\n            data\n        ]));\n        setLstProductDataDB([\n            ...lstProductDataDB,\n            data\n        ]);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify([\n            ...lstProductDataDB,\n            data\n        ]));\n        setLstProductDataUI([\n            ...lstProductDataUI,\n            data\n        ]);\n        console.log(lstProductDataDB);\n    };\n    // Tiến hành update product\n    const handleUpdateProduct = (productCode, data)=>{\n        console.log(\"handleUpdateProduct productCode======\", productCode);\n        console.log(\"handleUpdateProduct data======\", data);\n    };\n    return {\n        lstProductDataUI,\n        lstProductDataDB,\n        handleChangeFilterProduct,\n        handleEditDeleteProduct,\n        handleClearStorage,\n        handleCheckDeleteMany,\n        handleDeleteProductMulti,\n        setLstProductDataDB,\n        setLstProductDataUI,\n        setListCheckedDeleteProduct,\n        handleCreateProduct,\n        handleUpdateProduct\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWFHLE9BQU8sQ0FBQyxVQUFVQyxLQUFLQyxTQUFTLENBQUM7ZUFBSWpDO1lBQWtCbUM7U0FBSztRQUN6RWhDLG9CQUFvQjtlQUFJRDtZQUFrQmlDO1NBQUs7UUFDL0NTLFFBQVFDLEdBQUcsQ0FBQzdDO0lBRWQ7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTWdELHNCQUFzQixDQUFDM0IsYUFBa0JjLE9BQWM7UUFDM0RTLFFBQVFDLEdBQUcsQ0FBQyx5Q0FBeUN4QjtRQUNyRHVCLFFBQVFDLEdBQUcsQ0FBQyxrQ0FBa0NWO0lBRWhEO0lBRUEsT0FBTztRQUNMakM7UUFDQUY7UUFDQVk7UUFDQVE7UUFDQU87UUFDQU87UUFDQUU7UUFDQW5DO1FBQ0FFO1FBQ0FFO1FBQ0FzQztRQUNBSztJQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9oYW5kbGVzL3Byb2R1Y3RzL3Byb2R1Y3QuaGFuZGxlLnRzPzc2ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbHN0UHJvZHVjdHMsIHN0YXR1c0FjdGlvbiwgc3RhdHVzUHJvZHVjdCB9IGZyb20gXCJAL2NvbnN0YW50L2xpc3RQcm9kdWN0XCJcbmltcG9ydCB7IFByb2R1Y3RSZXMgfSBmcm9tIFwiQC90eXBlcy9wYWdlL3Byb2R1Y3QudHlwZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuLyoqXG4gKiBQcm9kdWN0SGFuZGxlOiBGdW5jdGlvbiDEkeG7gyB44butIGzDvSBsb2dpYyBjaHVuZyBjaG8gdmnhu4djIGNyZWF0ZSx1cGRhdGUsZGVsZXRlLGZpbHRlciBj4bunYSBQcm9kdWN0XG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEhhbmRsZSgpOiBQcm9kdWN0UmVzIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgLy8gRGF0YSBz4bqjbiBwaOG6qW0gZ+G7kWMgZMO5bmcgxJHhu4MgZmlsdGVyIHByb2R1Y3RcbiAgY29uc3QgW2xzdFByb2R1Y3REYXRhREIsIHNldExzdFByb2R1Y3REYXRhREJdID0gdXNlU3RhdGU8YW55Pihsc3RQcm9kdWN0cylcbiAgLy8gRGF0YSBoaeG7g24gdGjhu4sgcmEgVUlcbiAgY29uc3QgW2xzdFByb2R1Y3REYXRhVUksIHNldExzdFByb2R1Y3REYXRhVUldID0gdXNlU3RhdGUobHN0UHJvZHVjdERhdGFEQilcbiAgLy8gRGFuaCBzw6FjaCBjaGVja2JveCB4w7NhIG5oaeG7gXVcbiAgY29uc3QgW2xpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCwgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0XSA9IHVzZVN0YXRlPGFueT4oe30pXG5cbiAgLy8gWOG7rSBsw70gZmlsdGVyIHByb2R1Y3Qga2hpIGNo4buNbiBkcm9wZG93blxuICBjb25zdCBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCA9IChmbGFnQWN0aXZlOiBudW1iZXIpID0+IHtcbiAgICBpZiAoZmxhZ0FjdGl2ZSA9PSAyKSB7XG4gICAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGxzdFByb2R1Y3REYXRhREIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0UHJvZHVjdEZpbHRlciA9IGxzdFByb2R1Y3REYXRhREIuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uRmxhZ0FjdGl2ZSA9PSBmbGFnQWN0aXZlKVxuICAgICAgc2V0THN0UHJvZHVjdERhdGFVSShsaXN0UHJvZHVjdEZpbHRlcilcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHjhu60gbMO9IHRoYXkgxJHhu5VpIHRy4bqhbmcgdGjDoWkgZmlsdGVyIHByb2R1Y3QgZHJvcGRvd25cbiAgY29uc3QgaGFuZGxlQ2hhbmdlRmlsdGVyUHJvZHVjdCA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB2YWx1ZVN0YXR1c1Byb2R1Y3QgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IFwiXCIpIHJldHVybjtcbiAgICBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IHN0YXR1c1Byb2R1Y3QuQUxMKSB7XG4gICAgICBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCh2YWx1ZVN0YXR1c1Byb2R1Y3QpO1xuICAgIH0gZWxzZSBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IHN0YXR1c1Byb2R1Y3QuT05fU0FMRSkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0Lk9GRl9TQUxFKSB7XG4gICAgICBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCh2YWx1ZVN0YXR1c1Byb2R1Y3QpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHjhu60gbMO9IHjDs2Egc+G6o24gcGjhuqltXG4gIGNvbnN0IGhhbmRsZUVkaXREZWxldGVQcm9kdWN0ID0gKGU6IGFueSwgcHJvZHVjdENvZGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlU3RhdHVzQWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlU3RhdHVzQWN0aW9uID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlU3RhdHVzQWN0aW9uID09IHN0YXR1c0FjdGlvbi5FRElUKSB7XG4gICAgICAvLyBUaeG6v24gaMOgbmggZWRpdFxuICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdENvZGV9L2VkaXRgKVxuXG4gICAgfSBlbHNlIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBzdGF0dXNBY3Rpb24uREVMRVRFKSB7XG4gICAgICAvLyBUaeG6v24gaMOgbmggeMOzYVxuICAgICAgaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZShwcm9kdWN0Q29kZSlcbiAgICB9XG4gIH1cblxuICAvLyBjbGVhciBkYXRhIHN0b3JhZ2VcbiAgY29uc3QgaGFuZGxlQ2xlYXJTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNldExzdFByb2R1Y3REYXRhREIobHN0UHJvZHVjdHMpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkobHN0UHJvZHVjdHMpO1xuICB9XG5cbiAgLy8geOG7rSBsw70geMOzYSBwcm9kdWN0IHNpbmdsZVxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9kdWN0U2luZ2xlID0gKHByb2R1Y3RDb2RlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBsaXN0UHJvZHVjdEZpbHRlciA9IGxzdFByb2R1Y3REYXRhVUkuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgZ+G7kWNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkobGlzdFByb2R1Y3RGaWx0ZXIpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxpc3RQcm9kdWN0RmlsdGVyKTtcbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBVSVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhVUknLCBKU09OLnN0cmluZ2lmeShsaXN0UHJvZHVjdEZpbHRlcikpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkobGlzdFByb2R1Y3RGaWx0ZXIpO1xuICB9XG5cbiAgLy9Y4butIGzDvSBnw6FuIHPhuqNuIHBo4bqpbSDEkeG7gyB4w7NhIG5oaeG7gXUgXG4gIGNvbnN0IGhhbmRsZUNoZWNrRGVsZXRlTWFueSA9IChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgIC4uLmxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICB9XG5cbiAgICBpZiAobGlzdENoZWNrZWREZWxldGVQcm9kdWN0W3Byb2R1Y3RDb2RlXSkge1xuICAgICAgZGVsZXRlIGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdFtwcm9kdWN0Q29kZV07XG4gICAgICBkYXRhID0ge1xuICAgICAgICAuLi5saXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIC4uLmxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICAgICAgW3Byb2R1Y3RDb2RlXTogcHJvZHVjdENvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0KGRhdGEpO1xuXG4gIH1cblxuICAvLyBUaeG6v24gaMOgbmggeMOzYSBuaGnhu4F1IHPhuqNuIHBo4bqpbVxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9kdWN0TXVsdGkgPSAoKSA9PiB7XG4gICAgbGV0IHByb2R1Y3RDb2RlRGVsZXRlcyA9IE9iamVjdC5rZXlzKGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCk7XG4gICAgaWYgKCFwcm9kdWN0Q29kZURlbGV0ZXMubGVuZ3RoKSB7XG4gICAgICBhbGVydCgnQuG6oW4gY2jGsGEgY2jhu41uIGPDoWMgc+G6o24gcGjhuqltIMSR4buDIHjDs2Egbmhp4buBdScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBCaeG6v24gdOG6oW0gZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW1cbiAgICBsZXQgZGF0YVRlbXBQcm9kdWN0XG4gICAgZm9yIChjb25zdCBwcm9kdWN0Q29kZSBvZiBwcm9kdWN0Q29kZURlbGV0ZXMpIHtcbiAgICAgIC8vIG7hur91IHjDs2EgbOG6p24gdGjhu6kgMiB0aMOsIHjDs2EgYuG6sW5nIGRhdGFUZW1wUHJvZHVjdFxuICAgICAgaWYgKGRhdGFUZW1wUHJvZHVjdCkge1xuICAgICAgICBkYXRhVGVtcFByb2R1Y3QgPSBkYXRhVGVtcFByb2R1Y3QuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBu4bq/dSB4w7NhIGzhuqduIMSR4bqndSB0acOqbiB0aMOsIHjDs2EgYuG6sW5nIGxzdFByb2R1Y3REYXRhREJcbiAgICAgICAgZGF0YVRlbXBQcm9kdWN0ID0gbHN0UHJvZHVjdERhdGFEQi5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5Qcm9kdWN0Q29kZSAhPSBwcm9kdWN0Q29kZSlcblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBEQlxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhREInLCBKU09OLnN0cmluZ2lmeShkYXRhVGVtcFByb2R1Y3QpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGRhdGFUZW1wUHJvZHVjdCk7XG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgVUlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YVVJJywgSlNPTi5zdHJpbmdpZnkoZGF0YVRlbXBQcm9kdWN0KSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFVSShkYXRhVGVtcFByb2R1Y3QpO1xuICB9XG5cbiAgLy8gVGnhur9uIGjDoG5oIHThuqFvIHByb2R1Y3RcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUHJvZHVjdCA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlQ3JlYXRlUHJvZHVjdCBkYXRhPT09PT09JywgZGF0YSk7XG4gICAgY29uc29sZS5sb2cobHN0UHJvZHVjdERhdGFEQik7XG4gICAgZm9yKGNvbnN0IFByb2R1Y3Qgb2YgbHN0UHJvZHVjdERhdGFEQikge1xuICAgICAgLy9UaMO0bmcgYmHMgW8gbsOqzIF1IG1hzIMgc2HMiW4gcGjDosyJbSDEkWHMgyB0w7TMgG4gdGHMo2lcbiAgICAgICAgaWYoZGF0YS5Qcm9kdWN0Q29kZS50cmltKCkgPT0gUHJvZHVjdC5Qcm9kdWN0Q29kZSl7XG4gICAgICAgICAgYWxlcnQoJ01hzIMgc2HMiW4gcGjDosyJbSDEkWHMgyB0w7TMgG4gdGHMo2ksIHZ1aSBsb8yAbmcgbmjDosyjcCBsYcyjaSEhJylcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkoWy4uLmxzdFByb2R1Y3REYXRhREIsIGRhdGFdKSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFEQihbLi4ubHN0UHJvZHVjdERhdGFEQiwgZGF0YV0pO1xuICAgIC8vIGfDoW4gZGFuaCBzw6FjaCBwcm9kdWN0IFVJXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFVSScsIEpTT04uc3RyaW5naWZ5KFsuLi5sc3RQcm9kdWN0RGF0YURCLCBkYXRhXSkpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkoWy4uLmxzdFByb2R1Y3REYXRhVUksIGRhdGFdKTtcbiAgICBjb25zb2xlLmxvZyhsc3RQcm9kdWN0RGF0YURCKTtcbiAgICBcbiAgfVxuXG4gIC8vIFRp4bq/biBow6BuaCB1cGRhdGUgcHJvZHVjdFxuICBjb25zdCBoYW5kbGVVcGRhdGVQcm9kdWN0ID0gKHByb2R1Y3RDb2RlOiBhbnksIGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVVcGRhdGVQcm9kdWN0IHByb2R1Y3RDb2RlPT09PT09JywgcHJvZHVjdENvZGUpO1xuICAgIGNvbnNvbGUubG9nKCdoYW5kbGVVcGRhdGVQcm9kdWN0IGRhdGE9PT09PT0nLCBkYXRhKTtcblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsc3RQcm9kdWN0RGF0YVVJLFxuICAgIGxzdFByb2R1Y3REYXRhREIsXG4gICAgaGFuZGxlQ2hhbmdlRmlsdGVyUHJvZHVjdCxcbiAgICBoYW5kbGVFZGl0RGVsZXRlUHJvZHVjdCxcbiAgICBoYW5kbGVDbGVhclN0b3JhZ2UsXG4gICAgaGFuZGxlQ2hlY2tEZWxldGVNYW55LFxuICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RNdWx0aSxcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCLFxuICAgIHNldExzdFByb2R1Y3REYXRhVUksXG4gICAgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0LFxuICAgIGhhbmRsZUNyZWF0ZVByb2R1Y3QsXG4gICAgaGFuZGxlVXBkYXRlUHJvZHVjdFxuICB9XG59Il0sIm5hbWVzIjpbImxzdFByb2R1Y3RzIiwic3RhdHVzQWN0aW9uIiwic3RhdHVzUHJvZHVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUHJvZHVjdEhhbmRsZSIsInJvdXRlciIsImxzdFByb2R1Y3REYXRhREIiLCJzZXRMc3RQcm9kdWN0RGF0YURCIiwibHN0UHJvZHVjdERhdGFVSSIsInNldExzdFByb2R1Y3REYXRhVUkiLCJsaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QiLCJzZXRMaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QiLCJoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCIsImZsYWdBY3RpdmUiLCJsaXN0UHJvZHVjdEZpbHRlciIsImZpbHRlciIsIml0ZW0iLCJGbGFnQWN0aXZlIiwiaGFuZGxlQ2hhbmdlRmlsdGVyUHJvZHVjdCIsImUiLCJ2YWx1ZVN0YXR1c1Byb2R1Y3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkFMTCIsIk9OX1NBTEUiLCJPRkZfU0FMRSIsImhhbmRsZUVkaXREZWxldGVQcm9kdWN0IiwicHJvZHVjdENvZGUiLCJ2YWx1ZVN0YXR1c0FjdGlvbiIsIkVESVQiLCJwdXNoIiwiREVMRVRFIiwiaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZSIsImhhbmRsZUNsZWFyU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwiUHJvZHVjdENvZGUiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUNoZWNrRGVsZXRlTWFueSIsImRhdGEiLCJoYW5kbGVEZWxldGVQcm9kdWN0TXVsdGkiLCJwcm9kdWN0Q29kZURlbGV0ZXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYWxlcnQiLCJkYXRhVGVtcFByb2R1Y3QiLCJoYW5kbGVDcmVhdGVQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsIlByb2R1Y3QiLCJ0cmltIiwiaGFuZGxlVXBkYXRlUHJvZHVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./handles/products/product.handle.ts\n"));

/***/ })

});
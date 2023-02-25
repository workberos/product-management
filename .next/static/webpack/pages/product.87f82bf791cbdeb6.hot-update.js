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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductHandle; }\n/* harmony export */ });\n/* harmony import */ var _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constant/listProduct */ \"./constant/listProduct.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * ProductHandle: Function để xử lý logic chung cho việc create,update,delete,filter của Product\n * @returns \n */ function ProductHandle() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Data sản phẩm gốc dùng để filter product\n    const [lstProductDataDB, setLstProductDataDB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Data hiển thị ra UI\n    const [lstProductDataUI, setLstProductDataUI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lstProductDataDB);\n    // Danh sách checkbox xóa nhiều\n    const [listCheckedDeleteProduct, setListCheckedDeleteProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"cccccccccc\");\n        const dataDB = localStorage.getItem(\"DataDB\");\n        // gán danh sách product UI\n        const dataUI = localStorage.getItem(\"DataUI\");\n        const dataDBParse = JSON.parse(dataDB);\n        console.log(\"dataDBParse\", dataDBParse);\n        if (dataDBParse) {\n            setLstProductDataDB(dataDBParse);\n        } else {\n            setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        }\n        if (dataUI) {\n        // setLstProductDataUI(dataDBParse);\n        }\n    }, []);\n    console.log(\"cccccccccc lstProductDataDB.,\", lstProductDataDB);\n    // Xử lý filter product khi chọn dropdown\n    const handleFilterListProduct = (flagActive)=>{\n        if (flagActive == 2) {\n            setLstProductDataUI(lstProductDataDB);\n        } else {\n            const listProductFilter = lstProductDataDB.filter((item)=>item.FlagActive == flagActive);\n            setLstProductDataUI(listProductFilter);\n        }\n    };\n    // xử lý thay đổi trạng thái filter product dropdown\n    const handleChangeFilterProduct = (e)=>{\n        const valueStatusProduct = e.target.value;\n        if (valueStatusProduct == \"\") return;\n        if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ALL) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ON_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.OFF_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        }\n    };\n    // xử lý xóa sản phẩm\n    const handleEditDeleteProduct = (e, productCode)=>{\n        const valueStatusAction = e.target.value;\n        if (valueStatusAction == \"\") {\n            return;\n        }\n        if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.EDIT) {\n            // Tiến hành edit\n            router.push(\"/product/\".concat(productCode, \"/edit\"));\n        } else if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.DELETE) {\n            // Tiến hành xóa\n            handleDeleteProductSingle(productCode);\n        }\n    };\n    // clear data storage\n    const handleClearStorage = ()=>{\n        localStorage.clear();\n        setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        setLstProductDataUI(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n    };\n    // xử lý xóa product single\n    const handleDeleteProductSingle = (productCode)=>{\n        const listProductFilter = lstProductDataUI.filter((item)=>item.ProductCode != productCode);\n        // gán danh sách product gốc\n        localStorage.setItem(\"DataDB\", JSON.stringify(listProductFilter));\n        setLstProductDataDB(listProductFilter);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(listProductFilter));\n        setLstProductDataUI(listProductFilter);\n    };\n    //Xử lý gán sản phẩm để xóa nhiều \n    const handleCheckDeleteMany = (productCode)=>{\n        let data = {\n            ...listCheckedDeleteProduct\n        };\n        if (listCheckedDeleteProduct[productCode]) {\n            delete listCheckedDeleteProduct[productCode];\n            data = {\n                ...listCheckedDeleteProduct\n            };\n        } else {\n            data = {\n                ...listCheckedDeleteProduct,\n                [productCode]: productCode\n            };\n        }\n        setListCheckedDeleteProduct(data);\n    };\n    // Tiến hành xóa nhiều sản phẩm\n    const handleDeleteProductMulti = ()=>{\n        let productCodeDeletes = Object.keys(listCheckedDeleteProduct);\n        if (!productCodeDeletes.length) {\n            alert(\"Bạn chưa chọn c\\xe1c sản phẩm để x\\xf3a nhiều\");\n            return;\n        }\n        // Biến tạm danh sách sản phẩm\n        let dataTempProduct;\n        for (const productCode of productCodeDeletes){\n            // nếu xóa lần thứ 2 thì xóa bằng dataTempProduct\n            if (dataTempProduct) {\n                dataTempProduct = dataTempProduct.filter((item)=>item.ProductCode != productCode);\n            } else {\n                // nếu xóa lần đầu tiên thì xóa bằng lstProductDataDB\n                dataTempProduct = lstProductDataDB.filter((item)=>item.ProductCode != productCode);\n            }\n        }\n        // gán danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify(dataTempProduct));\n        setLstProductDataDB(dataTempProduct);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(dataTempProduct));\n        setLstProductDataUI(dataTempProduct);\n    };\n    // Tiến hành tạo product\n    const handleCreateProduct = (data)=>{\n        //Kiểm tra mã sản phẩm đã tồn tại trong mảng hay chưa\n        for (const Product of lstProductDataDB){\n            if (data.ProductCode.trim() == Product.ProductCode) {\n                alert(\"Mã sản ph\\xe2̉m đã t\\xf4̀n tại, vui lòng nh\\xe2̣p lại!!\");\n                return;\n            }\n        }\n        // cập nhật danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify([\n            ...lstProductDataDB,\n            data\n        ]));\n        setLstProductDataDB([\n            ...lstProductDataDB,\n            data\n        ]);\n        // cập nhật danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify([\n            ...lstProductDataDB,\n            data\n        ]));\n        setLstProductDataUI([\n            ...lstProductDataUI,\n            data\n        ]);\n        alert(\"Th\\xeam sản ph\\xe2̉m thành c\\xf4ng\");\n    };\n    // Tiến hành update product\n    const handleUpdateProduct = (productCode, data)=>{\n        //Biến ghi tạm danh sách sản phẩm\n        let dataTempProduct = lstProductDataDB;\n        const fields = [\n            \"ProductName\",\n            \"Price\",\n            \"UPDc\",\n            \"FlagActive\"\n        ];\n        const dataMap = [];\n        dataTempProduct.map((product, index)=>{\n            let obj;\n            if (product.ProductCode == data.ProductCode) {\n                obj = {\n                    ProductCode: data.ProductCode,\n                    ...data\n                };\n            } else {\n                obj = product;\n            }\n            dataMap.push(obj);\n        });\n        // cập nhật danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify(dataMap));\n        setLstProductDataDB(dataMap);\n        // cập nhật danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(dataMap));\n        setLstProductDataUI(dataMap);\n        router.push(\"/product\");\n    };\n    return {\n        lstProductDataUI,\n        lstProductDataDB,\n        handleChangeFilterProduct,\n        handleEditDeleteProduct,\n        handleClearStorage,\n        handleCheckDeleteMany,\n        handleDeleteProductMulti,\n        setLstProductDataDB,\n        setLstProductDataUI,\n        setListCheckedDeleteProduct,\n        handleCreateProduct,\n        handleUpdateProduct\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ3BCLGtDQUFrQztRQUNsQzlDLGFBQWE4QixPQUFPLENBQUMsVUFBVTFCLEtBQUsyQixTQUFTLENBQUNlO1FBQzlDcEQsb0JBQW9Cb0Q7UUFDcEJ4RCxPQUFPa0MsSUFBSSxDQUFFO0lBRWY7SUFFQSxPQUFPO1FBQ0wvQjtRQUNBRjtRQUNBcUI7UUFDQVE7UUFDQU87UUFDQUs7UUFDQUU7UUFDQTFDO1FBQ0FFO1FBQ0FFO1FBQ0E2QztRQUNBRztJQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9oYW5kbGVzL3Byb2R1Y3RzL3Byb2R1Y3QuaGFuZGxlLnRzPzc2ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbHN0UHJvZHVjdHMsIHN0YXR1c0FjdGlvbiwgc3RhdHVzUHJvZHVjdCB9IGZyb20gXCJAL2NvbnN0YW50L2xpc3RQcm9kdWN0XCJcbmltcG9ydCB7IFByb2R1Y3RSZXMgfSBmcm9tIFwiQC90eXBlcy9wYWdlL3Byb2R1Y3QudHlwZVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbi8qKlxuICogUHJvZHVjdEhhbmRsZTogRnVuY3Rpb24gxJHhu4MgeOG7rSBsw70gbG9naWMgY2h1bmcgY2hvIHZp4buHYyBjcmVhdGUsdXBkYXRlLGRlbGV0ZSxmaWx0ZXIgY+G7p2EgUHJvZHVjdFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RIYW5kbGUoKTogUHJvZHVjdFJlcyB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIC8vIERhdGEgc+G6o24gcGjhuqltIGfhu5FjIGTDuW5nIMSR4buDIGZpbHRlciBwcm9kdWN0XG4gIGNvbnN0IFtsc3RQcm9kdWN0RGF0YURCLCBzZXRMc3RQcm9kdWN0RGF0YURCXSA9IHVzZVN0YXRlPGFueT4oW10pXG4gIC8vIERhdGEgaGnhu4NuIHRo4buLIHJhIFVJXG4gIGNvbnN0IFtsc3RQcm9kdWN0RGF0YVVJLCBzZXRMc3RQcm9kdWN0RGF0YVVJXSA9IHVzZVN0YXRlKGxzdFByb2R1Y3REYXRhREIpXG4gIC8vIERhbmggc8OhY2ggY2hlY2tib3ggeMOzYSBuaGnhu4F1XG4gIGNvbnN0IFtsaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsIHNldExpc3RDaGVja2VkRGVsZXRlUHJvZHVjdF0gPSB1c2VTdGF0ZTxhbnk+KHt9KVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLmxvZygnY2NjY2NjY2NjYycpXG4gICAgY29uc3QgZGF0YURCIDogYW55ID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdEYXRhREInKTtcblxuICAgIC8vIGfDoW4gZGFuaCBzw6FjaCBwcm9kdWN0IFVJXG4gICAgY29uc3QgZGF0YVVJID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0RhdGFVSScpO1xuICAgIGNvbnN0IGRhdGFEQlBhcnNlID0gSlNPTi5wYXJzZShkYXRhREIpXG4gICAgY29uc29sZS5sb2coJ2RhdGFEQlBhcnNlJywgZGF0YURCUGFyc2UpXG4gICAgaWYoZGF0YURCUGFyc2Upe1xuICAgICAgc2V0THN0UHJvZHVjdERhdGFEQihkYXRhREJQYXJzZSk7XG4gICAgfWVsc2V7XG4gICAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxzdFByb2R1Y3RzKVxuICAgIH1cbiAgICBpZihkYXRhVUkpe1xuICAgICAgLy8gc2V0THN0UHJvZHVjdERhdGFVSShkYXRhREJQYXJzZSk7XG4gICAgfVxuICB9LFtdKVxuICBjb25zb2xlLmxvZygnY2NjY2NjY2NjYyBsc3RQcm9kdWN0RGF0YURCLiwnLGxzdFByb2R1Y3REYXRhREIpXG5cbiAgLy8gWOG7rSBsw70gZmlsdGVyIHByb2R1Y3Qga2hpIGNo4buNbiBkcm9wZG93blxuICBjb25zdCBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCA9IChmbGFnQWN0aXZlOiBudW1iZXIpID0+IHtcbiAgICBpZiAoZmxhZ0FjdGl2ZSA9PSAyKSB7XG4gICAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGxzdFByb2R1Y3REYXRhREIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0UHJvZHVjdEZpbHRlciA9IGxzdFByb2R1Y3REYXRhREIuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uRmxhZ0FjdGl2ZSA9PSBmbGFnQWN0aXZlKVxuICAgICAgc2V0THN0UHJvZHVjdERhdGFVSShsaXN0UHJvZHVjdEZpbHRlcilcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHjhu60gbMO9IHRoYXkgxJHhu5VpIHRy4bqhbmcgdGjDoWkgZmlsdGVyIHByb2R1Y3QgZHJvcGRvd25cbiAgY29uc3QgaGFuZGxlQ2hhbmdlRmlsdGVyUHJvZHVjdCA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB2YWx1ZVN0YXR1c1Byb2R1Y3QgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IFwiXCIpIHJldHVybjtcbiAgICBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IHN0YXR1c1Byb2R1Y3QuQUxMKSB7XG4gICAgICBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCh2YWx1ZVN0YXR1c1Byb2R1Y3QpO1xuICAgIH0gZWxzZSBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IHN0YXR1c1Byb2R1Y3QuT05fU0FMRSkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0Lk9GRl9TQUxFKSB7XG4gICAgICBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCh2YWx1ZVN0YXR1c1Byb2R1Y3QpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHjhu60gbMO9IHjDs2Egc+G6o24gcGjhuqltXG4gIGNvbnN0IGhhbmRsZUVkaXREZWxldGVQcm9kdWN0ID0gKGU6IGFueSwgcHJvZHVjdENvZGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlU3RhdHVzQWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlU3RhdHVzQWN0aW9uID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlU3RhdHVzQWN0aW9uID09IHN0YXR1c0FjdGlvbi5FRElUKSB7XG4gICAgICAvLyBUaeG6v24gaMOgbmggZWRpdFxuICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdENvZGV9L2VkaXRgKVxuXG4gICAgfSBlbHNlIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBzdGF0dXNBY3Rpb24uREVMRVRFKSB7XG4gICAgICAvLyBUaeG6v24gaMOgbmggeMOzYVxuICAgICAgaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZShwcm9kdWN0Q29kZSlcbiAgICB9XG4gIH1cblxuICAvLyBjbGVhciBkYXRhIHN0b3JhZ2VcbiAgY29uc3QgaGFuZGxlQ2xlYXJTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNldExzdFByb2R1Y3REYXRhREIobHN0UHJvZHVjdHMpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkobHN0UHJvZHVjdHMpO1xuICB9XG5cbiAgLy8geOG7rSBsw70geMOzYSBwcm9kdWN0IHNpbmdsZVxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9kdWN0U2luZ2xlID0gKHByb2R1Y3RDb2RlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBsaXN0UHJvZHVjdEZpbHRlciA9IGxzdFByb2R1Y3REYXRhVUkuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgZ+G7kWNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkobGlzdFByb2R1Y3RGaWx0ZXIpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxpc3RQcm9kdWN0RmlsdGVyKTtcbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBVSVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhVUknLCBKU09OLnN0cmluZ2lmeShsaXN0UHJvZHVjdEZpbHRlcikpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkobGlzdFByb2R1Y3RGaWx0ZXIpO1xuICB9XG5cbiAgLy9Y4butIGzDvSBnw6FuIHPhuqNuIHBo4bqpbSDEkeG7gyB4w7NhIG5oaeG7gXUgXG4gIGNvbnN0IGhhbmRsZUNoZWNrRGVsZXRlTWFueSA9IChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgIC4uLmxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICB9XG5cbiAgICBpZiAobGlzdENoZWNrZWREZWxldGVQcm9kdWN0W3Byb2R1Y3RDb2RlXSkge1xuICAgICAgZGVsZXRlIGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdFtwcm9kdWN0Q29kZV07XG4gICAgICBkYXRhID0ge1xuICAgICAgICAuLi5saXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIC4uLmxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICAgICAgW3Byb2R1Y3RDb2RlXTogcHJvZHVjdENvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0KGRhdGEpO1xuXG4gIH1cblxuICAvLyBUaeG6v24gaMOgbmggeMOzYSBuaGnhu4F1IHPhuqNuIHBo4bqpbVxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9kdWN0TXVsdGkgPSAoKSA9PiB7XG4gICAgbGV0IHByb2R1Y3RDb2RlRGVsZXRlcyA9IE9iamVjdC5rZXlzKGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCk7XG4gICAgaWYgKCFwcm9kdWN0Q29kZURlbGV0ZXMubGVuZ3RoKSB7XG4gICAgICBhbGVydCgnQuG6oW4gY2jGsGEgY2jhu41uIGPDoWMgc+G6o24gcGjhuqltIMSR4buDIHjDs2Egbmhp4buBdScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBCaeG6v24gdOG6oW0gZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW1cbiAgICBsZXQgZGF0YVRlbXBQcm9kdWN0XG4gICAgZm9yIChjb25zdCBwcm9kdWN0Q29kZSBvZiBwcm9kdWN0Q29kZURlbGV0ZXMpIHtcbiAgICAgIC8vIG7hur91IHjDs2EgbOG6p24gdGjhu6kgMiB0aMOsIHjDs2EgYuG6sW5nIGRhdGFUZW1wUHJvZHVjdFxuICAgICAgaWYgKGRhdGFUZW1wUHJvZHVjdCkge1xuICAgICAgICBkYXRhVGVtcFByb2R1Y3QgPSBkYXRhVGVtcFByb2R1Y3QuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBu4bq/dSB4w7NhIGzhuqduIMSR4bqndSB0acOqbiB0aMOsIHjDs2EgYuG6sW5nIGxzdFByb2R1Y3REYXRhREJcbiAgICAgICAgZGF0YVRlbXBQcm9kdWN0ID0gbHN0UHJvZHVjdERhdGFEQi5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5Qcm9kdWN0Q29kZSAhPSBwcm9kdWN0Q29kZSlcblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBEQlxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhREInLCBKU09OLnN0cmluZ2lmeShkYXRhVGVtcFByb2R1Y3QpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGRhdGFUZW1wUHJvZHVjdCk7XG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgVUlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YVVJJywgSlNPTi5zdHJpbmdpZnkoZGF0YVRlbXBQcm9kdWN0KSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFVSShkYXRhVGVtcFByb2R1Y3QpO1xuICB9XG5cbiAgLy8gVGnhur9uIGjDoG5oIHThuqFvIHByb2R1Y3RcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUHJvZHVjdCA9IChkYXRhOiBhbnkpID0+IHtcbiAgICAvL0tpw6rMiW0gdHJhIG1hzIMgc2HMiW4gcGjDosyJbSDEkWHMgyB0w7TMgG4gdGHMo2kgdHJvbmcgbWHMiW5nIGhheSBjaMawYVxuICAgIGZvciAoY29uc3QgUHJvZHVjdCBvZiBsc3RQcm9kdWN0RGF0YURCKSB7XG4gICAgICBpZiAoZGF0YS5Qcm9kdWN0Q29kZS50cmltKCkgPT0gUHJvZHVjdC5Qcm9kdWN0Q29kZSkge1xuICAgICAgICBhbGVydCgnTWHMgyBzYcyJbiBwaMOizIltIMSRYcyDIHTDtMyAbiB0YcyjaSwgdnVpIGxvzIBuZyBuaMOizKNwIGxhzKNpISEnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY8OizKNwIG5ow6LMo3QgZGFuaCBzw6FjaCBwcm9kdWN0IERCXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFEQicsIEpTT04uc3RyaW5naWZ5KFsuLi5sc3RQcm9kdWN0RGF0YURCLCBkYXRhXSkpO1xuICAgIHNldExzdFByb2R1Y3REYXRhREIoWy4uLmxzdFByb2R1Y3REYXRhREIsIGRhdGFdKTtcbiAgICAvLyBjw6LMo3AgbmjDosyjdCBkYW5oIHPDoWNoIHByb2R1Y3QgVUlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YVVJJywgSlNPTi5zdHJpbmdpZnkoWy4uLmxzdFByb2R1Y3REYXRhREIsIGRhdGFdKSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFVSShbLi4ubHN0UHJvZHVjdERhdGFVSSwgZGF0YV0pO1xuICAgIGFsZXJ0KCdUaMOqbSBzYcyJbiBwaMOizIltIHRoYcyAbmggY8O0bmcnKVxuICB9XG5cbiAgLy8gVGnhur9uIGjDoG5oIHVwZGF0ZSBwcm9kdWN0XG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVByb2R1Y3QgPSAocHJvZHVjdENvZGU6IGFueSwgZGF0YTogYW55KSA9PiB7XG4gICAgLy9CacOqzIFuIGdoaSB0YcyjbSBkYW5oIHNhzIFjaCBzYcyJbiBwaMOizIltXG4gICAgbGV0IGRhdGFUZW1wUHJvZHVjdCA9IGxzdFByb2R1Y3REYXRhREJcbiAgICBjb25zdCBmaWVsZHMgPSBbJ1Byb2R1Y3ROYW1lJywgJ1ByaWNlJywgJ1VQRGMnLCAnRmxhZ0FjdGl2ZSddO1xuICAgIGNvbnN0IGRhdGFNYXA6IGFueSA9IFtdXG4gICAgZGF0YVRlbXBQcm9kdWN0Lm1hcChcbiAgICAgIChwcm9kdWN0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IG9iajogYW55IDtcbiAgICAgICAgaWYgKHByb2R1Y3QuUHJvZHVjdENvZGUgPT0gZGF0YS5Qcm9kdWN0Q29kZSkge1xuICAgICAgICAgIG9iaiA9IHtcbiAgICAgICAgICAgIFByb2R1Y3RDb2RlOiBkYXRhLlByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgLi4uZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYmogPSBwcm9kdWN0XG4gICAgICAgIH1cbiAgICAgICAgZGF0YU1hcC5wdXNoKG9iailcbiAgICAgIH1cbiAgICApXG4gICAgLy8gY8OizKNwIG5ow6LMo3QgZGFuaCBzw6FjaCBwcm9kdWN0IERCXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFEQicsIEpTT04uc3RyaW5naWZ5KGRhdGFNYXApKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGRhdGFNYXApO1xuICAgIC8vIGPDosyjcCBuaMOizKN0IGRhbmggc8OhY2ggcHJvZHVjdCBVSVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhVUknLCBKU09OLnN0cmluZ2lmeShkYXRhTWFwKSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFVSShkYXRhTWFwKTtcbiAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3RgKVxuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxzdFByb2R1Y3REYXRhVUksXG4gICAgbHN0UHJvZHVjdERhdGFEQixcbiAgICBoYW5kbGVDaGFuZ2VGaWx0ZXJQcm9kdWN0LFxuICAgIGhhbmRsZUVkaXREZWxldGVQcm9kdWN0LFxuICAgIGhhbmRsZUNsZWFyU3RvcmFnZSxcbiAgICBoYW5kbGVDaGVja0RlbGV0ZU1hbnksXG4gICAgaGFuZGxlRGVsZXRlUHJvZHVjdE11bHRpLFxuICAgIHNldExzdFByb2R1Y3REYXRhREIsXG4gICAgc2V0THN0UHJvZHVjdERhdGFVSSxcbiAgICBzZXRMaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgaGFuZGxlQ3JlYXRlUHJvZHVjdCxcbiAgICBoYW5kbGVVcGRhdGVQcm9kdWN0XG4gIH1cbn0iXSwibmFtZXMiOlsibHN0UHJvZHVjdHMiLCJzdGF0dXNBY3Rpb24iLCJzdGF0dXNQcm9kdWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0SGFuZGxlIiwicm91dGVyIiwibHN0UHJvZHVjdERhdGFEQiIsInNldExzdFByb2R1Y3REYXRhREIiLCJsc3RQcm9kdWN0RGF0YVVJIiwic2V0THN0UHJvZHVjdERhdGFVSSIsImxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCIsInNldExpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhREIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YVVJIiwiZGF0YURCUGFyc2UiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCIsImZsYWdBY3RpdmUiLCJsaXN0UHJvZHVjdEZpbHRlciIsImZpbHRlciIsIml0ZW0iLCJGbGFnQWN0aXZlIiwiaGFuZGxlQ2hhbmdlRmlsdGVyUHJvZHVjdCIsImUiLCJ2YWx1ZVN0YXR1c1Byb2R1Y3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkFMTCIsIk9OX1NBTEUiLCJPRkZfU0FMRSIsImhhbmRsZUVkaXREZWxldGVQcm9kdWN0IiwicHJvZHVjdENvZGUiLCJ2YWx1ZVN0YXR1c0FjdGlvbiIsIkVESVQiLCJwdXNoIiwiREVMRVRFIiwiaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZSIsImhhbmRsZUNsZWFyU3RvcmFnZSIsImNsZWFyIiwiUHJvZHVjdENvZGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2hlY2tEZWxldGVNYW55IiwiZGF0YSIsImhhbmRsZURlbGV0ZVByb2R1Y3RNdWx0aSIsInByb2R1Y3RDb2RlRGVsZXRlcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJhbGVydCIsImRhdGFUZW1wUHJvZHVjdCIsImhhbmRsZUNyZWF0ZVByb2R1Y3QiLCJQcm9kdWN0IiwidHJpbSIsImhhbmRsZVVwZGF0ZVByb2R1Y3QiLCJmaWVsZHMiLCJkYXRhTWFwIiwibWFwIiwicHJvZHVjdCIsImluZGV4Iiwib2JqIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./handles/products/product.handle.ts\n"));

/***/ })

});
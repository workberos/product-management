"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]/edit",{

/***/ "./handles/products/product.handle.ts":
/*!********************************************!*\
  !*** ./handles/products/product.handle.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductHandle; }\n/* harmony export */ });\n/* harmony import */ var _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constant/listProduct */ \"./constant/listProduct.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * ProductHandle: Function để xử lý logic chung cho việc create,update,delete,filter của Product\n * @returns \n */ function ProductHandle() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Data sản phẩm gốc dùng để filter product\n        const [lstProductDataDB1, setLstProductDataDB1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        // Data hiển thị ra UI\n        const [lstProductDataUI1, setLstProductDataUI1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lstProductDataDB1);\n    // Danh sách checkbox xóa nhiều\n    }, []);\n    const [listCheckedDeleteProduct, setListCheckedDeleteProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    console.log(\"lstProductDataDB============>>>>>>\", lstProductDataDB);\n    // Xử lý filter product khi chọn dropdown\n    const handleFilterListProduct = (flagActive)=>{\n        if (flagActive == 2) {\n            setLstProductDataUI(lstProductDataDB);\n        } else {\n            const listProductFilter = lstProductDataDB.filter((item)=>item.FlagActive == flagActive);\n            setLstProductDataUI(listProductFilter);\n        }\n    };\n    // xử lý thay đổi trạng thái filter product dropdown\n    const handleChangeFilterProduct = (e)=>{\n        const valueStatusProduct = e.target.value;\n        if (valueStatusProduct == \"\") return;\n        if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ALL) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ON_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.OFF_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        }\n    };\n    // xử lý xóa sản phẩm\n    const handleEditDeleteProduct = (e, productCode)=>{\n        const valueStatusAction = e.target.value;\n        if (valueStatusAction == \"\") {\n            return;\n        }\n        if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.EDIT) {\n            // Tiến hành edit\n            router.push(\"/product/\".concat(productCode, \"/edit\"));\n        } else if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.DELETE) {\n            // Tiến hành xóa\n            handleDeleteProductSingle(productCode);\n        }\n    };\n    // clear data storage\n    const handleClearStorage = ()=>{\n        localStorage.clear();\n        setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        setLstProductDataUI(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n    };\n    // xử lý xóa product single\n    const handleDeleteProductSingle = (productCode)=>{\n        const listProductFilter = lstProductDataUI.filter((item)=>item.ProductCode != productCode);\n        // gán danh sách product gốc\n        localStorage.setItem(\"DataDB\", JSON.stringify(listProductFilter));\n        setLstProductDataDB(listProductFilter);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(listProductFilter));\n        setLstProductDataUI(listProductFilter);\n    };\n    //Xử lý gán sản phẩm để xóa nhiều \n    const handleCheckDeleteMany = (productCode)=>{\n        let data = {\n            ...listCheckedDeleteProduct\n        };\n        if (listCheckedDeleteProduct[productCode]) {\n            delete listCheckedDeleteProduct[productCode];\n            data = {\n                ...listCheckedDeleteProduct\n            };\n        } else {\n            data = {\n                ...listCheckedDeleteProduct,\n                [productCode]: productCode\n            };\n        }\n        setListCheckedDeleteProduct(data);\n    };\n    // Tiến hành xóa nhiều sản phẩm\n    const handleDeleteProductMulti = ()=>{\n        let productCodeDeletes = Object.keys(listCheckedDeleteProduct);\n        if (!productCodeDeletes.length) {\n            alert(\"Bạn chưa chọn c\\xe1c sản phẩm để x\\xf3a nhiều\");\n            return;\n        }\n        // Biến tạm danh sách sản phẩm\n        let dataTempProduct;\n        for (const productCode of productCodeDeletes){\n            // nếu xóa lần thứ 2 thì xóa bằng dataTempProduct\n            if (dataTempProduct) {\n                dataTempProduct = dataTempProduct.filter((item)=>item.ProductCode != productCode);\n            } else {\n                // nếu xóa lần đầu tiên thì xóa bằng lstProductDataDB\n                dataTempProduct = lstProductDataDB.filter((item)=>item.ProductCode != productCode);\n            }\n        }\n        // gán danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify(dataTempProduct));\n        setLstProductDataDB(dataTempProduct);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(dataTempProduct));\n        setLstProductDataUI(dataTempProduct);\n    };\n    // Tiến hành tạo product\n    const handleCreateProduct = (data)=>{\n        //Kiểm tra mã sản phẩm đã tồn tại trong mảng hay chưa\n        for (const Product of lstProductDataDB){\n            if (data.ProductCode.trim() == Product.ProductCode) {\n                alert(\"Mã sản ph\\xe2̉m đã t\\xf4̀n tại, vui lòng nh\\xe2̣p lại!!\");\n                return;\n            }\n        }\n        // cập nhật danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify([\n            ...lstProductDataDB,\n            data\n        ]));\n        setLstProductDataDB([\n            ...lstProductDataDB,\n            data\n        ]);\n        // cập nhật danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify([\n            ...lstProductDataDB,\n            data\n        ]));\n        setLstProductDataUI([\n            ...lstProductDataUI,\n            data\n        ]);\n        alert(\"Th\\xeam sản ph\\xe2̉m thành c\\xf4ng\");\n    };\n    // Tiến hành update product\n    const handleUpdateProduct = (productCode, data)=>{\n        //Biến ghi tạm danh sách sản phẩm\n        let dataTempProduct = lstProductDataDB;\n        const fields = [\n            \"ProductName\",\n            \"Price\",\n            \"UPDc\",\n            \"FlagActive\"\n        ];\n        const dataMap = [];\n        dataTempProduct.map((product, index)=>{\n            let obj;\n            if (product.ProductCode == data.ProductCode) {\n                obj = {\n                    ProductCode: data.ProductCode,\n                    ...data\n                };\n            } else {\n                obj = product;\n            }\n            dataMap.push(obj);\n        });\n        // cập nhật danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify(dataMap));\n        setLstProductDataDB(dataMap);\n        // cập nhật danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(dataMap));\n        setLstProductDataUI(dataMap);\n        router.push(\"/product\");\n    };\n    return {\n        lstProductDataUI,\n        lstProductDataDB,\n        handleChangeFilterProduct,\n        handleEditDeleteProduct,\n        handleClearStorage,\n        handleCheckDeleteMany,\n        handleDeleteProductMulti,\n        setLstProductDataDB,\n        setLstProductDataUI,\n        setListCheckedDeleteProduct,\n        handleCreateProduct,\n        handleUpdateProduct\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBSztRQUMvQyxrQ0FBa0M7UUFDbENQLGFBQWFHLE9BQU8sQ0FBQyxVQUFVQyxLQUFLQyxTQUFTLENBQUM7ZUFBSW5DO1lBQWtCcUM7U0FBSztRQUN6RWxDLG9CQUFvQjtlQUFJRDtZQUFrQm1DO1NBQUs7UUFDL0NNLE1BQU07SUFDUjtJQUVBLDJCQUEyQjtJQUMzQixNQUFNSyxzQkFBc0IsQ0FBQ3pCLGFBQWtCYyxPQUFjO1FBQzNELHNDQUFzQztRQUN0QyxJQUFJTyxrQkFBa0I1QztRQUN0QixNQUFNaUQsU0FBUztZQUFDO1lBQWU7WUFBUztZQUFRO1NBQWE7UUFDN0QsTUFBTUMsVUFBZSxFQUFFO1FBQ3ZCTixnQkFBZ0JPLEdBQUcsQ0FDakIsQ0FBQ0MsU0FBY0MsUUFBa0I7WUFDL0IsSUFBSUM7WUFDSixJQUFJRixRQUFRcEIsV0FBVyxJQUFJSyxLQUFLTCxXQUFXLEVBQUU7Z0JBQzNDc0IsTUFBTTtvQkFDSnRCLGFBQWFLLEtBQUtMLFdBQVc7b0JBQzdCLEdBQUdLLElBQUk7Z0JBQ1Q7WUFDRixPQUFPO2dCQUNMaUIsTUFBTUY7WUFDUixDQUFDO1lBQ0RGLFFBQVF4QixJQUFJLENBQUM0QjtRQUNmO1FBRUYsa0NBQWtDO1FBQ2xDeEIsYUFBYUcsT0FBTyxDQUFDLFVBQVVDLEtBQUtDLFNBQVMsQ0FBQ2U7UUFDOUNqRCxvQkFBb0JpRDtRQUNwQixrQ0FBa0M7UUFDbENwQixhQUFhRyxPQUFPLENBQUMsVUFBVUMsS0FBS0MsU0FBUyxDQUFDZTtRQUM5Qy9DLG9CQUFvQitDO1FBQ3BCbkQsT0FBTzJCLElBQUksQ0FBRTtJQUVmO0lBRUEsT0FBTztRQUNMeEI7UUFDQUY7UUFDQWM7UUFDQVE7UUFDQU87UUFDQU87UUFDQUU7UUFDQXJDO1FBQ0FFO1FBQ0FFO1FBQ0F3QztRQUNBRztJQUNGO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9oYW5kbGVzL3Byb2R1Y3RzL3Byb2R1Y3QuaGFuZGxlLnRzPzc2ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbHN0UHJvZHVjdHMsIHN0YXR1c0FjdGlvbiwgc3RhdHVzUHJvZHVjdCB9IGZyb20gXCJAL2NvbnN0YW50L2xpc3RQcm9kdWN0XCJcbmltcG9ydCB7IFByb2R1Y3RSZXMgfSBmcm9tIFwiQC90eXBlcy9wYWdlL3Byb2R1Y3QudHlwZVwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbi8qKlxuICogUHJvZHVjdEhhbmRsZTogRnVuY3Rpb24gxJHhu4MgeOG7rSBsw70gbG9naWMgY2h1bmcgY2hvIHZp4buHYyBjcmVhdGUsdXBkYXRlLGRlbGV0ZSxmaWx0ZXIgY+G7p2EgUHJvZHVjdFxuICogQHJldHVybnMgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RIYW5kbGUoKTogUHJvZHVjdFJlcyB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gRGF0YSBz4bqjbiBwaOG6qW0gZ+G7kWMgZMO5bmcgxJHhu4MgZmlsdGVyIHByb2R1Y3RcbiAgICBjb25zdCBbbHN0UHJvZHVjdERhdGFEQiwgc2V0THN0UHJvZHVjdERhdGFEQl0gPSB1c2VTdGF0ZTxhbnk+KGxzdFByb2R1Y3RzKVxuICAgIC8vIERhdGEgaGnhu4NuIHRo4buLIHJhIFVJXG4gICAgY29uc3QgW2xzdFByb2R1Y3REYXRhVUksIHNldExzdFByb2R1Y3REYXRhVUldID0gdXNlU3RhdGUobHN0UHJvZHVjdERhdGFEQilcbiAgICAvLyBEYW5oIHPDoWNoIGNoZWNrYm94IHjDs2Egbmhp4buBdVxuICB9LCBbXSlcbiAgY29uc3QgW2xpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCwgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0XSA9IHVzZVN0YXRlPGFueT4oe30pXG4gIGNvbnNvbGUubG9nKCdsc3RQcm9kdWN0RGF0YURCPT09PT09PT09PT09Pj4+Pj4+JywgbHN0UHJvZHVjdERhdGFEQik7XG5cbiAgLy8gWOG7rSBsw70gZmlsdGVyIHByb2R1Y3Qga2hpIGNo4buNbiBkcm9wZG93blxuICBjb25zdCBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCA9IChmbGFnQWN0aXZlOiBudW1iZXIpID0+IHtcbiAgICBpZiAoZmxhZ0FjdGl2ZSA9PSAyKSB7XG4gICAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGxzdFByb2R1Y3REYXRhREIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsaXN0UHJvZHVjdEZpbHRlciA9IGxzdFByb2R1Y3REYXRhREIuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uRmxhZ0FjdGl2ZSA9PSBmbGFnQWN0aXZlKVxuICAgICAgc2V0THN0UHJvZHVjdERhdGFVSShsaXN0UHJvZHVjdEZpbHRlcilcbiAgICB9XG5cbiAgfVxuXG4gIC8vIHjhu60gbMO9IHRoYXkgxJHhu5VpIHRy4bqhbmcgdGjDoWkgZmlsdGVyIHByb2R1Y3QgZHJvcGRvd25cbiAgY29uc3QgaGFuZGxlQ2hhbmdlRmlsdGVyUHJvZHVjdCA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB2YWx1ZVN0YXR1c1Byb2R1Y3QgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IFwiXCIpIHJldHVybjtcbiAgICBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IHN0YXR1c1Byb2R1Y3QuQUxMKSB7XG4gICAgICBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCh2YWx1ZVN0YXR1c1Byb2R1Y3QpO1xuICAgIH0gZWxzZSBpZiAodmFsdWVTdGF0dXNQcm9kdWN0ID09IHN0YXR1c1Byb2R1Y3QuT05fU0FMRSkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0Lk9GRl9TQUxFKSB7XG4gICAgICBoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCh2YWx1ZVN0YXR1c1Byb2R1Y3QpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHjhu60gbMO9IHjDs2Egc+G6o24gcGjhuqltXG4gIGNvbnN0IGhhbmRsZUVkaXREZWxldGVQcm9kdWN0ID0gKGU6IGFueSwgcHJvZHVjdENvZGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlU3RhdHVzQWN0aW9uID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlU3RhdHVzQWN0aW9uID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlU3RhdHVzQWN0aW9uID09IHN0YXR1c0FjdGlvbi5FRElUKSB7XG4gICAgICAvLyBUaeG6v24gaMOgbmggZWRpdFxuICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdENvZGV9L2VkaXRgKVxuXG4gICAgfSBlbHNlIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBzdGF0dXNBY3Rpb24uREVMRVRFKSB7XG4gICAgICAvLyBUaeG6v24gaMOgbmggeMOzYVxuICAgICAgaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZShwcm9kdWN0Q29kZSlcbiAgICB9XG4gIH1cblxuICAvLyBjbGVhciBkYXRhIHN0b3JhZ2VcbiAgY29uc3QgaGFuZGxlQ2xlYXJTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIHNldExzdFByb2R1Y3REYXRhREIobHN0UHJvZHVjdHMpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkobHN0UHJvZHVjdHMpO1xuICB9XG5cbiAgLy8geOG7rSBsw70geMOzYSBwcm9kdWN0IHNpbmdsZVxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9kdWN0U2luZ2xlID0gKHByb2R1Y3RDb2RlOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBsaXN0UHJvZHVjdEZpbHRlciA9IGxzdFByb2R1Y3REYXRhVUkuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgZ+G7kWNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkobGlzdFByb2R1Y3RGaWx0ZXIpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxpc3RQcm9kdWN0RmlsdGVyKTtcbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBVSVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhVUknLCBKU09OLnN0cmluZ2lmeShsaXN0UHJvZHVjdEZpbHRlcikpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkobGlzdFByb2R1Y3RGaWx0ZXIpO1xuICB9XG5cbiAgLy9Y4butIGzDvSBnw6FuIHPhuqNuIHBo4bqpbSDEkeG7gyB4w7NhIG5oaeG7gXUgXG4gIGNvbnN0IGhhbmRsZUNoZWNrRGVsZXRlTWFueSA9IChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgIC4uLmxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICB9XG5cbiAgICBpZiAobGlzdENoZWNrZWREZWxldGVQcm9kdWN0W3Byb2R1Y3RDb2RlXSkge1xuICAgICAgZGVsZXRlIGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdFtwcm9kdWN0Q29kZV07XG4gICAgICBkYXRhID0ge1xuICAgICAgICAuLi5saXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIC4uLmxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICAgICAgW3Byb2R1Y3RDb2RlXTogcHJvZHVjdENvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0KGRhdGEpO1xuXG4gIH1cblxuICAvLyBUaeG6v24gaMOgbmggeMOzYSBuaGnhu4F1IHPhuqNuIHBo4bqpbVxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9kdWN0TXVsdGkgPSAoKSA9PiB7XG4gICAgbGV0IHByb2R1Y3RDb2RlRGVsZXRlcyA9IE9iamVjdC5rZXlzKGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCk7XG4gICAgaWYgKCFwcm9kdWN0Q29kZURlbGV0ZXMubGVuZ3RoKSB7XG4gICAgICBhbGVydCgnQuG6oW4gY2jGsGEgY2jhu41uIGPDoWMgc+G6o24gcGjhuqltIMSR4buDIHjDs2Egbmhp4buBdScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBCaeG6v24gdOG6oW0gZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW1cbiAgICBsZXQgZGF0YVRlbXBQcm9kdWN0XG4gICAgZm9yIChjb25zdCBwcm9kdWN0Q29kZSBvZiBwcm9kdWN0Q29kZURlbGV0ZXMpIHtcbiAgICAgIC8vIG7hur91IHjDs2EgbOG6p24gdGjhu6kgMiB0aMOsIHjDs2EgYuG6sW5nIGRhdGFUZW1wUHJvZHVjdFxuICAgICAgaWYgKGRhdGFUZW1wUHJvZHVjdCkge1xuICAgICAgICBkYXRhVGVtcFByb2R1Y3QgPSBkYXRhVGVtcFByb2R1Y3QuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBu4bq/dSB4w7NhIGzhuqduIMSR4bqndSB0acOqbiB0aMOsIHjDs2EgYuG6sW5nIGxzdFByb2R1Y3REYXRhREJcbiAgICAgICAgZGF0YVRlbXBQcm9kdWN0ID0gbHN0UHJvZHVjdERhdGFEQi5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5Qcm9kdWN0Q29kZSAhPSBwcm9kdWN0Q29kZSlcblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBEQlxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhREInLCBKU09OLnN0cmluZ2lmeShkYXRhVGVtcFByb2R1Y3QpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGRhdGFUZW1wUHJvZHVjdCk7XG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgVUlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YVVJJywgSlNPTi5zdHJpbmdpZnkoZGF0YVRlbXBQcm9kdWN0KSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFVSShkYXRhVGVtcFByb2R1Y3QpO1xuICB9XG5cbiAgLy8gVGnhur9uIGjDoG5oIHThuqFvIHByb2R1Y3RcbiAgY29uc3QgaGFuZGxlQ3JlYXRlUHJvZHVjdCA9IChkYXRhOiBhbnkpID0+IHtcbiAgICAvL0tpw6rMiW0gdHJhIG1hzIMgc2HMiW4gcGjDosyJbSDEkWHMgyB0w7TMgG4gdGHMo2kgdHJvbmcgbWHMiW5nIGhheSBjaMawYVxuICAgIGZvciAoY29uc3QgUHJvZHVjdCBvZiBsc3RQcm9kdWN0RGF0YURCKSB7XG4gICAgICBpZiAoZGF0YS5Qcm9kdWN0Q29kZS50cmltKCkgPT0gUHJvZHVjdC5Qcm9kdWN0Q29kZSkge1xuICAgICAgICBhbGVydCgnTWHMgyBzYcyJbiBwaMOizIltIMSRYcyDIHTDtMyAbiB0YcyjaSwgdnVpIGxvzIBuZyBuaMOizKNwIGxhzKNpISEnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY8OizKNwIG5ow6LMo3QgZGFuaCBzw6FjaCBwcm9kdWN0IERCXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFEQicsIEpTT04uc3RyaW5naWZ5KFsuLi5sc3RQcm9kdWN0RGF0YURCLCBkYXRhXSkpO1xuICAgIHNldExzdFByb2R1Y3REYXRhREIoWy4uLmxzdFByb2R1Y3REYXRhREIsIGRhdGFdKTtcbiAgICAvLyBjw6LMo3AgbmjDosyjdCBkYW5oIHPDoWNoIHByb2R1Y3QgVUlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YVVJJywgSlNPTi5zdHJpbmdpZnkoWy4uLmxzdFByb2R1Y3REYXRhREIsIGRhdGFdKSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFVSShbLi4ubHN0UHJvZHVjdERhdGFVSSwgZGF0YV0pO1xuICAgIGFsZXJ0KCdUaMOqbSBzYcyJbiBwaMOizIltIHRoYcyAbmggY8O0bmcnKVxuICB9XG5cbiAgLy8gVGnhur9uIGjDoG5oIHVwZGF0ZSBwcm9kdWN0XG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVByb2R1Y3QgPSAocHJvZHVjdENvZGU6IGFueSwgZGF0YTogYW55KSA9PiB7XG4gICAgLy9CacOqzIFuIGdoaSB0YcyjbSBkYW5oIHNhzIFjaCBzYcyJbiBwaMOizIltXG4gICAgbGV0IGRhdGFUZW1wUHJvZHVjdCA9IGxzdFByb2R1Y3REYXRhREJcbiAgICBjb25zdCBmaWVsZHMgPSBbJ1Byb2R1Y3ROYW1lJywgJ1ByaWNlJywgJ1VQRGMnLCAnRmxhZ0FjdGl2ZSddO1xuICAgIGNvbnN0IGRhdGFNYXA6IGFueSA9IFtdXG4gICAgZGF0YVRlbXBQcm9kdWN0Lm1hcChcbiAgICAgIChwcm9kdWN0OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgbGV0IG9iajogYW55O1xuICAgICAgICBpZiAocHJvZHVjdC5Qcm9kdWN0Q29kZSA9PSBkYXRhLlByb2R1Y3RDb2RlKSB7XG4gICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgUHJvZHVjdENvZGU6IGRhdGEuUHJvZHVjdENvZGUsXG4gICAgICAgICAgICAuLi5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iaiA9IHByb2R1Y3RcbiAgICAgICAgfVxuICAgICAgICBkYXRhTWFwLnB1c2gob2JqKVxuICAgICAgfVxuICAgIClcbiAgICAvLyBjw6LMo3AgbmjDosyjdCBkYW5oIHPDoWNoIHByb2R1Y3QgREJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkoZGF0YU1hcCkpO1xuICAgIHNldExzdFByb2R1Y3REYXRhREIoZGF0YU1hcCk7XG4gICAgLy8gY8OizKNwIG5ow6LMo3QgZGFuaCBzw6FjaCBwcm9kdWN0IFVJXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFVSScsIEpTT04uc3RyaW5naWZ5KGRhdGFNYXApKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGRhdGFNYXApO1xuICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdGApXG5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbHN0UHJvZHVjdERhdGFVSSxcbiAgICBsc3RQcm9kdWN0RGF0YURCLFxuICAgIGhhbmRsZUNoYW5nZUZpbHRlclByb2R1Y3QsXG4gICAgaGFuZGxlRWRpdERlbGV0ZVByb2R1Y3QsXG4gICAgaGFuZGxlQ2xlYXJTdG9yYWdlLFxuICAgIGhhbmRsZUNoZWNrRGVsZXRlTWFueSxcbiAgICBoYW5kbGVEZWxldGVQcm9kdWN0TXVsdGksXG4gICAgc2V0THN0UHJvZHVjdERhdGFEQixcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJLFxuICAgIHNldExpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICBoYW5kbGVDcmVhdGVQcm9kdWN0LFxuICAgIGhhbmRsZVVwZGF0ZVByb2R1Y3RcbiAgfVxufSJdLCJuYW1lcyI6WyJsc3RQcm9kdWN0cyIsInN0YXR1c0FjdGlvbiIsInN0YXR1c1Byb2R1Y3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlByb2R1Y3RIYW5kbGUiLCJyb3V0ZXIiLCJsc3RQcm9kdWN0RGF0YURCIiwic2V0THN0UHJvZHVjdERhdGFEQiIsImxzdFByb2R1Y3REYXRhVUkiLCJzZXRMc3RQcm9kdWN0RGF0YVVJIiwibGlzdENoZWNrZWREZWxldGVQcm9kdWN0Iiwic2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUZpbHRlckxpc3RQcm9kdWN0IiwiZmxhZ0FjdGl2ZSIsImxpc3RQcm9kdWN0RmlsdGVyIiwiZmlsdGVyIiwiaXRlbSIsIkZsYWdBY3RpdmUiLCJoYW5kbGVDaGFuZ2VGaWx0ZXJQcm9kdWN0IiwiZSIsInZhbHVlU3RhdHVzUHJvZHVjdCIsInRhcmdldCIsInZhbHVlIiwiQUxMIiwiT05fU0FMRSIsIk9GRl9TQUxFIiwiaGFuZGxlRWRpdERlbGV0ZVByb2R1Y3QiLCJwcm9kdWN0Q29kZSIsInZhbHVlU3RhdHVzQWN0aW9uIiwiRURJVCIsInB1c2giLCJERUxFVEUiLCJoYW5kbGVEZWxldGVQcm9kdWN0U2luZ2xlIiwiaGFuZGxlQ2xlYXJTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJQcm9kdWN0Q29kZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2hlY2tEZWxldGVNYW55IiwiZGF0YSIsImhhbmRsZURlbGV0ZVByb2R1Y3RNdWx0aSIsInByb2R1Y3RDb2RlRGVsZXRlcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJhbGVydCIsImRhdGFUZW1wUHJvZHVjdCIsImhhbmRsZUNyZWF0ZVByb2R1Y3QiLCJQcm9kdWN0IiwidHJpbSIsImhhbmRsZVVwZGF0ZVByb2R1Y3QiLCJmaWVsZHMiLCJkYXRhTWFwIiwibWFwIiwicHJvZHVjdCIsImluZGV4Iiwib2JqIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./handles/products/product.handle.ts\n"));

/***/ })

});
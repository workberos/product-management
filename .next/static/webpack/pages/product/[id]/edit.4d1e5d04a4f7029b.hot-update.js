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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductHandle; }\n/* harmony export */ });\n/* harmony import */ var _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constant/listProduct */ \"./constant/listProduct.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * ProductHandle: Function để xử lý logic chung cho việc create,update,delete,filter của Product\n * @returns \n */ function ProductHandle() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Data sản phẩm gốc dùng để filter product\n    const [lstProductDataDB, setLstProductDataDB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Data hiển thị ra UI\n    const [lstProductDataUI, setLstProductDataUI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lstProductDataDB);\n    // Danh sách checkbox xóa nhiều\n    const [listCheckedDeleteProduct, setListCheckedDeleteProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataDB = localStorage.getItem(\"DataDB\");\n        // gán danh sách product UI\n        const dataUI = localStorage.getItem(\"DataUI\");\n        const dataDBParse = JSON.parse(dataDB);\n        console.log(\"useEffect\", dataDBParse);\n        if (dataDBParse) {\n            setLstProductDataDB(dataDBParse);\n        } else {\n            setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        }\n        if (dataUI) {\n        // setLstProductDataUI(dataDBParse);\n        }\n    }, []);\n    // Xử lý filter product khi chọn dropdown\n    const handleFilterListProduct = (flagActive)=>{\n        if (flagActive == 2) {\n            setLstProductDataUI(lstProductDataDB);\n        } else {\n            const listProductFilter = lstProductDataDB.filter((item)=>item.FlagActive == flagActive);\n            setLstProductDataUI(listProductFilter);\n        }\n    };\n    // xử lý thay đổi trạng thái filter product dropdown\n    const handleChangeFilterProduct = (e)=>{\n        const valueStatusProduct = e.target.value;\n        if (valueStatusProduct == \"\") return;\n        if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ALL) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ON_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.OFF_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        }\n    };\n    // xử lý xóa sản phẩm\n    const handleEditDeleteProduct = (e, productCode)=>{\n        const valueStatusAction = e.target.value;\n        if (valueStatusAction == \"\") {\n            return;\n        }\n        if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.EDIT) {\n            // Tiến hành edit\n            router.push(\"/product/\".concat(productCode, \"/edit\"));\n        } else if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.DELETE) {\n            // Tiến hành xóa\n            handleDeleteProductSingle(productCode);\n        }\n    };\n    // clear data storage\n    const handleClearStorage = ()=>{\n        localStorage.clear();\n        setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        setLstProductDataUI(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n    };\n    // xử lý xóa product single\n    const handleDeleteProductSingle = (productCode)=>{\n        const listProductFilter = lstProductDataUI.filter((item)=>item.ProductCode != productCode);\n        // gán danh sách product gốc\n        localStorage.setItem(\"DataDB\", JSON.stringify(listProductFilter));\n        setLstProductDataDB(listProductFilter);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(listProductFilter));\n        setLstProductDataUI(listProductFilter);\n    };\n    //Xử lý gán sản phẩm để xóa nhiều \n    const handleCheckDeleteMany = (productCode)=>{\n        let data = {\n            ...listCheckedDeleteProduct\n        };\n        if (listCheckedDeleteProduct[productCode]) {\n            delete listCheckedDeleteProduct[productCode];\n            data = {\n                ...listCheckedDeleteProduct\n            };\n        } else {\n            data = {\n                ...listCheckedDeleteProduct,\n                [productCode]: productCode\n            };\n        }\n        setListCheckedDeleteProduct(data);\n    };\n    // Tiến hành xóa nhiều sản phẩm\n    const handleDeleteProductMulti = ()=>{\n        let productCodeDeletes = Object.keys(listCheckedDeleteProduct);\n        if (!productCodeDeletes.length) {\n            alert(\"Bạn chưa chọn c\\xe1c sản phẩm để x\\xf3a nhiều\");\n            return;\n        }\n        // Biến tạm danh sách sản phẩm\n        let dataTempProduct;\n        for (const productCode of productCodeDeletes){\n            // nếu xóa lần thứ 2 thì xóa bằng dataTempProduct\n            if (dataTempProduct) {\n                dataTempProduct = dataTempProduct.filter((item)=>item.ProductCode != productCode);\n            } else {\n                // nếu xóa lần đầu tiên thì xóa bằng lstProductDataDB\n                dataTempProduct = lstProductDataDB.filter((item)=>item.ProductCode != productCode);\n            }\n        }\n        // gán danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify(dataTempProduct));\n        setLstProductDataDB(dataTempProduct);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(dataTempProduct));\n        setLstProductDataUI(dataTempProduct);\n    };\n    // Tiến hành tạo product\n    const handleCreateProduct = (data)=>{\n        //Kiểm tra mã sản phẩm đã tồn tại trong mảng hay chưa\n        for (const Product of lstProductDataDB){\n            if (data.ProductCode.trim() == Product.ProductCode) {\n                alert(\"Mã sản ph\\xe2̉m đã t\\xf4̀n tại, vui lòng nh\\xe2̣p lại!!\");\n                return;\n            }\n        }\n        //Nếu trạng thái được check sẽ gán giá trị 1, ngược lại sẽ là 0\n        if (data.FlagActive == true) {\n            data.FlagActive = 1;\n        } else {\n            data.FlagActive = 0;\n        }\n        console.log(\"handleCreateProduct\", data);\n        // cập nhật danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify([\n            ...lstProductDataDB,\n            data\n        ]));\n        setLstProductDataDB([\n            ...lstProductDataDB,\n            data\n        ]);\n        // cập nhật danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify([\n            ...lstProductDataDB,\n            data\n        ]));\n        setLstProductDataUI([\n            ...lstProductDataUI,\n            data\n        ]);\n        alert(\"Th\\xeam sản ph\\xe2̉m thành c\\xf4ng\");\n        router.push(\"/product\");\n    };\n    // Tiến hành update product\n    const handleUpdateProduct = (productCode, data)=>{\n        console.log(\"data-----handleUpdate\", data);\n        //Nếu trạng thái được check sẽ gán giá trị 1, ngược lại sẽ là 0\n        if (data.FlagActive == true) {\n            data.FlagActive = 1;\n        } else {\n            data.FlagActive = 0;\n        }\n        //Biến ghi tạm danh sách sản phẩm\n        let dataTempProduct = lstProductDataDB;\n        const fields = [\n            \"ProductName\",\n            \"Price\",\n            \"UPDc\",\n            \"FlagActive\"\n        ];\n        const dataMap = [];\n        dataTempProduct.map((product, index)=>{\n            let obj;\n            if (product.ProductCode == data.ProductCode) {\n                obj = {\n                    ProductCode: data.ProductCode,\n                    ...data\n                };\n            } else {\n                obj = product;\n            }\n            dataMap.push(obj);\n        });\n        // cập nhật danh sách product DB\n        localStorage.setItem(\"DataDB\", JSON.stringify(dataMap));\n        setLstProductDataDB(dataMap);\n        // cập nhật danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(dataMap));\n        setLstProductDataUI(dataMap);\n        router.push(\"/product\");\n    };\n    return {\n        lstProductDataUI,\n        lstProductDataDB,\n        handleChangeFilterProduct,\n        handleEditDeleteProduct,\n        handleClearStorage,\n        handleCheckDeleteMany,\n        handleDeleteProductMulti,\n        setLstProductDataDB,\n        setLstProductDataUI,\n        setListCheckedDeleteProduct,\n        handleCreateProduct,\n        handleUpdateProduct\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLFNBQWNDLFFBQWtCO1lBQy9CLElBQUlDO1lBQ0osSUFBSUYsUUFBUW5CLFdBQVcsSUFBSUksS0FBS0osV0FBVyxFQUFFO2dCQUMzQ3FCLE1BQU07b0JBQ0pyQixhQUFhSSxLQUFLSixXQUFXO29CQUM3QixHQUFHSSxJQUFJO2dCQUNUO1lBQ0YsT0FBTztnQkFDTGlCLE1BQU1GO1lBQ1IsQ0FBQztZQUNERixRQUFRdEIsSUFBSSxDQUFDMEI7UUFDZjtRQUVGLGtDQUFrQztRQUNsQ3BELGFBQWFnQyxPQUFPLENBQUMsVUFBVTVCLEtBQUs2QixTQUFTLENBQUNlO1FBQzlDdEQsb0JBQW9Cc0Q7UUFDcEIsa0NBQWtDO1FBQ2xDaEQsYUFBYWdDLE9BQU8sQ0FBQyxVQUFVNUIsS0FBSzZCLFNBQVMsQ0FBQ2U7UUFDOUNwRCxvQkFBb0JvRDtRQUNwQnhELE9BQU9rQyxJQUFJLENBQUU7SUFFZjtJQUVBLE9BQU87UUFDTC9CO1FBQ0FGO1FBQ0FxQjtRQUNBUTtRQUNBTztRQUNBSztRQUNBRTtRQUNBMUM7UUFDQUU7UUFDQUU7UUFDQTZDO1FBQ0FHO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hhbmRsZXMvcHJvZHVjdHMvcHJvZHVjdC5oYW5kbGUudHM/NzZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsc3RQcm9kdWN0cywgc3RhdHVzQWN0aW9uLCBzdGF0dXNQcm9kdWN0IH0gZnJvbSBcIkAvY29uc3RhbnQvbGlzdFByb2R1Y3RcIlxuaW1wb3J0IHsgUHJvZHVjdFJlcyB9IGZyb20gXCJAL3R5cGVzL3BhZ2UvcHJvZHVjdC50eXBlXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuLyoqXG4gKiBQcm9kdWN0SGFuZGxlOiBGdW5jdGlvbiDEkeG7gyB44butIGzDvSBsb2dpYyBjaHVuZyBjaG8gdmnhu4djIGNyZWF0ZSx1cGRhdGUsZGVsZXRlLGZpbHRlciBj4bunYSBQcm9kdWN0XG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEhhbmRsZSgpOiBQcm9kdWN0UmVzIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgLy8gRGF0YSBz4bqjbiBwaOG6qW0gZ+G7kWMgZMO5bmcgxJHhu4MgZmlsdGVyIHByb2R1Y3RcbiAgY29uc3QgW2xzdFByb2R1Y3REYXRhREIsIHNldExzdFByb2R1Y3REYXRhREJdID0gdXNlU3RhdGU8YW55PihbXSlcbiAgLy8gRGF0YSBoaeG7g24gdGjhu4sgcmEgVUlcbiAgY29uc3QgW2xzdFByb2R1Y3REYXRhVUksIHNldExzdFByb2R1Y3REYXRhVUldID0gdXNlU3RhdGUobHN0UHJvZHVjdERhdGFEQilcbiAgLy8gRGFuaCBzw6FjaCBjaGVja2JveCB4w7NhIG5oaeG7gXVcbiAgY29uc3QgW2xpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCwgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0XSA9IHVzZVN0YXRlPGFueT4oe30pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YURCOiBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRGF0YURCJyk7XG5cbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBVSVxuICAgIGNvbnN0IGRhdGFVSSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdEYXRhVUknKTtcbiAgICBjb25zdCBkYXRhREJQYXJzZSA9IEpTT04ucGFyc2UoZGF0YURCKVxuICAgIGNvbnNvbGUubG9nKCd1c2VFZmZlY3QnLCBkYXRhREJQYXJzZSlcbiAgICBpZiAoZGF0YURCUGFyc2UpIHtcbiAgICAgIHNldExzdFByb2R1Y3REYXRhREIoZGF0YURCUGFyc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxzdFByb2R1Y3RzKVxuICAgIH1cbiAgICBpZiAoZGF0YVVJKSB7XG4gICAgICAvLyBzZXRMc3RQcm9kdWN0RGF0YVVJKGRhdGFEQlBhcnNlKTtcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIFjhu60gbMO9IGZpbHRlciBwcm9kdWN0IGtoaSBjaOG7jW4gZHJvcGRvd25cbiAgY29uc3QgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QgPSAoZmxhZ0FjdGl2ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGZsYWdBY3RpdmUgPT0gMikge1xuICAgICAgc2V0THN0UHJvZHVjdERhdGFVSShsc3RQcm9kdWN0RGF0YURCKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGlzdFByb2R1Y3RGaWx0ZXIgPSBsc3RQcm9kdWN0RGF0YURCLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLkZsYWdBY3RpdmUgPT0gZmxhZ0FjdGl2ZSlcbiAgICAgIHNldExzdFByb2R1Y3REYXRhVUkobGlzdFByb2R1Y3RGaWx0ZXIpXG4gICAgfVxuXG4gIH1cblxuICAvLyB44butIGzDvSB0aGF5IMSR4buVaSB0cuG6oW5nIHRow6FpIGZpbHRlciBwcm9kdWN0IGRyb3Bkb3duXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUZpbHRlclByb2R1Y3QgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgdmFsdWVTdGF0dXNQcm9kdWN0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBcIlwiKSByZXR1cm47XG4gICAgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0LkFMTCkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0Lk9OX1NBTEUpIHtcbiAgICAgIGhhbmRsZUZpbHRlckxpc3RQcm9kdWN0KHZhbHVlU3RhdHVzUHJvZHVjdCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZVN0YXR1c1Byb2R1Y3QgPT0gc3RhdHVzUHJvZHVjdC5PRkZfU0FMRSkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9XG4gIH1cblxuICAvLyB44butIGzDvSB4w7NhIHPhuqNuIHBo4bqpbVxuICBjb25zdCBoYW5kbGVFZGl0RGVsZXRlUHJvZHVjdCA9IChlOiBhbnksIHByb2R1Y3RDb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB2YWx1ZVN0YXR1c0FjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBzdGF0dXNBY3Rpb24uRURJVCkge1xuICAgICAgLy8gVGnhur9uIGjDoG5oIGVkaXRcbiAgICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3RDb2RlfS9lZGl0YClcblxuICAgIH0gZWxzZSBpZiAodmFsdWVTdGF0dXNBY3Rpb24gPT0gc3RhdHVzQWN0aW9uLkRFTEVURSkge1xuICAgICAgLy8gVGnhur9uIGjDoG5oIHjDs2FcbiAgICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RTaW5nbGUocHJvZHVjdENvZGUpXG4gICAgfVxuICB9XG5cbiAgLy8gY2xlYXIgZGF0YSBzdG9yYWdlXG4gIGNvbnN0IGhhbmRsZUNsZWFyU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxzdFByb2R1Y3RzKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGxzdFByb2R1Y3RzKTtcbiAgfVxuXG4gIC8vIHjhu60gbMO9IHjDs2EgcHJvZHVjdCBzaW5nbGVcbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZSA9IChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbGlzdFByb2R1Y3RGaWx0ZXIgPSBsc3RQcm9kdWN0RGF0YVVJLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLlByb2R1Y3RDb2RlICE9IHByb2R1Y3RDb2RlKVxuICAgIC8vIGfDoW4gZGFuaCBzw6FjaCBwcm9kdWN0IGfhu5FjXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFEQicsIEpTT04uc3RyaW5naWZ5KGxpc3RQcm9kdWN0RmlsdGVyKSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFEQihsaXN0UHJvZHVjdEZpbHRlcik7XG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgVUlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YVVJJywgSlNPTi5zdHJpbmdpZnkobGlzdFByb2R1Y3RGaWx0ZXIpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGxpc3RQcm9kdWN0RmlsdGVyKTtcbiAgfVxuXG4gIC8vWOG7rSBsw70gZ8OhbiBz4bqjbiBwaOG6qW0gxJHhu4MgeMOzYSBuaGnhu4F1IFxuICBjb25zdCBoYW5kbGVDaGVja0RlbGV0ZU1hbnkgPSAocHJvZHVjdENvZGU6IHN0cmluZykgPT4ge1xuICAgIGxldCBkYXRhOiBhbnkgPSB7XG4gICAgICAuLi5saXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgfVxuXG4gICAgaWYgKGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdFtwcm9kdWN0Q29kZV0pIHtcbiAgICAgIGRlbGV0ZSBsaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3RbcHJvZHVjdENvZGVdO1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgLi4ubGlzdENoZWNrZWREZWxldGVQcm9kdWN0LFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0ge1xuICAgICAgICAuLi5saXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgICAgIFtwcm9kdWN0Q29kZV06IHByb2R1Y3RDb2RlXG4gICAgICB9XG4gICAgfVxuICAgIHNldExpc3RDaGVja2VkRGVsZXRlUHJvZHVjdChkYXRhKTtcblxuICB9XG5cbiAgLy8gVGnhur9uIGjDoG5oIHjDs2Egbmhp4buBdSBz4bqjbiBwaOG6qW1cbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvZHVjdE11bHRpID0gKCkgPT4ge1xuICAgIGxldCBwcm9kdWN0Q29kZURlbGV0ZXMgPSBPYmplY3Qua2V5cyhsaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QpO1xuICAgIGlmICghcHJvZHVjdENvZGVEZWxldGVzLmxlbmd0aCkge1xuICAgICAgYWxlcnQoJ0LhuqFuIGNoxrBhIGNo4buNbiBjw6FjIHPhuqNuIHBo4bqpbSDEkeG7gyB4w7NhIG5oaeG7gXUnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQmnhur9uIHThuqFtIGRhbmggc8OhY2ggc+G6o24gcGjhuqltXG4gICAgbGV0IGRhdGFUZW1wUHJvZHVjdFxuICAgIGZvciAoY29uc3QgcHJvZHVjdENvZGUgb2YgcHJvZHVjdENvZGVEZWxldGVzKSB7XG4gICAgICAvLyBu4bq/dSB4w7NhIGzhuqduIHRo4bupIDIgdGjDrCB4w7NhIGLhurFuZyBkYXRhVGVtcFByb2R1Y3RcbiAgICAgIGlmIChkYXRhVGVtcFByb2R1Y3QpIHtcbiAgICAgICAgZGF0YVRlbXBQcm9kdWN0ID0gZGF0YVRlbXBQcm9kdWN0LmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLlByb2R1Y3RDb2RlICE9IHByb2R1Y3RDb2RlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbuG6v3UgeMOzYSBs4bqnbiDEkeG6p3UgdGnDqm4gdGjDrCB4w7NhIGLhurFuZyBsc3RQcm9kdWN0RGF0YURCXG4gICAgICAgIGRhdGFUZW1wUHJvZHVjdCA9IGxzdFByb2R1Y3REYXRhREIuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG5cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgREJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkoZGF0YVRlbXBQcm9kdWN0KSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFEQihkYXRhVGVtcFByb2R1Y3QpO1xuICAgIC8vIGfDoW4gZGFuaCBzw6FjaCBwcm9kdWN0IFVJXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0RhdGFVSScsIEpTT04uc3RyaW5naWZ5KGRhdGFUZW1wUHJvZHVjdCkpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkoZGF0YVRlbXBQcm9kdWN0KTtcbiAgfVxuXG4gIC8vIFRp4bq/biBow6BuaCB04bqhbyBwcm9kdWN0XG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVByb2R1Y3QgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgLy9LacOqzIltIHRyYSBtYcyDIHNhzIluIHBow6LMiW0gxJFhzIMgdMO0zIBuIHRhzKNpIHRyb25nIG1hzIluZyBoYXkgY2jGsGFcbiAgICBmb3IgKGNvbnN0IFByb2R1Y3Qgb2YgbHN0UHJvZHVjdERhdGFEQikge1xuICAgICAgaWYgKGRhdGEuUHJvZHVjdENvZGUudHJpbSgpID09IFByb2R1Y3QuUHJvZHVjdENvZGUpIHtcbiAgICAgICAgYWxlcnQoJ01hzIMgc2HMiW4gcGjDosyJbSDEkWHMgyB0w7TMgG4gdGHMo2ksIHZ1aSBsb8yAbmcgbmjDosyjcCBsYcyjaSEhJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC8vTsOqzIF1IHRyYcyjbmcgdGhhzIFpIMSRxrDGocyjYyBjaGVjayBzZcyDIGdhzIFuIGdpYcyBIHRyacyjIDEsIG5nxrDGocyjYyBsYcyjaSBzZcyDIGxhzIAgMFxuICAgIGlmIChkYXRhLkZsYWdBY3RpdmUgPT0gdHJ1ZSl7XG4gICAgICBkYXRhLkZsYWdBY3RpdmUgPSAxO1xuICAgIH1lbHNle1xuICAgICAgZGF0YS5GbGFnQWN0aXZlID0gMDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2hhbmRsZUNyZWF0ZVByb2R1Y3QnLCBkYXRhKTtcbiAgICAvLyBjw6LMo3AgbmjDosyjdCBkYW5oIHPDoWNoIHByb2R1Y3QgREJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkoWy4uLmxzdFByb2R1Y3REYXRhREIsIGRhdGFdKSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFEQihbLi4ubHN0UHJvZHVjdERhdGFEQiwgZGF0YV0pO1xuICAgIC8vIGPDosyjcCBuaMOizKN0IGRhbmggc8OhY2ggcHJvZHVjdCBVSVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhVUknLCBKU09OLnN0cmluZ2lmeShbLi4ubHN0UHJvZHVjdERhdGFEQiwgZGF0YV0pKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKFsuLi5sc3RQcm9kdWN0RGF0YVVJLCBkYXRhXSk7XG4gICAgYWxlcnQoJ1Row6ptIHNhzIluIHBow6LMiW0gdGhhzIBuaCBjw7RuZycpO1xuICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdGApO1xuICB9XG5cbiAgLy8gVGnhur9uIGjDoG5oIHVwZGF0ZSBwcm9kdWN0XG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVByb2R1Y3QgPSAocHJvZHVjdENvZGU6IGFueSwgZGF0YTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RhdGEtLS0tLWhhbmRsZVVwZGF0ZScsZGF0YSk7XG4gICAgXG4gICAgLy9Ow6rMgXUgdHJhzKNuZyB0aGHMgWkgxJHGsMahzKNjIGNoZWNrIHNlzIMgZ2HMgW4gZ2lhzIEgdHJpzKMgMSwgbmfGsMahzKNjIGxhzKNpIHNlzIMgbGHMgCAwXG4gICAgaWYgKGRhdGEuRmxhZ0FjdGl2ZSA9PSB0cnVlKXtcbiAgICAgIGRhdGEuRmxhZ0FjdGl2ZSA9IDE7XG4gICAgfWVsc2V7XG4gICAgICBkYXRhLkZsYWdBY3RpdmUgPSAwO1xuICAgIH1cbiAgICAvL0Jpw6rMgW4gZ2hpIHRhzKNtIGRhbmggc2HMgWNoIHNhzIluIHBow6LMiW1cbiAgICBsZXQgZGF0YVRlbXBQcm9kdWN0ID0gbHN0UHJvZHVjdERhdGFEQlxuICAgIGNvbnN0IGZpZWxkcyA9IFsnUHJvZHVjdE5hbWUnLCAnUHJpY2UnLCAnVVBEYycsICdGbGFnQWN0aXZlJ107XG4gICAgY29uc3QgZGF0YU1hcDogYW55ID0gW11cbiAgICBkYXRhVGVtcFByb2R1Y3QubWFwKFxuICAgICAgKHByb2R1Y3Q6IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgb2JqOiBhbnk7XG4gICAgICAgIGlmIChwcm9kdWN0LlByb2R1Y3RDb2RlID09IGRhdGEuUHJvZHVjdENvZGUpIHtcbiAgICAgICAgICBvYmogPSB7XG4gICAgICAgICAgICBQcm9kdWN0Q29kZTogZGF0YS5Qcm9kdWN0Q29kZSxcbiAgICAgICAgICAgIC4uLmRhdGFcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqID0gcHJvZHVjdFxuICAgICAgICB9XG4gICAgICAgIGRhdGFNYXAucHVzaChvYmopXG4gICAgICB9XG4gICAgKVxuICAgIC8vIGPDosyjcCBuaMOizKN0IGRhbmggc8OhY2ggcHJvZHVjdCBEQlxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhREInLCBKU09OLnN0cmluZ2lmeShkYXRhTWFwKSk7XG4gICAgc2V0THN0UHJvZHVjdERhdGFEQihkYXRhTWFwKTtcbiAgICAvLyBjw6LMo3AgbmjDosyjdCBkYW5oIHPDoWNoIHByb2R1Y3QgVUlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YVVJJywgSlNPTi5zdHJpbmdpZnkoZGF0YU1hcCkpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkoZGF0YU1hcCk7XG4gICAgcm91dGVyLnB1c2goYC9wcm9kdWN0YClcblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsc3RQcm9kdWN0RGF0YVVJLFxuICAgIGxzdFByb2R1Y3REYXRhREIsXG4gICAgaGFuZGxlQ2hhbmdlRmlsdGVyUHJvZHVjdCxcbiAgICBoYW5kbGVFZGl0RGVsZXRlUHJvZHVjdCxcbiAgICBoYW5kbGVDbGVhclN0b3JhZ2UsXG4gICAgaGFuZGxlQ2hlY2tEZWxldGVNYW55LFxuICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RNdWx0aSxcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCLFxuICAgIHNldExzdFByb2R1Y3REYXRhVUksXG4gICAgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0LFxuICAgIGhhbmRsZUNyZWF0ZVByb2R1Y3QsXG4gICAgaGFuZGxlVXBkYXRlUHJvZHVjdFxuICB9XG59Il0sIm5hbWVzIjpbImxzdFByb2R1Y3RzIiwic3RhdHVzQWN0aW9uIiwic3RhdHVzUHJvZHVjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiUHJvZHVjdEhhbmRsZSIsInJvdXRlciIsImxzdFByb2R1Y3REYXRhREIiLCJzZXRMc3RQcm9kdWN0RGF0YURCIiwibHN0UHJvZHVjdERhdGFVSSIsInNldExzdFByb2R1Y3REYXRhVUkiLCJsaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QiLCJzZXRMaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QiLCJkYXRhREIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGF0YVVJIiwiZGF0YURCUGFyc2UiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QiLCJmbGFnQWN0aXZlIiwibGlzdFByb2R1Y3RGaWx0ZXIiLCJmaWx0ZXIiLCJpdGVtIiwiRmxhZ0FjdGl2ZSIsImhhbmRsZUNoYW5nZUZpbHRlclByb2R1Y3QiLCJlIiwidmFsdWVTdGF0dXNQcm9kdWN0IiwidGFyZ2V0IiwidmFsdWUiLCJBTEwiLCJPTl9TQUxFIiwiT0ZGX1NBTEUiLCJoYW5kbGVFZGl0RGVsZXRlUHJvZHVjdCIsInByb2R1Y3RDb2RlIiwidmFsdWVTdGF0dXNBY3Rpb24iLCJFRElUIiwicHVzaCIsIkRFTEVURSIsImhhbmRsZURlbGV0ZVByb2R1Y3RTaW5nbGUiLCJoYW5kbGVDbGVhclN0b3JhZ2UiLCJjbGVhciIsIlByb2R1Y3RDb2RlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhhbmRsZUNoZWNrRGVsZXRlTWFueSIsImRhdGEiLCJoYW5kbGVEZWxldGVQcm9kdWN0TXVsdGkiLCJwcm9kdWN0Q29kZURlbGV0ZXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYWxlcnQiLCJkYXRhVGVtcFByb2R1Y3QiLCJoYW5kbGVDcmVhdGVQcm9kdWN0IiwiUHJvZHVjdCIsInRyaW0iLCJoYW5kbGVVcGRhdGVQcm9kdWN0IiwiZmllbGRzIiwiZGF0YU1hcCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsIm9iaiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./handles/products/product.handle.ts\n"));

/***/ })

});
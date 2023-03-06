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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductHandle; }\n/* harmony export */ });\n/* harmony import */ var _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constant/listProduct */ \"./constant/listProduct.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * ProductHandle: Function để xử lý logic chung cho việc create,update,delete,filter của Product\n * @returns \n */ function ProductHandle() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Data sản phẩm gốc dùng để filter product\n    const [lstProductDataDB, setLstProductDataDB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Data hiển thị ra UI\n    const [lstProductDataUI, setLstProductDataUI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(lstProductDataDB);\n    // Danh sách checkbox xóa nhiều\n    const [listCheckedDeleteProduct, setListCheckedDeleteProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dataDB = localStorage.getItem(\"DataDB\");\n        console.log(\"dataDB========>\", dataDB);\n        // gán danh sách product UI\n        const dataUI = localStorage.getItem(\"DataUI\");\n        const dataDBParse = JSON.parse(dataDB);\n        console.log(\"useEffect\", dataDBParse);\n        if (dataDBParse) {\n            setLstProductDataDB(dataDBParse);\n        } else {\n            setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        }\n        if (dataUI) {\n        // setLstProductDataUI(dataDBParse);\n        }\n    }, []);\n    // Xử lý filter product khi chọn dropdown\n    const handleFilterListProduct = (flagActive)=>{\n        if (flagActive == 2) {\n            setLstProductDataUI(lstProductDataDB);\n        } else {\n            const listProductFilter = lstProductDataDB.filter((item)=>item.FlagActive == flagActive);\n            setLstProductDataUI(listProductFilter);\n        }\n    };\n    // xử lý thay đổi trạng thái filter product dropdown\n    const handleChangeFilterProduct = (e)=>{\n        const valueStatusProduct = e.target.value;\n        if (valueStatusProduct == \"\") return;\n        if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ALL) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.ON_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        } else if (valueStatusProduct == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusProduct.OFF_SALE) {\n            handleFilterListProduct(valueStatusProduct);\n        }\n    };\n    // xử lý xóa sản phẩm\n    const handleEditDeleteProduct = (e, productCode)=>{\n        const valueStatusAction = e.target.value;\n        if (valueStatusAction == \"\") {\n            return;\n        }\n        if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.EDIT) {\n            // Tiến hành edit\n            router.push(\"/product/\".concat(productCode, \"/edit\"));\n        } else if (valueStatusAction == _constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.statusAction.DELETE) {\n            // Tiến hành xóa\n            handleDeleteProductSingle(productCode);\n        }\n    };\n    // clear data storage\n    const handleClearStorage = ()=>{\n        localStorage.clear();\n        setLstProductDataDB(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n        setLstProductDataUI(_constant_listProduct__WEBPACK_IMPORTED_MODULE_0__.lstProducts);\n    };\n    /**\n     * updateStorage: Cần gọi sau khi dữ liệu ở danh sách thay đổi để cập nhật vào localStorage\n     * @returns\n     */ const updateStorage = (newProductList)=>{\n        // gán danh sách product gốc\n        localStorage.setItem(\"DataDB\", JSON.stringify(newProductList));\n        setLstProductDataDB(newProductList);\n        // gán danh sách product UI\n        localStorage.setItem(\"DataUI\", JSON.stringify(newProductList));\n        setLstProductDataUI(newProductList);\n    };\n    // xử lý xóa product single\n    const handleDeleteProductSingle = (productCode)=>{\n        const listProductFilter = lstProductDataUI.filter((item)=>item.ProductCode != productCode);\n        updateStorage(listProductFilter);\n    };\n    //Xử lý gán sản phẩm để xóa nhiều \n    const handleCheckDeleteMany = (productCode)=>{\n        let data = {\n            ...listCheckedDeleteProduct\n        };\n        if (listCheckedDeleteProduct[productCode]) {\n            delete listCheckedDeleteProduct[productCode];\n            data = {\n                ...listCheckedDeleteProduct\n            };\n        } else {\n            data = {\n                ...listCheckedDeleteProduct,\n                [productCode]: productCode\n            };\n        }\n        setListCheckedDeleteProduct(data);\n    };\n    // Tiến hành xóa nhiều sản phẩm\n    const handleDeleteProductMulti = ()=>{\n        let productCodeDeletes = Object.keys(listCheckedDeleteProduct);\n        if (!productCodeDeletes.length) {\n            alert(\"Bạn chưa chọn c\\xe1c sản phẩm để x\\xf3a nhiều\");\n            return;\n        }\n        // Biến tạm danh sách sản phẩm\n        let dataTempProduct;\n        for (const productCode of productCodeDeletes){\n            // nếu xóa lần thứ 2 thì xóa bằng dataTempProduct\n            if (dataTempProduct) {\n                dataTempProduct = dataTempProduct.filter((item)=>item.ProductCode != productCode);\n            } else {\n                // nếu xóa lần đầu tiên thì xóa bằng lstProductDataDB\n                dataTempProduct = lstProductDataDB.filter((item)=>item.ProductCode != productCode);\n            }\n        }\n        updateStorage(dataTempProduct);\n    };\n    // Tiến hành tạo product\n    const handleCreateProduct = (data)=>{\n        //Kiểm tra mã sản phẩm đã tồn tại trong mảng hay chưa\n        for (const Product of lstProductDataDB){\n            if (data.ProductCode.trim() == Product.ProductCode) {\n                alert(\"Mã sản ph\\xe2̉m đã t\\xf4̀n tại, vui lòng nh\\xe2̣p lại!!\");\n                return;\n            }\n        }\n        //Nếu trạng thái được check sẽ gán giá trị 1, ngược lại sẽ là 0\n        if (data.FlagActive == true) {\n            data.FlagActive = 1;\n        } else {\n            data.FlagActive = 0;\n        }\n        updateStorage([\n            ...lstProductDataDB,\n            data\n        ]);\n        alert(\"Th\\xeam sản ph\\xe2̉m thành c\\xf4ng\");\n        router.push(\"/product\");\n    };\n    // Tiến hành update product\n    const handleUpdateProduct = (productCode, data)=>{\n        //Nếu trạng thái được check sẽ gán giá trị 1, ngược lại sẽ là 0\n        if (data.FlagActive == \"true\") {\n            data.FlagActive = 1;\n        } else {\n            data.FlagActive = 0;\n        }\n        console.log(\"data.FlagActive\", data.FlagActive);\n        console.log(\"data\", data);\n        //Biến ghi tạm danh sách sản phẩm\n        let dataTempProduct = lstProductDataDB;\n        const dataMap = [];\n        dataTempProduct.map((product, index)=>{\n            let obj;\n            if (product.ProductCode.trim() == data.ProductCode.trim()) {\n                obj = {\n                    ProductCode: data.ProductCode,\n                    ...data\n                };\n            } else {\n                obj = product;\n            }\n            dataMap.push(obj);\n        });\n        updateStorage(dataMap);\n        router.push(\"/product\");\n    };\n    return {\n        lstProductDataUI,\n        lstProductDataDB,\n        handleChangeFilterProduct,\n        handleEditDeleteProduct,\n        handleClearStorage,\n        handleCheckDeleteMany,\n        handleDeleteProductMulti,\n        setLstProductDataDB,\n        setLstProductDataUI,\n        setListCheckedDeleteProduct,\n        handleCreateProduct,\n        handleUpdateProduct\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ0FxQjtRQUNBUTtRQUNBTztRQUNBTztRQUNBRTtRQUNBNUM7UUFDQUU7UUFDQUU7UUFDQStDO1FBQ0FHO0lBQ0Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hhbmRsZXMvcHJvZHVjdHMvcHJvZHVjdC5oYW5kbGUudHM/NzZkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsc3RQcm9kdWN0cywgc3RhdHVzQWN0aW9uLCBzdGF0dXNQcm9kdWN0IH0gZnJvbSBcIkAvY29uc3RhbnQvbGlzdFByb2R1Y3RcIlxuaW1wb3J0IHsgUHJvZHVjdFJlcyB9IGZyb20gXCJAL3R5cGVzL3BhZ2UvcHJvZHVjdC50eXBlXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuLyoqXG4gKiBQcm9kdWN0SGFuZGxlOiBGdW5jdGlvbiDEkeG7gyB44butIGzDvSBsb2dpYyBjaHVuZyBjaG8gdmnhu4djIGNyZWF0ZSx1cGRhdGUsZGVsZXRlLGZpbHRlciBj4bunYSBQcm9kdWN0XG4gKiBAcmV0dXJucyBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEhhbmRsZSgpOiBQcm9kdWN0UmVzIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgLy8gRGF0YSBz4bqjbiBwaOG6qW0gZ+G7kWMgZMO5bmcgxJHhu4MgZmlsdGVyIHByb2R1Y3RcbiAgY29uc3QgW2xzdFByb2R1Y3REYXRhREIsIHNldExzdFByb2R1Y3REYXRhREJdID0gdXNlU3RhdGU8YW55PihbXSlcbiAgLy8gRGF0YSBoaeG7g24gdGjhu4sgcmEgVUlcbiAgY29uc3QgW2xzdFByb2R1Y3REYXRhVUksIHNldExzdFByb2R1Y3REYXRhVUldID0gdXNlU3RhdGUobHN0UHJvZHVjdERhdGFEQilcbiAgLy8gRGFuaCBzw6FjaCBjaGVja2JveCB4w7NhIG5oaeG7gXVcbiAgY29uc3QgW2xpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCwgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0XSA9IHVzZVN0YXRlPGFueT4oe30pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGF0YURCOiBhbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRGF0YURCJyk7XG4gICAgY29uc29sZS5sb2coJ2RhdGFEQj09PT09PT09PicsZGF0YURCKTtcbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBVSVxuICAgIGNvbnN0IGRhdGFVSSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdEYXRhVUknKTtcbiAgICBjb25zdCBkYXRhREJQYXJzZSA9IEpTT04ucGFyc2UoZGF0YURCKVxuICAgIGNvbnNvbGUubG9nKCd1c2VFZmZlY3QnLCBkYXRhREJQYXJzZSlcbiAgICBpZiAoZGF0YURCUGFyc2UpIHtcbiAgICAgIHNldExzdFByb2R1Y3REYXRhREIoZGF0YURCUGFyc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxzdFByb2R1Y3RzKVxuICAgIH1cbiAgICBpZiAoZGF0YVVJKSB7XG4gICAgICAvLyBzZXRMc3RQcm9kdWN0RGF0YVVJKGRhdGFEQlBhcnNlKTtcbiAgICB9XG4gIH0sIFtdKVxuXG4gIC8vIFjhu60gbMO9IGZpbHRlciBwcm9kdWN0IGtoaSBjaOG7jW4gZHJvcGRvd25cbiAgY29uc3QgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QgPSAoZmxhZ0FjdGl2ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKGZsYWdBY3RpdmUgPT0gMikge1xuICAgICAgc2V0THN0UHJvZHVjdERhdGFVSShsc3RQcm9kdWN0RGF0YURCKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGlzdFByb2R1Y3RGaWx0ZXIgPSBsc3RQcm9kdWN0RGF0YURCLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLkZsYWdBY3RpdmUgPT0gZmxhZ0FjdGl2ZSlcbiAgICAgIHNldExzdFByb2R1Y3REYXRhVUkobGlzdFByb2R1Y3RGaWx0ZXIpXG4gICAgfVxuXG4gIH1cblxuICAvLyB44butIGzDvSB0aGF5IMSR4buVaSB0cuG6oW5nIHRow6FpIGZpbHRlciBwcm9kdWN0IGRyb3Bkb3duXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUZpbHRlclByb2R1Y3QgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgdmFsdWVTdGF0dXNQcm9kdWN0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBcIlwiKSByZXR1cm47XG4gICAgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0LkFMTCkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlU3RhdHVzUHJvZHVjdCA9PSBzdGF0dXNQcm9kdWN0Lk9OX1NBTEUpIHtcbiAgICAgIGhhbmRsZUZpbHRlckxpc3RQcm9kdWN0KHZhbHVlU3RhdHVzUHJvZHVjdCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZVN0YXR1c1Byb2R1Y3QgPT0gc3RhdHVzUHJvZHVjdC5PRkZfU0FMRSkge1xuICAgICAgaGFuZGxlRmlsdGVyTGlzdFByb2R1Y3QodmFsdWVTdGF0dXNQcm9kdWN0KTtcbiAgICB9XG4gIH1cblxuICAvLyB44butIGzDvSB4w7NhIHPhuqNuIHBo4bqpbVxuICBjb25zdCBoYW5kbGVFZGl0RGVsZXRlUHJvZHVjdCA9IChlOiBhbnksIHByb2R1Y3RDb2RlOiBhbnkpID0+IHtcbiAgICBjb25zdCB2YWx1ZVN0YXR1c0FjdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWx1ZVN0YXR1c0FjdGlvbiA9PSBzdGF0dXNBY3Rpb24uRURJVCkge1xuICAgICAgLy8gVGnhur9uIGjDoG5oIGVkaXRcbiAgICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3RDb2RlfS9lZGl0YClcblxuICAgIH0gZWxzZSBpZiAodmFsdWVTdGF0dXNBY3Rpb24gPT0gc3RhdHVzQWN0aW9uLkRFTEVURSkge1xuICAgICAgLy8gVGnhur9uIGjDoG5oIHjDs2FcbiAgICAgIGhhbmRsZURlbGV0ZVByb2R1Y3RTaW5nbGUocHJvZHVjdENvZGUpXG4gICAgfVxuICB9XG5cbiAgLy8gY2xlYXIgZGF0YSBzdG9yYWdlXG4gIGNvbnN0IGhhbmRsZUNsZWFyU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKGxzdFByb2R1Y3RzKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YVVJKGxzdFByb2R1Y3RzKTtcbiAgfVxuXG4gICAgLyoqXG4gICAgICogdXBkYXRlU3RvcmFnZTogQ8OizIBuIGdvzKNpIHNhdSBraGkgZMawzIMgbGnDqsyjdSDGocyJIGRhbmggc2HMgWNoIHRoYXkgxJHDtMyJaSDEkcOqzIkgY8OizKNwIG5ow6LMo3QgdmHMgG8gbG9jYWxTdG9yYWdlXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgY29uc3QgdXBkYXRlU3RvcmFnZSA9IChuZXdQcm9kdWN0TGlzdDpBcnJheTxPYmplY3Q+KT0+e1xuXG4gICAgLy8gZ8OhbiBkYW5oIHPDoWNoIHByb2R1Y3QgZ+G7kWNcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnRGF0YURCJywgSlNPTi5zdHJpbmdpZnkobmV3UHJvZHVjdExpc3QpKTtcbiAgICBzZXRMc3RQcm9kdWN0RGF0YURCKG5ld1Byb2R1Y3RMaXN0KTtcbiAgICAvLyBnw6FuIGRhbmggc8OhY2ggcHJvZHVjdCBVSVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdEYXRhVUknLCBKU09OLnN0cmluZ2lmeShuZXdQcm9kdWN0TGlzdCkpO1xuICAgIHNldExzdFByb2R1Y3REYXRhVUkobmV3UHJvZHVjdExpc3QpO1xuICB9XG4gIC8vIHjhu60gbMO9IHjDs2EgcHJvZHVjdCBzaW5nbGVcbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZSA9IChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbGlzdFByb2R1Y3RGaWx0ZXIgPSBsc3RQcm9kdWN0RGF0YVVJLmZpbHRlcigoaXRlbTogYW55KSA9PiBpdGVtLlByb2R1Y3RDb2RlICE9IHByb2R1Y3RDb2RlKVxuICAgIHVwZGF0ZVN0b3JhZ2UobGlzdFByb2R1Y3RGaWx0ZXIpO1xuICB9XG5cbiAgLy9Y4butIGzDvSBnw6FuIHPhuqNuIHBo4bqpbSDEkeG7gyB4w7NhIG5oaeG7gXUgXG4gIGNvbnN0IGhhbmRsZUNoZWNrRGVsZXRlTWFueSA9IChwcm9kdWN0Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgIC4uLmxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICB9XG5cbiAgICBpZiAobGlzdENoZWNrZWREZWxldGVQcm9kdWN0W3Byb2R1Y3RDb2RlXSkge1xuICAgICAgZGVsZXRlIGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdFtwcm9kdWN0Q29kZV07XG4gICAgICBkYXRhID0ge1xuICAgICAgICAuLi5saXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIC4uLmxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCxcbiAgICAgICAgW3Byb2R1Y3RDb2RlXTogcHJvZHVjdENvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0TGlzdENoZWNrZWREZWxldGVQcm9kdWN0KGRhdGEpO1xuXG4gIH1cblxuICAvLyBUaeG6v24gaMOgbmggeMOzYSBuaGnhu4F1IHPhuqNuIHBo4bqpbVxuICBjb25zdCBoYW5kbGVEZWxldGVQcm9kdWN0TXVsdGkgPSAoKSA9PiB7XG4gICAgbGV0IHByb2R1Y3RDb2RlRGVsZXRlcyA9IE9iamVjdC5rZXlzKGxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCk7XG4gICAgaWYgKCFwcm9kdWN0Q29kZURlbGV0ZXMubGVuZ3RoKSB7XG4gICAgICBhbGVydCgnQuG6oW4gY2jGsGEgY2jhu41uIGPDoWMgc+G6o24gcGjhuqltIMSR4buDIHjDs2Egbmhp4buBdScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBCaeG6v24gdOG6oW0gZGFuaCBzw6FjaCBz4bqjbiBwaOG6qW1cbiAgICBsZXQgZGF0YVRlbXBQcm9kdWN0XG4gICAgZm9yIChjb25zdCBwcm9kdWN0Q29kZSBvZiBwcm9kdWN0Q29kZURlbGV0ZXMpIHtcbiAgICAgIC8vIG7hur91IHjDs2EgbOG6p24gdGjhu6kgMiB0aMOsIHjDs2EgYuG6sW5nIGRhdGFUZW1wUHJvZHVjdFxuICAgICAgaWYgKGRhdGFUZW1wUHJvZHVjdCkge1xuICAgICAgICBkYXRhVGVtcFByb2R1Y3QgPSBkYXRhVGVtcFByb2R1Y3QuZmlsdGVyKChpdGVtOiBhbnkpID0+IGl0ZW0uUHJvZHVjdENvZGUgIT0gcHJvZHVjdENvZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBu4bq/dSB4w7NhIGzhuqduIMSR4bqndSB0acOqbiB0aMOsIHjDs2EgYuG6sW5nIGxzdFByb2R1Y3REYXRhREJcbiAgICAgICAgZGF0YVRlbXBQcm9kdWN0ID0gbHN0UHJvZHVjdERhdGFEQi5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbS5Qcm9kdWN0Q29kZSAhPSBwcm9kdWN0Q29kZSlcblxuICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVTdG9yYWdlKGRhdGFUZW1wUHJvZHVjdCk7XG4gIH1cblxuICAvLyBUaeG6v24gaMOgbmggdOG6oW8gcHJvZHVjdFxuICBjb25zdCBoYW5kbGVDcmVhdGVQcm9kdWN0ID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIC8vS2nDqsyJbSB0cmEgbWHMgyBzYcyJbiBwaMOizIltIMSRYcyDIHTDtMyAbiB0YcyjaSB0cm9uZyBtYcyJbmcgaGF5IGNoxrBhXG4gICAgZm9yIChjb25zdCBQcm9kdWN0IG9mIGxzdFByb2R1Y3REYXRhREIpIHtcbiAgICAgIGlmIChkYXRhLlByb2R1Y3RDb2RlLnRyaW0oKSA9PSBQcm9kdWN0LlByb2R1Y3RDb2RlKSB7XG4gICAgICAgIGFsZXJ0KCdNYcyDIHNhzIluIHBow6LMiW0gxJFhzIMgdMO0zIBuIHRhzKNpLCB2dWkgbG/MgG5nIG5ow6LMo3AgbGHMo2khIScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICAvL07DqsyBdSB0cmHMo25nIHRoYcyBaSDEkcawxqHMo2MgY2hlY2sgc2XMgyBnYcyBbiBnaWHMgSB0cmnMoyAxLCBuZ8awxqHMo2MgbGHMo2kgc2XMgyBsYcyAIDBcbiAgICBpZiAoZGF0YS5GbGFnQWN0aXZlID09IHRydWUpe1xuICAgICAgZGF0YS5GbGFnQWN0aXZlID0gMTtcbiAgICB9ZWxzZXtcbiAgICAgIGRhdGEuRmxhZ0FjdGl2ZSA9IDA7XG4gICAgfVxuICAgIHVwZGF0ZVN0b3JhZ2UoWy4uLmxzdFByb2R1Y3REYXRhREIsIGRhdGFdKTtcbiAgICBhbGVydCgnVGjDqm0gc2HMiW4gcGjDosyJbSB0aGHMgG5oIGPDtG5nJyk7XG4gICAgcm91dGVyLnB1c2goYC9wcm9kdWN0YCk7XG4gIH1cblxuICAvLyBUaeG6v24gaMOgbmggdXBkYXRlIHByb2R1Y3RcbiAgY29uc3QgaGFuZGxlVXBkYXRlUHJvZHVjdCA9IChwcm9kdWN0Q29kZTogYW55LCBkYXRhOiBhbnkpID0+IHtcbiAgICBcbiAgICAvL07DqsyBdSB0cmHMo25nIHRoYcyBaSDEkcawxqHMo2MgY2hlY2sgc2XMgyBnYcyBbiBnaWHMgSB0cmnMoyAxLCBuZ8awxqHMo2MgbGHMo2kgc2XMgyBsYcyAIDBcbiAgICBpZiAoZGF0YS5GbGFnQWN0aXZlID09ICd0cnVlJyApe1xuICAgICAgZGF0YS5GbGFnQWN0aXZlID0gMTtcbiAgICB9ZWxzZXtcbiAgICAgIGRhdGEuRmxhZ0FjdGl2ZSA9IDA7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdkYXRhLkZsYWdBY3RpdmUnLGRhdGEuRmxhZ0FjdGl2ZSk7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnLGRhdGEpO1xuXG4gICAgXG4gICAgLy9CacOqzIFuIGdoaSB0YcyjbSBkYW5oIHNhzIFjaCBzYcyJbiBwaMOizIltXG4gICAgbGV0IGRhdGFUZW1wUHJvZHVjdCA9IGxzdFByb2R1Y3REYXRhREJcbiAgICBjb25zdCBkYXRhTWFwOiBhbnkgPSBbXVxuICAgIGRhdGFUZW1wUHJvZHVjdC5tYXAoXG4gICAgICAocHJvZHVjdDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGxldCBvYmo6IGFueTtcbiAgICAgICAgaWYgKHByb2R1Y3QuUHJvZHVjdENvZGUudHJpbSgpID09IGRhdGEuUHJvZHVjdENvZGUudHJpbSgpKSB7XG4gICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgUHJvZHVjdENvZGU6IGRhdGEuUHJvZHVjdENvZGUsXG4gICAgICAgICAgICAuLi5kYXRhXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iaiA9IHByb2R1Y3RcbiAgICAgICAgfVxuICAgICAgICBkYXRhTWFwLnB1c2gob2JqKVxuICAgICAgfVxuICAgIClcbiAgICB1cGRhdGVTdG9yYWdlKGRhdGFNYXApO1xuICAgIHJvdXRlci5wdXNoKGAvcHJvZHVjdGApO1xuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxzdFByb2R1Y3REYXRhVUksXG4gICAgbHN0UHJvZHVjdERhdGFEQixcbiAgICBoYW5kbGVDaGFuZ2VGaWx0ZXJQcm9kdWN0LFxuICAgIGhhbmRsZUVkaXREZWxldGVQcm9kdWN0LFxuICAgIGhhbmRsZUNsZWFyU3RvcmFnZSxcbiAgICBoYW5kbGVDaGVja0RlbGV0ZU1hbnksXG4gICAgaGFuZGxlRGVsZXRlUHJvZHVjdE11bHRpLFxuICAgIHNldExzdFByb2R1Y3REYXRhREIsXG4gICAgc2V0THN0UHJvZHVjdERhdGFVSSxcbiAgICBzZXRMaXN0Q2hlY2tlZERlbGV0ZVByb2R1Y3QsXG4gICAgaGFuZGxlQ3JlYXRlUHJvZHVjdCxcbiAgICBoYW5kbGVVcGRhdGVQcm9kdWN0XG4gIH1cbn0iXSwibmFtZXMiOlsibHN0UHJvZHVjdHMiLCJzdGF0dXNBY3Rpb24iLCJzdGF0dXNQcm9kdWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJQcm9kdWN0SGFuZGxlIiwicm91dGVyIiwibHN0UHJvZHVjdERhdGFEQiIsInNldExzdFByb2R1Y3REYXRhREIiLCJsc3RQcm9kdWN0RGF0YVVJIiwic2V0THN0UHJvZHVjdERhdGFVSSIsImxpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCIsInNldExpc3RDaGVja2VkRGVsZXRlUHJvZHVjdCIsImRhdGFEQiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGF0YVVJIiwiZGF0YURCUGFyc2UiLCJKU09OIiwicGFyc2UiLCJoYW5kbGVGaWx0ZXJMaXN0UHJvZHVjdCIsImZsYWdBY3RpdmUiLCJsaXN0UHJvZHVjdEZpbHRlciIsImZpbHRlciIsIml0ZW0iLCJGbGFnQWN0aXZlIiwiaGFuZGxlQ2hhbmdlRmlsdGVyUHJvZHVjdCIsImUiLCJ2YWx1ZVN0YXR1c1Byb2R1Y3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkFMTCIsIk9OX1NBTEUiLCJPRkZfU0FMRSIsImhhbmRsZUVkaXREZWxldGVQcm9kdWN0IiwicHJvZHVjdENvZGUiLCJ2YWx1ZVN0YXR1c0FjdGlvbiIsIkVESVQiLCJwdXNoIiwiREVMRVRFIiwiaGFuZGxlRGVsZXRlUHJvZHVjdFNpbmdsZSIsImhhbmRsZUNsZWFyU3RvcmFnZSIsImNsZWFyIiwidXBkYXRlU3RvcmFnZSIsIm5ld1Byb2R1Y3RMaXN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlByb2R1Y3RDb2RlIiwiaGFuZGxlQ2hlY2tEZWxldGVNYW55IiwiZGF0YSIsImhhbmRsZURlbGV0ZVByb2R1Y3RNdWx0aSIsInByb2R1Y3RDb2RlRGVsZXRlcyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJhbGVydCIsImRhdGFUZW1wUHJvZHVjdCIsImhhbmRsZUNyZWF0ZVByb2R1Y3QiLCJQcm9kdWN0IiwidHJpbSIsImhhbmRsZVVwZGF0ZVByb2R1Y3QiLCJkYXRhTWFwIiwibWFwIiwicHJvZHVjdCIsImluZGV4Iiwib2JqIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./handles/products/product.handle.ts\n"));

/***/ })

});
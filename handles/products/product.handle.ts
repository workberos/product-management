import { lstProducts, statusAction, statusProduct } from "@/constant/listProduct"
import { ProductRes } from "@/types/page/product.type"
import { useState } from "react"
import { useRouter } from 'next/router'


/**
 * ProductHandle: Function để xử lý logic chung cho việc create,update,delete,filter của Product
 * @returns 
 */
export default function ProductHandle(): ProductRes {
  const router = useRouter()
  // Data sản phẩm gốc dùng để filter product
  const [lstProductDataDB, setLstProductDataDB] = useState<any>(lstProducts)
  // Data hiển thị ra UI
  const [lstProductDataUI, setLstProductDataUI] = useState(lstProductDataDB)
  // Danh sách checkbox xóa nhiều
  const [listCheckedDeleteProduct, setListCheckedDeleteProduct] = useState<any>({})

  // Xử lý filter product khi chọn dropdown
  const handleFilterListProduct = (flagActive: number) => {
    if (flagActive == 2) {
      setLstProductDataUI(lstProductDataDB);
    } else {
      const listProductFilter = lstProductDataDB.filter((item: any) => item.FlagActive == flagActive)
      setLstProductDataUI(listProductFilter)
    }

  }

  // xử lý thay đổi trạng thái filter product dropdown
  const handleChangeFilterProduct = (e: any) => {
    const valueStatusProduct = e.target.value;
    if (valueStatusProduct == "") return;
    if (valueStatusProduct == statusProduct.ALL) {
      handleFilterListProduct(valueStatusProduct);
    } else if (valueStatusProduct == statusProduct.ON_SALE) {
      handleFilterListProduct(valueStatusProduct);
    } else if (valueStatusProduct == statusProduct.OFF_SALE) {
      handleFilterListProduct(valueStatusProduct);
    }
  }

  // xử lý xóa sản phẩm
  const handleEditDeleteProduct = (e: any, productCode: any) => {
    const valueStatusAction = e.target.value;
    if (valueStatusAction == "") {
      return;
    }
    if (valueStatusAction == statusAction.EDIT) {
      // Tiến hành edit
      router.push(`/product/${productCode}/edit`)

    } else if (valueStatusAction == statusAction.DELETE) {
      // Tiến hành xóa
      handleDeleteProductSingle(productCode)
    }
  }

  // clear data storage
  const handleClearStorage = () => {
    localStorage.clear();
    setLstProductDataDB(lstProducts);
    setLstProductDataUI(lstProducts);
  }

  // xử lý xóa product single
  const handleDeleteProductSingle = (productCode: string) => {
    const listProductFilter = lstProductDataUI.filter((item: any) => item.ProductCode != productCode)
    // gán danh sách product gốc
    localStorage.setItem('DataDB', JSON.stringify(listProductFilter));
    setLstProductDataDB(listProductFilter);
    // gán danh sách product UI
    localStorage.setItem('DataUI', JSON.stringify(listProductFilter));
    setLstProductDataUI(listProductFilter);
  }

  //Xử lý gán sản phẩm để xóa nhiều 
  const handleCheckDeleteMany = (productCode: string) => {
    let data: any = {
      ...listCheckedDeleteProduct,
    }

    if (listCheckedDeleteProduct[productCode]) {
      delete listCheckedDeleteProduct[productCode];
      data = {
        ...listCheckedDeleteProduct,
      }
    } else {
      data = {
        ...listCheckedDeleteProduct,
        [productCode]: productCode
      }
    }
    setListCheckedDeleteProduct(data);

  }

  // Tiến hành xóa nhiều sản phẩm
  const handleDeleteProductMulti = () => {
    let productCodeDeletes = Object.keys(listCheckedDeleteProduct);
    if (!productCodeDeletes.length) {
      alert('Bạn chưa chọn các sản phẩm để xóa nhiều');
      return;
    }
    // Biến tạm danh sách sản phẩm
    let dataTempProduct
    for (const productCode of productCodeDeletes) {
      // nếu xóa lần thứ 2 thì xóa bằng dataTempProduct
      if (dataTempProduct) {
        dataTempProduct = dataTempProduct.filter((item: any) => item.ProductCode != productCode)
      } else {
        // nếu xóa lần đầu tiên thì xóa bằng lstProductDataDB
        dataTempProduct = lstProductDataDB.filter((item: any) => item.ProductCode != productCode)

      }
    }
    // gán danh sách product DB
    localStorage.setItem('DataDB', JSON.stringify(dataTempProduct));
    setLstProductDataDB(dataTempProduct);
    // gán danh sách product UI
    localStorage.setItem('DataUI', JSON.stringify(dataTempProduct));
    setLstProductDataUI(dataTempProduct);
  }

  // Tiến hành tạo product
  const handleCreateProduct = (data: any) => {
    //Kiểm tra mã sản phẩm đã tồn tại trong mảng hay chưa
    for (const Product of lstProductDataDB) {
      if (data.ProductCode.trim() == Product.ProductCode) {
        alert('Mã sản phẩm đã tồn tại, vui lòng nhập lại!!')
        return
      }
    }
    // cập nhật danh sách product DB
    localStorage.setItem('DataDB', JSON.stringify([...lstProductDataDB, data]));
    setLstProductDataDB([...lstProductDataDB, data]);
    // cập nhật danh sách product UI
    localStorage.setItem('DataUI', JSON.stringify([...lstProductDataDB, data]));
    setLstProductDataUI([...lstProductDataUI, data]);
    alert('Thêm sản phẩm thành công')
  }

  // Tiến hành update product
  const handleUpdateProduct = (productCode: any, data: any) => {
    // console.log('handleUpdateProduct productCode======', productCode);
    // console.log('handleUpdateProduct data======', data);
    let dataTempProduct = lstProductDataDB
    //Biến ghi tạm danh sách sản phẩm

    // const fields = ['ProductCode', 'ProductName', 'Price', 'UPDc', 'FlagActive'];
    // dataTempProduct.filter(
    //   (product : any) => {
    //     return product
    //   }
    // )




    for (const x in lstProductDataDB) {
      if (lstProductDataDB[x].ProductCode == productCode) {
        console.log('Product', lstProductDataDB[x])
        dataTempProduct[x] = data
        localStorage.setItem('DataDB', JSON.stringify(dataTempProduct));
        setLstProductDataDB(dataTempProduct);
        // cập nhật danh sách product UI
        localStorage.setItem('DataUI', JSON.stringify(dataTempProduct));
        setLstProductDataUI(dataTempProduct);
        alert('Update thành công')
        return
      }
    }

  }

  return {
    lstProductDataUI,
    lstProductDataDB,
    handleChangeFilterProduct,
    handleEditDeleteProduct,
    handleClearStorage,
    handleCheckDeleteMany,
    handleDeleteProductMulti,
    setLstProductDataDB,
    setLstProductDataUI,
    setListCheckedDeleteProduct,
    handleCreateProduct,
    handleUpdateProduct
  }
}
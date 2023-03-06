import { lstProducts, statusAction, statusProduct } from "@/constant/listProduct"
import { ProductRes } from "@/types/page/product.type"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'


/**
 * ProductHandle: Function để xử lý logic chung cho việc create,update,delete,filter của Product
 * @returns 
 */
export default function ProductHandle(): ProductRes {
  const router = useRouter()
  // Data sản phẩm gốc dùng để filter product
  const [lstProductDataDB, setLstProductDataDB] = useState<any>([])
  // Data hiển thị ra UI
  const [lstProductDataUI, setLstProductDataUI] = useState(lstProductDataDB)
  // Danh sách checkbox xóa nhiều
  const [listCheckedDeleteProduct, setListCheckedDeleteProduct] = useState<any>({})
  useEffect(() => {
    const dataDB: any = localStorage.getItem('DataDB');
    console.log('dataDB========>',dataDB);
    // gán danh sách product UI
    const dataUI = localStorage.getItem('DataUI');
    const dataDBParse = JSON.parse(dataDB)
    console.log('useEffect', dataDBParse)
    if (dataDBParse) {
      setLstProductDataDB(dataDBParse);
    } else {
      setLstProductDataDB(lstProducts)
    }
    if (dataUI) {
      // setLstProductDataUI(dataDBParse);
    }
  }, [])

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

    /**
     * updateStorage: Cần gọi sau khi dữ liệu ở danh sách thay đổi để cập nhật vào localStorage
     * @returns
     */
  const updateStorage = (newProductList:Array<Object>)=>{

    // gán danh sách product gốc
    localStorage.setItem('DataDB', JSON.stringify(newProductList));
    setLstProductDataDB(newProductList);
    // gán danh sách product UI
    localStorage.setItem('DataUI', JSON.stringify(newProductList));
    setLstProductDataUI(newProductList);
  }
  // xử lý xóa product single
  const handleDeleteProductSingle = (productCode: string) => {
    const listProductFilter = lstProductDataUI.filter((item: any) => item.ProductCode != productCode)
    updateStorage(listProductFilter);
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
    updateStorage(dataTempProduct);
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
    //Nếu trạng thái được check sẽ gán giá trị 1, ngược lại sẽ là 0
    if (data.FlagActive == true){
      data.FlagActive = 1;
    }else{
      data.FlagActive = 0;
    }
    updateStorage([...lstProductDataDB, data]);
    alert('Thêm sản phẩm thành công');
    router.push(`/product`);
  }

  // Tiến hành update product
  const handleUpdateProduct = (productCode: any, data: any) => {
    
    //Nếu trạng thái được check sẽ gán giá trị 1, ngược lại sẽ là 0
    if (data.FlagActive == 'true' ){
      data.FlagActive = 1;
    }else{
      data.FlagActive = 0;
    }
    console.log('data.FlagActive',data.FlagActive);
    console.log('data',data);

    
    //Biến ghi tạm danh sách sản phẩm
    let dataTempProduct = lstProductDataDB
    const dataMap: any = []
    dataTempProduct.map(
      (product: any, index: number) => {
        let obj: any;
        if (product.ProductCode.trim() == data.ProductCode.trim()) {
          obj = {
            ProductCode: data.ProductCode,
            ...data
          }
        } else {
          obj = product
        }
        dataMap.push(obj)
      }
    )
    updateStorage(dataMap);
    router.push(`/product`);

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
import ProductHandle from '@/handles/products/product.handle';
import { ProductRes } from '@/types/page/product.type';
import Link from 'next/link';
import { useEffect } from 'react';
import { lstProducts } from '../../constant/listProduct';
function ListProduct() {
  const {
    lstProductDataUI = [],
    handleChangeFilterProduct,
    handleEditDeleteProduct,
    handleClearStorage,
    handleCheckDeleteMany,
    handleDeleteProductMulti,
    setLstProductDataDB,
    setLstProductDataUI,
  }: ProductRes = ProductHandle();

  useEffect(() => {
    const dataDBStorage = localStorage.getItem('DataDB');
    const dataUIStorage = localStorage.getItem('DataUI');
    if (!dataDBStorage) {
      localStorage.setItem('DataDB', JSON.stringify(lstProducts));
    } else {
      const dataDBStorageParseToObject = JSON.parse(dataDBStorage)
      setLstProductDataDB(dataDBStorageParseToObject)
      localStorage.setItem('DataDB', JSON.stringify(dataDBStorageParseToObject));
    }

    if (!dataUIStorage) {
      localStorage.setItem('DataUI', JSON.stringify(lstProducts));
    } else {
      const dataUIStorageParseToObject = JSON.parse(dataUIStorage)
      setLstProductDataUI(dataUIStorageParseToObject)
      localStorage.setItem('DataUI', JSON.stringify(dataUIStorageParseToObject));

    }
  }, [])


  return (
    <div className='view'>
      <nav>
        <select id="mySelect" onChange={handleChangeFilterProduct}>
          <option value="2" defaultChecked>Tất cả</option>
          <option value="1">Đang kinh doanh</option>
          <option value="0">Ngừng kinh doanh</option>
        </select>
        <button type="button" onClick={handleDeleteProductMulti}>Tiến hành xóa nhiều</button>
        <button><Link href="/product/create">Tiến hành add product</Link></button>
        <button type="button" onClick={handleClearStorage}>Tiến hành xóa storage</button>

      </nav>
      <table border={1}>
        <tbody>
          <tr>
            <th>STT </th>
            <th>Actions </th>
            <th>Check </th>
            <th>Mã sản phẩm </th>
            <th>Tên sản phẩm </th>
            <th>Giá sản phẩm </th>
            {/* <th>% khuyen mai</th> */}
            <th> Giá khuyến mại </th>
            {/* <th>Khuyen mai theo gia</th>
            <th>Thuong hieu</th>
            <th>Nhom san pham</th> */}
            <th> Trạng thái </th>
          </tr>
          {lstProductDataUI.map((product: any, index: any) => {
            return (
              <tr key={product.ProductCode}>
                <td>{index + 1}</td>
                <td>
                  <select style={{ fontWeight: 'bold', }} onChange={(e) => handleEditDeleteProduct(e, product.ProductCode)}>
                    <option value=""></option>
                    <option value="edit">Edit</option>
                    <option value="delete">Delete</option>
                  </select>
                </td>
                <td><input type="checkbox" className="selectsingle" value={product.ProductCode} onChange={() => handleCheckDeleteMany(product.ProductCode)} />
                  &nbsp;&nbsp;
                </td>
                <td>{product.ProductCode}</td>
                <td>{product.ProductName}</td>
                <td>{product.Price}</td>
                {/* <td>{product.UPRateDc}</td> */}
                <td>{product.UPDc}</td>
                {/* <td>{product.FlagPrice}</td>
                <td>{product.BrandCode}</td>
                <td>{product.CateProCode}</td> */}
                <td>{product.FlagActive}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListProduct;
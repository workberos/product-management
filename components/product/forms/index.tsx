import ProductHandle from "@/handles/products/product.handle";
import { ProductRes } from "@/types/page/product.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import React, { useRef } from 'react';

// validate Form
const validateSchemaProduct = yup.object().shape({
  ProductCode: yup.string().required(),
  ProductName: yup.string().required(),
  Price: yup.string().required(),
  UPDc: yup.string().required(),
  FlagActive: yup.string().required(),

});

function ProductForm({ isUpdateMode = false }: any) {
  // Các hàm của next giúp lấy id trên trình duyệt
  const router = useRouter()
  const { id } = router.query

  // Các hàm xử lý create + update product
  const {
    handleCreateProduct,
    handleUpdateProduct,
    lstProductDataDB,
  }: ProductRes = ProductHandle();

  // Các hàm của react-hook-form
  const {
    register,//hàm theo dõi thay đổi của field
    handleSubmit,//hàm để xử lý submit form
    setValue,//Để set giá trị của từng field của form
    formState: { errors } //quản lý lỗi của form
  } = useForm({
    resolver: yupResolver(validateSchemaProduct)
  });

  // Tiến hành submit form
  const onSubmit = (data: any) => {
    // Nếu là page edit thì tiến hành update product
    if (isUpdateMode) {
      handleUpdateProduct(id, data);

    } else {
      // Nếu là page update edit thì tiến hành update product
      handleCreateProduct(data)
      console.log('lstProductDataDB when add new item', lstProductDataDB);


    }
  };

  // Tiến hành check chế độ page(create hay update) + id để lấy ra thông tin của product để fill vào form khi tiến hành edit
  useEffect(() => {
    if (isUpdateMode) {
      if (id && lstProductDataDB) {
        // dựa vào id trên trình duyệt lấy ra thông tin product
        const productInfo = lstProductDataDB.find((item: any) => item.ProductCode == id);
        // Danh sách các field của form
        const fields = ['ProductCode', 'ProductName', 'Price', 'UPDc', 'FlagActive'];
        // Tiến hành set value vào form khi edit
        fields.forEach(field => setValue(field, productInfo[field]));
      }
    }
  }, [isUpdateMode]);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isUpdateMode ? '' :
        <div>
          <label>Mã Sản Phẩm</label>
          <input  {...register("ProductCode")} />
          {errors.ProductCode && <p>{errors?.ProductCode?.message?.toString()}</p>}
        </div>}
      <div>
        <label>Tên Sản Phẩm</label>
        <input {...register("ProductName")} />
        {errors.ProductName && <p>{errors?.ProductName?.message?.toString()}</p>}
      </div>
      <div>
        <label>Giá</label>
        <input {...register("Price")} />
        {errors.Price && <p>{errors?.Price?.message?.toString()}</p>}
      </div>
      <div>
        <label>Giá Khuyến Mại</label>
        <input {...register("UPDc")} />
        {errors.UPDc && <p>{errors?.UPDc?.message?.toString()}</p>}
      </div>
      <div>
        <label>Trạng Thái</label>
        <input type="checkbox" {...register("FlagActive")} />

        {errors.FlagActive && <p>{errors?.FlagActive?.message?.toString()}</p>}
      </div>
      {isUpdateMode ?
        <input type="submit" value="Cập nhật" /> : <input type="submit" value="Tạo mới" />}
    </form>
  );
}
export default ProductForm

const statusProduct = {
    ALL: 2,
    ON_SALE: 1,
    OFF_SALE: 0
}

const statusAction = {
    EDIT:'edit',
    DELETE:'delete'
}

const lstBrands = [
    {
        BrandCode: 'IPHONE',
        BrandName: 'iPhone',
        FlagActive: 1,
    },
    {
        BrandCode: 'SAMSUNG',
        BrandName: 'Samsung',
        FlagActive: 1,
    },
    {
        BrandCode: 'OPPO',
        BrandName: 'Oppo',
        FlagActive: 1,
    },
    {
        BrandCode: 'XIAOMI',
        BrandName: 'Xiaomi',
        FlagActive: 1,
    },
];
const lstCatePros = [
    {
        CateProCode: 'DIENTHOAI',
        CateProName: 'Điện thoại',
        FlagActive: 1,
    },
    {
        CateProCode: 'MAYTINH',
        CateProName: 'Máy tính',
        FlagActive: 1,
    },
    {
        CateProCode: 'DONGHO',
        CateProName: 'Đồng hồ',
        FlagActive: 1,
    },
];
const lstProducts = [
    {
        BrandCode: 'SAMSUNG',
        CateProCode: 'DIENTHOAI',
        ProductCode: 'GALAXYS22ULTRA',
        ProductName: 'Galaxy S22 Ultra 5G 128GB',
        Price: 27000000,
        UPDc: 2000000,
        UPRateDc: 0,
        FlagPrice: 1,
        FlagActive: 0,
    },
    {
        BrandCode: 'SAMSUNG',
        CateProCode: 'DIENTHOAI',
        ProductCode: 'GALAXYZFLIP3',
        ProductName: 'Galaxy Z Flip3 5G 256GB',
        Price: 17000000,
        UPDc: 1700000,
        UPRateDc: 10,
        FlagPrice: 0,
        FlagActive: 1,
    },
    {
        BrandCode: 'IPHONE',
        CateProCode: 'DIENTHOAI',
        ProductCode: 'IPHONE13PROMAX',
        ProductName: 'iPhone 13 Pro Max 128GB',
        Price: 29000000,
        UPDc: 2900000,
        UPRateDc: 10,
        FlagPrice: 0,
        FlagActive: 1,
    },
    {
        BrandCode: 'IPHONE',
        CateProCode: 'DIENTHOAI',
        ProductCode: 'IPHONE13MINI',
        ProductName: 'iPhone 13 Mini 526GB',
        Price: 24000000,
        UPDc: 3000000,
        UPRateDc: 0,
        FlagPrice: 1,
        FlagActive: 0,
    },
    {
        BrandCode: 'OPPO',
        CateProCode: 'DIENTHOAI',
        ProductCode: 'OPPORENO7',
        ProductName: 'Oppo Reno7',
        Price: 9990000,
        UPDc: 1500000,
        UPRateDc: 0,
        FlagPrice: 1,
        FlagActive: 1,
    },
    {
        BrandCode: 'XIAOMI',
        CateProCode: 'DIENTHOAI',
        ProductCode: 'XIAOMIREDMINOTE11',
        ProductName: 'Xiaomi Redmi Note 11',
        Price: 4490000,
        UPDc: 449000,
        UPRateDc: 10,
        FlagPrice: 0,
        FlagActive: 1,
    },
];
export {
    statusProduct,
    lstBrands,
    lstCatePros,
    lstProducts,
    statusAction
}
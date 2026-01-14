export interface ApiRequest {
     query?: string;
  pageNumber?: number;
    size?: number;
    sort?: number;
}

export interface ApiResponse {
    pagination: PaginationTypes
    facets: Facets[],
    products: Products[]
}

export interface PaginationTypes {
    from?: number, 
    size?: number,
    total?: number,
    sortType?: number
}

interface Facets {
    identifier: string,
    displayName: string,
    priority: number,
    options: FacetOptions,
    facetType: number
}

interface FacetOptions {
    identifier: string,
    value: FacetOptionsValues,
    displayValue: string,
    productCount: number,
    priority: number
}

interface FacetOptionsValues {
    gte: number,
    ite: number,
}

export interface Products {
    id: string,
    legacyId: string,
    legacyVariantId: string,
    cultureCode: string,
    isDefaultVariant: boolean,
    sku: string,
    productName: string,
    slug: string,
    averageRating: number,
    reviewsCount: number,
    questionsCount: number,
    image: ProductImage,
    price: ProductPrice,
    stockStatus: ProductStockStatus,
    brand: ProductBrand,
    attributes: ProductAttributes
}

interface ProductImage {
    externalId: string,
    url: string,
    priority: number,
    isDefault: boolean
}

interface ProductPrice {
    currencyCode: string,
    wasPriceIncTax: number,
    wasPriceExcTax: number,
    priceIncTax: number,
    priceExcTax: number,
    isOnPromotion: boolean
}

export interface ProductStockStatus {
    status: string,
    eta?: string
}

interface ProductBrand {
    externalId: string,
    slug: string,
    name: string,
    brandImage: ProductImage
}

interface ProductAttributes {
    isBestSeller: boolean,
}
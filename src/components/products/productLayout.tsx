import ProductImage from './productImage';
import ProductStock from './stock';
import StarRating from './starRating';
import BrandImage from './brandImage';

import type { Products } from '../../interfaces/apiResponse';

interface ProductLayoutProps {
    items: Products[]
}

export default function ProductLayout({ items } : ProductLayoutProps) {
    return (
        <section className="grid grid-cols-1 gap-3 md:grid-cols-3 ">
                  {  items.map(product => (
                      <a href={product.slug} className="bg-white rounded overflow-hidden text-black" key={product.id}>
                       <ProductImage url={product.image.url} alt={product.productName} isBestSeller={product.attributes.isBestSeller} />
                        <div className='p-3 flex flex-col gap-2'>
                          <BrandImage url={product.brand.brandImage.url} alt={product.brand.name} />
                          {product.productName}
                          <div>
                            <span className="text-red-700 text-lg font-bold">£{product.price.priceIncTax}</span>
                            { product.price.wasPriceIncTax ? <span className="text-gray-500 text-md line-through pl-2">£{product.price.wasPriceIncTax}</span> : "" }
                          </div>
                          <ProductStock status={product.stockStatus.status} eta={product.stockStatus.eta} />
                          <StarRating rating={product.averageRating} count={product.reviewsCount} />
                        </div>
                      </a>
                  ))
                  }
                </section>
    )
}
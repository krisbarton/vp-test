interface ProductImageProps {
    url: string,
    alt: string,
    isBestSeller: boolean
}

export default function ProductImage({ url, alt, isBestSeller } : ProductImageProps) {

    return (
         <div className="relative">
            <img src={url} alt={alt} />
            { isBestSeller ? <span className='absolute w-full bottom-0 bg-sky-600 text-white text-center py-1 opacity-80 font-bold'>Best seller</span> : "" }
        </div>
    )
    
}
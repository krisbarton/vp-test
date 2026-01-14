interface BrandImageProps {
    url: string,
    alt: string,
    width?: string,
    height?: string
}

export default function BrandImage({url, alt, width="60", height="20"} : BrandImageProps) {
    return (
        <img src={url} alt={alt} width={width} height={height} />
    );
}
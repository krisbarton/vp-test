interface PaginationProps {
    pageNumber: number,
    isLastPage: boolean,
    onChange: (pageNumber: number) => void
}

export default function Pagination({ pageNumber, onChange, isLastPage }: PaginationProps) {
    
    return (
        <div className="flex justify-center">
            {
                !isLastPage ? <button className="bg-green-400 text-white w-64" onClick={() => onChange(pageNumber + 1)} >Load More</button> : ""
            }
        </div>
    )
}
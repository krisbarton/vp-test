interface StarRatingProps {
    rating: number;
    count: number;
}

export default function StarRating({ rating, count }: StarRatingProps) {
    const max = 5;
    return (
        <div aria-label={`Rating: ${rating} out of ${max}`}>
            {
                Array.from({ length: max}, (_, i) => {
                    const star = i + 1;
                    return (
                        <span 
                            key={star}
                            className={
                                star <= rating ? "text-yellow-400" : "text-gray-400"
                            }>
                            ★ 
                        </span>
                    );
                })
            }
             <span className="text-xs text-gray-600 ml-2">{count}</span>
        </div>
    )
}
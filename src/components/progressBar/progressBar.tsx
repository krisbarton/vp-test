interface ProgressBarProps {
    value: number,
    max: number,
}

export default function ProgressBar({value, max} : ProgressBarProps) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    return (
        <>
            <div>You've viewed {value} of {max} results</div>
            <div className="w-64 bg-gray-500 h-1 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-400" 
                    style={{ width: `${percentage}%`}}
                    aria-valuenow={value}
                    aria-valuemax={max}
                    role="progressbar"
                ></div>
            </div>
        </>
    )
}
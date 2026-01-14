interface SortDataItem { 
    id: number, 
    label: string 
} 

export const SortData: Array<SortDataItem> = [ 
    { 
        id: 1, 
        label: "Recommended" 
    }, 
    { 
        id: 2, 
        label: "PriceLowToHigh" 
    }, 
    { 
        id: 3, 
        label: "PriceHighToLow" 
    }, 
    { 
        id: 4, 
        label: "LargestDiscount" 
    } 
]
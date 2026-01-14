interface ApiProps {
    query?: string,
    pageNumber?: number,
    size?: number,
    sort?: number
}

export async function fetchToilets({query="toilets", pageNumber=1, size=30, sort=1} : ApiProps)
{
    const response = await fetch("https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=yj2bV48J40KsBpIMLvrZZ1j1KwxN4u3A83H8IBvI",  
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "query": query,
                "pageNumber": pageNumber,
                "size": size,
                "additionalPages": 0,
                "sort": sort
            }),
        });

    if(!response.ok)
    {
        throw new Error("Failed to fecth listings data");
    }

    return response.json();
}
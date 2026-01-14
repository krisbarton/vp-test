export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-GB", {
        month: "short",
        timeZone: "UTC",
    });
    const suffix = 
        day % 10 === 1 && day !== 11 ? "st" :
        day % 10 === 2 && day !== 12 ? "nd" :
        day % 10 === 3 && day !== 13 ? "rd" :
        "th";
    const fullYear = date.toLocaleString("en-GB", {
        year: "numeric",
        timeZone: "UTC",
    });
    const year = fullYear !== new Date("YYYY").toString() ? fullYear : "";

    return `${day}${suffix} ${month} ${year}`;
}
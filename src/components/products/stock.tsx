import type { ProductStockStatus } from "../../interfaces/apiResponse";
import { formatDate } from "../../utilities/dateFormat";

export default function ProductStock( { status, eta }: ProductStockStatus) {

    let dueDate = "";
    if(eta) {
        dueDate = formatDate(eta);
    }

    switch(status)
    {
        case "A":
            return <p>Low Stock</p>
            break;
        case "E":
            return <p>Due { dueDate }</p>
            break;
        default:
            return <p>In Stock</p>
        break;
    }
}
interface DropdownItems 
{ 
    options: Array<DropdownItem> 
    onChange: (value: number) => void 
    selected: number 
} 

export interface DropdownItem { 
    value: number, 
    display: string 
}

export default function Dropdown({options, onChange, selected}: DropdownItems) {
    return (
        <select
            value={selected}
            onChange={e => onChange(Number(e.target.value))}
            className="bg-white p-2 my-2"
            >
            {options.map(({ value, display }) => (
                <option key={value} value={value}>
                {display}
                </option>
            ))}
    </select>
    );
}
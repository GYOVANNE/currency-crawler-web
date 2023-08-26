export interface Currency {
    code: string;
    number: number;
    decimal: number;
    currency: string;
    currency_locations: CurrencyLocation[];
}

export interface CurrencyLocation {
    location:string
    icon:string
}

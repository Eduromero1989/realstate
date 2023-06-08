export interface IEstate {
    title: string;
    description: string,
    type: string;
    price: string;
    photo: string;
    sucursal: string;
    bathroms?: number;
    kitchens?: number;
    rooms?: number;
    address?: string;
    hasParking?: boolean;
    area?: number;
}
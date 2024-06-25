export interface ColorsProduct {
    colorName: string;
    colorHex: string;
    imageUrl: string;
    price: string;
}

export interface VariantsProduct {
    storage: string;
    price: string;
}

export type Product = {
    _id: string;
    name: string;
    description: string;
    price : string;
    colors: ColorsProduct[];
    storageOptions: VariantsProduct[];
}

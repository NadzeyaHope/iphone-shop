import storageOption from "../widgets/admin/CreateProduct/StorageOption";

export interface ProductColor {
    colorName: string;
    colorHex : string;
    imageUrl : string[];
    price: number;
}

export interface Storage {
    variant : string;
    price : number;
}
export interface RAM {
    variant : string;
    price : number;
}

export interface SSD {
    variant : string;
    price : number;
}

export interface countSIM {
    variant : string;
    price : number;
}

export interface IPhoneProduct extends Product {
    storageOptions: Storage[];
    countSIM: countSIM[];
}

export interface IPadProduct extends Product  {
    storageOptions: Storage[];
    countSIM: countSIM[];
}
export interface MacProduct extends Product  {
    SSD : SSD[];
    RAM : RAM[];
}


export type Product = {
    name: string;
    price: number;
    description: string;
    mark? : string;
    category: string;
    colors: ProductColor[],
}


export type ProductCreate = IPadProduct | IPhoneProduct  | MacProduct | Product;

export const defaultIPhoneProduct: IPhoneProduct = {
    name: '',
    price: 0,
    description: '',
    category: 'iPhone',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: 0}],
    storageOptions: [{variant: '', price: 0}],
    countSIM: [{variant: '', price: 0}],
};

export const defaultIPadProduct: IPadProduct = {
    name: '',
    price: 0,
    description: '',
    category: 'iPad',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: 0}],
    storageOptions: [{variant: '', price: 0}],
    countSIM: [{variant: '', price: 0}],
};

export const defaultMacProduct: MacProduct = {
    name: '',
    price: 0,
    description: '',
    category: 'Mac',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: 0}],
    SSD: [{variant: '', price: 0}],
    RAM: [{variant: '', price : 0}],
};
export const defaultAppleWatch: Product = {
    name: '',
    price: 0,
    description: '',
    category: 'AppleWatch',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: 0}],
};
export const defaultHeadphones: Product = {
    name: '',
    price: 0,
    description: '',
    category: 'Headphones',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: 0}],
};
export interface ProductGet  {
    _id: string;
    name : string;
    price : number;
    description: string,
    category: string;
    colors : ProductColor[];
    SSD?: SSD[],
    RAM?: RAM[],
    storageOptions?: Storage[],
    countSIM?: countSIM[],
}
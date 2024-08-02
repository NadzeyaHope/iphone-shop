export interface ProductColor {
    colorName: string;
    colorHex : string;
    imageUrl : string[];
    price: string;
}

export interface Storage {
    variant : string;
    price : string;
}
export interface RAM {
    variant : string;
    price : string;
}

export interface SSD {
    variant : string;
    price : string;
}

export interface countSIM {
    variant : string;
    price : string;
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
    price: string;
    description: string;
    mark? : string;
    category: string;
    colors: ProductColor[],
}


export type ProductCreate = IPadProduct | IPhoneProduct  | MacProduct | Product;

export const defaultIPhoneProduct: IPhoneProduct = {
    name: '',
    price: '',
    description: '',
    category: 'iPhone',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
    storageOptions: [{variant: '', price: ''}],
    countSIM: [{variant: '', price: ''}],
};

export const defaultIPadProduct: IPadProduct = {
    name: '',
    price: '',
    description: '',
    category: 'iPad',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
    storageOptions: [{variant: '', price: ''}],
    countSIM: [{variant: '', price: ''}],
};

export const defaultMacProduct: MacProduct = {
    name: '',
    price: '',
    description: '',
    category: 'Mac',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
    SSD: [{variant: '', price: ''}],
    RAM: [{variant: '', price : ''}],
};
export const defaultAppleWatch: Product = {
    name: '',
    price: '',
    description: '',
    category: 'AppleWatch',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
};
export const defaultHeadphones: Product = {
    name: '',
    price: '',
    description: '',
    category: 'Headphones',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
};
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

export interface Display {
    variant : string;
    price : string;
}

export interface Dimensions {
    variant : string;
    price : string;
}

export interface IPadModule {
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
    iPadModule: IPadModule[];
    countSIM: countSIM[];
}
export interface AppleWatch extends Product  {
    dimensions : Dimensions[];
    display : Display[];
}



type Product = {
    name: string;
    price: string;
    description: string;
    mark? : string;
    category: string;
    colors: ProductColor[],
}


export type ProductCreate = IPadProduct | IPhoneProduct | AppleWatch

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
    storageOptions: [],
    iPadModule: [],
    countSIM: [],
};

export const defaultAppleWatch: AppleWatch = {
    name: '',
    price: '',
    description: '',
    category: 'AppleWatch',
    colors: [{colorName: '', colorHex: '', imageUrl: [''], price: ''}],
    dimensions: [],
    display: [],
};
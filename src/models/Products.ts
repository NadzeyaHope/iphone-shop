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


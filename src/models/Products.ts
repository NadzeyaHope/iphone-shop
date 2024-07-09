export interface ProductColor {
    colorName: string;
    colorHex : string;
    imageUrl : string[];
    price: string;
}

export interface ProductOptions {
    storage : string;
    price : string;
}

export interface Display {
    size : string;
    price : string;
}

export interface Dimensions {
    size : string;
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


export type Product = {
    name: string;
    price: string;
    description: string;
    mark? : string;
    category: string;
    colors: ProductColor[],
    storageOptions?: ProductOptions[],
    display? : Display[];
    dimensions? : Dimensions[];
    iPadModule? : IPadModule[];
    countSIM? : countSIM[];
}

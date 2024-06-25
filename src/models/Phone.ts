import mongoose, { Document, Schema } from 'mongoose';

interface IColor extends Document {
    colorName: string;
    colorHex: string;
    imageUrl: string;
    price: number;
}

interface IStorageOption extends Document {
    storage: number;
    price: number;
}

interface IPhone extends Document {
    name: string;
    description: string;
    colors: IColor[];
    storageOptions: IStorageOption[];
}

export const colorSchema = new Schema<IColor>({
    colorName: { type: String, required: true },
    colorHex: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
});

const storageOptionSchema = new Schema<IStorageOption>({
    storage: { type: Number, required: true },
    price: { type: Number, required: true },
});

const phoneSchema = new Schema<IPhone>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    colors: [colorSchema],
    storageOptions: [storageOptionSchema],
});

const Phone = mongoose.models.Phone || mongoose.model<IPhone>('Phone', phoneSchema);

export default Phone;

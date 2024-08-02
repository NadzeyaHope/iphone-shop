import {ProductCreate} from "../models/Products";

export const handleAddObject = (setFormData : (arg : any)=>void ,formData : ProductCreate,objectKey: keyof ProductCreate, newObject: Record<any, any>) => {
    setFormData({
        ...formData,
        [objectKey]: [...(formData[objectKey] as any), newObject]
    });
};

export const handleRemoveLastObject = (setFormData : (arg : any)=>void ,formData : ProductCreate,object: keyof ProductCreate) => {
    if ((formData[object] as any).length > 0) {
        setFormData({
            ...formData,
            [object]: (formData[object] as any).slice(0, -1)
        });
    }
};
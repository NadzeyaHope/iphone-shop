import React from "react";
import {onAddProduct} from "./admin-fetch";

export const handleSubmitCreateProduct = async (e: React.FormEvent, Data : any) => {
    e.preventDefault();
    try {
        const request = await onAddProduct(Data, '/api/test');
    } catch (e: any) {
        new Error(e.message);
    }
};
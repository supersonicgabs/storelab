import { client } from "../axios";
import {_handleError} from '../../helpers'

const getProductsCount = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/products/count");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getProductsReq = async ({limit, offset}, modalSettings) => {
    try {
        const { status, data } = await client.get("/products", {params:{
            limit: limit,
            offset: offset,
        }});
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getProductReq = async (clientId, modalSettings) => {
    try {
        const { status, data } = await client.get(`/products/${clientId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const createProductReq = async ({
    inputName,
    inputInternalCode,
    inputBrandId,
    inputCategoryId,
    inputFlavourId,
    inputBaseUnit,
    inputMeasure,
    inputStockQtyMin,
    inputUnitPriceStock,
    inputUnitPriceSelling,
    inputBarCode,
    inputIsGTIN,
    inputGTINCode
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputName,
            internalCode: inputInternalCode,
            brandId: inputBrandId,
            categoryId: inputCategoryId,
            flavorId: inputFlavourId,
            baseUnit: inputBaseUnit,
            measure: parseInt(inputMeasure),
            stockQtyMin: parseInt(inputStockQtyMin),
            unitPriceStock: parseInt(inputUnitPriceStock),
            // unitPriceSelling: parseInt(inputUnitPriceSelling),
            barCode: {
              barCode: inputBarCode,
              isGTIN: inputIsGTIN ? true : false,
              GTINCode: inputGTINCode ? true : false
            }
        }
        const { status, data } = await client.post("/products", reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const updateProductsReq = async ({
    clientId,
    inputName,
    inputInternalCode,
    inputBrandId,
    inputCategoryId,
    inputFlavourId,
    inputBaseUnit,
    inputMeasure,
    inputStockQtyMin,
    inputUnitPriceStock,
    inputUnitPriceSelling,
    inputBarCode,
    inputIsGTIN,
    inputGTINCode
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputName,
            internalCode: inputInternalCode,
            brandId: inputBrandId,
            categoryId: inputCategoryId,
            flavorId: inputFlavourId,
            baseUnit: inputBaseUnit,
            measure: parseInt(inputMeasure),
            stockQtyMin: parseInt(inputStockQtyMin),
            unitPriceStock: parseInt(inputUnitPriceStock),
            // unitPriceSelling: parseInt(inputUnitPriceSelling),
            barCode: {
              barCode: inputBarCode,
              isGTIN: inputIsGTIN ? true : false,
              GTINCode: inputGTINCode ? true : false
            }
        }
        const { status, data } = await client.patch(`/products`, {params:{
            ids: clientId
        }}, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};
const updateProductReq = async ({
    clientId,
    inputName,
    inputInternalCode,
    inputBrandId,
    inputCategoryId,
    inputFlavourId,
    inputBaseUnit,
    inputMeasure,
    inputStockQtyMin,
    inputUnitPriceStock,
    inputUnitPriceSelling,
    inputBarCode,
    inputIsGTIN,
    inputGTINCode
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputName,
            internalCode: inputInternalCode,
            brandId: inputBrandId,
            categoryId: inputCategoryId,
            flavorId: inputFlavourId,
            baseUnit: inputBaseUnit,
            measure: parseInt(inputMeasure),
            stockQtyMin: parseInt(inputStockQtyMin),
            unitPriceStock: parseInt(inputUnitPriceStock),
            // unitPriceSelling: parseInt(inputUnitPriceSelling),
            barCode: {
              barCode: inputBarCode,
              isGTIN: inputIsGTIN ? true : false,
              GTINCode: inputGTINCode ? true : false
            }
        }
        const { status, data } = await client.put(`/products/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const deleteProductReq = async ({clientId, statusClientId}, modalSettings) => {    
    const reqBody = {
        isActive: statusClientId
    }
    try {
        const { status, data } = await client.patch(`/products`, reqBody, {params: {
            ids: clientId
        }});
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

export {
    getProductsCount,
    getProductsReq,
    getProductReq,
    createProductReq,
    deleteProductReq,
    updateProductReq,
    updateProductsReq
}
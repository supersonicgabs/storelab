import { client } from "../axios";
import {_handleError} from '../../helpers'

const getPurchasesCount = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/products_purchase/count");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getPurchasesReq = async ({limit, offset}, modalSettings) => {
    try {
        const { status, data } = await client.get("/products_purchase", {params:{
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

const getPurchaseReq = async (clientId, modalSettings) => {
    try {
        const { status, data } = await client.get(`/products_purchase/${clientId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const createPurchaseReq = async (reqBody, modalSettings) => {
    try {
        const { status, data } = await client.post("/products_purchase", reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const updatePurchasesReq = async ({updateIds, reqBody}, modalSettings) => {
    try {
        const { status, data } = await client.patch(`/products_purchase`, reqBody, {params:{
            ids: updateIds.join(',')
        }});
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};
const updatePurchaseReq = async ({
    clientId,
    inputProductId,
    inputProviderId,
    inputQty,
    inputUnitPrice,
    inputDiscountValue
}, modalSettings) => {
    try {
        const reqBody = {
            productId: inputProductId,
            providerId: inputProviderId,
            qty: inputQty,
            unitPrice: inputUnitPrice,
            discountValue: inputDiscountValue
        }
        const { status, data } = await client.put(`/products/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const deletePurchaseReq = async (clientId, modalSettings) => {    
    try {
        const { status, data } = await client.delete(`/products_purchase`, {params: {
            ids: clientId
        }});
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

export {
    getPurchasesCount,
    getPurchasesReq,
    getPurchaseReq,
    createPurchaseReq,
    deletePurchaseReq,
    updatePurchaseReq,
    updatePurchasesReq
}
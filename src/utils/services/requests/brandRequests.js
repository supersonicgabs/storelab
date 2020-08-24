import { client } from "../axios";
import {_handleError} from '../../helpers'

const getBrandsCount = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/product_brand/count");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getBrandsReq = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/product_brand");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getBrandReq = async (clientId, modalSettings) => {
    try {
        const { status, data } = await client.get(`/product_brand/${clientId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const createBrandReq = async ({
    inputBrandName,
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputBrandName
        }
        const { status, data } = await client.post("/product_brand", reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const updateBrandReq = async ({
    clientId,
    inputBrandName,
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputBrandName
        }
        const { status, data } = await client.put(`/product_brand/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const deleteBrandReq = async ({clientId, statusClientId}, modalSettings) => {    
    const reqBody = {
        isActive: statusClientId
    }
    try {
        const { status, data } = await client.put(`/product_brand/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

export {
    getBrandsCount,
    getBrandsReq,
    getBrandReq,
    createBrandReq,
    deleteBrandReq,
    updateBrandReq
}
import { client } from "../axios";
import {_handleError} from '../../helpers'

const getCategoriesCount = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/product_category/count");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getCategoriesReq = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/product_category");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getCategoryReq = async (clientId, modalSettings) => {
    try {
        const { status, data } = await client.get(`/product_category/${clientId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const createCategoryReq = async ({
    inputCategoryName,
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputCategoryName
        }
        const { status, data } = await client.post("/product_category", reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const updateCategoryReq = async ({
    clientId,
    inputCategoryName,
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputCategoryName
        }
        const { status, data } = await client.put(`/product_category/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const deleteCategoryReq = async ({clientId, statusClientId}, modalSettings) => {    
    const reqBody = {
        isActive: statusClientId
    }
    try {
        const { status, data } = await client.put(`/product_category/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

export {
    getCategoriesCount,
    getCategoriesReq,
    getCategoryReq,
    createCategoryReq,
    deleteCategoryReq,
    updateCategoryReq
}
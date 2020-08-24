import { client } from "../axios";
import {_handleError} from '../../helpers'

const getFlavorsCount = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/product_flavor/count");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getFlavorsReq = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/product_flavor");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getFlavorReq = async (clientId, modalSettings) => {
    try {
        const { status, data } = await client.get(`/product_flavor/${clientId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const createFlavorReq = async ({
    inputFlavorName,
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputFlavorName
        }
        const { status, data } = await client.post("/product_flavor", reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const updateFlavorReq = async ({
    clientId,
    inputFlavorName,
}, modalSettings) => {
    try {
        const reqBody = {
            name: inputFlavorName
        }
        const { status, data } = await client.put(`/product_flavor/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const deleteFlavorReq = async ({clientId, statusClientId}, modalSettings) => {    
    const reqBody = {
        isActive: statusClientId
    }
    try {
        const { status, data } = await client.put(`/product_flavor/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

export {
    getFlavorsCount,
    getFlavorsReq,
    getFlavorReq,
    createFlavorReq,
    deleteFlavorReq,
    updateFlavorReq
}
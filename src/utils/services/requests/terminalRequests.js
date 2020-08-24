import { client } from "../axios";
import {_handleError} from '../../helpers'

const getSessionsCount = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/terminal/count");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getSessionsReq = async ({limit, offset}, modalSettings) => {
    try {
        const { status, data } = await client.get("/terminal/session", {params:{
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

const getSessionReq = async (clientId, modalSettings) => {
    try {
        const { status, data } = await client.get(`/terminal/session/${clientId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const createSessionReq = async (val, modalSettings) => {
    const reqBody = {
        openingBalance: val
    }
    try {
        const { status, data } = await client.post("/terminal/session/open", reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const updateSessionsReq = async (sessionId, reqBody, modalSettings) => {
    try {
        const { status, data } = await client.put(`/terminal/session/${sessionId}/sale`, reqBody, {params:{
            id: sessionId
        }});
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

export {
    getSessionsCount,
    getSessionsReq,
    getSessionReq,
    createSessionReq,
    updateSessionsReq
}
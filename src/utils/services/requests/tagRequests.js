import { client } from "../axios";

const getTagsReq = async () => {
    try {
        const { status, data } = await client.get("/tag");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        console.log(error)
    }
};

const getTagReq = async ({ tagId }) => {
    try {
        const { status, data } = await client.get(`/tag/show/${tagId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        console.log(error)
    }
};

const createTagReq = async ({tagName}) => {
    try {
        const { status, data } = await client.post("/client/create", {
            name: tagName
        });
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        console.log(error)
    }
};

const deleteTagReq = async ({ tagId }) => {
    try {
        const { status, data } = await client.post(`/tag/destroy/${tagId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        console.log(error)
    }
};

// const updateClientReq = async ({ clientId }) => {
//     try {
//         const { status, data } = await client.post(`/client/destroy/${clientId}`);
//         if (!status) throw new Error();
//         return { status, data };
//     } catch (error) {
//         console.log(error)
//     }
// };

export {
    getTagsReq,
    getTagReq,
    createTagReq,
    deleteTagReq,
}
import { client } from "../axios";

const getSocialNetworksReq = async () => {
    try {
        const { status, data } = await client.get("/social_network");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        console.log(error)
    }
};

const getSocialNetworkReq = async ({ socialNetworkId }) => {
    try {
        const { status, data } = await client.get(`/social_network/show/${socialNetworkId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        console.log(error)
    }
};

const createSocialNetworkReq = async ({ instagram, facebook, site }) => {
    try {
        const { status, data } = await client.post("/social_network/create", {
            instagram,
            facebook,
            site,
        });
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        console.log(error)
    }
};

const deleteSocialNetworkReq = async ({ socialNetworkId }) => {
    try {
        const { status, data } = await client.post(`/social_network/destroy/${socialNetworkId}`);
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
    getSocialNetworksReq,
    getSocialNetworkReq,
    createSocialNetworkReq,
    deleteSocialNetworkReq,
}
import { client } from "../axios";

const getBanks = async () => {
    try {
        const {status, data} = await client.get("/banks")
        if(!status) throw new Error();
        console.log(data);
        return { status, data }
    } catch (error) {
        console.log(error);
    }
}

export {
    getBanks
}
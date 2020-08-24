import { client } from "../axios";
import {_handleError} from '../../helpers'

const getClientsCount = async (modalSettings) => {
    try {
        const { status, data } = await client.get("/client/count");
        if (!status) throw new Error();
        console.log(data)
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const getClientsReq = async ({limit, offset}, modalSettings) => {
    try {
        const { status, data } = await client.get("/client", {params:{
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

const getClientReq = async (clientId, modalSettings) => {
    try {
        const { status, data } = await client.get(`/client/${clientId}`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const createClientReq = async ({
    selectPFPJ,
    inputCPF,
    inputNome,
    inputRG,
    inputData,
    inputCNPJ,
    inputNomeFantasia,
    inputRazaoSocial,
    inputInscricaoMunicipal,
    inputInscricaoEstadual,
    rbTipoContribuinte,
    inputResponsavel,
    inputEmail,
    inputCelular,
    inputTelefone,
    inputCEP,
    inputCity,
    inputState,
    inputNeighborhood,
    inputStreet,
    inputNumber,
    inputComplement,
    inputBank,
    inputAgency,
    inputAccount,
    inputBank2,
    inputAgency2,
    inputAccount2,
    inputBank3,
    inputAgency3,
    inputAccount3,
}, modalSettings) => {
    try {
        const banks = [
            {
                _id: inputBank,
                agency: inputAgency,
                account: inputAccount,
            },
            {
                _id: inputBank2,
                agency: inputAgency2,
                account: inputAccount2,
            },
            {
                _id: inputBank3,
                agency: inputAgency3,
                account: inputAccount3,
            }            
        ]
        const filterBanks = banks.filter(({_id})=>_id!=="")
        const contactObj = {
            name: inputResponsavel,
            email: inputEmail,
            celPhone: inputCelular?.split(' ').join(''),
            phone: inputTelefone?.split(' ').join(''),
        }
        const addressObj = {
            cep: inputCEP,
            city: inputCity,
            state: inputState,
            neighborhood: inputNeighborhood,
            street: inputStreet,
            num: inputNumber,
            cj: inputComplement,
        }
        
        const naturalData = {
            personType: selectPFPJ, 
            cpf: inputCPF,
            name: inputNome,
            rg: inputRG,
            dtBirth: inputData,
            contact: contactObj,
            address: addressObj, 
            bankData: filterBanks,
            isActive: true
        };
        const legalData = {
            cnpj: inputCNPJ,
            fantasyName: inputNomeFantasia,
            companyName: inputRazaoSocial,
            municipalRegistry: inputInscricaoMunicipal,
            stateRegistry: inputInscricaoEstadual,
            cnpjTaxpayer: rbTipoContribuinte, 
            contact: contactObj,
            address: addressObj,
            bankData: filterBanks,
            isActive: true
        };
        const { status, data } = await client.post("/client", selectPFPJ==="natural" ? naturalData : legalData);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const updateClientReq = async ({
    clientId,
    selectPFPJ,
    inputCPF,
    inputNome,
    inputRG,
    inputData,
    inputCNPJ,
    inputNomeFantasia,
    inputRazaoSocial,
    inputInscricaoMunicipal,
    inputInscricaoEstadual,
    rbTipoContribuinte,
    inputResponsavel,
    inputEmail,
    inputCelular,
    inputTelefone,
    inputCEP,
    inputCity,
    inputState,
    inputNeighborhood,
    inputStreet,
    inputNumber,
    inputComplement,
    inputBank,
    inputAgency,
    inputAccount,
    inputBank2,
    inputAgency2,
    inputAccount2,
    inputBank3,
    inputAgency3,
    inputAccount3,
}, modalSettings) => {
    try {
        const banks = [
            {
                _id: inputBank,
                agency: inputAgency,
                account: inputAccount,
            },
            {
                _id: inputBank2,
                agency: inputAgency2,
                account: inputAccount2,
            },
            {
                _id: inputBank3,
                agency: inputAgency3,
                account: inputAccount3,
            }            
        ]
        const filterBanks = banks.filter(({_id})=>_id!=="")
        const contactObj = {
            name: inputResponsavel,
            email: inputEmail,
            celPhone: inputCelular?.split(' ').join(''),
            phone: inputTelefone?.split(' ').join(''),
        }
        const addressObj = {
            cep: inputCEP,
            city: inputCity,
            state: inputState,
            neighborhood: inputNeighborhood,
            street: inputStreet,
            num: inputNumber,
            cj: inputComplement,
        }
        
        const naturalData = {
            personType: selectPFPJ, 
            cpf: inputCPF,
            name: inputNome,
            rg: inputRG,
            dtBirth: inputData,
            contact: contactObj,
            address: addressObj, 
            bankData: filterBanks,
            isActive: true
        };
        const legalData = {
            cnpj: inputCNPJ,
            fantasyName: inputNomeFantasia,
            companyName: inputRazaoSocial,
            municipalRegistry: inputInscricaoMunicipal,
            stateRegistry: inputInscricaoEstadual,
            cnpjTaxpayer: rbTipoContribuinte, 
            contact: contactObj,
            address: addressObj,
            bankData: filterBanks,
            isActive: true
        };
        const { status, data } = await client.put(`/client/${clientId}`, selectPFPJ==="natural" ? naturalData : legalData);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

const deleteClientReq = async ({clientId, statusClientId}, modalSettings) => {    
    const reqBody = {
        isActive: statusClientId
    }
    try {
        const { status, data } = await client.patch(`/client/${clientId}`, reqBody);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings)
    }
};

export {
    getClientsCount,
    getClientsReq,
    getClientReq,
    createClientReq,
    deleteClientReq,
    updateClientReq
}
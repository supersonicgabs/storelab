import { client } from "../axios";
import {_handleError} from '../../helpers'


const getAccountReq = async (modalSettings) => {
    try {
        const { status, data } = await client.get(`/me`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const updateAccountReq = async ({
    inputName,
    inputOldPassword,
    inputNewPassword,
    inputCPF,
    inputRG,
    inputEmail,
    inputCelPhone,
    inputPhone,
    inputCEP,
    inputCity,
    inputState,
    inputNeighborhood,
    inputStreet,
    inputNr,
    inputCj,
    inputImgRG,
    inputImgCPFFront,
    inputImgCPFBack,
    inputImgProofAddress
}, modalSettings) => {
    try {
        const { status, data } = await client.put("/me", {
            name: inputName,
            oldPassword: inputOldPassword,
            newPassword: inputNewPassword,
            email: inputEmail,
            celPhone: inputCelPhone?.split(' ').join(''),
            cpf: inputCPF,
            rg: inputRG,
            phone: inputPhone?.split(' ').join(''),
            address: {
              cep: inputCEP,
              city: inputCity,
              state: inputState,
              neighborhood: inputNeighborhood,
              street: inputStreet,
              num: inputNr,
              cj: inputCj
            },
            docsImgs: {
              rg: inputImgRG,
              cpfFront: inputImgCPFFront,
              cpfBack: inputImgCPFBack,
              proofOfAddress: inputImgProofAddress
            }            
        });
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const updateAccountPasswordReq = async ({
    inputOldPassword,
    inputNewPassword
}, modalSettings) => {
    try {
        const { status, data } = await client.patch("/me/change_password", {
            oldPassword: inputOldPassword,
            newPassword: inputNewPassword
        });
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

export {
    getAccountReq,
    updateAccountReq,
    updateAccountPasswordReq
}
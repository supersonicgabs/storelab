import { unauthenticatedClient } from "../axios";
import HttpStatus from 'http-status-codes';
import {_handleError} from '../../helpers'


const signInReq = async ({ email, password }, modalSettings) => {
    try {
        const { status, data } = await unauthenticatedClient.post("/sign/sign_in", { email, password });
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const checkEmailExistsReq = async ({ signUpEmail }, modalSettings) => {
    try {
        const { status } = await unauthenticatedClient.get("/sign/check_email", { params:{ 
            email: signUpEmail 
        }});
        if (!status || status !== HttpStatus.OK) throw new Error();
        return true;
    } catch (error) {
        _handleError(error, modalSettings);
    };
};

const selectVericationByEmailOrSMSReq = async ({ signUpReceiveCodeBy, signUpEmail, signUpPhone }, modalSettings) => {
    console.log('signUpReceiveCodeBy: ', signUpReceiveCodeBy);
    
    try {
        const { status } = await unauthenticatedClient.get("/sign/generate_verification_code", {params:{
            email: signUpEmail,
            // sms: signUpPhone,
            sendsCodeTo: signUpReceiveCodeBy === "EMAIL" ? 'email' : 'sms'
        }})

        if (!status) throw new Error();
        return true;
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const checkVerificationCodeReq = async ({ signUpEmail, signUpPhone, signUpReceivedCode, signUpReceiveCodeBy }, modalSettings) => {
    try {
        const { status, data } = await unauthenticatedClient.get("/sign/check_verification_code", {params:{
            email: signUpEmail,
            verificationCode: signUpReceivedCode,
        }})
        if (!status) throw new Error();
        return { status, data }
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const registerReq = async ({ signUpName, signUpEmail, signUpPhone, signUpCNPJ, signUpCompanyName, signUpPassword }, modalSettings) => {
    try {
        const { status, data } = await unauthenticatedClient.post("/sign/sign_up",
            {
                name: signUpName,
                email: signUpEmail,
                celPhone: signUpPhone?.split(' ').join(''),
                cnpj: signUpCNPJ,
                fantasyName: signUpCompanyName,
                password: signUpPassword
            }
        );
        if (!status) throw new Error();
        return { status, data }
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const forgotPasswordReq = async ({email}, modalSettings) => {
    try {
        const { status } = await unauthenticatedClient.get("/sign/forgot_password_send_email", { params:{ 
            email: email 
        }});
        if (!status || status !== HttpStatus.OK) throw new Error();
        return true;
    } catch (error) {
        _handleError(error, modalSettings);
    };
}

const redefinePasswordReq = async ({token, newPassword}, modalSettings) => {
    try {
        const { status, data } = await unauthenticatedClient.post("/sign/redefine_password",
            {
                token: token,
                newPassword: newPassword,
            }
        );
        if (!status) throw new Error();
        return { status, data }
    } catch (error) {
        _handleError(error, modalSettings);
    }
}

export {
    signInReq,
    checkEmailExistsReq,
    selectVericationByEmailOrSMSReq,
    checkVerificationCodeReq,
    registerReq,
    forgotPasswordReq,
    redefinePasswordReq
}